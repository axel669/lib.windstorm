import { component } from "#lib/macro"
import clickable from "./clickable.js"
import hoverable from "./hoverable.js"
import colors from "#com/colors"

component(":where(button[data-ws], a[data-ws][button], label[data-ws][button])")`
    @color: @primary;

    ${colors("@layer-element", "@layer-fill", "@layer-border")}

    pos: relative;

    b: 0px solid @border;
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
    t.wt: 500;

    ! &:disabled {
        cur: default;
        *filter: saturate(30%) brightness(0.7);
    }

    ${hoverable}
    ${clickable}
`
