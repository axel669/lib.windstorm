import { component } from "#lib/macro"

component("ws-dialog")`
    pos: absolute;
    x: 50%;
    y: 50%;
    tf: translate(-50%, -50%);
    o: 0;
    tr: opacity @anim-time linear;

    ! ws-modal[open] > & {
        o: 1;
    }
`
component("ws-drawer")`
    pos: absolute;
    x: 0px;
    y: 0px;
    -y: 0px;
    tf: translateX(-100%);
    tr: transform @anim-time linear;
    disp: grid;

    ! ws-modal[open] > & {
        tf: translateX(0%);
    }
`
