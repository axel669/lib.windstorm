import { style, component } from "#lib/macro"
import { config } from "#lib/config"

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
