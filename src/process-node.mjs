import parseWind from "./parse.mjs"
import windFuncs from "./wind-funcs.mjs"
import { head, style } from "./baseline.mjs"

const sheet = style.sheet
const styles = {}
const checkClass = (info) => {
    const process = (
        info !== null
        && styles[info.key] === undefined
        && windFuncs[info.name] !== undefined
    )
    if (process === false) {
        return
    }
    const func = windFuncs[info.name]
    const mod = (info.mod !== undefined) ? `:${info.mod.slice(0, -1)}` : ""
    const rules = func(...info.args)
    const ruleText = Array.isArray(rules) ? rules.join(";\n") : rules
    sheet.insertRule(
        `[wind-storm][wind-storm*="${info.key}"]${mod} {\n${ruleText};\n}`,
        sheet.cssRules.length
    )
    styles[info.key] = sheet.cssRules[sheet.cssRules.length - 1]
}

const componentStyle = {}
const link = document.createElement("link")
const attachStyle = (name) => {
    if (componentStyle[name] !== undefined) {
        return
    }

    const style = link.cloneNode()
    style.href = `${name}.css`
    style.rel = "stylesheet"
    componentStyle[name] = style
    head.appendChild(style)
    console.log(componentStyle)
}
const checkTheme = (node) => {
    const theme = node.getAttribute("wind-theme")
    if (theme === null) {
        return
    }

    attachStyle(`theme/${theme}`)
}
const inlabel = (node) => (
    node.parentNode.tagName?.toLowerCase() === "label"
    && node.parentNode.hasAttribute("wind-storm") === true
)
const standard = (node) => node.hasAttribute("wind-storm")
const components = {
    button: standard,
    select: inlabel,
    input: inlabel,
}
const checkComponent = (node) => {
    const tag = node.tagName.toLowerCase()
    if (components[tag]?.(node) !== true) {
        return
    }

    attachStyle(`comp/${tag}`)
}
const processNode = (node) => {
    checkTheme(node)
    checkComponent(node)
    const storm = node.getAttribute("wind-storm")
    if (storm === null) {
        return
    }
    const stuff = parseWind(storm)
    stuff.forEach(checkClass)
}

export default processNode
