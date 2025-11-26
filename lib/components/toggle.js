import { component } from "#lib/macro"
import { preloadIcons } from "#lib/icon-processor"

preloadIcons(
    "square-dashed",
    "square-check-filled",
    "circle",
    "circle-check-filled",
    "circle-filled"
)

const core = `
    @color: @plain;
    @size: 20px;
    *position: relative;
    *width: @size;
    *height: @size;
    *-webkit-appearance: none;
    *appearance: none;
    *margin: 0px;
    *color: @color;
    *vertical-align: middle;

    ! &::after {
        *content: "";
        *position: absolute;
        *font-size: calc(@size - 2px);
        *speak: none;
        *font-style: normal;
        *font-weight: 400;
        *font-variant: normal;
        *text-transform: none;
        *top: 50%;
        *left: 50%;
        *width: @size;
        *height: @size;
        *transform: translate(-50%, -50%);
        *display: flex;
        *align-items: center;
        *justify-content: center;
        *overflow: hidden;
    }
`
component("input[data-ws][type=checkbox]:not([switch])")`
    ${core}

    ! &::after {
        *font-family: ws-icon-square-dashed;
        *content: "square-dashed";
    }
    ! &:checked::after {
        *font-family: ws-icon-square-check-filled;
        *content: "square-check-filled";
    }
`
component("input[data-ws][type=radio]")`
    ${core}

    ! &::after {
        *font-family: ws-icon-circle;
        *content: "circle";
    }
    ! &:checked::after {
        *font-family: ws-icon-circle-check-filled;
        *content: "circle-check-filled";
    }
`
component("input[data-ws][type=checkbox][switch]")`
    @color: @primary;
    @size: 20px;
    @anim-time: 100ms;
    *-webkit-appearance: none;
    *appearance: none;
    *margin: 0px;
    *position: relative;
    *width: calc(@size * 2);
    *height: @size;
    *vertical-align: middle;

    ! &::before {
        *content: "";
        *position: absolute;
        inset: calc(@size / 4);
        *border: 1px solid @color;
        *border-radius: calc(@size / 2);
        *background-color: @mono50;
        *opacity: 0.5;
        *transition: background-color @anim-time linear;
    }
    ! &:checked::before {
        *background-color: @color;
    }

    ! &::after {
        *content: "";
        *position: absolute;
        *width: @size;
        *height: @size;
        *top: 0px;
        *left: 0px;
        *transition: left @anim-time linear, color @anim-time linear;
        *background-color: @mono100;
        *border-radius: @size;
    }
    ! &:checked::after {
        *left: @size;
        *background-color: @color;
    }
`

component("label[data-ws][toggle]")`
    @color: @primary;
    @active-color: @plain;

    *position: relative;
    *user-select: none;
    *overflow: hidden;
    *border: 1px solid @active-color;
    *background-color: @background-element;
    *border-radius: @base-radius;
    *padding: 4px;

    *display: flex;
    *justify-content: space-between;

    ! &:focus-within {
        @active-color: @color;
    }
`
