import { component } from "#lib/macro"

component("details[data-ws]")`
    @color: @plain;
    @padding: 8px;

    *border: 0px solid @color;
    *padding: 0px @padding;
    *border-radius: 4px;
    *overflow: hidden;

    ! &:open {
        *padding-bottom: @padding;
    }

    ! & > summary {
        *color: @color;
        *position: relative;
        *padding: 4px;
        *padding-left: 1.1em;
        *margin-left: calc(-1 * @padding);
        *margin-right: calc(-1 * @padding);
        *cursor: pointer;
        *user-select: none;

        ! &::before {
            *position: absolute;
            *left: 0px;
            *top: 50%;
            *bottom: 0px;
            *width: 1em;
            *display: flex;
            *align-items: center;
            *justify-content: center;
            *font-family: ws-icon-caret-right-filled;
            *speak: none;
            *font-style: normal;
            *font-weight: 400;
            *font-variant: normal;
            *text-transform: none;
            *content: "caret-right-filled";
            *transform: translateY(-50%);
            *transition: transform 100ms linear;
        }

        ! &::marker, &::-webkit-details-marker {
            *content: "";
            *display: none;
        }
    }
    ! &:open > summary::before {
        *transform: translateY(-50%) rotate(90deg);
    }
`
