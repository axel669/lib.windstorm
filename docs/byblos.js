import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js"
import http from "https://cdn.jsdelivr.net/npm/@axel669/http@0.3.1"

const html = (parts, ...values) => {
    const html = String.raw(parts, ...values)
    const template = document.createElement("template")
    template.innerHTML = html
    return [...template.content.children]
}
const github = http.origin({
    origin: "https://api.github.com"
})
const jsd = http.origin({
    origin: "https://cdn.jsdelivr.net"
})
const contentFetch = (url, repo) => {
    if (options.localMode === true) {
        return http.req.get`${url}`().promise
    }
    return jsd.get`/gh/${repo.name}@${repo.hash}/docs${url}`().promise
}

const repo = {}

let options = null
export const $ = (doc = document) =>
    (parts, ...values) =>
        doc.querySelector(
            String.raw(parts, ...values)
        )
const addScript = (src) => {
    const script = document.createElement("script")
    script.src = src
    document.head.append(script)
}
const loadURL = async (url) => {
    const response = await contentFetch(url, repo)
    if (response.res?.status === 404) {
        return null
    }
    if (response.state !== "complete") {
        const error = new Error("Fetch failed")
        error.detail = response
        return error
    }
    return await response.res.text()
}
const [ loader ] = html`
    <div ws-x="[t.a center] [p 8px]">
        <ws-hexagon-spinner ws-x="[@size 100px] [$color @accent]">
        </ws-hexagon-spinner>
    </div>
`
const loadPage = async (targets) => {
    if (targets.page.url === null) {
        return
    }
    nodes.content.innerHTML = ""
    nodes.content.append(loader)
    for (const plugin of options.plugins) {
        await plugin.resolve?.(targets)
    }
    console.log(targets)

    const contentPairs = Object.entries(targets).map(
        async ([key, info]) => {
            const { type, url } = info
            const content = await loadURL(url)

            return [key, { content, type }]
        }
    )
    const contents = Object.fromEntries(
        await Promise.all(contentPairs)
    )
    for (const plugin of options.plugins) {
        await plugin.preRender?.(contents)
    }
    console.log(contents)

    const rendered = Object.fromEntries(
        Object.entries(contents).map(
            (pair) => {
                const [key, info] = pair
                const { content, type } = info

                if (key === "page") {
                    return [key, marked.parse(content)]
                }
                return [
                    key,
                    options.render?.[type]?.(content) ?? content
                ]
            }
        )
    )
    for (const plugin of options.plugins) {
        await plugin.postRender?.(rendered)
    }
    console.log(rendered)
    nodes.content.innerHTML = rendered.page

    for (const plugin of options.plugins) {
        await plugin.display?.(rendered)
    }

    window.Prism.highlightAll()
}
const defaultOptions = {
    "prism.theme": "https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-holi-theme.min.css",
    "page.title": "Byblos Docgen",
    "docs.title": "Byblos Docgen",
    "hook.loadTargets": (i) => i,
    plugins: [],
}

const [ sidebarButton ] = html`
    <label ws-x="@@button [.menu] [t.sz 20px]" for="byblos-sidebar-toggle">
        <ws-icon data-icon="menu-2"></ws-icon>
    </label>
`
const sidebar = html`
    <input type="checkbox" ws-x="[hide]" id="byblos-sidebar-toggle" />
    <ws-modal id="byblos-sidebar-modal">
        <label for="byblos-sidebar-toggle"></label>
        <ws-paper ws-x="@@menu [r 0px] [w min(320px, 70%)]">
            <ws-flex ws-x="[.content]" id="byblos-sidebar-content">
            </ws-flex>
        </ws-paper>
    </ws-modal>
`
const setupSidebar = async (enabled, repo, nodes) => {
    if (enabled !== true) {
        return {}
    }
    const side = await contentFetch("/_sidebar.md", repo)
    const sidebarHTML = marked.parse(await side.res.text())
    nodes.titlebar.append(sidebarButton)
    nodes.screen.append(...sidebar)

    const frag = $(sidebar[1])
    frag`ws-flex`.innerHTML = sidebarHTML

    nodes.sidebar = {
        button: sidebarButton,
        layout: sidebar[1],
        toggle: sidebar[0],
    }

    document.addEventListener(
        "byblos:route-change",
        () => nodes.sidebar.toggle.checked = false
    )
}
const [ layout ] = html`
    <ws-screen>
        <ws-paper>
            <ws-titlebar ws-x="[.header] [$fill]">
                <span ws-x="[.title] [$title-text]">
                </span>
            </ws-titlebar>

            <ws-flex ws-x="[.content] [over auto]">
                <div></div>
            </ws-flex>
        </ws-paper>
    </ws-screen>
`
const nodes = {}
const hashPath = (hash) => {
    if (hash === null) {
        return null
    }
    if (hash === "" || hash === "#/") {
        return "/index.md"
    }
    return hash.slice(1)
}
const init = async (userOptions) => {
    options = {
        ...defaultOptions,
        ...userOptions,
        localMode: location.origin.startsWith("http://localhost")
    }
    console.log(options)

    addScript("./windstorm.js")
    addScript("https://cdn.jsdelivr.net/npm/prismjs@1.30.0/components/prism-core.min.js")
    addScript("https://cdn.jsdelivr.net/npm/prismjs@1.30.0/plugins/autoloader/prism-autoloader.min.js")

    document.body.setAttribute("ws-x", "[!theme.tron] @@app")
    document.body.append(layout)

    const doc = $(layout)
    nodes.screen = layout
    nodes.titlebar = doc`ws-titlebar`
    nodes.title = doc`span`
    nodes.layout = doc`ws-paper`
    nodes.contentArea = doc`ws-flex`
    nodes.content = doc`div`

    repo.name = options.repo
    repo.branch = options.branch
    const repoLoad = await github.get`/repos/${repo.name}/git/trees/${repo.branch}`().promise
    const repoInfo = await repoLoad.res.json()
    repo.hash = repoInfo.sha

    const themeCSS = document.createElement("link")
    themeCSS.href = options["prism.theme"]
    themeCSS.rel = "stylesheet"
    document.head.append(themeCSS)

    document.title = options["page.title"]
    nodes.title.innerHTML = options["docs.title"]

    setupSidebar(options.sidebar, repo, nodes)

    document.addEventListener(
        "byblos:route-change",
        (evt) => loadPage({
            page: {
                url: evt.route,
                type: "md",
            }
        })
    )

    for (const plugin of options.plugins) {
        await plugin.init?.(nodes)
    }

    let route = null
    setInterval(
        () => {
            const path = hashPath(location.hash)
            if (path === route) {
                return
            }
            route = path
            const evt = new CustomEvent("byblos:route-change")
            evt.route = route
            document.dispatchEvent(evt)
        },
        10
    )
}

window.byblos = {
    init,
    marked,
    $,
    html,
}
