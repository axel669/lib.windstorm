import { component } from "#lib/macro"
import clickable from "./clickable.js"

component("ws-chip")`
    @color: @plain;

    @fill-color: transaprent;
    @text-color: @color;

    disp: inline-flex;
    fl.cross: center;
    fl.main: center;
    r: 100px;
    p: 4px 12px;
    *user-select: none;
    v.c: text-bottom;
    t.c: @text-color;
    bg: @fill-color;

    ! &[clickable] {
        cur: pointer;
        ${clickable}
    }
`
