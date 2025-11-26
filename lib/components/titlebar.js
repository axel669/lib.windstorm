import { component } from "#lib/macro"

component("ws-titlebar")`
    @border-size: 2px;
    @color: @plain;

    @fill: var(--fill-color, transparent);
    @text: var(--text-color, @color);

    disp: grid;
    h.min: 52px;
    gr.cols: auto 1fr auto;
    gr.areas: "menu title action";
    *user-select: none;
    pos: relative;
    p: 0px 2px;

    t.c: @text;
    bg.c: @fill;

    b.y: @border-size solid @color;

    ! & > :where(*) {
        area: title;
    }
`
