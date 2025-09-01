import { prefixMap, sizeMap } from "./mapping.js"

const makeStyleSheet = (name) => {
    const style = document.createElement("style")
    style.dataset.wsName = name
    document.head.append(style)
    return style.sheet
}

const sheet = makeStyleSheet("macro-styles")

const makeSelector = (target) => {
    const {
        state,
        prefix,
        varKey,
        prefixKey,
        sizeKey,
        stateKey,
    } = target
    const core = `[data-wsx~='${varKey}']`
    const real = `${prefixMap[prefix]} ${core}${state}`.trim()
    const mods = [
        `[data-wsx~='${stateKey}']`.repeat(4),
        `[data-wsx~='${prefixKey}']`.repeat(2),
        `[data-wsx~='${sizeKey}']`.repeat(1),
    ].join("").replaceAll("[data-wsx~='']", "")
    return `:where(${real})${mods}${core}`
}

const selectorCache = {}
export const setupCSS = (target, name) => {
    const { prop, size, pseudo } = target
    const selector = makeSelector(target)
    const selectorKey = `${size}|${selector}${pseudo}`
    if (selectorCache[selectorKey] !== undefined) {
        return
    }
    selectorCache[selectorKey] = true
    const important = (prop.startsWith("--") === true) ? "" : " !important"
    const baseRule = `${selector}${pseudo} { ${prop}: var(${CSS.escape(name)})${important}; }`
    const rule = (size !== "") ? `@media ${sizeMap[size]} {\n    ${baseRule}\n}` : baseRule
    sheet.insertRule(rule, sheet.cssRules.length)
}
