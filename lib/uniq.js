export const uniq = (...items) => {
    const map = {}
    for (const k of items) {
        map[k] = null
    }
    return Object.keys(map)
}
export const uniqSorted = (joiner, ...items) =>
    uniq(
        ...items
    ).sort().join(joiner)
