import { html, render, useState } from "https://esm.sh/htm/preact/standalone"

window.html = html
window.useState = useState

const loadHTML = async (url) => {
    const res = await fetch(url)
    return await res.text()
}

const initial = location.hash.slice(1).trim()
const example =
    (initial !== "")
    ? await loadHTML(`./comp/${initial}.html`)
    : Array.from(
        { length: 100 },
        () => `<span ws-x="block &test[teal] b-r[1px_solid_var(--test)]">${Math.random()}</span>`
    ).join("\n")

const name = `${initial.slice(0, 1).toUpperCase()}${initial.slice(1)}`

const { wsx, custom, prop } = windstorm

custom(
    "blep",
    (_, color) => [
        prop("background", `linear-gradient(teal, ${color})`)
    ]
)
const App = () => {
    const [theme, set] = useState("dark")

    const changeTheme = (evt) => set(evt.target.dataset.theme)
    const tabs = ["light", "dark", "tron"].map(
        (th) => html`
            <ws-tab ws-x="${wsx({ "$tab-selected": th === theme })}" data-theme=${th}>
                ${th.slice(0, 1).toUpperCase()}${th.slice(1)}
            </ws-tab>
        `
    )

    return html`
        <ws-screen ws-x="@left theme[${theme}]">
            <ws-paper ws-x="r[0]">
                <ws-titlebar ws-x="@fill $color[primary]" slot="header">
                    <ws-icon class="ti-clipboard" ws-x="slot[title] $title">
                        ${name} Examples
                    </ws-icon>
                </ws-titlebar>
                <ws-paper ws-x="slot[content] r[0]">
                    <ws-tabs onClick=${changeTheme} ws-x="@solid slot[header] p[0]">
                        ${tabs}
                    </ws-tabs>
                    <ws-flex ws-x="slot[content] over[auto]" innerHTML=${example}>
                    </ws-flex>
                </ws-paper>
            </ws-paper>
        </ws-screen>
    `
}

render(html`<${App} />`, document.body)
