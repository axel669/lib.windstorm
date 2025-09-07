import { parse } from "./parser.js"

export const style = document.createElement("style")
style.setAttribute("data-name", "windstorm-generated")
document.head.append(style)

export const parseWSS = (parts, ...values) => {
    const raw = String.raw(parts, ...values)
    return cssLines(parse(raw), { "&": [] }, "&")
}
const cssLines = (rules, map, key) => {
    for (const rule of rules) {
        cssText(rule, map, key)
    }
    return map
}
const cssText = (rule, map, key) => {
    if (rule.type === "var") {
        map[key].push(`--${rule.name}: ${rule.value};`)
        return
    }
    if (rule.type === "css") {
        map[key].push(`${rule.name}: ${rule.value};`)
        return
    }
    if (rule.type === "macro") {
        const macroDef = macroCache[rule.name]
        if (macroDef === undefined) {
            console.warn(`no macro for "${rule.name}"`)
            return
        }
        for (const [macroKey, macroLines] of Object.entries(macroDef)) {
            const mappedKey = macroKey.replace("&", key)
            map[mappedKey].push(
                ...macroLines.map(
                    macroLine => macroLine.replaceAll("%arg", rule.value ?? "")
                )
            )
        }
        return
    }
    const nextKey = rule.selector.replaceAll("&", key)
    map[nextKey] = []
    cssLines(rule.rules, map, nextKey)
}
const macroCache = {}
export const macro = (name) =>
    (parts, ...values) =>
        macroCache[name] = parseWSS(parts, ...values)

export const css = (map) => Object.entries(map).reduce(
    (ruleset, [selector, rules]) => {
        if (selector.startsWith("|") === true) {
            const last = selector.lastIndexOf("|")
            const media = selector.slice(1, last)
            const sel = `&${selector.slice(last + 1)}`
            const css = [
                `@media (${media}) {`,
                `${sel} {`,
                ...rules,
                "}",
                "}"
            ].join("\n")
            ruleset.push(css)
            return ruleset
        }
        ruleset.push(
            `${selector} {\n${rules.join("\n")}\n}`
        )
        return ruleset
    },
    []
)

export const component = (selector) =>
    (parts, ...values) => {
        const base = parseWSS(parts, ...values)
        const rules = css(base)
        for (const ruleset of rules) {
            style.sheet.insertRule(
                ruleset.replaceAll("&", selector)
            )
        }
    }
