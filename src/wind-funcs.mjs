import { rules, prop } from "./css-gen.mjs"

import simpleFuncs from "./simple.yml"

const windFuncs = {
    ...simpleFuncs,
    flex: (direction = "column") => rules(
        prop("display", "flex"),
        prop("flex-direction", direction)
    ),
    grid: (flow = "row") => rules(
        prop("display", "grid"),
        prop("grid-auto-flow", flow)
    ),
    hide: () => prop("visibility", "hidden"),
    theme: () => rules(
        prop("color", "&text-color-normal"),
        prop("font-family", "&font"),
        prop("font-size", "&text-size-normal"),
    ),
    "$color": (color) => rules(
        prop("--color", `&${color}`),
        prop("--ripple-color", `&${color}-ripple`),
    ),
    "$adorn": () => rules(
        prop("display", "flex"),
        prop("justify-content", "center"),
        prop("align-items", "center"),
        prop("padding", "2px"),
    ),
    "$compact": () => prop("padding", "0px 8px"),
    "$title": () => rules(
        prop("font-size", "&text-size-title"),
        prop("font-weight", "700"),
        prop("display", "flex"),
        prop("flex-direction", "column"),
        prop("justify-content", "center"),
        prop("padding", "4px"),
    ),
    "$subtitle": () => rules(
        prop("font-size", "&text-size-subtitle"),
        prop("display", "flex"),
        prop("flex-direction", "column"),
        prop("justify-content", "center"),
        prop("padding", "0px 4px"),
    ),
    "@flat": () => rules(
        prop("border-width", "0px"),
        prop("--border-size", "0px"),
    ),
    "@outline": () => rules(
        prop("border-width", "1px"),
        prop("border-color", "&color"),
    ),
    "@fill": () => rules(
        prop("--ripple-color", `&ripple-dark !important`),
        prop("--text-color", "&text-color-fill"),
        prop("background-color", "&color"),
        prop("color", "&text-color-fill"),
    ),
}

export default windFuncs
