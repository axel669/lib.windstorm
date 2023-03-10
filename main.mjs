import parseWind from "./parse.mjs"

const parseClass = (name) =>
    name.match(/^(?<key>(?<mod>\w+:)?(?<name>[\w\-]+)\((?<args>.+)\))$/)?.groups
    ?? null
const style = document.createElement("style")
document.head.appendChild(style)

style.innerHTML = `
body {
    --default: white;
    --interact: rgba(255, 255, 255, 0.25);

    color: var(--default);
}

doric[text] {
    display: block;
}

doric[flex] {
    display: flex;
    padding: 20px;
}

button.doric {
    --color: var(--default);

    position: relative;
    display: inline-flex;
    padding: 8px;
    align-items: center;
    justify-content: center;
    border-color: var(--color);
    color: var(--color);
    border: 0px solid var(--color);
    border-radius: 4px;
    overflow: hidden;
    cursor: pointer;
    user-select: none;
}
button.doric::after {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    transition: background-color 150ms linear;
}
button.doric:active::after {
    transition: none;
    background-color: var(--interact);
}

label.wind {
    display: grid;
}
label.wind > input {
    grid-area:
}
`

const cssvalue = (value) =>
    (value.startsWith("--") === true)
    ? `var(${value})`
    : value
const cssprop = (name, value) => `${name}: ${cssvalue(value)}`
const simple = (name) =>
    (value) => cssprop(name, value)
const multi = (...names) =>
    (value) => names.map(
        (name) => cssprop(name, value)
    )
const funcs = {
   " bg": simple("background-color"),
    "round": simple("border-radius"),
    "round-right": multi(
        "border-top-right-radius",
        "border-bottom-right-radius"
    ),
    "round-left": multi(
        "border-top-left-radius",
        "border-bottom-left-radius"
    ),
    "round-top": multi(
        "border-top-right-radius",
        "border-top-left-radius"
    ),
    "round-bottom": multi(
        "border-bottom-right-radius",
        "border-bottom-left-radius"
    ),
    "flex-dir": simple("flex-direction"),
    "cols": simple("grid-template-columns"),
    "pad": simple("padding"),
    "pad-left": simple("padding-left"),
    "pad-right": simple("padding-right"),
    "pad-top": simple("padding-top"),
    "pad-bottom": simple("padding-bottom"),
    "gap": simple("gap"),
    "text-color": simple("color"),
    "color": simple("--color"),
    "text-size": simple("font-size"),
    "font": simple("font-family"),
    "border-size": simple("border-width"),
    "border-color": simple("border-color"),
    "border-style": simple("border-style"),
    "border": simple("border"),
    "width": simple("width"),
    "grid": () => cssprop("display", "grid"),
    "grid-areas": (...args) => cssprop(
        "grid-template-areas",
        args.map(
            row => JSON.stringify(row)
        ).join(" ")
    ),
    "grid-area": simple("grid-area")
}

const sheet = style.sheet
const styles = {}
// const parseArgs = (args) =>
//     args.split(",")
//     .map(arg => arg.replace(/__/g, " "))
const checkClass = (info) => {
    const process = (
        info !== null
        && styles[info.key] === undefined
        && funcs[info.name] !== undefined
    )
    if (process === false) {
        return
    }

    const func = funcs[info.name]
    const mod = (info.mod !== undefined) ? `:${info.mod.slice(0, -1)}` : ""
    // const key = `${info.key.replace(/\(|\)|:/g, "\\$&")}${mod}`
    const rules = func(
        // ...parseArgs(info.args)
        ...info.args
    )
    const ruleText = Array.isArray(rules) ? rules.join(";\n") : rules
    sheet.insertRule(
        // `doric.${key}, .${key}, .wind.${key} {\n${ruleText};\n}`,
        `[wind-storm*="${info.key}"]${mod} {\n${ruleText};\n}`,
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
        // for (const name of node.classList) {
        //     const info = parseClass(name)
        //     checkClass(info)
        // }
    }
}

const mut = {
    childList(evt) {
        if (evt.addedNodes.length === 0) {
            return
        }
        processNodes(evt.addedNodes)
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
