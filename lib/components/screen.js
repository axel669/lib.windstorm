import { component } from "#lib/macro"

component("ws-screen")`
    @screen-width: min(720px, 100%);
    @pad-x: auto;
    @pad-y: auto;
    @pad-left: var(--pad-x, auto);
    @pad-right: var(--pad-x, auto);
    @pad-top: var(--pad-y, auto);
    @pad-bottom: var(--pad-y, auto);

    disp: grid;
    h: round(down, calc(100% - @sub-pixel-offset), 1px);
    w: calc(100%);
    over: hidden;
    pos: absolute;
    y: 0px;
    x: 0px;
    gr.cols: auto @screen-width auto;
    gr.rows: auto 1fr auto;
    gr.areas:
        "tl t tr"
        "l content r"
        "bl b br"
    ;

    ! & > :where(*) {
        area: content;
    }
`
