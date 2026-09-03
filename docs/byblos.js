import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js"
import http from "https://cdn.jsdelivr.net/npm/@axel669/http@0.3.1"

import * as ws from "./ws-esm.js"

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
const addScript = (src, attr = {}) => {
    const script = document.createElement("script")
    script.src = src
    for (const [key, value] of Object.entries(attr)) {
        script.setAttribute(key, value)
    }
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
    <div data-ws="t.a: center; p: 8px;">
        <ws-hexagon-spinner data-ws="@size: 100px; @color: @accent;">
        </ws-hexagon-spinner>
    </div>
`
const [ copyButton ] = html`
    <code-wrapper>
        <button data-ws="@color: @accent; var.fill;">
            <ws-icon data-icon="copy"></ws-icon>
        </button>
    </code-wrapper>
`
const addCodeCopy = (block) => {
    const copy = copyButton.cloneNode(true)
    block.parentNode.insertBefore(copy, block)
    copy.addEventListener(
        "click",
        () => navigator.clipboard.writeText(block.innerText)
    )
}
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
    nodes.content.innerHTML = rendered.page.replace(
        /:([a-zA-Z0-9_\-]+):/g,
        (_, name) => `<ws-icon data-icon="${name}"></ws-icon>`
    )

    for (const plugin of options.plugins) {
        await plugin.display?.(rendered)
    }

    const codeNodes =
        nodes.content.querySelectorAll("code[class*='language-']")
    for (const node of codeNodes) {
        const code = node.innerText
        const lang = node.className.slice(9)
        // const html = Prism.highlight(node, Prism.languages[lang], lang)
        // console.log(html)
    }
    window.Prism.highlightAll()
    const codeBlocks = nodes.content.querySelectorAll("pre[class*='language-']")
    for (const block of codeBlocks) {
        addCodeCopy(block)
    }
}
const defaultOptions = {
    "prism.theme": "https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-holi-theme.min.css",
    "page.title": "Byblos Docgen",
    "docs.title": "Byblos Docgen",
    "hook.loadTargets": (i) => i,
    theme: localStorage.theme ?? "dark",
    plugins: [],
}

const [ sidebar ] = html`
    <ws-modal id="byblos-sidebar-modal" inline-desktop>
        <ws-drawer data-ws="! |hover: none| { w: min(240px, 70%); }">
            <ws-surface data-ws="pos: relative; r: 0px; raised; layout.3row-controls;">
                <ws-titlebar data-ws="@color: @accent; area: header;">
                    <button data-ws="area: action; @color: @accent; r: 0px;">
                        <ws-icon data-icon="x"></ws-icon>
                    </button>
                    <ws-text title></ws-title>
                </ws-titlebar>
                <ws-flex data-ws="area: content; over: auto;" id="byblos-sidebar-content">
                </ws-flex>
            </ws-surface>
            <style>
                #byblos-sidebar-modal ul {
                    list-style-type: none;
                }
            </style>
        </ws-drawer>
    </ws-modal>
`
const [ sidebarButton ] = html`
    <button data-ws="area: menu; t.sz: 20px;">
        <ws-icon data-icon="menu-2"></ws-icon>
    </button>
`
const setupSidebar = async (sidebarOptions, repo, nodes) => {
    if (sidebarOptions === null || sidebarOptions === undefined) {
        return {}
    }
    const side = await contentFetch("/_sidebar.md", repo)
    const sidebarHTML = marked.parse(await side.res.text())
    nodes.titlebar.append(sidebarButton)
    nodes.sidebar.append(sidebar)

    sidebar.open = (
        ws.pageis.mobile.matches === false
        && localStorage.open === "1"
    )

    sidebarButton.addEventListener(
        "click",
        () => {
            sidebar.show()
            localStorage.open = "1"
        }
    )

    const frag = $(sidebar)
    frag`ws-text`.innerHTML = sidebarOptions.title
    frag`button`.addEventListener(
        "click",
        () => sidebar.hide()
    )
    frag`ws-flex`.innerHTML = sidebarHTML.replace(
        /:([a-zA-Z0-9_\-]+):/g,
        (_, name) => `<ws-icon data-icon="${name}"></ws-icon>`
    )

    nodes.sidebar = {
        button: sidebarButton,
        modal: sidebar,
    }

    document.addEventListener(
        "byblos:route-change",
        () => {
            if (ws.pageis.mobile.matches === false) {
                return
            }
            sidebar.hide()
            localStorage.open = "0"
        }
    )
}
const [ toplevel ] = html`
    <ws-surface data-ws="layout.3row-controls; r: 0px;">
    </ws-surface>
`
const [ titlebar, content ] = html`
    <ws-titlebar data-ws="var.fill; area: header;">
        <ws-text title>
        </ws-text>
    </ws-titlebar>
    <div data-ws="layout.2col-sidebar; @col-a: 0px; ! |hover: hover| { @col-a: 240px; }">
        <sidebar-area data-ws="area: sidebar; grid;"></sidebar-area>
        <content-area data-ws="disp: block; scrollable;">
            <ws-flex data-ws="w.max: 720px;" id="byblos-content">
                <div>
                </div>
            </ws-flex>
        </content-area>
    </div>
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
        localMode: location.origin.startsWith("http://localhost"),
        ...userOptions,
    }
    console.log(options)

    localStorage.theme = localStorage.theme ?? options.theme

    addScript(
        "https://cdn.jsdelivr.net/npm/prismjs@1.30.0/components/prism-core.min.js",
        { "data-manual": "" }
    )
    addScript(
        "https://cdn.jsdelivr.net/npm/prismjs@1.30.0/plugins/autoloader/prism-autoloader.min.js"
    )

    document.body.setAttribute(
        "data-ws",
        `#theme.${localStorage.theme}; #animate;`
    )
    document.body.append(toplevel)
    toplevel.append(titlebar)
    toplevel.append(content)

    const header = $(titlebar)
    const doc = $(content)
    nodes.screen = titlebar
    // nodes.titlebar = header`ws-titlebar`
    nodes.titlebar = titlebar
    nodes.title = header`ws-text`
    nodes.sidebar = doc`sidebar-area`
    // nodes.titleGrid = header`ws-grid`
    nodes.titleGrid = titlebar
    nodes.layout = doc`ws-surface`
    // nodes.layout = content
    nodes.contentArea = doc`ws-flex`
    nodes.content = doc`div`

    repo.name = options.repo
    repo.branch = options.branch
    // const repoLoad = await github.get`/repos/${repo.name}/git/trees/${repo.branch}`().promise
    // const repoInfo = await repoLoad.res.json()
    // repo.hash = repoInfo.sha

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

ws.component("#byblos-content")`
    !& table:not([data-ws]) {
        *border-collapse: collapse;
        !& :is(td, th) {
            b: 1px solid hsl(@primary, @layer-element);
            p: 4px;
        }
        !& th {
            bg.c: hsl(@primary, @layer-element);
            t.c: hsl(@mono, @layer-fill);
        }
        !& tr:nth-child(2n) {
            bg.c: hsl(@mono, @layer-bg);
        }
    }
`

window.byblos = {
    init,
    marked,
    $,
    html,
    addCodeCopy,
    get theme() { return localStorage.theme },
    set theme(next) {
        localStorage.theme = next
        document.body.setAttribute("data-ws", `#theme.${next}; #animate;`)
    },
    ws,
}
