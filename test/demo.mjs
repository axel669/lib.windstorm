import { html, render, useState } from "https://esm.sh/htm/preact/standalone"

window.html = html
window.useState = useState

const initial = location.hash.slice(1).trim()
const component = await import(`./comp/${initial}.mjs`)
const example = component.default
const App = () => {
    const [theme, set] = useState("tron")
    const [show, setShow] = useState(false)

    const changeTheme = (evt) => set(evt.target.dataset.theme)
    const tabs = ["light", "dark", "tron"].map(
        (th) => html`
            <ws-tab tab-selected=${th === theme} data-theme=${th}>
                ${th.slice(0, 1).toUpperCase()}${th.slice(1)}
            </ws-tab>
        `
    )
    const popover = windstorm.wsx({ $show: show })

    return html`
        <ws-screen ws-x="@left" ws-theme="${theme}">
            <ws-titlebar ws-x="@fill $title $color[primary]">
                <button ws-x="@flat $menu r[0px]">
                    <ws-icon class="fa-hamburger" />
                </button>
                <ws-flex ws-x="$title fl-m-a[center] p[8px]">
                    <div ws-x="$title-text">Title</div>
                    <div ws-x="$subtitle">Nope</div>
                </ws-flex>
            </ws-titlebar>
            <ws-paper ws-x="$content">
                <ws-tabs ws-x="$header" onClick=${changeTheme}>
                    ${tabs}
                </ws-tabs>
                <ws-flex ws-x="over[auto] $content">
                    <label for="modal" ws-x="@button @outline $color[accent]">
                        Show Modal
                    </label>
                    <input type="checkbox" id="modal" ws-x="hide" />
                    <ws-modal>
                        <ws-paper ws-x="@menu">
                            <ws-flex ws-x="$content w[25vw]">
                                <label for="modal" ws-x="@button @fill $color[accent]">
                                    Close
                                </label>
                                <ws-tabs ws-x="@solid $vert" onClick=${changeTheme}>
                                    ${tabs}
                                </ws-tabs>
                                <div ws-x="t-ws[pre]">
                                    a div with lots of text that might push the width?
                                </div>
                                <ws-popover ws-x="${popover}">
                                    <label ws-x="@button @fill $color[warning]" onClick=${() => setShow(true)}>
                                        Blep
                                    </label>
                                    <ws-paper ws-x="$content inset-x[0px] y[100%]">
                                        <div ws-x="$content">
                                            <label ws-x="@button @fill $color[warning]" onClick=${() => setShow(false)}>
                                                Close
                                            </label>
                                        </div>
                                    </ws-paper>
                                </ws-popover>
                            </ws-flex>
                        </ws-paper>
                    </ws-modal>
                    <div ws-theme="tron">
                        <${example} />
                    </div>
                    <div ws-theme="dark">
                        <${example} />
                    </div>
                    <div ws-theme="light">
                        <${example} />
                    </div>
                </ws-flex>
            </ws-paper>
        </ws-screen>
    `
}

render(html`<${App} />`, document.body)
