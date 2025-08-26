const defaultRegex = /\[%arg (?<default>[^\]]+)\]/
const macroRegex = /\[((?<size>[\w\-]+)\|)?((?<prefix>[\w\-]+)#)?(?<macro>[!\$@\w\-\.]+)(?<state>(:([a-zA-Z0-9_\-\(\)])+)+)?(?<pseudo>::[^\s\]\{]+)?( (?<arg>[^\]]+?))?\]/
const cssRegex = /\[\*(?<prop>[^\s]+) (?<value>[^\]]+)\]/
export const wsxRegex = new RegExp(
    Array.from(
        [defaultRegex, macroRegex, cssRegex],
        (reg) => `${reg.source}`
    ).join("|"),
    "g"
)
