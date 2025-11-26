import { component } from "#lib/macro"
import clickable from "./clickable.js"
import hoverable from "./hoverable.js"

component("button[data-ws], a[data-ws][button], label[data-ws][button]")`
    @color: @plain;

    @fill: var(--fill-color, transparent);
    @text: var(--text-color, @color);

    *position: relative;

    *border: 0px solid @text;
    *font-family: @font;

    *color: @text;
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
