import { propInfo } from "./props.js"
import { wsxRegex } from "./regex.js"
import { uniqSorted } from "./uniq.js"

export const prefixMap = { "": "" }
export const addPrefix = (name) => {
    return (parts, ...values) => {
        const def = String.raw({ raw: parts }, ...values)
        if (/^[\w\-]+$/.test(name) === false) {
            console.warn(`Invalid prefix name: ${name}`)
            return
        }
        prefixMap[name] = def
    }
}

export const sizeMap = {}
export const addSize = (name) => {
    return (parts, ...values) => {
        const def = String.raw({ raw: parts }, ...values)
        if (/^[\w\-]+$/.test(name) === false) {
            console.warn(`Invalid size name: ${name}`)
            return
        }
        sizeMap[name] = def
    }
}

export const parseMacro = (text) => {
    const parts = Array.from(
        text.matchAll(wsxRegex),
        (match) => {
            const { groups } = match
            const state = groups.state ?? ""
            const prefix = groups.prefix ?? ""
            const size = groups.size ?? ""
            const pseudo = groups.pseudo ?? ""
            if (groups.default !== undefined) {
                return { default: groups.default }
            }
            if (groups.prop !== undefined) {
                return propInfo({
                    prop: groups.prop,
                    value: groups.value,
                    // state: uniqSorted(":", ...state.split(":")),
                    state,
                    prefix,
                    size,
                    pseudo,
                })
            }
            if (groups.macro.startsWith("@") === true) {
                return propInfo({
                    prop: `--${groups.macro.slice(1)}`,
                    value: groups.arg,
                    // state: uniqSorted(":", ...state.split(":")),
                    state,
                    prefix,
                    size,
                    pseudo,
                })
            }
            if (macros[groups.macro] === undefined) {
                console.log(`No macro found for "${groups.macro}"`)
                return null
            }
            const macro = macros[groups.macro]
            return macros[groups.macro].props.map(
                apply => propInfo({
                    macro: groups.macro,
                    prop: apply.prop,
                    value: apply.value.replaceAll("%arg", groups.arg ?? macro.arg),
                    // state: uniqSorted(
                    //     ":",
                    //     ...apply.state.split(":"),
                    //     ...state.split(":")
                    // ),
                    state: `${apply.state}${state}`,
                    prefix: `${apply.prefix} ${prefix}`.trim(),
                    size,
                    pseudo: apply.pseudo || pseudo,
                })
            )
        }
    )
    const list = parts.flat(Number.POSITIVE_INFINITY).filter(
        part => part !== null
    )
    if (list[0]?.default !== undefined) {
        const [arg, ...props] = list
        return { arg: arg.default, props }
    }
    return { arg: null, props: list }
}

const macros = {}
export const createMacro = (name) => {
    return (parts, ...values) => {
        const defText = String.raw({ raw: parts }, ...values)
        const macroDef = parseMacro(defText)
        macros[name] = macroDef
        return macroDef
    }
}
