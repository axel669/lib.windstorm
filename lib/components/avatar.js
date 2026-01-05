import { component } from "#lib/macro"
import colors from "#com/colors"

component("ws-avatar")`
    @color: @mono;
    @size: 36px;

    ${colors("@layer-element", "@layer-fill")}

    disp: inline-flex;
    over: hidden;
    r: 500px;
    fl.cross: center;
    fl.main: center;
    w: @size;
    h: @size;
    bg.c: @fill;
    t.c: @text;
    v.a: text-bottom;

    ! & > img {
        w: 100%;
    }
    ! & > object {
        w: 100%;
        h: 100%;
        disp: flex;
        fl.cross: center;
        fl.main: center;
    }
`
