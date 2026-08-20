import * as macro from "./macro.js"

const djb2 = (str) => {
    let hash = 5381
    for (let i = 0; i < str.length; i += 1) {
        hash = (hash * 33) ^ str.charCodeAt(i)
    }
    return hash.toString(36)
}

const count = {}
const inc = (wss) => {
    if (wss === "" || wss === null || wss === "true") {
        return
    }
    const rules = macro.css(
        macro.parseWSS({ raw: [wss] })
    )
    const id = djb2(rules.join("\n"))
    count[id] = (count[id] ?? 0) + 1
    if (count[id] > 1) {
        return id
    }
    const cssText = rules.map(
        ruleset => ruleset.replaceAll("&", `[data-wsid="${id}"]`)
    )
    macro.style.sheet.insertRule(
        `@layer ws.element { ${cssText.join("\n")} }`,
        macro.style.sheet.cssRules.length
    )
    return id
}

const processNode = (node) => {
    const wss = node.dataset?.ws?.trim() ?? ""
    const hash = inc(wss)
    if (hash === undefined) {
        delete node.dataset?.wsid
        return
    }
    node.dataset.wsid = hash
}
const observer = new MutationObserver(
    (muts) => {
        const added = new Set(
            Array.from(
                muts,
                (evt) => [
                    evt.target,
                    ...Array.from(
                        evt.addedNodes,
                        node => [node, ...(node.querySelectorAll?.("*") || [])]
                    )
                ]
            ).flat(3)
        )
        for (const node of added) {
            processNode(node)
        }
    }
)
observer.observe(
    document.body,
    {
        subtree: true,
        attributes: true,
        childList: true,
        attributeFilter: ["data-ws"]
    }
)

for (const node of document.querySelectorAll("*")) {
    processNode(node)
}
