import { component } from "#lib/macro"

component("ws-toast")`
    @color: @primary;

    @fill: var(--fill-color, @background-element);
    @text: var(--text-color, @text-color-normal);

    *color: @text;
    *background-color: @fill;

    *position: relative;
    *display: inline-grid;
    *grid-template-columns: auto 1fr auto;
    *grid-template-areas: "start content end";
    *border-radius: @base-radius;
    *user-select: none;
    *border: 2px solid @color;
    *min-height: 32px;
    *z-index: +0;

    ! & > :where(*) {
        area: content;
    }
`

component("ws-toaster")`
    *position: fixed;
    *z-index: var(--z-notif);
    *display: grid;
    *grid-template-columns: fr;
    *padding: 0px;
    *gap: 8px;
    *height: min-content;
    *width: 280px;

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
