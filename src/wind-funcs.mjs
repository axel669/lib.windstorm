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
    "border": "border",
    "border-color": "border-color",
    "border-size": "border-width",
    "border-style": "border-style",
    "color": (name) => [
        cssprop("--color", `--${name}`),
        cssprop("--ripple-color", `--${name}-ripple`)
    ],
    "cols": "grid-template-columns",
    "fill": (name) => [
        cssprop("--color", `--${name}`),
        cssprop("--ripple-color", `--ripple-dark`),
        cssprop("background", "--color"),
        cssprop("color", "--text-color-fill")
    ],
    "flex": (direction = "column") => [
        cssprop("display", "flex"),
        cssprop("flex-direction", direction)
    ],
    "flex-dir": "flex-direction",
    "font": "font-family",
    "gap": "gap",
    "grid": (direction = "row") => [
        cssprop("display", "grid"),
        cssprop("grid-direction", direction)
    ],
    "grid-area": "grid-area",
    "grid-areas": (...args) => cssprop(
        "grid-template-areas",
        args.map(
            row => JSON.stringify(row)
        ).join(" ")
    ),
    "grid-col": "grid-column",
    "grid-cols": "grid-template-columns",
    "outline": (name) => [
        cssprop("--color", `--${name}`),
        cssprop("--ripple-color", `--${name}-ripple`),
        cssprop("border", "1px solid var(--color)")
    ],
    "pad": "padding",
    "pad-left": "padding-left",
    "pad-right": "padding-right",
    "pad-top": "padding-top",
    "pad-bottom": "padding-bottom",
    "round": "border-radius",
    "round-bottom": ["border-bottom-right-radius", "border-bottom-left-radius"],
    "round-left": ["border-top-left-radius", "border-bottom-left-radius"],
    "round-right": ["border-top-right-radius", "border-bottom-right-radius"],
    "round-top": ["border-top-right-radius", "border-top-left-radius"],
    "text-color": "color",
    "text-size": "font-size",
    "toggle": (iconPos = "left") => [
        cssprop("grid-template-areas", iconPlacement[iconPos]),
        cssprop("grid-template-columns", iconColSize[iconPos])
    ],
    "width": "width",
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
