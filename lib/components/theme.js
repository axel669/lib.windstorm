import { macro } from "#lib/macro"

const lastDigit = Math.ceil(screen.width * devicePixelRatio * 10) % 10
const roundDown = lastDigit >= 5

macro("#theme.base")`
    *font-family: @font;

    t.c: @text-color-normal;
    t.sz: @text-size-normal;

    @sub-pixel-offset: ${roundDown ? 1 : 0}px;
    @z-info: 5;
    @z-cover: 25;
    @z-notif: 50;
    @z-layer: 100;

    @base-radius: 0px;

    ! &:is(body) {
        *background: @background;
    }
`

macro("#theme.tron")`
    #theme.base;
    @font: Tektur;

    @background: hsl(0, 0%, 2%);
    @background-layer: hsl(220, 70%, 5%);
    @background-element: hsl(220, 70%, 10%);

    @text-color-normal: hsl(0, 0%, 95%);
    @text-color-secondary: hsl(0, 0%, 65%);
    @text-color-fill: hsl(0, 0%, 5%);
    @text-size-normal: 14px;

    @primary: hsl(166, 70%, 60%);
    @accent: hsl(202, 70%, 60%);
    @info: hsl(238, 70%, 60%);
    @success: hsl(130, 85%, 60%);
    @warning: hsl(50, 85%, 60%);
    @error: hsl(10, 85%, 60%);

    @shadow-color: hsla(0, 0%, 100%, 0.25);
    @modal-color: hsla(0, 0%, 0%, 0.25);

    *color-scheme: dark;
`
