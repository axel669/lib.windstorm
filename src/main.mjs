import parseWind from "./parse.mjs"
import windFuncs from "./wind-funcs.mjs"
import baseCSS from "./default.css"

const style = document.createElement("style")
document.head.appendChild(style)
style.innerHTML = baseCSS

const sheet = style.sheet
const styles = {}
window.blep = styles
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

const processNodes = (nodes) => {
    for (const node of nodes) {
        const stuff = parseWind(
            node.getAttribute("wind-storm") ?? ""
        )
        stuff.forEach(checkClass)
    }
}

const mut = {
    childList(evt) {
        if (evt.addedNodes.length === 0) {
            return
        }
        for (const node of evt.addedNodes) {
            processNodes(node.querySelectorAll("*"))
        }
    },
    attributes(evt) {
        console.log(evt)
        processNodes([evt.target])
    }
}
const observer = new MutationObserver(
    (muts) => muts.forEach(
        evt => mut[evt.type](evt)
    )
)
observer.observe(
    document.body,
    {
        subtree: true,
        attributes: true,
        childList: true,
        attributeFilter: ["wind-storm"]
    }
)

processNodes(
    document.querySelectorAll("*")
)
