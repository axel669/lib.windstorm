import "./baseline.js"
import { addSize, createMacro } from "./mapping.js"

// When devices scale screens, sometimes the edges are off by a pixel because
// of rounding errors. I do the math with integers to prevent weird floating
// point errors from breaking my check, since it's already breaking the scale.
const lastDigit = Math.ceil(screen.width * devicePixelRatio * 10) % 10
const roundDown = lastDigit >= 5

createMacro("!theme.base")`
    [t.c @text-color-normal]
    [font @font]
    [t.sz @text-size-normal]
    [@sub-pixel-offset ${roundDown ? 1 : 0}px]
    [bg.c:is(body) @background]

    [@base-radius 0px]
`

createMacro("!theme.tron")`
    [!theme.base]
    [@font Share Tech Mono]

    [@text-light white]
    [@text-dark black]
    [@text-color-normal @text-light]
    [@text-color-secondary #a0a0a0]
    [@text-color-invert @text-dark]
    [@text-color-fill @text-dark]
    [@text-size-normal 15px]
    [@text-size-title 19px]
    [@text-size-header 17px]
    [@text-size-info 14px]
    [@text-size-subtitle 13px]
    [@text-size-data 11px]

    [@background #020202]
    [@background-layer #060d19]
    [@background-element #04080F]

    [@layer-border-width 1px]
    [@layer-border-color #00EEEE]

    [@default #00eeee]
    [@default-ripple #00eeee60]
    [@plain @text-color-normal]
    [@plain-ripple @ripple-normal]
    [@primary #00aaff]
    [@primary-ripple #00aaff60]
    [@secondary #2fbc2f]
    [@secondary-ripple #2fbc2f60]
    [@danger #df5348]
    [@danger-ripple #df534860]
    [@warning #ffff00]
    [@warning-ripple #ffff0060]
    [@accent #ff4dff]
    [@accent-ripple #ff4dff60]

    [@ripple-dark #00000060]
    [@ripple-light #FFFFFF60]
    [@ripple-normal @ripple-light]
    [@ripple-invert @ripple-dark]

    [@shadow-color rgb(255, 255, 255, 0.25)]

    [@disabled-background #606060]

    [*color-scheme dark]
`

createMacro("!theme.dark")`
    [!theme.base]
    [@font Roboto]

    [@text-light white]
    [@text-dark black]
    [@text-color-normal @text-light]
    [@text-color-secondary #cccccc]
    [@text-color-invert @text-dark]
    [@text-color-fill @text-dark]
    [@text-size-normal 14px]
    [@text-size-title 18px]
    [@text-size-header 16px]
    [@text-size-info 13px]
    [@text-size-subtitle 12px]
    [@text-size-data 10px]

    [@background #161616]
    [@background-layer #333333]
    [@background-element #242424]

    [@layer-border-width 1px]
    [@layer-border-color #505050]

    [@default @text-color-normal]
    [@default-ripple @ripple-normal]
    [@plain @text-color-normal]
    [@plain-ripple @ripple-normal]
    [@primary #00aaff]
    [@primary-ripple #00aaff60]
    [@secondary #2fbc2f]
    [@secondary-ripple #2fbc2f60]
    [@danger #df5348]
    [@danger-ripple #df534860]
    [@warning #ffff00]
    [@warning-ripple #ffff0060]
    [@accent #ff4dff]
    [@accent-ripple #ff4dff60]

    [@ripple-dark #00000060]
    [@ripple-light #FFFFFF60]
    [@ripple-normal @ripple-light]
    [@ripple-invert @ripple-dark]

    [@shadow-color rgb(0, 0, 0, 0.25)]

    [@disabled-background #606060]

    [color-scheme dark]
`

createMacro("!theme.light")`
    [!theme.base]
    [@font Roboto]

    [@text-light white]
    [@text-dark black]
    [@text-color-normal @text-dark]
    [@text-color-secondary #505050]
    [@text-color-invert @text-light]
    [@text-color-fill @text-light]
    [@text-size-normal 14px]
    [@text-size-title 18px]
    [@text-size-header 16px]
    [@text-size-info 13px]
    [@text-size-subtitle 12px]
    [@text-size-data 10px]

    [@background #e9e9e9]
    [@background-layer #ffffff]
    [@background-element #f3f3f3]

    [@layer-border-width 1px]
    [@layer-border-color #aaaaaa]

    [@default @text-color-normal]
    [@default-ripple @ripple-normal]
    [@plain @text-color-normal]
    [@plain-ripple @ripple-normal]
    [@primary #1d62d5]
    [@primary-ripple #1d62d560]
    [@secondary #128f12]
    [@secondary-ripple #128f1260]
    [@danger #F44336]
    [@danger-ripple #F4433660]
    [@warning #db990d]
    [@warning-ripple #db990d60]
    [@accent #cf00cf]
    [@accent-ripple #cf00cf60]

    [@ripple-dark #00000060]
    [@ripple-light #FFFFFF60]
    [@ripple-normal @ripple-dark]
    [@ripple-invert @ripple-light]

    [@shadow-color rgb(0, 0, 0, 0.25)]

    [@disabled-background #c7c7c7]
`
