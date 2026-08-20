import { component } from "#lib/macro"
import colors from "#com/colors"

component("ws-titlebar")`
    @border-size: 2px;
    @color: @primary;
    @text-color: initial;
    @fill-color: initial;

    ${colors("@layer-element", "@layer-fill", "@layer-border")}

    layout.3col-controls;
    h.min: 52px;
    *user-select: none;
    pos: relative;
    p: 0px 2px;

    t.c: @text;
    bg.c: @fill;

    b.y: @border-size solid @border;
`
