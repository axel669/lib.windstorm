export default () => {
    const [count, setCount] = createSignal(0)
    const inc = () => setCount(count() + 1)
    return html`
        <div
        w$="grid gr-col[repeat(3, 1fr)] p[4px] gap[4px] w[480px]"
        onClick=${inc}>
            <button w$="@flat $color[primary] r[12px]">Primary</button>
            <button w$="@outline $color[primary] r[12px]">Primary</button>
            <button w$="@fill $color[primary]">Primary</button>

            <button w$="@flat $color[secondary]">Secondary</button>
            <button w$="@outline $color[secondary]">Secondary</button>
            <button w$="@fill $color[secondary]">Secondary</button>

            <button w$="@flat $color[danger]">Danger</button>
            <button w$="@outline $color[danger]">Danger</button>
            <button w$="@fill $color[danger]">Danger</button>

            <button w$="@flat $color[warning]">Warning</button>
            <button w$="@outline $color[warning]">Warning</button>
            <button w$="@fill $color[warning]">Warning</button>

            <div w$="col[span 3] bd[1px solid] p[4px]">
                Click Count: ${count}
            </div>
        </div>
    `
}
