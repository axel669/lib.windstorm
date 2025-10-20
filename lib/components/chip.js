import { component } from "#lib/macro"
import clickable from "./clickable.js"

component("ws-chip")`
    @color: @plain;

    @fill-color: transaprent;
    @text-color: @color;

    *display: inline-flex;
    *align-items: center;
    *justify-content: center;
    *border-radius: 100px;
    *padding: 4px 12px;
    *user-select: none;
    *vertical-align: text-bottom;
    *color: @text-color;
    *background: @fill-color;

    ! &[clickable] {
        *cursor: pointer;
        ${clickable}
    }
`
