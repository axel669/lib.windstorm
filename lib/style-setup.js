// The component styles are loaded from a custom rollup plugin.
// Component CSS comes from the .sass files.
import libInfo from "$package"
import componentStyles from "$$component-css"

const head = document.head

for (const { name, style } of componentStyles) {
    const st = document.createElement("style")
    st.setAttribute("ws-name", name)
    st.innerHTML =
        style
        .replaceAll("__origin", "https://wind-cdn.axel669.net")
        .replaceAll("__fonts", libInfo.fontVersion)
    head.append(st)
}
