// The web component js gets compiled into the main library, but a reference
// to any export isn't needed.
import "./js-comp/ws-circle-spinner.mjs"
import "./js-comp/ws-hexagon-spinner.mjs"
import "./js-comp/ws-progress.js"
import { preloadIcons } from "./icon-processor.js"

import "./built-in-macro.js"
import "./theme.js"
import "./style-setup.js"

import { config } from "./config.js"
import { applyMacro, events } from "./macro.js"

const processNode = (node) => {
    if (node.tagName === undefined) {
        return
    }
    const def = node.getAttribute("ws-x")
    if (def === null) {
        return
    }
    applyMacro(node, def)
}

const mut = {
    childList(evt) {
        if (evt.addedNodes.length === 0) {
            return
        }
        evt.addedNodes.forEach(
            (node) => {
                if (node.tagName === undefined) {
                    return
                }
                const nodes = [node, ...node.querySelectorAll("*")]
                nodes.forEach(processNode)
            }
        )
    },
    attributes(evt) {
        processNode(evt.target)
    }
}
// MutationObserver is quite fast even over the whole DOM tree.
const observer = new MutationObserver(
    (muts) => muts.forEach(
        evt => mut[evt.type](evt)
    )
)
observer.observe(
    document.body,
    {
        subtree: true,
        attributes: true,
        childList: true,
        attributeFilter: ["ws-x"]
    }
)

const initialNodes = [
    document.body,
    ...document.body.querySelectorAll("*")
]
initialNodes.forEach(processNode)

export { preloadIcons }

export const x = (defs) => Object.entries(defs).reduce(
    (list, [key, value]) => {
        const realValue = value ?? false
        if (realValue === false) {
            return list
        }
        if (realValue === true) {
            if (key.startsWith("@@") === true) {
                return [...list, key]
            }
            return [...list, `[${key}]`]
        }
        return [...list, `[${key} ${realValue}]`]
    },
    []
).join(" ")

export const xNode = (node, defs) => node.setAttribute("ws-x", x(defs))
export const version = config.version

// export default {
//     events
// }
