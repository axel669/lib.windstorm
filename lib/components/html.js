const xmlStructureRegexes = [
    /(?<attrName>[\w:\-]+)=(["'])(?<attrValue>(.|\\\2)*?)\2/,
    /<(?<tagOpen>[\w:\-]+)/,
    /<\/(?<tagClose>[\w:\-]+)>/,
    /(?<tagSelfClose>\/>)/,
    /(?<![\?\-])(?<tagEnd>>)/,
    /(?<comment><\!\-\-[\s\S]*?\-\->)/,
]
const beeg = new RegExp(
    `${xmlStructureRegexes.map(r => r.source).join("|")}`,
    "gi"
)

const addChild = (item, child) => {
    const { "@attr": hasAttr, tag, __text, ...attrs } = child
    const textValue = (__text !== "") ? { __text } : {}
    const value = hasAttr ? { ...attrs, ...textValue } : (textValue.__text ?? "")
    item["@attr"] = true
    if (item[tag] === undefined) {
        item[tag] = value
        return
    }
    if (Array.isArray(item[tag]) === true) {
        item[tag].push(value)
        return
    }
    item[tag] = [item[tag], value]
}
const parser = () => {
    let i = 0
    let current = { __text: "" }
    let stack = []
    let remain = ""
    let xml = ""
    let seen = 0

    const process = (match, end) => {
        const token = match.groups
        const endIndex = match.index + match[0].length
        if (end === false && endIndex === xml.length) {
            return
        }
        const i_temp = i
        i = endIndex
        if (token.tagOpen !== undefined) {
            current.__text += xml.substring(i_temp, match.index)
            stack.push(current)
            current = {
                tag: token.tagOpen,
                __text: "",
                "@attr": false,
            }
            return
        }
        if (token.tagEnd !== undefined) {
            return
        }
        if (token.tagClose !== undefined) {
            current.__text = (current.__text + xml.substring(i_temp, match.index)).trim()
            const next = stack.pop()
            if (current.tag !== token.tagClose) {
                throw `wat: ${seen + match.index}`
            }
            addChild(next, current)
            current = next
            return
        }
        if (token.tagSelfClose !== undefined) {
            const next = stack.pop()
            addChild(next, current)
            current = next
            return
        }
        if (token.attrName !== undefined) {
            current[`_${token.attrName}`] = token.attrValue
            current["@attr"] = true
            return
        }
        if (token.comment !== undefined || token.doctype !== undefined) {
            current.__text += xml.substring(i_temp, match.index)
            return
        }
    }

    const chunk = (chunk, end = false) => {
        xml = remain + chunk
        i = 0
        for (const match of xml.matchAll(beeg)) {
            process(match, end)
        }
        seen += chunk.length
        remain = xml.slice(i)
    }
    const end = () => {
        chunk("", true)
        if (remain.trim() !== "") {
            return new Error("Invalid XML")
        }
        if (stack.length !== 0) {
            return new Error("Invalid XML")
        }
        delete current.__text
        delete current["@attr"]
        return current
    }

    return { chunk, end }
}

const parse = (xml) => {
    const p = parser()
    p.chunk(xml)
    return p.end()
}
const createNodes = (obj, node = document.createDocumentFragment()) => {
    if (typeof obj === "string") {
        node.innerHTML = obj
        return
    }
    const { __text, ...props } = obj
    const pairs = Object.entries(props)
    const attrs = pairs.filter(p => p[0].startsWith("_") === true)
    const children = pairs.filter(p => p[0].startsWith("_") === false)

    for (const [name, value] of attrs) {
        node.setAttribute(name.slice(1), value)
    }
    for (const [tag, detail] of children) {
        const child = document.createElement(tag)
        createNodes(detail, child)
        node.append(child)
    }
    return node
}

export default (parts, ...values) => {
    const html = String.raw(parts, ...values)
    const structure = parse(html)

    return () => createNodes(structure)
}
