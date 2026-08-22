import { parse } from "./parser.js"

export const style = document.createElement("style")
style.setAttribute("data-name", "windstorm-generated")
style.innerHTML = "@layer ws.custom ws.user ws.element;"
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
const variate = (value) => value.replace(
    /@([a-zA-Z0-9\-_]+)/g,
    (_, name) => `var(--${name})`
)
const cssText = (rule, map, key) => {
    if (rule.type === "var") {
        map[key].push(`--${rule.name}: ${variate(rule.value)};`)
        return
    }
    if (rule.type === "css") {
        map[key].push(`${rule.name}: ${variate(rule.value)};`)
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
            map[mappedKey] = map[mappedKey] ?? []
            map[mappedKey].push(
                ...macroLines.map(
                    macroLine => variate(
                        macroLine.replace(
                            /%(arg|\d+)/g,
                            (_, key) => rule.value?.[key] ?? ""
                        )
                    )
                )
            )
        }
        return
    }
    const nextKey = rule.selector.replaceAll("&", key)
    map[nextKey] = [...(map[nextKey] ?? [])]
    cssLines(rule.rules, map, nextKey)
}
const macroCache = {}
export const macro = (name) => {
    if (macroCache[name] !== undefined) {
        return () => {}
    }
    return (parts, ...values) =>
        macroCache[name] = parseWSS(parts, ...values)
}

const wheresel = (selector, where) => {
    console.log("selector", selector)
    if (where === false || selector.startsWith("@") === true) {
        return selector
    }
    return `:where(${selector})`
}
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

export const component = (comp, layer = "ws.custom") =>
    (parts, ...values) => {
        const base = parseWSS(parts, ...values)
        const selector =
            (comp.startsWith("@") === false)
            ? `:where(${comp})`
            : comp
        const rules = css(base, true).map(
            ruleset => ruleset.replaceAll("&", comp)
        )

        const cssText = `@layer ${layer} { ${rules.join("\n")} }`
        style.sheet.insertRule(cssText)
    }
export const userComponent = (comp, layer = "ws.user") => component(comp, layer)
