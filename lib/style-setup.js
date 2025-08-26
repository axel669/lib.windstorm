// The component styles are loaded from a custom rollup plugin.
// Component CSS comes from the .sass files.
import componentStyles from "$$component-css"
import { config } from "./config.js"

const head = document.head

for (const { name, style } of componentStyles) {
    const st = document.createElement("style")
    st.setAttribute("ws-name", name)
    st.innerHTML =
        style
        .replaceAll("__origin", config.origin)
        .replaceAll("__fonts", config.fontVersion)
    head.append(st)
}
