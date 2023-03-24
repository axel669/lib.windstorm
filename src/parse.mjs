const funcs = /(?<key>(?<mod>\w+:)?(?<name>[\$\@\w\-]+)(\[(?<args>.*?)\])?)/g
const factor = { "(": 1, ")": -1 }
const parseArgs = (argSource) => {
    const source = argSource.trim()
    if (source === "") {
        return []
    }
    const s = source.split("").reduce(
        (s, c, i) => {
            if (c === "," && s.p === 0) {
                s.args.push(
                    source.substring(s.s, i).trim()
                )
                s.s = i
                return s
            }
            s.p += factor[c] ?? 0
            return s
        },
        { args: [], p: 0, s: 0 }
    )
    return [
        ...s.args,
        source.slice(s.s).trim()
    ]
}
const parseWind = (name, node) => {
    const matches = [...name.matchAll(funcs)]
    return matches.map(
        (match) => {
            const { groups } = match
            return {
                name: groups.name,
                mod: groups.mod,
                args: parseArgs(groups.args ?? ""),
                key: match[0],
                node,
            }
        }
    )
}

export default parseWind
