import WindstormError from "./error.mjs"
import { sheet } from "./style-setup.mjs"
import { rules, prop } from "./css-gen.mjs"
import windFuncs from "./wind-funcs.mjs"

import "./js-comp/ws-circle-spinner.mjs"
import "./js-comp/ws-hexagon-spinner.mjs"

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

const variableCSS = (name) =>
    (value) => prop(`--${name.slice(1)}`, value)

const generatedCache = {}
const processAttr = (attr) => {
    const key = attr[0]
    if (generatedCache[key] === true) {
        return
    }

    const { name, mods, content } = attr.groups
    const selector = `[ws-x*="${key}"]${mods}`

    const cssGen =
        name.startsWith("&") ? variableCSS(name) : windFuncs[name]

    if (cssGen === undefined) {
        if (name.startsWith("$") === true) {
            return
        }
        console.error(`No function found for "${name}"`)
        return
    }

    const contentValue = content?.replace(/\&([\w\-]+)/g, "var(--$1)")
    const cssString = cssGen(contentValue || undefined)
    const rule = `${selector}{${cssString}}`
    sheet.insertRule(rule, sheet.cssRules.length)
    generatedCache[key] = true
}
const processNode = (node) => {
    if (node.tagName === undefined) {
        return
    }
    const attr = node.getAttribute("ws-x")
    const funcs = attr?.matchAll(attrRegex) ?? []
    for (const match of funcs) {
        processAttr(match)
    }
}
const attrRegex = /(?<name>[@\$\&\w\-\.]+)(?<mods>(:[^:\[]+)*)(\[(?<content>.+?)\])?/g
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
        attributeFilter: ["ws-x"]
    }
)
const initialNodes = [
    document.body,
    ...document.body.querySelectorAll("*")
]
initialNodes.forEach(processNode)

export default {
    rules,
    prop,
    x,
    custom(name, func) {
        if (windFuncs[name] !== undefined) {
            throw new WindstormError(`"${name}" is already defined`)
        }
        windFuncs[name] = func
    }
}
