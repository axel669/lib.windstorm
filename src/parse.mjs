const funcs = /(?<key>(?<mod>\w+:)?(?<name>[\w\-]+)\[(?<args>.*?)\])/g
const factor = { "(": 1, ")": -1 }
const parseWind = (name) => {
    const matches = [...name.matchAll(funcs)]
    return matches.map(
        (match) => {
            const { groups } = match
            const argSource = groups.args
            const s = argSource.split("").reduce(
                (s, c) => {
                    if (c === "," && s.p === 0) {
                        s.args.push(s.c.trim())
                        s.c = ""
                        return s
                    }
                    s.p += factor[c] ?? 0
                    s.c += c
                    return s
                },
                { args: [], c: "", p: 0 }
            )
            const args = [...s.args, s.c.trim()]
            return {
                name: groups.name,
                mod: groups.mod,
                args,
                key: match[0]
            }
        }
    )
}

export default parseWind
