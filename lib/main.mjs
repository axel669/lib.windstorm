import { sheet } from "./style-setup.mjs"
import { macro, styleMacro } from "./init.js"
import { config } from "./config.js"

// The web component js gets compiled into the main library, but a reference
// to any export isn't needed.
import "./js-comp/ws-circle-spinner.mjs"
import "./js-comp/ws-hexagon-spinner.mjs"
import "./js-comp/ws-progress.js"

const formatPart = (key, value) => {
    if (key.startsWith("@@") === true) {
        if (value === true) {
            return key
        }
        return `${key}:${value}`
    }
    if (value === true) {
        return `[${key}]`
    }
    return `[${key} ${value}]`
}
const x = (obj) =>
    Object.entries(obj)
        .reduce(
            (list, [key, value]) => {
                if (value === null || value === undefined || value === false) {
                    return list
                }
                list.push(
                    formatPart(key, value)
                )
                return list
            },
            []
        )
        .join(" ")

const styleCache = {}
const sizeLims = {
    sm: "(max-width: 600px)",
    md: "(max-width: 1024px)",
    lg: "(min-width: 1025px)",
    lnd: "(orientation: landscape)",
    prt: "(orientation: portrait)",
}
const format = (value) => value?.replace(
    /@([\w\-]+)/g,
    (_, varName) => `var(--${varName})`
)
const sizer = (size, rule) => {
    if (size === undefined) {
        return rule
    }
    return `@media screen and ${sizeLims[size]} { ${rule} }`
}
const generateStyle = (key, name, args) => {
    const cacheKey = `${args.size ?? ""}|${key}`
    if (styleCache[cacheKey] === true) {
        return
    }
    styleMacro[name](args, sizer)
    styleCache[cacheKey] = true
}

const varCache = new WeakMap()
const processMacro = (attr, next, node) => {
    const { name, state, arg, size } = attr.groups
    const key = `${name}${state ?? ""}`

    if (name.startsWith("@") === true) {
        next.push([ `--${name.slice(1)}`, arg ])
        return
    }
    if (macro[name] === undefined) {
        if (name.startsWith("$") === true) {
            return
        }
        console.warn(`No macro defined for ${name} on`, node)
        return
    }

    const varState = state?.replace(/:|\|/g, "_") ?? ""
    generateStyle(
        key,
        name,
        { sheet, state, varState, size }
    )
    macro[name]({
        list: next,
        format,
        macro,
        varState,
        arg: arg?.trim(),
        size,
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
        processMacro(match, next, node)
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
// This horrible regex parses each macro inside of an attribute string with the
// advantage that any incorrectly formatted macro is ignored instead of causing
// errors to fill the console.
const attrRegex = /\[((?<size>\w+)\|)?(?<name>[\$@\w\-\.]+)(?<state>:[^\s\]]+)?(?<arg>[^\]]+?)?\]/g
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
// MutationObserver is quite fast even over the whole DOM tree.
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
// Set of nodes that already exists in the DOM that should be processed. Any
// DOM element that was loaded before the script isn't caught by the
// MutationObserver. Ignores anything outside the body.
const initialNodes = [
    document.body,
    ...document.body.querySelectorAll("*")
]
initialNodes.forEach(processNode)

export default {
    x,
    attr: config.attr
}
