import styles from "$$css"

const head = document.head

const lastDigit = Math.ceil(screen.width * devicePixelRatio * 10) % 10
const roundDown = lastDigit >= 5

styles.push({
    name: "correction",
    style: `body {--sub-pixel-offset:${roundDown ? 1 : 0}px}`
})
for (const { name, style } of styles) {
    const st = document.createElement("style")
    st.setAttribute("ws:name", name)
    st.innerHTML = style
    head.appendChild(st)
}

const style = document.createElement("style")
document.head.append(style)
const sheet = style.sheet

style.setAttribute("ws:name", "windstorm-generated")

export { head, style, sheet }
