import { component } from "#lib/macro"
import colors from "#com/colors"

component("ws-paper")`
    @color: @mono;

    ${colors("@layer-surface", "@layer-border")}

    disp: grid;
    r: @base-radius;
    over: hidden;
    gr.cols: 1fr;
    gr.rows: min-content auto min-content;
    gr.areas: "header" "content" "footer";
    bg.c: @core-color;
    b.c: @alt-color;

    ! & > :where(*) {
        area: content;
    }

    ! &::before {
        *content: "";
        area: header;
        z: -1;
    }
    ! &::after {
        *content: "";
        area: footer;
        z: -1;
    }
`
