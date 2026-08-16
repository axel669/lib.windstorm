import { component } from "#lib/macro"
import colors from "#com/colors"

component("ws-surface")`
    @color: @mono;

    ${colors("@layer-surface", "@layer-border")}

    r: @base-radius;
    over: hidden;
    bg.c: @c1;
    b.c: @c2;

    disp: grid;
    gr.cols: 1fr;
    gr.rows: 1fr;
`
