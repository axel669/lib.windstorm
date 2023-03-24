const cssvalue = (value) =>
    (value.startsWith("&") === true)
        ? `var(--${value.slice(1)})`
        : value
const cssprop = (name, value) => `${name}: ${cssvalue(value)}`
const simple = (name) =>
    (value) => [cssprop(name, value)]
const multi = (...names) =>
    (value) => names.map(
        (name) => cssprop(name, value)
    )

const windFuncs = {
    "adorn": (area) => [
        cssprop("grid-area", area),
        cssprop("display", "flex"),
        cssprop("justify-content", "center"),
        cssprop("align-items", "center"),
    ],
    "area": simple("grid-area"),
    "bd": simple("border"),
    "bd-c": simple("border-color"),
    "bd-s": simple("border-style"),
    "bd-w": simple("border-width"),
    "bg": simple("background"),
    "bg-a": simple("background-attachment"),
    "bg-c": simple("background-color"),
    "bg-img": simple("background-image"),
    "block": () => cssprop("display", "block"),
    "col": simple("grid-column"),
    "flex": (direction = "column") => [
        cssprop("display", "flex"),
        cssprop("flex-direction", direction)
    ],
    "font": simple("font-family"),
    "gap": simple("gap"),
    "grid": (flow = "row") => [
        cssprop("display", "grid"),
        cssprop("grid-auto-flow", flow)
    ],
    "gr-col": simple("grid-template-columns"),
    "gr-row": simple("grid-template-rows"),
    "gr-acol": simple("grid-auto-column"),
    "gr-arow": simple("grid-auto-row"),
    "h": simple("height"),
    "h-max": simple("max-height"),
    "h-min": simple("min-height"),
    "hide": () => cssprop("display", "none"),
    "iblock": () => cssprop("display", "inline-block"),
    "iflex": (direction = "column") => [
        cssprop("display", "inline-flex"),
        cssprop("flex-direction", direction)
    ],
    "igrid": (flow = "row") => [
        cssprop("display", "inline-grid"),
        cssprop("grid-auto-flow", flow)
    ],
    "inset": multi("top", "left", "bottom", "right"),
    "inset": multi("left", "right"),
    "inset": multi("top", "bottom"),
    "m": simple("margin"),
    "m-b": simple("margin-bottom"),
    "m-l": simple("margin-left"),
    "m-r": simple("margin-right"),
    "m-t": simple("margin-top"),
    "over": simple("overflow"),
    "over-x": simple("overflow-x"),
    "over-y": simple("overflow-y"),
    "p": simple("padding"),
    "p-b": simple("padding-bottom"),
    "p-l": simple("padding-left"),
    "p-r": simple("padding-right"),
    "p-t": simple("padding-top"),
    "p-x": multi(
        "padding-left",
        "padding-right",
    ),
    "p-y": multi(
        "padding-top",
        "padding-bottom",
    ),
    "pos": simple("position"),
    "r": simple("border-radius"),
    "r-tl": simple("border-top-left-radius"),
    "r-tr": simple("border-top-right-radius"),
    "r-bl": simple("border-bottom-left-radius"),
    "r-br": simple("border-bottom-right-radius"),
    "r-t": multi(
        "border-top-left-radius",
        "border-top-right-radius",
    ),
    "r-r": multi(
        "border-top-right-radius",
        "border-bottom-right-radius",
    ),
    "r-l": multi(
        "border-bottom-left-radius",
        "border-top-left-radius",
    ),
    "r-b": multi(
        "border-bottom-right-radius",
        "border-bottom-left-radius",
    ),
    "row": simple("grid-row"),
    "shdw": simple("box-shadow"),
    "t-br": simple("word-break"),
    "t-c": simple("color"),
    "t-deco": simple("text-decoration"),
    "t-over": simple("text-overflow"),
    "t-sz": simple("font-size"),
    "t-tr": simple("text-transform"),
    "t-ws": simple("white-space"),
    "tr": simple("transform"),
    "w": simple("width"),
    "w-max": simple("max-width"),
    "w-min": simple("min-width"),
    "x": simple("left"),
    "y": simple("top"),
    "z": simple("z-index"),
    "$color": (color) => [
        cssprop("--color", `&${color}`),
        cssprop("--ripple-color", `&${color}-ripple`),
    ],
    "@flat": () => [
        cssprop("border-width", "0px"),
        cssprop("--border-size", "0px"),
    ],
    "@outline": () => [
        cssprop("border-width", "1px"),
        cssprop("border-color", "&color"),
    ],
    "@fill": () => [
        cssprop("--ripple-color", `&ripple-dark`),
        cssprop("background", "&color"),
        cssprop("color", "&text-color-fill"),
    ],
}

export { cssprop, simple, multi }
export default windFuncs
