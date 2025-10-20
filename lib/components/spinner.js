import { component } from "#lib/macro"

component("ws-circle-spinner, ws-hexagon-spinner")`
    @size: 100px;
    @color: @plain;

    *width: @size;
    *height: @size;
    *display: inline-block;
`
