import { component } from "#lib/macro"

component("ws-dialog")`
    pos: absolute;
    x: 50%;
    y: 50%;
    tf: translate(-50%, -50%);
    tr: var(--dialog-transition, none);
    o: 0;
    ! [open] > & {
        o: unset;
    }
    ! [inline-desktop] > & {
        pos: relative;
    }
`
component("ws-drawer")`
    pos: absolute;
    x: 0px;
    y: 0px;
    -y: 0px;
    disp: grid;
    tr: var(--drawer-transition, none);
    tf: translateX(-100%);
    ! [open] > & {
        tf: unset;
    }
    ! [inline-desktop] > & {
        pos: relative;
    }
`
