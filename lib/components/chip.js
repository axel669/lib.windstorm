import { component } from "#lib/macro"
import clickable from "./clickable.js"
import colors from "#com/colors"

component("ws-chip")`
    @color: @mono;

    ${colors("@layer-element", "@layer-fill")}

    disp: inline-flex;
    fl.cross: center;
    fl.main: center;
    r: 100px;
    p: 4px 12px;
    *user-select: none;
    v.a: text-bottom;
    t.c: @text-color;
    bg: @fill-color;
    b: 1px solid @core-color;

    ! &[clickable] {
        cur: pointer;
        ${clickable}
    }
`
