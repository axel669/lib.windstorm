import WindstormError from "./error.mjs"
import { sheet } from "./style-setup.mjs"
import { rules, prop } from "./css-gen.mjs"
import windFuncs from "./wind-funcs.mjs"

const variableCSS = (name) =>
    (value) => prop(`--${name.slice(1)}`, value)

const generatedCache = {}
const processAttr = (node, attr) => {
    const cacheKey = `${attr.name}/${attr.value}`

    if (generatedCache[cacheKey] === true) {
        return
    }

    const i = attr.name.indexOf(":", 3)
    const name = attr.name.substring(
        3,
        (i < 0) ? undefined : i
    )
    const modifiers = attr.name.slice(name.length + 3)

    const attrKey = attr.name.replace(/[:\&\.@\$]/g, s => `\\${s}`)
    const selector = `[${attrKey}="${attr.value}"]${modifiers}`

    const cssGen =
        name.startsWith("&") ? variableCSS(name) : windFuncs[name]

    if (cssGen === undefined) {
        if (name.startsWith("@") === true) {
            return
        }
        console.error(`No function found for "${name}"`)
        return
    }

    const cssString = cssGen(attr.value || undefined)
    const rule = `${selector}{${cssString}}`
    sheet.insertRule(rule, sheet.cssRules.length)
    generatedCache[cacheKey] = true
}
const processNode = (node, attr) => {
    if (typeof attr === "string") {
        processAttr(node, node.attributes.getNamedItem(attr))
        return
    }
    for (const attr of node.attributes) {
        if (attr.name.startsWith("ws:") === true) {
            processAttr(node, attr)
        }
    }
}
const mut = {
    childList(evt) {
        if (evt.addedNodes.length === 0) {
            return
        }
        for (const node of evt.addedNodes) {
            if (node.tagName !== undefined) {
                processNode(node)
            }
        }
    },
    attributes(evt) {
        if (evt.attributeName.startsWith("ws:") === false) {
            return
        }
        processNode(evt.target, evt.attributeName)
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
        childList: true
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
    custom(name, func) {
        if (windFuncs[name] !== undefined) {
            throw new WindstormError(`"${name}" is already defined`)
        }
        windFuncs[name] = func
    }
}
