import { macro, component } from "./macro.js"
import { config } from "./config.js"

import "./components/ws-circle-spinner.js"
import "./components/ws-hexagon-spinner.js"
import "./components/ws-progress.js"
import "./components/theme.js"

import "./components/avatar.js"
import "./components/button.js"

component("*")`
    *box-sizing: border-box;
    *-webkit-tap-highlight-color: transparent;
`
component("html, body")`
    *padding: 0px;
    *margin: 0px;
    *width: 100%;
    *height: 100%;
    *-webkit-tap-highlight-color: transparent;
    *-webkit-font-smoothing: antialiased;
`

component("@font-face")`
    *font-family: Tektur;
    *font-display: swap;
    *src:
        url(${config.origin}/font/tektur.woff2?v${config.version})
        format("woff2")
    ;
`
component("@font-face")`
    *font-family: Roboto;
    *font-display: swap;
    *src:
        url(${config.origin}/font/roboto.woff2?v${config.version})
        format("woff2")
    ;
`
