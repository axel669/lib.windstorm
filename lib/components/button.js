import { component } from "../macro.js"
import clickable from "./clickable.js"
import hoverable from "./hoverable.js"

component(":where(button[data-ws])")`
    @color: @primary;

    @fill: var(--fill-color, transparent);
    @text: var(--text-color, @color);

    *position: relative;

    *border: 0px solid var(--text);
    *color: @text;
    *font-family: @font;

    *background-color: @fill;
    *border-radius: @base-radius;
    *cursor: pointer;
    *padding: 8px 16px;
    *overflow: hidden;
    *user-select: none;
    *display: inline-flex;
    *align-items: center;
    *justify-content: center;
    *text-decoration: none;

    ! &:disabled {
        *cursor: default;
        *filter: saturate(10%) brightness(0.7);
    }

    ${hoverable}
    ${clickable}
`
