export default (parts, ...values) => {
    const html = String.raw(parts, ...values)
    const template = document.createElement("template")
    template.innerHTML = html

    return () => template.content.cloneNode(true)
}
