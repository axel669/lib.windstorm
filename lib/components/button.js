import { component } from "#lib/macro"
import clickable from "./clickable.js"
import hoverable from "./hoverable.js"

component("button[data-ws], a[data-ws][button], label[data-ws][button]")`
    @color: @plain;

    @fill: var(--fill-color, transparent);
    @text: var(--text-color, @color);

    pos: relative;

    b: 0px solid @text;
    font: @font;

    t.c: @text;
    bg.c: @fill;
    r: @base-radius;
    cur: pointer;
    p: 8px 16px;
    over: hidden;
    *user-select: none;
    disp: inline-flex;
    fl.cross: center;
    fl.main: center;
    t.deco: none;

    ! &:disabled {
        cur: default;
        *filter: saturate(10%) brightness(0.7);
    }

    ${hoverable}
    ${clickable}
`
