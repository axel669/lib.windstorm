import { component } from "#lib/macro"
import colors from "#com/colors"

component("ws-badge")`
    @color: @primary;

    ${colors("@layer-element", "@layer-fill")}

    pos: relative;
    disp: inline-grid;
    over: visible;

    ! &::after {
        pos: absolute;
        *content: attr(ws-text);
        -x: -10px;
        y: 0px;
        tf: translateY(-50%);
        bg.c: @core-color;
        *pointer-events: none;
        r: 20px;
        p: 4px;
        w.min: 20px;
        h: 20px;
        *box-sizing: border-box;
        t.a: center;
        t.sz: @text-size-subtitle;
        t.c: @alt-color;
        t.lh: 14px;
        z: @z-info;
        t.wt: 600;
    }
`
