import { component } from "#lib/macro"
import colors from "#com/colors"

component("ws-titlebar")`
    @border-size: 2px;
    @color: @primary;

    ${colors("@layer-element", "@layer-fill", "@layer-border")}

    layout.card-3col;
    h.min: 52px;
    *user-select: none;
    pos: relative;
    p: 0px 2px;

    t.c: @text;
    bg.c: @fill;

    b.y: @border-size solid @border;
`
