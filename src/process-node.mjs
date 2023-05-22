import parseWind from "./parse.mjs"
import windFuncs from "./wind-funcs.mjs"
import { style } from "./baseline.mjs"
import { prop } from "./css-funcs.mjs"

const sheet = style.sheet
const styles = {}
const varFunc = (info, value) => [prop(
    `--${info.name.slice(1)}`,
    value
)]
const checkClass = (info) => {
    if (info === null) {
        return
    }
    const defined = styles[info.key] !== undefined
    const unsupported = (
        windFuncs[info.name] === undefined
        && info.name.startsWith("&") === false
    )
    if (defined === true || unsupported === true) {
        return
    }
    const func =
        (info.name.startsWith("&") === true)
        ? varFunc
        : windFuncs[info.name]
    const mod = (info.mod !== undefined) ? `:${info.mod.slice(0, -1)}` : ""
    const rules = func(info, ...info.args)
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
