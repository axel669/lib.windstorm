import { component } from "#lib/macro"
import { preloadIcons } from "#lib/icon-processor"
import colors from "#com/colors"

preloadIcons("caret-right-filled")

component(":where(details[data-ws])")`
    @color: @primary;
    @padding: 8px;

    ${colors("@layer-element", "@layer-fill")}

    b: 0px solid @c3;
    p: 0px @padding;
    r: 4px;
    over: hidden;

    ! &:open {
        p.b: @padding;
    }

    ! & > summary {
        t.c: @c1;
        pos: relative;
        p: 4px;
        p.l: 24px;
        m.x: calc(-1 * @padding);
        cur: pointer;
        *user-select: none;

        ! &::before {
            pos: absolute;
            x: 0px;
            y: 50%;
            -y: 0px;
            w: 1em;
            disp: flex;
            fl.cross: center;
            fl.main: center;
            font: ws-icon-caret-right-filled;
            *speak: none;
            t.st: normal;
            t.wt: 400;
            t.var: normal;
            t.tf: none;
            *content: "caret-right-filled";
            tf: translateY(-50%);
            tr: transform 100ms linear;
            w: 24px;
            h: 24px;
            t.lh: 24px;
            t.sz: 18px;
        }

        ! &::marker, &::-webkit-details-marker {
            *content: "";
            disp: none;
        }
    }
    ! &:open > summary::before {
        tf: translateY(-50%) rotate(90deg);
    }
`
