export default () => {
    return html`
        <div wind-storm="flex[column"] width[360px]">
            <label wind-storm="toggle[left] pad[4px] border[1px solid white] round[4px]">
                <div wind-storm="label-content">ok but what if</div>
                <input type="checkbox" />
            </label>
            <label wind-storm="toggle[right] color[primary] hover:bg[#dddddd60]">
                <div wind-storm="label-content">ok but what if</div>
                <input type="checkbox" />
            </label>

            <label wind-storm>
                <div wind-storm="label-content">Cool Input</div>
                <input type="text" />
            </label>
        </div>
    `
}
