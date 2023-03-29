import parseWind from "./parse.mjs"
import windFuncs from "./wind-funcs.mjs"
import { style } from "./baseline.mjs"

const sheet = style.sheet
const styles = {}
const checkClass = (info) => {
    if (info === null) {
        return
    }
    if (styles[info.key] !== undefined || windFuncs[info.name] === undefined) {
        return
    }
    const func = windFuncs[info.name]
    const mod = (info.mod !== undefined) ? `:${info.mod.slice(0, -1)}` : ""
    const rules = func(...info.args)
    sheet.insertRule(
        `[ws-x][ws-x~="${info.key}"]${mod} {\n${rules.join(";\n")};\n}`,
        sheet.cssRules.length
    )
    styles[info.key] = sheet.cssRules[sheet.cssRules.length - 1]
}
const processNode = (node) => {
    const storm = node.getAttribute("ws-x")
    if (storm === null) {
        return
    }
    const stuff = parseWind(storm, node)
    stuff.forEach(checkClass)
}

export default processNode
