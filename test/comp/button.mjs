export default () => {
    const [count, set] = useState(0)
    const inc = () => set(count + 1)
    return html`
        <ws-grid ws-x="gr-col[repeat(3,1fr)] p[4px] gap[4px]">
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

            <button ws-x="@flat $color[accent]">Warning</button>
            <button ws-x="@outline $color[accent]">Warning</button>
            <button ws-x="@fill $color[accent]">Warning</button>

            <ws-badge ws-text="${count}" ws-x="$color[secondary]">
                <button ws-x="@fill $color[primary]" onClick=${inc}>
                    Blep
                </button>
            </ws-badge>
        </ws-grid>
    `
}
