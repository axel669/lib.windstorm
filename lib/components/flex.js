import { component } from "#lib/macro"

component("ws-flex")`
    disp: flex;
    fl.dir: column;
    gap: 8px;
    p: 4px;
    over: hidden;

    ! & > * {
        fl.shrink: 0;
    }
`
