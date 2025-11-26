import { component } from "#lib/macro"

component("ws-circle-spinner, ws-hexagon-spinner")`
    @size: 100px;
    @color: @plain;

    w: @size;
    h: @size;
    disp: inline-block;
`
