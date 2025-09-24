import { component } from "#lib/macro"

component("ws-titlebar")`
    @border-size: 2px;
    @color: @primary;

    @fill: var(--fill-color, transparent);
    @text: var(--text-color, @color);

    *display: grid;
    *min-height: 52px;
    *grid-template-columns: auto 1fr auto;
    *grid-template-areas: "menu title action";
    *user-select: none;
    *position: relative;
    *padding: 0px 2px;

    *color: @text;
    *background-color: @fill;

    *border-bottom: @border-size solid @color;
    *border-top: @border-size solid @color;

    ! & > :where(*) {
        area: title;
    }
`
