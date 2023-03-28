const head = document.head
const baselineStyle = document.createElement("style")
const style = document.createElement("style")

import styles from "$$css"

const lastDigit = Math.ceil(screen.width * devicePixelRatio * 10) % 10
const roundDown = lastDigit >= 5

head.appendChild(baselineStyle)

styles.push(`body {--sub-pixel-offset:${roundDown ? 1 : 0}px}`)
for (const style of styles) {
    const st = document.createElement("style")
    st.innerText = style
    head.appendChild(st)
}

head.appendChild(style)

baselineStyle.setAttribute("ws-baseline", "")
style.setAttribute("ws-calculated", "")

// const sheet = baselineStyle.sheet

// sheet.insertRule(
//     `@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap");`,
//     0
// )
// sheet.insertRule(
//     `@import url("https://ka-f.fontawesome.com/releases/v6.0.0/css/free.min.css?token=0011e611c6");`,
//     1
// )
// sheet.insertRule(
//     `* {
//         box-sizing: border-box;
//         -webkit-tap-highlight-color: transparent;
//     }`,
//     2
// )
// sheet.insertRule(
//     `[ws-x] {
//         border-style: solid;
//         border-width: 0px;
//         border-color: var(--text-color-normal);
//     }`,
//     3
// )
// sheet.insertRule(
//     `body, html {
//         padding: 0px;
//         margin: 0px;
//         width: 100%;
//         height: 100%;
//     }`,
//     4
// )
// sheet.insertRule(
//     `[ws-theme] {
//         background-color: var(--background);
//         color: var(--text-color-normal);
//         font-family: var(--font);
//         font-size: var(--text-size-normal);
//     }`,
//     5
// )

export { head, style }
