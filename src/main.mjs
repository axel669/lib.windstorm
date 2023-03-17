import processNode from "./process-node.mjs"
import * as css from "./wind-funcs.mjs"

const mut = {
    childList(evt) {
        if (evt.addedNodes.length === 0) {
            return
        }
        for (const node of evt.addedNodes) {
            const nodes =
                (node.tagName === undefined)
                ? []
                : [node, ...node.querySelectorAll("*")]
            nodes.forEach(processNode)
        }
    },
    attributes(evt) {
        processNode(evt.target)
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

for (const node of document.querySelectorAll("*")) {
    processNode(node)
}

export default css
