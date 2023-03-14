const App = () => {
    const [count, setCount] = createSignal(0)
    const inc = () => setCount(count() + 1)
    const [themeName, setTheme] = createSignal("light")
    const preview = (evt) => setTheme(evt.target.dataset.theme)
    onCleanup(() => clearInterval(timer))
    const arr = Array.from(
        { length: 100 },
        (_, i) => {
            const cls = `pad-left(${100 - i}px)`
            return html`<div wind-storm="border[1px solid white]">${i}</div>`
        }
    )
    return html`
                    <div wind-theme="${themeName}">
                        <div wind-storm="grid[] grid-cols[repeat(3, 1fr)]">
                            <button wind-storm="
                            border-size[1px]
                            color[primary]"
                            data-theme="light"
                            onClick=${preview}>
                                Light
                            </button>

                            <button wind-storm="
                            border-size[1px]
                            color[primary]"
                            data-theme="dark"
                            onClick=${preview}>
                                Dark
                            </button>

                            <button wind-storm="
                            border-size[1px]
                            color[primary]"
                            data-theme="tron"
                            onClick=${preview}>
                                Tron
                            </button>
                        </div>
                        <button wind-storm="border-size[1px] color[warning]" onClick=${inc}>
                            Button?
                        </button>
                        <button wind-storm="border-size[1px] fill[warning]" onClick=${inc}>
                            Button?
                        </button>
                        <div wind-storm="round-left[4px] bg[seagreen] pad[6px] font[monospace]">
                            ${count}
                        </div>
                    </div>
                `
}
