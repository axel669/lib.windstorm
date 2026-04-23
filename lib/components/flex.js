import { component } from "#lib/macro"

component("ws-flex")`
    flex: column;
    gap: 8px;
    p: 4px;
    over: hidden;

    ! & > * {
        fl.shrink: 0;
    }
`
