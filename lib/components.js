import { style, component } from "./macro.js"
import { config } from "./config.js"

import "#com/theme"

import "#com/circle-spinner"
import "#com/hexagon-spinner"

import "#com/avatar"
import "#com/badge"
import "#com/button"
import "#com/chip"
import "#com/flex"
import "#com/grid"
import "#com/icon"
import "#com/modal"
import "#com/paper"
import "#com/popover"
import "#com/progress"
import "#com/screen"
import "#com/select"
import "#com/text"
import "#com/tabs"
import "#com/titlebar"
import "#com/toast"

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

component("@font-face", "&")`
    *font-family: Tektur;
    *font-display: swap;
    *src:
        url(${config.origin}/font/tektur.woff2?v${config.version})
        format("woff2")
    ;
`
component("@font-face", "&")`
    *font-family: Roboto;
    *font-display: swap;
    *src:
        url(${config.origin}/font/roboto.woff2?v${config.version})
        format("woff2")
    ;
`
