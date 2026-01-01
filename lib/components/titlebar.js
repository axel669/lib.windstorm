import { component } from "#lib/macro"
import colors from "#com/colors"

component("ws-titlebar")`
    @border-size: 2px;
    @color: @primary;

    ${colors("@layer-element", "@layer-fill")}

    disp: grid;
    h.min: 52px;
    gr.cols: auto 1fr auto;
    gr.areas: "menu title action";
    *user-select: none;
    pos: relative;
    p: 0px 2px;

    t.c: @text;
    bg.c: @fill;

    b.y: @border-size solid @core-color;

    ! & > :where(*) {
        area: title;
    }
`
