import { component } from "#lib/macro"
import clickable from "#com/clickable"

component("ws-tabs")`
    @color: @plain;

    *display: grid;
    *grid-auto-columns: 1fr;
    *grid-auto-flow: column;
    *user-select: none;
    *gap: 4px;
`

component("label[tab]")`
    @fill: transparent;
    @text: @color;
    bg.c: @fill;
    t.c: @text;

    grid;
    gr.cols: 1fr;
    gr.rows: min-content 2px;
    gr.areas: "content" "border";
    pos: relative;

    ! & > input[type="radio"] {
        hide;
    }

    ! & > :where(*) {
        area: content;
        flex;
        fl.cn;
        p: 8px;
    }

    ! &::before {
        *content: "";
        pos: absolute;
        -y: 0px;
        x: 0px;
        w: 100%;
        h: 2px;
        area: border;
    }

    ! &:has(input[type="radio"]:checked) {
        @fill: var(--fill-color, transparent);
        @text: var(--text-color, @color);
        ! &::before {
            bg.c: @color;
        }
    }

    ${clickable}
`
