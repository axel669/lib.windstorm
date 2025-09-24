export default (parts, ...values) => {
    const template = document.createElement("template")
    const html = String.raw(parts, ...values)
    template.innerHTML = html
    return template
}
