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
    @color: var(--toggle-color, @primary);
    @size: 20px;

    @core-color: hsl(@color, @layer-element);

    pos: relative;
    w: @size;
    h: @size;
    appr: none;
    m: 0px;
    t.c: @core-color;
    v.a: middle;

    ! &::after {
        *content: "";
        pos: absolute;
        t.sz: calc(@size - 2px);
        *speak: none;
        t.st: normal;
        t.wt: 400;
        t.var: normal;
        t.tf: none;
        y: 50%;
        x: 50%;
        w: @size;
        h: @size;
        tf: translate(-50%, -50%);
        disp: flex;
        fl.cross: center;
        fl.main: center;
        over: hidden;
    }
`
component("input[data-ws][type=checkbox]:not([switch])")`
    ${core}

    ! &::after {
        font: ws-icon-square-dashed;
        *content: "square-dashed";
    }
    ! &:checked::after {
        font: ws-icon-square-check-filled;
        *content: "square-check-filled";
    }
`
component("input[data-ws][type=radio]")`
    ${core}

    ! &::after {
        font: ws-icon-circle;
        *content: "circle";
    }
    ! &:checked::after {
        font: ws-icon-circle-check-filled;
        *content: "circle-check-filled";
    }
`
component("input[data-ws][type=checkbox][switch]")`
    @color: @primary;
    @size: 20px;
    @anim-time: 100ms;

    appr: none;
    m: 0px;
    pos: relative;
    w: calc(@size * 2);
    h: @size;
    v.a: middle;

    ! &::before {
        *content: "";
        pos: absolute;
        inset: calc(@size / 4);
        b: 1px solid @color;
        r: calc(@size / 2);
        bg.c: @mono50;
        o: 0.5;
        tr: background-color @anim-time linear;
    }
    ! &:checked::before {
        bg.c: @color;
    }

    ! &::after {
        *content: "";
        pos: absolute;
        w: @size;
        h: @size;
        y: 0px;
        x: 0px;
        tr: left @anim-time linear, color @anim-time linear;
        bg.c: @mono100;
        r: @size;
    }
    ! &:checked::after {
        x: @size;
        bg.c: @color;
    }
`

component("label[data-ws][toggle]")`
    @color: @primary;
    @active-color: @mono;
    @toggle-color: @color;

    pos: relative;
    *user-select: none;
    over: hidden;
    b: 1px solid hsl(@active-color, @layer-border);
    bg.c: @background-element;
    r: @base-radius;
    p: 4px;

    disp: flex;
    fl.main: space-between;

    ! &:focus-within {
        @active-color: @color;
    }
`
