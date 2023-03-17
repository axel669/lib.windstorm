export default () => {
    const inputs =
        ["default", "primary", "secondary", "danger", "warning"]
            .map(
                color => {
                    const storm = `color[${color}] round[4px]`
                    const flat = `flat[${color}] round[4px]`
                    return html`
                        <label wind-storm="${storm}">
                            <input type="checkbox" />
                            <div wind-storm="label-content">
                                ${color}
                            </div>
                        </label>
                        <label wind-storm="${storm}">
                            <div wind-storm="label-content">
                                ${color}
                            </div>
                            <input type="checkbox" />
                        </label>
                        <label wind-storm="${flat}">
                            <input type="checkbox" />
                            <div wind-storm="label-content">
                                ${color}
                            </div>
                        </label>
                        <label wind-storm="${flat}">
                            <div wind-storm="label-content">
                                ${color}
                            </div>
                            <input type="checkbox" />
                        </label>
                    `
                }
            )
            .flat()
    return html`
        <div
        wind-storm="
        grid[]
        grid-cols[1fr 1fr]
        grid-rows[auto, minmax(48px, min-content)]
        pad[4px] gap[4px]
        width[320px]
        ">
            <label wind-storm="round[4px]">
                <input type="checkbox" />
                <div wind-storm="label-content">
                    default
                </div>
            </label>
            <label wind-storm="flat[primary] round[4px]">
                <input type="checkbox" />
                <div wind-storm="label-content">
                    primary
                </div>
            </label>
            <label wind-storm="color[secondary] round[4px]">
                <div wind-storm="label-content">
                    secondary
                </div>
                <input type="checkbox" />
            </label>
            <label wind-storm="flat[danger] round[4px]">
                <div wind-storm="label-content">
                    danger
                </div>
                <input type="checkbox" />
            </label>
            <label wind-storm="color[warning] round[4px]">
                <input type="checkbox" />
                <div wind-storm="label-content">
                    warning
                </div>
            </label>
            <label wind-storm="color[primary] round[4px]">
                <input type="checkbox" class="toggle" />
                <div wind-storm="label-content">
                    primary
                </div>
            </label>
            <form wind-storm="grid-col[span 2] flex[column]">
                <label wind-storm="color[secondary] round[4px]">
                    <input type="radio" name="blep" />
                    <div wind-storm="label-content">
                        secondary
                    </div>
                </label>
                <label wind-storm="color[warning] round[4px]">
                    <div wind-storm="label-content">
                        warning
                    </div>
                    <input type="radio" name="blep" />
                </label>
                <label wind-storm="color[danger] round[4px]">
                    <input type="radio" name="blep" />
                    <div wind-storm="label-content">
                        danger
                    </div>
                </label>
            </form>
        </div>
    `
}
