const style = document.createElement("style")
const head = document.head

head.appendChild(style)

const sheet = style.sheet

sheet.insertRule(
    `@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap");`,
    0
)
sheet.insertRule(
    `@import url("https://ka-f.fontawesome.com/releases/v6.0.0/css/free.min.css?token=0011e611c6");`,
    1
)
sheet.insertRule(
    `* {
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    }`,
    2
)
sheet.insertRule(
    `[w\\$] {
        border-style: solid;
        border-width: 0px;
        border-color: var(--text-color-normal);
    }`,
    3
)
sheet.insertRule(
    `body, html {
        padding: 0px;
        margin: 0px;
        width: 100%;
        height: 100%;
    }`,
    4
)
sheet.insertRule(
    `[w\\$-theme] {
        background-color: var(--background);
        color: var(--text-color-normal);
        font-family: var(--font);
        font-size: var(--text-size-normal);
    }`,
    5
)

export { head, style }
