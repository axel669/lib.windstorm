import { inc } from "./core.js"

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
