const createNode = (tag) => ({
    tag,
    attr: {},
    children: [],
})
const createTextNode = (parent) => {
    const node = { text: "" }
    parent.children.push(node)
    return node
}
const states = {
    text(xml, i, stack) {
        const c = xml[i]
        if (c === "<") {
            const next = createNode("")
            stack.shift()
            stack[0].children.push(next)
            stack.unshift(next)
            return [i + 1, states.tagName]
        }
        stack[0].text += c
        return [i + 1]
    },
    tagName(xml, i, stack) {
        const c = xml[i]
        const current = stack[0]
        if (c === " ") {
            stack.unshift("")
            return [i + 1, states.attrName]
        }
        if (c === ">") {
            if (current.tag.startsWith("/") === true) {
                stack.shift()
                stack[0].children.pop()
                stack[0].children = stack[0].children.filter(
                    child => child.text?.trim() !== ""
                )
                stack.shift()
            }
            stack.unshift(
                createTextNode(stack[0])
            )
            return [i + 1, states.text]
        }
        current.tag += c
        return [i + 1]
    },
    attrName(xml, i, stack) {
        const c = xml[i]
        if (c === " " || c === "\r" || c === "\n") {
            if (stack[0].length > 0) {
                const name = stack.shift()
                stack[0].attr[name] = ""
                return [i + 1]
            }
            return [i + 1]
        }
        if (c === ">") {
            const name = stack.shift()
            if (name === "") {
                stack.unshift(
                    createTextNode(stack[0])
                )
                return [i + 1, states.text]
            }
            stack[0].attr[name] = ""
            stack.unshift(
                createTextNode(stack[0])
            )
            return [i + 1, states.text]
        }
        if (c === "=") {
            if (stack[0].length === 0) {
                return new Error("invalid attr name")
            }
            stack.unshift("")
            return [i + 2, states.attrValue]
        }
        stack[0] += c
        return [i + 1]
    },
    attrValue(xml, i, stack) {
        const c = xml[i]
        if (c === `"`) {
            const value = stack.shift()
            const name = stack.shift()
            stack[0].attr[name] = value
            stack.unshift("")
            return [i + 1, states.attrName]
        }
        stack[0] += c
        return [i + 1]
    }
}
const parse = (xml) => {
    const stack = [createNode(null)]
    stack.unshift(
        createTextNode(stack[0])
    )

    let i = 0
    let state = states.text
    while (i < xml.length) {
        const result = state(xml, i, stack)
        if (result instanceof Error) {
            return result
        }
        i = result[0]
        state = result[1] ?? state
    }

    stack.shift()
    if (stack.length !== 1) {
        return new Error("invalid xml")
    }
    stack[0].children = stack[0].children.filter(
        child => child.text?.trim() !== ""
    )
    return stack[0]
}

const append = (node, child) => {
    if (child.text !== undefined) {
        node.insertAdjacentHTML("beforeend", child.text)
        return
    }
    node.append(
        createElement(child)
    )
}
const svgTags = ["svg", "path", "circle"]
const createElem = (tag) => {
    if (svgTags.includes(tag) === true) {
        return document.createElementNS("http://www.w3.org/2000/svg", tag)
    }
    return document.createElement(tag)
}
const createElement = (obj) => {
    const node =
        (obj.tag === null)
        ? document.createDocumentFragment()
        : createElem(obj.tag)
    for (const [name, value] of Object.entries(obj.attr)) {
        node.setAttribute(name, value)
    }
    for (const child of obj.children) {
        append(node, child)
    }
    return node
}

export default (parts, ...values) => {
    const html = String.raw(parts, ...values)
    const structure = parse(html)

    return () => createElement(structure)
}
