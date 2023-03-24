import parseWind from "./parse.mjs"
import windFuncs from "./wind-funcs.mjs"
import { head, style } from "./baseline.mjs"

console.log("wat", import.meta.url)

const sheet = style.sheet
const styles = {}
const checkComponentFunc = (info) => {
    if (info.name.startsWith("@") === false) {
        return
    }
    const tag = info.node.tagName.toLowerCase()
    if (tag === "label" && (info.name === "@ctrl" || info.name === "@t-ctrl")) {
        attachStyle(`comp/${info.name.slice(1)}`)
        return
    }
    attachStyle("comp/button")
}
const checkClass = (info) => {
    if (info === null) {
        return
    }
    checkComponentFunc(info)
    if (styles[info.key] !== undefined || windFuncs[info.name] === undefined) {
        return
    }
    const func = windFuncs[info.name]
    const mod = (info.mod !== undefined) ? `:${info.mod.slice(0, -1)}` : ""
    const rules = func(...info.args)
    sheet.insertRule(
        `[w\\$][w\\$*="${info.key}"]${mod} {\n${rules.join(";\n")};\n}`,
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

    const newStyle = link.cloneNode()
    newStyle.href = `${name}.css`
    newStyle.rel = "stylesheet"
    componentStyle[name] = newStyle
    head.insertBefore(newStyle, style)
    console.log(componentStyle)
}
const checkTheme = (node) => {
    const theme = node.getAttribute("w$-theme")
    if (theme === null) {
        return
    }

    attachStyle(`theme/${theme}`)
}
const checkComponent = (node) => {
    const tag = node.tagName.toLowerCase()
    if (tag.startsWith("w$-") === false) {
        return
    }

    attachStyle(`comp/${tag.slice(3)}`)
}
const processNode = (node) => {
    checkTheme(node)
    checkComponent(node)
    const storm = node.getAttribute("w$")
    if (storm === null) {
        return
    }
    const stuff = parseWind(storm, node)
    stuff.forEach(checkClass)
}

export default processNode
