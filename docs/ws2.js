import { parse } from "./parser.js"

const djb2 = (str) => {
    let hash = 5381
    for (let i = 0; i < str.length; i += 1) {
        hash = (hash * 33) ^ str.charCodeAt(i)
    }
    return hash.toString(36)
}

const parseWSS = (parts, ...values) => {
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
const macro = (name) =>
    (parts, ...values) =>
        macroCache[name] = parseWSS(parts, ...values)
macro("t.c")`*color: %arg;`
macro("elevate")`*box-shadow: i dunno;`
macro("t.sz")`*font-size: %arg;`

const css = (map) => Object.entries(map).reduce(
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
const style = document.querySelector("style")

const count = {}
const inc = (wss) => {
    if (wss === "" || wss === null) {
        return
    }
    const rules = css(parseWSS({ raw: [wss] }))
    const id = djb2(rules.join("\n"))
    count[id] = (count[id] ?? 0) + 1
    if (count[id] > 1) {
        return id
    }
    for (const ruleset of rules) {
        style.sheet.insertRule(
            ruleset.replaceAll("&", `[data-wsid="${id}"]`),
            style.sheet.cssRules.length
        )
    }
    return id
}
const component = (selector) =>
    (parts, ...values) => {
        const base = parseWSS(parts, ...values)
        const rules = css(base)
        for (const ruleset of rules) {
            style.sheet.insertRule(
                ruleset.replaceAll("&", selector)
            )
        }
    }

macro("p")`*padding: %arg;`
macro("bg.c")`*background-color: %arg;`
component(":where(div[data-ws])")`
    @color: @primary;
    t.c: @color;

    !|max-width: 600px| {
        !&:hover {
        }
        *background-color: cyan;
    }
`

const hoverable = `
    *overflow: hidden;
    *position: relative;

    ! |pointer: fine| {
        ! &::before {
            *content: "";
            *position: absolute;
            *top: 0px;
            *left: 0px;
            *bottom: 0px;
            *right: 0px;
            *pointer-events: none;
            *opacity: 0;
            *background-color: @text;
        }
        ! &:where(:not(:disabled)):hover::before {
            *transition: none;
            *opacity: 0.1;
        }
    }
`
const clickable = `
    *overflow: hidden;
    *position: relative;

    ! &::after {
        *content: "";
        *position: absolute;
        *top: 0px;
        *left: 0px;
        *bottom: 0px;
        *right: 0px;
        *pointer-events: none;
        *opacity: 0;
        *background-color: @text;
        *transition: opacity 150ms linear;
    }
    ! &:where(:not(:disabled)):active::after {
        *transition: none;
        *opacity: 0.3;
    }
`

macro("theme.tron")`
    *background-color: black;
    *color: white;
    @font: Tektur;

    @primary: hsl(166, 70%, 60%);
    @accent: hsl(202, 70%, 60%);
    @info: hsl(238, 70%, 60%);
    @success: hsl(130, 85%, 60%);
    @warning: hsl(50, 85%, 60%);
    @error: hsl(10, 85%, 60%);
`
component("button[data-ws]")`
    @color: @primary;

    @fill: var(--fill-color, transparent);
    @text: var(--text-color, @color);

    *position: relative;

    *border: 0px solid var(--text);
    *color: @text;
    *font-family: @font;

    *background-color: @fill;
    *border-radius: @base-radius;
    *cursor: pointer;
    *padding: 8px 16px;
    *overflow: hidden;
    *user-select: none;
    *display: inline-flex;
    *align-items: center;
    *justify-content: center;
    *text-decoration: none;

    ! &:disabled {
        *cursor: default;
        *filter: saturate(10%) brightness(0.7);
    }

    ${hoverable}
    ${clickable}
`

component("*")`
    *box-sizing: border-box;
    *-webkit-tap-highlight-color: transparent;
`

const processNode = (node) => {
    const wss = node.dataset.ws ?? ""
    const hash = inc(wss)
    if (hash === undefined) {
        delete node.dataset.wsid
        return
    }
    node.dataset.wsid = hash
}
const observer = new MutationObserver(
    (muts) => {
        const elems = new Set(
            Array.from(
                muts,
                (evt) => [...evt.addedNodes, evt.target]
            ).flat()
        )
        for (const node of elems) {
            processNode(node)
        }
    }
)
observer.observe(
    document.body,
    {
        subtree: true,
        attributes: true,
        childList: true,
        attributeFilter: ["data-ws"]
    }
)

for (const node of document.querySelectorAll("*")) {
    processNode(node)
}

const x = (obj) => Object.entries(obj).reduce(
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
            console.log("nest", key, value)
            defs.push(`!${key} { ${x(value)} }`)
            return defs
        }
        defs.push(`${key}: ${value};`)
        return defs
    },
    []
).join(" ")

export default { x }
