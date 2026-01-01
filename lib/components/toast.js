import { component } from "#lib/macro"

component("ws-toast")`
    @color: @primary;

    t.c: @page-text-color;
    bg.c: hsl(@color, @layer-surface);

    pos: relative;
    disp: inline-grid;
    gr.cols: auto 1fr auto;
    gr.areas: "start content end";
    r: @base-radius;
    *user-select: none;
    b: 2px solid hsl(@color, @layer-element);
    h.min: 32px;
    z: +0;

    ! & > :where(*) {
        area: content;
    }
    ! &::before, &::after {
        *content: "";
        w.min: 20px;
        bg.c: hsl(@color, @layer-element);
        z: -1;
    }
    ! &::before {
        area: start;
    }
    ! &::after {
        area: end;
    }

    ! & > [notif-text] {
        disp: flex;
        fl.dir: column;
        fl.main: center;
        p: 4px;
    }

    ! & > :not([notif-text]) {
        t.c: hsl(@mono, @layer-fill);
        @color: inherit;
        variant.fill;
    }
`

component("ws-toaster")`
    pos: fixed;
    z: var(--z-notif);
    disp: grid;
    gr.cols: fr;
    p: 0px;
    gap: 8px;
    h: min-content;
    w: 280px;

    ! &[pos^="top-"] {
        y: 20px;
    }
    ! &[pos^="center-"] {
        y: 50%;
        tf: translateY(-50%);
    }
    ! &[pos^="bottom-"] {
        -y: 20px;
    }

    ! &[pos$="-left"] {
        x: 20px;
    }
    ! &[pos$="-center"] {
        x: 50%;
        tf: translateX(-50%);
    }
    ! &[pos$="-right"] {
        -x: 20px;
    }
`
