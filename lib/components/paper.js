import { component } from "#lib/macro"

component("ws-paper")`
    @color: @plain;

    *display: grid;
    *border-radius: @base-radius;
    *overflow: hidden;
    *grid-template-columns: 1fr;
    *grid-template-rows: min-content auto min-content;
    *grid-template-areas: "header" "content" "footer";
    *background-color: @background-layer;

    ! & > :where(*) {
        area: content;
    }

    ! &::before {
        *content: "";
        area: header;
    }
    ! &::after {
        *content: "";
        area: footer;
        *pointer-events: none;
    }
`
