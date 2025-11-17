import { component } from "#lib/macro"

component("ws-screen")`
    @screen-width: min(720px, 100%);
    @pad-x: auto;
    @pad-y: auto;
    @pad-left: var(--pad-x, auto);
    @pad-right: var(--pad-x, auto);
    @pad-top: var(--pad-y, auto);
    @pad-bottom: var(--pad-y, auto);

    *display: grid;
    *height: round(down, calc(100% - @sub-pixel-offset), 1px);
    *width: calc(100%);
    *overflow: hidden;
    *position: absolute;
    *top: 0px;
    *left: 0px;
    *grid-template-columns: auto @screen-width auto;
    *grid-template-rows: auto 1fr auto;

    *grid-template-areas:
        "tl t tr"
        "l content r"
        "bl b br"
    ;

    ! & > :where(*) {
        *grid-area: content;
    }
`
