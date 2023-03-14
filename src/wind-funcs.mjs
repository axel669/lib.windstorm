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

const source = {
    "bg": "background-color",
    "round": "border-radius",
    "round-right": ["border-top-right-radius", "border-bottom-right-radius"],
    "round-left": ["border-top-left-radius", "border-bottom-left-radius"],
    "round-top": ["border-top-right-radius", "border-top-left-radius"],
    "round-bottom": ["border-bottom-right-radius", "border-bottom-left-radius"],
    "flex": (direction = "column") => [
        cssprop("display", "flex"),
        cssprop("flex-direction", direction)
    ],
    "grid": (direction = "row") => [
        cssprop("display", "grid"),
        cssprop("grid-direction", direction)
    ],
    "flex-dir": "flex-direction",
    "cols": "grid-template-columns",
    "pad": "padding",
    "pad-left": "padding-left",
    "pad-right": "padding-right",
    "pad-top": "padding-top",
    "pad-bottom": "padding-bottom",
    "gap": "gap",
    "text-color": "color",
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
    "text-size": "font-size",
    "font": "font-family",
    "border-size": "border-width",
    "border-color": "border-color",
    "border-style": "border-style",
    "border": "border",
    "width": "width",
    "grid-areas": (...args) => cssprop(
        "grid-template-areas",
        args.map(
            row => JSON.stringify(row)
        ).join(" ")
    ),
    "grid-area": "grid-area",
    "grid-cols": "grid-template-columns",
    "grid-col": "grid-column",
    "toggle": (direction) => [
        cssprop("grid-template-areas", iconPlacement[direction]),
        cssprop("grid-template-columns", iconColSize[direction])
    ]
}

export { cssprop, simple, multi }
export default Object.fromEntries(
    Object.entries(source).map(
        ([key, value]) => {
            const type = typeof value
            if (type === "function") {
                return [key, value]
            }
            if (type === "string") {
                return [key, simple(value)]
            }
            if (Array.isArray(value) === true) {
                return [key, multi(...value)]
            }
            return null
        }
    )
)
