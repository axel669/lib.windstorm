import { component } from "#lib/macro"

component("ws-icon")`
    *display: var(--icon-font, none);
    *line-height: 1;
    ! &::before {
        *display: inline-block;
        *font-family: @icon-font;
        *-webkit-font-smoothing: antialiased;
        *-moz-osx-font-smoothing: grayscale;
        *content: attr(data-icon);
        *margin-top: 2px;
    }
`
