import { sheet } from "./style-setup.mjs"

/*
Split the regex into parts so that I can edit them easier (the one liner is
a huge mess to look at).
*/
const regexParts = [
    // default value
    /\$="(?<def>[^"]+)"/,
    // windstorm macro
    /\[(?<func>[\w\-\.]+)(\s+(?<arg>[^\]]+))?\]/,
    // variable set macro
    /\[(?<variable>@[\w\-\.]+)(\s+(?<string>[^\]]+))?\]/,
    // css property
    /"(?<name>[\w\-]+)\s*:\s*(?<value>[^"]+?)"/
]
const partsRegex = new RegExp(
    regexParts.map(part => part.source).join("|"),
    "g"
)

const styleMacro = {}
const macro = {}

export { macro, styleMacro }

window.styleMacro = styleMacro
window.macro = macro
window.wsxSheet = sheet

const argReplace = (source) => source?.replace(/\{\$\}/g, "${arg}")

export default () => {
    const script = document.currentScript

    const config = {
        attr: script.dataset.attr ?? "ws-x"
    }
    const cssLineCache = {}

    const roots = document.querySelectorAll("[ws-root]")
    const rules = Array.from(roots)
        .flatMap(source => [...source.sheet.cssRules])
        .filter(rule => rule.selectorText === ".ws-style")
        .flatMap(rule => [...rule.styleMap])
        .map(pair => [pair[0], pair[1].toString()])

    for (const [key, value] of rules) {
        const ruleName = key.slice(2)
        const parts = [...value.matchAll(partsRegex)].map(
            ({ groups }) => ({ ...groups })
        )

        const def = parts.find(
            prop => prop.def !== undefined
        )
        const props = parts.filter(item => item !== def)

        const cssProps =
            props.map(
                ({ name }) =>
                    (name === undefined)
                    ? null
                    /*
                    Have to escape the escape sequence so that when it's
                    interpolated into the template string it produces the
                    correct sequence for the function to parse.
                    */
                    : `${name}: var(--wsx\\\\.${name}\${varState}) !important`
            )
            .filter(prop => prop !== null)
        const baseSelector = `:where([${config.attr}~="[${ruleName}\${state}"], [${config.attr}~="[${ruleName}\${state}]"])`

        const extras = props.filter(prop => prop.func !== undefined)
        const cssLines = [
            ...cssProps,
            ...extras.map(
                ex => {
                    const lines = cssLineCache[ex.func]
                    if (lines === undefined) {
                        throw new Error(`Rule "${ex.func}" was not defined before rule "${ruleName}"`)
                    }
                    return lines
                }
            ).flat(1)
        ]

        styleMacro[ruleName] = new Function(
            `{ state = "", varState, sheet }`,
            `const css = \`${baseSelector}\${state} {\n${cssLines.join(";")}\n}\`
            sheet.insertRule(css, sheet.cssRules.length)`
        )

        const applyLines = props.map(
            ({ name, value, func, arg, variable, string }) => {
                if (name !== undefined || variable !== undefined) {
                    const valueTemplate = argReplace(value ?? string)
                    const varName =
                        (name !== undefined)
                        ? `--wsx.${name}\${varState}`
                        : `--${variable.slice(1)}`
                    return `list.push([\`${varName}\`, format(\`${valueTemplate}\`)])`
                }
                const argTemplate = argReplace(arg)
                return `macro["${func}"]({list, format, macro, varState, arg: \`${argTemplate}\`})`
            }
        )
        const apply = new Function(
            `{ list, format, macro, varState = "", arg = ${JSON.stringify(def?.def)} }`,
            applyLines.join("\n")
        )
        cssLineCache[ruleName] = cssLines
        macro[ruleName] = apply
    }

    return config
}
