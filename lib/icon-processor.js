import { config } from "./config.js"

/**
The CSS for detecting the icon parts was way too complex and didn't work in a
lot of cases, so I have opted for a second mutation observer since those have
proven to be very performant and allow me far more flexbility in how the icon
fonts can be loaded and managed (it might also be less code overall than the
horrible css was).
*/
const iconRanges = [["zzz-off", "window-minimize"], ["window-maximize", "vector-spline"], ["vector-off", "trending-up"], ["trending-down-3", "time-duration-10"], ["time-duration-0", "switch-3"], ["switch-2", "square-rounded-number-4"], ["square-rounded-number-3-filled", "square-percentage"], ["square-off", "square-f0"], ["square-dot-filled", "ski-jumping"], ["skew-y", "shareplay"], ["share-off", "sailboat-off"], ["sailboat-2", "replace-off"], ["replace-filled", "prism-light"], ["prism", "play-card-9-filled"], ["play-card-9", "photo-bolt"], ["photo-bitcoin", "paperclip"], ["paper-bag-off", "number-56-small"], ["number-55-small", "navigation-filled"], ["navigation-exclamation", "mood-look-down"], ["mood-kid-filled", "message-circle-filled"], ["message-circle-exclamation", "masks-theater-off"], ["masks-theater", "macro-off"], ["macro-filled", "line-scan"], ["line-height", "layout-list"], ["layout-kanban-filled", "joker"], ["join-straight", "hospital-circle-filled"], ["horseshoe", "hexagon-letter-q"], ["hexagon-letter-p-filled", "hanger-off"], ["hanger-2-filled", "gender-genderqueer"], ["gender-genderless", "flag-spark"], ["flag-share", "file-time"], ["file-text-spark", "eye-down"], ["eye-dotted", "drone"], ["drag-drop-2", "device-watch-off"], ["device-watch-minus", "device-ipad-horizontal-up"], ["device-ipad-horizontal-star", "dental"], ["delta", "curling"], ["cup-off", "confetti"], ["cone-plus", "cloud-bolt"], ["cloud-bitcoin", "circle-triangle"], ["circle-square", "circle-dotted-letter-p"], ["circle-dotted-letter-o", "chevrons-right"], ["chevrons-left", "cell-signal-2"], ["cell-signal-1", "camera-exclamation"], ["camera-down", "building-airport"], ["building", "brand-unsplash"], ["brand-unity", "brand-picsart"], ["brand-php", "brand-google-drive"], ["brand-google-big-query", "brand-binance"], ["brand-bilibili", "bowl-chopsticks"], ["bowl", "bike-filled"], ["bike", "basket-cog"], ["basket-code", "atom-2"], ["atom", "arrow-right-from-arc"], ["arrow-right-dashed", "arrow-big-down-line-filled"], ["arrow-big-down-line", "align-box-right-middle"], ["align-box-right-bottom-filled", "accessible"], ["access-point-off", "a-b"]]
const findPart = (name) => {
    let index = 0
    for (const [end, start] of iconRanges) {
        index += 1
        if (name > start && name < end) {
            return index
        }
        if (name > end) {
            return null
        }
    }
    return null
}
const loadedFonts = {}
const loadFont = (part) => {
    const key = part.toString()
    if (loadedFonts[key] !== undefined) {
        return
    }
    loadedFonts[key] = new FontFace(
        `TablerIcons${part}`,
        `url(${config.origin}/${config.fontVersion}/tabler-3.23.0-part${part}.woff)`
    )
    document.fonts.add(loadedFonts[key])
    loadedFonts[key].load()
}
const processNode = (node) => {
    if (node.tagName.toLowerCase() !== "ws-icon") {
        return
    }
    const iconName = node.dataset.icon ?? null
    if (iconName === null) { return }

    const part = findPart(iconName)
    if (part === null) { return }

    loadFont(part)
    node.style.setProperty("--icon-font", `TablerIcons${part}`)
}
const handlers = {
    attributes(record) {
        processNode(record.target)
    },
    childList(record) {
        const added = [...record.addedNodes]
        const nodes =
            added
            .map(node => {
                if (node.tagName === undefined) {
                    return []
                }
                return [node, ...node.querySelectorAll("ws-icon")]
            })
            .flat()
        nodes.forEach(processNode)
    }
}
const iconObserver = new MutationObserver(
    (changes) => {
        for (const change of changes) {
            handlers[change.type](change)
        }
    }
)
iconObserver.observe(
    document.body,
    {
        subtree: true,
        attributes: true,
        childList: true,
        attributeFilter: ["data-icon"]
    }
)
