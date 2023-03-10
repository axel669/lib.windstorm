const cssvalue = (value) =>
    (value.startsWith("--") === true)
        ? `var(${value})`
        : value
const cssprop = (name, value) => `${name}: ${cssvalue(value)}`
const simple = (name) =>
    (value) => cssprop(name, value)
const multi = (...names) =>
    (value) => names.map(
        (name) => cssprop(name, value)
    )

const iconPlacement = {
    "left": `"icon ."`,
    "right": `". icon"`,
}
const iconColSize = {
    "left": `min-content auto`,
    "right": `auto min-content`,
}
export default {
    "bg": simple("background-color"),
    "round": simple("border-radius"),
    "round-right": multi(
        "border-top-right-radius",
        "border-bottom-right-radius"
    ),
    "round-left": multi(
        "border-top-left-radius",
        "border-bottom-left-radius"
    ),
    "round-top": multi(
        "border-top-right-radius",
        "border-top-left-radius"
    ),
    "round-bottom": multi(
        "border-bottom-right-radius",
        "border-bottom-left-radius"
    ),
    "flex": (direction = "column") => [
        cssprop("display", "flex"),
        cssprop("flex-direction", direction)
    ],
    "grid": (direction = "row") => [
        cssprop("display", "grid"),
        cssprop("grid-direction", direction)
    ],
    "flex-dir": simple("flex-direction"),
    "cols": simple("grid-template-columns"),
    "pad": simple("padding"),
    "pad-left": simple("padding-left"),
    "pad-right": simple("padding-right"),
    "pad-top": simple("padding-top"),
    "pad-bottom": simple("padding-bottom"),
    "gap": simple("gap"),
    "text-color": simple("color"),
    "color": (name) => [
        cssprop("--color", `--${name}`),
        cssprop("--ripple-color", `--${name}-ripple`)
    ],
    "outline": (name) => [
        cssprop("--color", `--${name}`),
        cssprop("--ripple-color", `--${name}-ripple`),
        cssprop("border", "1px solid var(--color)")
    ],
    "fill": (name) => [
        cssprop("--color", `--${name}`),
        cssprop("--ripple-color", `--ripple-dark`),
        cssprop("background", "--color"),
        cssprop("color", "--text-color-fill")
    ],
    "text-size": simple("font-size"),
    "font": simple("font-family"),
    "border-size": simple("border-width"),
    "border-color": simple("border-color"),
    "border-style": simple("border-style"),
    "border": simple("border"),
    "width": simple("width"),
    "grid-areas": (...args) => cssprop(
        "grid-template-areas",
        args.map(
            row => JSON.stringify(row)
        ).join(" ")
    ),
    "grid-area": simple("grid-area"),
    "grid-cols": simple("grid-template-columns"),
    "toggle": (direction) => [
        cssprop("grid-template-areas", iconPlacement[direction]),
        cssprop("grid-template-columns", iconColSize[direction])
    ]
}
