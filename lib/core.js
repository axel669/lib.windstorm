import { macro, component, css, parseWSS, style } from "./macro.js"
import { preloadIcons } from "./icon-processor.js"
import { config } from "./config.js"

import "./built-in-macro.js"

const djb2 = (str) => {
    let hash = 5381
    for (let i = 0; i < str.length; i += 1) {
        hash = (hash * 33) ^ str.charCodeAt(i)
    }
    return hash.toString(36)
}

const count = {}
export const inc = (wss) => {
    if (wss === "" || wss === null) {
        return
    }
    const rules = css(parseWSS({ raw: [wss] }))
    const id = djb2(rules.join("\n"))
    count[id] = (count[id] ?? 0) + 1
    if (count[id] > 1) {
        return id
    }
    const cssText = rules.map(
        ruleset => ruleset.replaceAll("&", `[data-wsid="${id}"]`)
    )
    style.sheet.insertRule(
        `@layer ws.macro { ${cssText.join("\n")} }`,
        style.sheet.cssRules.length
    )
    return id
}

export const x = (obj) => Object.entries(obj).reduce(
    (defs, pair) => {
        const [key, value] = pair
        if (value === null || value === undefined || value === false) {
            return defs
        }
        if (value === true) {
            defs.push(`${key};`)
            return defs
        }
        if (typeof value === "object") {
            defs.push(`${key} { ${x(value)} }`)
            return defs
        }
        defs.push(`${key}: ${value};`)
        return defs
    },
    []
).join(" ")

export const localMacro = (parts, ...values) => {
    const name = djb2(`${Date.now()}:${Math.random().toString(16)}`)
    return macro(name)(parts, ...values)
}

export { macro, component, preloadIcons }
export const version = config.version
