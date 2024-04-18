// Style setup also creates the built-in macros, so it needs to run first
import "./style-setup.mjs"
import { config } from "./config.js"

// Split the regex into parts so that I can edit them easier (the one liner is
// a huge mess to look at).
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
const cssLineCache = {}

// Uncomment these and rebuild for some helpful debugging variables dumped into
// the window.
// window.styleMacro = styleMacro
// window.macro = macro
// window.wsxSheet = sheet

// Takes the {$} string in the macro defs and converts it into an interpolated
// string for JS code gen, with fallbacks that don't cause JS parse errors.
const argReplace = (source) => {
    if (source === undefined) {
        return "undefined"
    }
    if (source === null) {
        return "null"
    }
    return `\`${source.replace(/\{\$\}/g, "${arg}")}\``
}

// Use an attribute to mark tags that should be processed for macros.
// Since both style and link tags ahve the same attributes, specific tag names
// aren't used in the query selecor.
// REFACTOR: use :where() for the tags to make sure it's only those?
const roots = document.querySelectorAll("[ws-root]")
const rules = Array.from(roots)
    .flatMap(source => [...source.sheet.cssRules])
    .filter(rule => rule.selectorText === ".ws-style")
    .flatMap(rule => Array.from(
        rule.style,
        (name) => [name, rule.style.getPropertyValue(name)]
    ))

for (const [key, value] of rules) {
    // Custom css props all start with -- and that's what allows the custom
    // macros to be defined without the CSS parser throwing them away, so the
    // -- gets removed before processing the name.
    const ruleName = key.slice(2)
    const parts = [...value.matchAll(partsRegex)].map(
        // RegExp.groups isn't a real object, this converts it to one.
        ({ groups }) => ({ ...groups })
    )

    const def = parts.find(
        prop => prop.def !== undefined
    )
    const props = parts.filter(item => item !== def)

    const cssProps =
        props.map(
            ({ name, variable }) => {
                // Have to escape the escape sequences so that when it's
                // interpolated into the template string it produces the
                // correct sequence for the function to parse.
                // I don't know why I did this to myself.
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
    // Selector uses both [key] and [key as checks instead of trying to to
    // figure out if each macro takes an argument or not. Both of those
    // sequences will be unique to a macro, so using both works.
    const baseSelector = `:where([${config.attr}~="[${ruleName}\${state}"], [${config.attr}~="[${ruleName}\${state}]"])`

    // The lines of CSS that setup styles for macros are cached as each macro
    // is created, so that any macros using other macros can use a copy of the
    // raw CSS for the setup, rather than trying to do complex css rule sharing.
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

    // Style macros are used to create teh CSS for a macro when it get's used.
    // This serves 2 purposes:
    // - Unused macros don't generate any CSS that needs to get processed
    // - States can be added at any time with new CSS generated for that state
    //   so that any CSS state combinations can be used.
    // The extra bit of code for the insertion point calculation are there so
    // that size-based CSS gets inserted in such a way that it always overrides
    // CSS not related to specific screen sizes.
    styleMacro[ruleName] = new Function(
        `{ state = "", varState, sheet, size }`,
        "sizer",
        `const selectorBase = \`${baseSelector}\${state}\`
        const selector =
            (size === undefined)
            ? selectorBase
            : selectorBase.replace(/ws-x~="\\[/g, s => \`\${s}\${size}|\`)
        const css = sizer(size, \`\${selector} {\n${cssLines.join(";")}\n}\`)
        const rules = Array.from(sheet.cssRules)
        const index =
            (size === undefined)
            ? rules.findLastIndex(rule => rule.media === undefined)
            : rules.findLastIndex(
                rule => {
                    return (
                        rule.media !== undefined
                        && rule.cssRules[0].selectorText > selector
                    )
                }
            )
        sheet.insertRule(css, (index === -1) ? sheet.cssRules.length : index)`
    )

    // Macro function lines get generated in order of the definitions, ensuring
    // that the application of variables that affect styles is deterministic
    // regardless of what the browser might normally try and do.
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

export { macro, styleMacro }
