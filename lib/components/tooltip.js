import { component } from "#lib/macro"

component("ws-tooltip")`
    @color: @mono;

    pos.rel;
    disp: inline-grid;

    ! &[pos]:hover::before {
        *content: attr(text);
        pos.abs;
        p: 4px;
        bg.c: hsl(@color, @layer-container);
        b: 1px solid hsl(@color, @layer-border);
        t.ws: nowrap;
        r: 4px;
        z: +1;
    }

    ! &[pos="top"]:hover::before {
        -y: calc(100% + 8px);
        x: 50%;
        tf: translateX(-50%);
    }
    ! &[pos="bottom"]:hover::before {
        y: calc(100% + 8px);
        x: 50%;
        tf: translateX(-50%);
    }
    ! &[pos="left"]:hover::before {
        -x: calc(100% + 8px);
        y: 50%;
        tf: translateY(-50%);
    }
    ! &[pos="right"]:hover::before {
        x: calc(100% + 8px);
        y: 50%;
        tf: translateY(-50%);
    }
`
