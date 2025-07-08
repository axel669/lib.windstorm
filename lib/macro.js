import { uniq } from "./uniq.js"
import { setupCSS } from "./style.js"
import { parseMacro } from "./mapping.js"

export { addPrefix, addSize, createMacro as addMacro } from "./mapping.js"

const cssValue = (value) => {
    return value.replace(
        /@([\w\-_]+)/g,
        (_, varName) => `var(--${varName})`
    )
}

export const events = new EventTarget()
events.addEventListener("macro.applied", console.log)
const nodeCache = new WeakMap()
export const applyMacro = (node, def) => {
    const { arg, props } = parseMacro(def)
    const prev = nodeCache.get(node) ?? []
    const applied = []
    for (const target of props) {
        const { varName, value } = target
        applied.push(varName)
        setupCSS(target, varName)
        const cssval = cssValue(value)
        // console.log(node.tagName, target.prop, value, varName, cssval)
        node.style.setProperty(varName, cssval)
    }
    const appliedKeys =
        props
            .map(p => [p.varKey, p.prefixKey, p.stateKey, p.sizeKey])
            .flat()
            .filter(k => k !== "")
    node.dataset.wsx = uniq(...appliedKeys).join(" ")
    const active = uniq(...applied)
    const remove = prev.filter(
        pname => active.includes(pname) === false
    )
    for (const rem of remove) {
        node.style.setProperty(rem, null)
    }
    nodeCache.set(node, active)
    const appliedMacros = props.filter(
        prop => prop.macro !== undefined
    )
    for (const macro of new Set(appliedMacros)) {
        const evt = new Event("macro.applied")
        evt.macro = macro
        evt.node = node
        events.dispatchEvent(evt)
    }
    return props
}
