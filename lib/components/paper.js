import { component } from "#lib/macro"

component("ws-paper")`
    @color: @plain;

    disp: grid;
    r: @base-radius;
    over: hidden;
    gr.cols: 1fr;
    gr.rows: min-content auto min-content;
    gr.areas: "header" "content" "footer";
    bg.c: @background-layer;

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
