const defaultRegex = /\[%arg (?<default>[^\]]+)\]/
const macroRegex = /\[((?<size>[\w\-]+)\|)?((?<prefix>[\w\-]+)#)?(?<macro>[!\$@\w\-\.]+)(?<state>(:[^:\s\]\{]+)+)?(?<pseudo>::[^\s\]\{]+)?( (?<arg>[^\]]+?))?\]/
const cssRegex = /\[\*(?<prop>[^\s]+) (?<value>[^\]]+)\]/
export const wsxRegex = new RegExp(
    Array.from(
        [defaultRegex, macroRegex, cssRegex],
        (reg) => `${reg.source}`
    ).join("|"),
    "g"
)
