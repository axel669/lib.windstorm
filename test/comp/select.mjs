const select = (color, type) => {
    const options = Array.from(
        { length: 5 },
        (_, i) => html`<option>${i}</option>`
    )
    const colorize = `${type}[${color}] round[4px]`
    return html`
        <label wind-storm="${colorize}">
            <div wind-storm="label-content">${type} - ${color}</div>
            <select>${options}</select>
        </label>
    `
}

export default () => {
    const selects =
        ["default", "primary", "secondary", "danger", "warning"]
        .map(
            color => [
                select(color, "flat"),
                select(color, "color"),
            ]
        )
        .flat()
    return html`
        <div wind-storm="grid[] grid-cols[1fr 1fr] pad[4px] gap[4px] width[320px]">
            ${selects}
        </div>
    `
}
