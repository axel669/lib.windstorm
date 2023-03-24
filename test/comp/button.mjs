export default () => {
    const [count, setCount] = createSignal(0)
    const inc = () => setCount(count() + 1)
    return html`
        <div
        ws-x="grid gr-col[repeat(3,1fr)] p[4px] gap[4px] w[480px]"
        onClick=${inc}>
            <button ws-x="@flat $color[primary] r[12px]">Primary</button>
            <button ws-x="@outline $color[primary] r[12px]">Primary</button>
            <button ws-x="@fill $color[primary]">Primary</button>

            <button ws-x="@flat $color[secondary]">Secondary</button>
            <button ws-x="@outline $color[secondary]">Secondary</button>
            <button ws-x="@fill $color[secondary]">Secondary</button>

            <button ws-x="@flat $color[danger]">Danger</button>
            <button ws-x="@outline $color[danger]">Danger</button>
            <button ws-x="@fill $color[danger]">Danger</button>

            <button ws-x="@flat $color[warning]">Warning</button>
            <button ws-x="@outline $color[warning]">Warning</button>
            <button ws-x="@fill $color[warning]">Warning</button>

            <div ws-x="col[span 3] bd[1px solid] p[4px]">
                Click Count: ${count}
            </div>
        </div>
    `
}
