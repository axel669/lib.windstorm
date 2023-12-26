import { sheet } from "./style-setup.mjs"
import initialize, { macro, styleMacro } from "./init.js"

import "./js-comp/ws-circle-spinner.mjs"
import "./js-comp/ws-hexagon-spinner.mjs"

console.time("initialize")
const config = initialize()
console.timeEnd("initialize")

const x = (obj) =>
    Object.entries(obj)
        .reduce(
            (list, [key, value]) => {
                if (value === null || value === undefined || value === false) {
                    return list
                }
                const part = (value === true) ? key : `${key}[${value}]`
                list.push(part)
                return list
            },
            []
        )
        .join(" ")

const format = (value) => value.replace(
    /@([\w\-]+)/g,
    (_, varName) => `var(--${varName})`
)

const styleCache = {}
const generateStyle = (key, name, args) => {
    if (styleCache[key] === true) {
        return
    }
    styleMacro[name](args)
    styleCache[key] = true
}

const varCache = new WeakMap()
const processMacro = (attr, next) => {
    const key = attr[0]

    const { name, state, arg } = attr.groups

    if (name.startsWith("@") === true) {
        next.push([ `--${name.slice(1)}`, arg ])
        return
    }
    if (macro[name] === undefined && name.startsWith("$") === false) {
        console.warn(`No macro defined for ${name}`)
        return
    }

    const varState = state?.replace(/:/g, "_") ?? ""
    generateStyle(
        key,
        name,
        { sheet, state, varState }
    )

    macro[name]({
        list: next,
        format,
        macro,
        varState,
        arg: arg?.trim(),
    })
}
const processNode = (node) => {
    if (node.tagName === undefined) {
        return
    }
    const attr = node.getAttribute(config.attr)
    const funcs = attr?.matchAll(attrRegex) ?? []

    const prev = varCache.get(node) ?? []
    const next = []
    for (const match of funcs) {
        processMacro(match, next)
    }
    const nextKeys = next.map(pair => pair[0])
    const remove = prev.filter(key => nextKeys.includes(key) === false)

    for (const key of remove) {
        node.style.removeProperty(key)
    }
    for (const [key, value] of next) {
        node.style.setProperty(key, value)
    }
    varCache.set(node, nextKeys)
}
const attrRegex = /\[(?<name>[\$@\w\-\.]+)(?<state>:[^\s]+)?(?<arg>[^\]]+?)?\]/g
const mut = {
    childList(evt) {
        if (evt.addedNodes.length === 0) {
            return
        }
        evt.addedNodes.forEach(
            (node) => {
                if (node.tagName === undefined) {
                    return
                }
                const nodes = [node, ...node.querySelectorAll("*")]
                nodes.forEach(processNode)
            }
        )
    },
    attributes(evt) {
        processNode(evt.target)
    }
}
const observer = new MutationObserver(
    (muts) => muts.forEach(
        evt => mut[evt.type](evt)
    )
)

observer.observe(
    document.body,
    {
        subtree: true,
        attributes: true,
        childList: true,
        attributeFilter: [config.attr]
    }
)
const initialNodes = [
    document.body,
    ...document.body.querySelectorAll("*")
]
initialNodes.forEach(processNode)

export default {
    x,
}
