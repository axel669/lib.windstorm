const generator = (prefix) => {
    let next = 0
    const cache = {}
    return (name) => {
        if (name === "") {
            return ""
        }
        if (cache[name] !== undefined) {
            return cache[name]
        }
        const id = `${prefix}${next.toString()}`
        next += 1
        cache[name] = id
        return id
    }
}
const prefixID = generator("pr")
const varID = generator("vr")
const sizeID = generator("sz")
const stateID = generator("st")

export const propInfo = (core) => {
    const varName = `--ws-x_${core.prop}_${core.size}_${core.prefix}${core.state}${core.pseudo}`
    const varKey = varID(varName)
    const prefixKey = prefixID(core.prefix)
    const sizeKey = sizeID(core.size)
    const stateKey = stateID(core.state)
    return {
        varName,
        varKey,
        prefixKey,
        sizeKey,
        stateKey,
        ...core,
    }
}
