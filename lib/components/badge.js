import { component } from "#lib/macro"

component("ws-badge")`
    @color: @plain;

    pos: relative;
    disp: inline-grid;
    over: visible;

    ! &::after {
        pos: absolute;
        *content: attr(ws-text);
        -x: -10px;
        y: 0px;
        tr: translateY(-50%);
        bg.c: @color;
        *pointer-events: none;
        r: 20px;
        p: 4px;
        w.min: 20px;
        h: 20px;
        *box-sizing: border-box;
        t.a: center;
        t.sz: @text-size-subtitle;
        t.c: @text-color-fill;
        t.lh: 14px;
        z: @z-info;
    }
`
