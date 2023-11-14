const cssValue = (value) => {
    if (value === null || value === undefined) {
        return null
    }
    if (typeof value !== "string") {
        return value
    }
    return value.replace(
        /\&([\w\d_\-]+)/g,
        (_, name) => `var(--${name})`
    )
}
const rules = (...rules) => rules.join(";")
const prop = (key, value) => {
    const val = cssValue(value)
    if (val === null) {
        return ""
    }
    return `${key}:${val}`
}

export { rules, prop }
