import "./built-in-macro.js"
import { createMacro } from "./mapping.js"

// When devices scale screens, sometimes the edges are off by a pixel because
// of rounding errors. I do the math with integers to prevent weird floating
// point errors from breaking my check, since it's already breaking the scale.
const lastDigit = Math.ceil(screen.width * devicePixelRatio * 10) % 10
const roundDown = lastDigit >= 5

createMacro("!theme.base")`
    [t.c @text-color-normal]
    [font @font]
    [t.sz @text-size-normal]
    [bg.c:is(body) @background]

    [@sub-pixel-offset ${roundDown ? 1 : 0}px]
    [@z-info 5]
    [@z-cover 25]
    [@z-notif 50]
    [@z-layer 100]

    [@base-radius 0px]
`

createMacro("!theme.tron")`
    [!theme.base]
    [@font Tektur]

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
    [@plain @text-color-normal]
    [@plain-ripple @ripple-normal]
    [@primary hsl(166, 70%, 60%)]
    [@accent hsl(202, 70%, 60%)]
    [@info hsl(238, 70%, 60%)]
    [@success hsl(130, 85%, 60%)]
    [@warning hsl(50, 85%, 60%)]
    [@error hsl(10, 85%, 60%)]

    [@shadow-color hsla(0, 0%, 100%, 0.25)]

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
    [@primary hsl(166, 70%, 60%)]
    [@accent hsl(202, 70%, 60%)]
    [@info hsl(238, 70%, 60%)]
    [@success hsl(130, 85%, 60%)]
    [@warning hsl(50, 85%, 60%)]
    [@error hsl(10, 85%, 60%)]

    [@shadow-color hsla(0, 0%, 100%, 0.25)]

    [@disabled-background #606060]

    [*color-scheme dark]
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
    [@primary hsl(166, 90%, 30%)]
    [@accent hsl(202, 90%, 30%)]
    [@info hsl(238, 90%, 30%)]
    [@success hsl(130, 95%, 30%)]
    [@warning hsl(50, 85%, 40%)]
    [@error hsl(10, 85%, 45%)]

    [@shadow-color hsla(0, 0%, 0%, 0.25)]

    [@disabled-background #c7c7c7]
`
