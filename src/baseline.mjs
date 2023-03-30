const head = document.head
// const baselineStyle = document.createElement("style")
const style = document.createElement("style")

import styles from "$$css"

const lastDigit = Math.ceil(screen.width * devicePixelRatio * 10) % 10
const roundDown = lastDigit >= 5

// head.appendChild(baselineStyle)

styles.push({
    name: "correction",
    style: `body {--sub-pixel-offset:${roundDown ? 1 : 0}px}`
})
for (const {name, style} of styles) {
    const st = document.createElement("style")
    st.setAttribute("ws-name", name)
    st.innerHTML = style
    head.appendChild(st)
}

head.appendChild(style)

// baselineStyle.setAttribute("ws-baseline", "")
style.setAttribute("ws-calculated", "")

export { head, style }
