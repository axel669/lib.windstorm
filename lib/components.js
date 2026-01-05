import { style, component } from "./macro.js"
import { config } from "./config.js"

import "#com/theme"

import "#com/circle-spinner"
import "#com/hexagon-spinner"

import "#com/avatar"
import "#com/badge"
import "#com/button"
import "#com/chip"
import "#com/control-label"
import "#com/details"
import "#com/dialog"
import "#com/flex"
import "#com/grid"
import "#com/icon"
import "#com/link"
import "#com/modal"
import "#com/paper"
import "#com/popover"
import "#com/progress"
import "#com/screen"
import "#com/select"
import "#com/table"
import "#com/text"
import "#com/tabs"
import "#com/titlebar"
import "#com/toast"
import "#com/toggle"
import "#com/tooltip"

component("*")`
    *box-sizing: border-box;
    *-webkit-tap-highlight-color: transparent;
    *border-width: 0px;
    *border-style: solid;
    *outline-color: hsl(@mono, @layer-text);
`
component("html, body")`
    *padding: 0px;
    *margin: 0px;
    *width: 100%;
    *height: 100%;
    *-webkit-tap-highlight-color: transparent;
    *-webkit-font-smoothing: antialiased;
`

component("@font-face", null)`
    *font-family: Tektur;
    *font-display: swap;
    *src:
        url(${config.origin}/font/tektur.woff2?v${config.version})
        format("woff2")
    ;
`
component("@font-face", null)`
    *font-family: Roboto;
    *font-display: swap;
    *src:
        url(${config.origin}/font/roboto.woff2?v${config.version})
        format("woff2")
    ;
`
