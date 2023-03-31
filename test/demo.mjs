import { html, render, useState } from "https://esm.sh/htm/preact/standalone"

window.html = html
window.useState = useState

const loadHTML = async (url) => {
    const res = await fetch(url)
    return await res.text()
}

const initial = location.hash.slice(1).trim()
const example = await loadHTML(`./comp/${initial}.html`)
// const example = component.default

const name = `${initial.slice(0, 1).toUpperCase()}${initial.slice(1)}`

const App = () => {
    const [theme, set] = useState("dark")

    const changeTheme = (evt) => set(evt.target.dataset.theme)
    const tabs = ["light", "dark", "tron"].map(
        (th) => html`
            <ws-tab tab-selected=${th === theme} data-theme=${th}>
                ${th.slice(0, 1).toUpperCase()}${th.slice(1)}
            </ws-tab>
        `
    )

    return html`
        <ws-screen ws-x="@left" ws-theme="${theme}">
            <ws-titlebar ws-x="@fill $title $color[primary]">
                <ws-text ws-x="$title $title-text">
                    ${name} Examples
                </ws-text>
            </ws-titlebar>
            <ws-paper ws-x="$content">
                <ws-tabs onClick=${changeTheme} ws-x="$header">
                    ${tabs}
                </ws-tabs>
                <ws-flex ws-x="$content over[auto]">
                    <div ws-x="p[4px]" innerHTML=${example}></div>
                </ws-flex>
            </ws-paper>

            <ws-paper ws-x="hide">
                <ws-flex ws-x="over[auto] $content">
                    <label for="modal" ws-x="@button @outline $color[accent]">
                        Show Modal
                    </label>
                    <input type="checkbox" id="modal" ws-x="hide" />
                    <ws-modal>
                        <ws-paper ws-x="@select">
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
                                <ws-popover ws-x="">
                                    <label ws-x="@button @fill $color[warning]" onClick=${() => setShow(true)}>
                                        Blep
                                    </label>
                                    <ws-paper ws-x="$content inset-x[0px] y[50%]">
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
                    <ws-paper ws-theme="tron" ws-x="@outline">
                        <ws-titlebar ws-x="$header">
                            <ws-text ws-x="$title $title-text">
                                Tron Theme
                            </ws-text>
                        </ws-titlebar>
                    </ws-paper>
                </ws-flex>
            </ws-paper>
        </ws-screen>
    `
}

render(html`<${App} />`, document.body)
