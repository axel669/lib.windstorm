import { component } from "#lib/macro"

component("ws-icon")`
    disp: var(--icon-font, none);
    t.lh: 1;
    ! &::before {
        disp: inline-block;
        font: @icon-font;
        *-webkit-font-smoothing: antialiased;
        *-moz-osx-font-smoothing: grayscale;
        *content: attr(data-icon);
        m.t: 2px;
    }
`
