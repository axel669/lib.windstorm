import componentList from "$$components"
import parseWind from "./parse.mjs"
import windFuncs from "./wind-funcs.mjs"

const style = document.createElement("style")
const head = document.head

head.appendChild(style)
style.innerHTML = `
@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap");

@import url("https://ka-f.fontawesome.com/releases/v6.0.0/css/free.min.css?token=0011e611c6");

* {
    box-sizing: border-box;
}
body[wind-theme], html {
    padding: 0px;
    margin: 0px;
    width: 100%;
    height: 100%;
}

[wind-theme] {
    background-color: var(--background);
    color: var(--text-color-normal);
    font-family: var(--font);
    font-size: var(--text-size-normal);
}
`

const sheet = style.sheet
const styles = {}
const checkClass = (info) => {
    const process = (
        info !== null
        && styles[info.key] === undefined
        && windFuncs[info.name] !== undefined
    )
    if (process === false) {
        return
    }
    const func = windFuncs[info.name]
    const mod = (info.mod !== undefined) ? `:${info.mod.slice(0, -1)}` : ""
    const rules = func(...info.args)
    const ruleText = Array.isArray(rules) ? rules.join(";\n") : rules
    sheet.insertRule(
        `[wind-storm][wind-storm*="${info.key}"]${mod} {\n${ruleText};\n}`,
        sheet.cssRules.length
    )
    styles[info.key] = sheet.cssRules[sheet.cssRules.length - 1]
}

const componentStyle = {}
const link = document.createElement("link")
const attachStyle = (name) => {
    if (componentStyle[name] !== undefined) {
        return
    }

    const style = link.cloneNode()
    style.href = `${name}.css`
    style.rel = "stylesheet"
    componentStyle[name] = style
    head.appendChild(style)
    console.log(componentStyle)
}
const checkTheme = (node) => {
    const theme = node.getAttribute("wind-theme")
    if (theme === null) {
        return
    }

    attachStyle(`theme/${theme}`)
}
const processNode = (node) => {
    checkTheme(node)
    const storm = node.getAttribute("wind-storm")
    if (storm === null) {
        return
    }
    const stuff = parseWind(storm)
    stuff.forEach(checkClass)

    const tag = node.tagName.toLowerCase()
    if (componentList.includes(tag) === false) {
        return
    }
    attachStyle(`comp/${tag}`)
}

export default processNode
