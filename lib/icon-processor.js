import { config } from "./config.js"

/**
mutation observers are performant, and by loading each icon individually the
amount of data loaded is extremely small (~1.8kb/icon used) rather than 20-40kb
for each chunk of icons. this does mean that after ~550 icons it's more data,
but the number of sites doing that is likely to small enough that I don't care.
*/
const iconFonts = {}
const setIcon = async (node, icon) => {
    const cache = iconFonts[icon]
    const name = `ws-icon-${icon}`
    if (cache !== undefined) {
        await cache.loaded
        if (cache.status !== "loaded" || node === null) {
            return
        }
        node.style.setProperty("--icon-font", name)
        return
    }
    const font = new FontFace(
        name,
        `url(${config.origin}/icon/${icon}.woff?v${config.iconVersion})`
    )
    iconFonts[icon] = font
    try { await font.load() }
    catch (err) { }
    document.fonts.add(font)
    setIcon(node, icon)
}
const processNode = (node) => {
    if (node.tagName === undefined) {
        return
    }
    const def = node.getAttribute("data-icon")
    if (def === null) {
        return
    }
    setIcon(node, def)
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
        attributeFilter: ["data-icon"]
    }
)

export const preloadIcons = (...names) => {
    for (const name of names) {
        setIcon(null, name)
    }
}

preloadIcons("caret-right-filled")
