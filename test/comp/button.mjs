export default () => {
    const [count, setCount] = createSignal(0)
    const inc = () => setCount(count() + 1)
    return html`
        <div wind-storm="
        grid[]
        grid-cols[repeat(3, 1fr)]
        pad[4px]
        gap[4px]
        width[480px]
        "
        onClick=${inc}>
            <button wind-storm="color[primary] round[12px]">Primary</button>
            <button wind-storm="outline[primary] round[12px]">Primary</button>
            <button wind-storm="fill[primary]">Primary</button>

            <button wind-storm="color[secondary]">Secondary</button>
            <button wind-storm="outline[secondary]">Secondary</button>
            <button wind-storm="fill[secondary]">Secondary</button>

            <button wind-storm="color[danger]">Danger</button>
            <button wind-storm="outline[danger]">Danger</button>
            <button wind-storm="fill[danger]">Danger</button>

            <button wind-storm="color[warning]">Warning</button>
            <button wind-storm="outline[warning]">Warning</button>
            <button wind-storm="fill[warning]">Warning</button>

            <div wind-storm="grid-col[span 3] border[1px solid] pad[4px]">
                Click Count: ${count}
            </div>
        </div>
    `
}
