import { component } from "#lib/macro"

component("ws-badge")`
    @color: @plain;

    *position: relative;
    *display: inline-grid;
    *overflow: visible;

    ! &::after {
        *position: absolute;
        *content: attr(ws-text);
        *right: -10px;
        *top: 0px;
        *transform: translateY(-50%);
        *background-color: @color;
        *pointer-events: none;
        *border-radius: 20px;
        *padding: 4px;
        *min-width: 20px;
        *height: 20px;
        *box-sizing: border-box;
        *text-align: center;
        *font-size: @text-size-subtitle;
        *color: @text-color-fill;
        *line-height: 14px;
        *z-index: @z-info;
    }
`
