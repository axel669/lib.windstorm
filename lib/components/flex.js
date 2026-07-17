import { component } from "#lib/macro"

component("ws-flex")`
    flex: column;
    gap: 8px;
    p: 8px;
    over: hidden;

    ! & > * {
        fl.shrink: 0;
    }
`
