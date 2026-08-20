import { macro, userComponent, css, parseWSS, style } from "./macro.js"
import { preloadIcons } from "./icon-processor.js"
import { config } from "./config.js"

import "./built-in-macro.js"

export const x = (obj) => Object.entries(obj).reduce(
    (defs, pair) => {
        const [key, value] = pair
        if (value === null || value === undefined || value === false) {
            return defs
        }
        if (value === true) {
            defs.push(`${key};`)
            return defs
        }
        if (typeof value === "object") {
            defs.push(`${key} { ${x(value)} }`)
            return defs
        }
        defs.push(`${key}: ${value};`)
        return defs
    },
    []
).join(" ")

export { macro, preloadIcons }
export const component = userComponent
export const version = config.version

export const pageis = {
    get mobile() {
        return matchMedia("(hover: none)")
    }
}
