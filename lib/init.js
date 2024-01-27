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

const argReplace = (source) => {
    if (source === undefined) {
        return "undefined"
    }
    if (source === null) {
        return "null"
    }
    return `\`${source.replace(/\{\$\}/g, "${arg}")}\``
}

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
        .flatMap(rule => Array.from(
            rule.style,
            (name) => [name, rule.style.getPropertyValue(name)]
        ))

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
                ({ name, variable }) => {
                    /*
                    Have to escape the escape sequences so that when it's
                    interpolated into the template string it produces the
                    correct sequence for the function to parse.
                    */
                    if (variable !== undefined) {
                        const varname = variable.slice(1)
                        return `--${varname}: var(--wsx\\\\.\\\\${variable}\${varState}\\\\.\${size ?? ""}) !important`
                    }
                    if (name === undefined) {
                        return null
                    }
                    return `${name}: var(--wsx\\\\.${name}\${varState}\\\\.\${size ?? ""}) !important`
                }
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
            `{ state = "", varState, sheet, size }`,
            "sizer",
            `const css = sizer(size, \`${baseSelector}\${state} {\n${cssLines.join(";")}\n}\`)
            sheet.insertRule(css, sheet.cssRules.length)`
        )

        const applyLines = props.map(
            ({ name, value, func, arg, variable, string }) => {
                if (name !== undefined || variable !== undefined) {
                    const valueTemplate = argReplace(value ?? string)
                    const varName =
                        (name !== undefined)
                        ? `--wsx.${name}\${varState}.\${size ?? ""}`
                        : `--wsx.\\${variable}\${varState}.\${size ?? ""}`
                    return `list.push([\`${varName}\`, format(${valueTemplate})])`
                }
                const argTemplate = argReplace(arg)
                return `macro["${func}"]({list, format, macro, varState, arg: ${argTemplate}, size})`
            }
        )
        const apply = new Function(
            `{ list, format, macro, varState = "", arg = ${JSON.stringify(def?.def)}, size }`,
            applyLines.join("\n")
        )
        cssLineCache[ruleName] = cssLines
        macro[ruleName] = apply
    }

    return config
}
