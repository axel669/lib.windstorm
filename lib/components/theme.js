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

    @text-color-normal: hsl(220, 0%, 95%);
    @text-color-secondary: hsl(220, 0%, 65%);
    @text-color-fill: hsl(220, 0%, 5%);
    @text-size-normal: 14px;

    @plain: @text-color-normal;
    @primary: hsl(184, 70%, 60%);
    @accent: hsl(220, 70%, 60%);
    @info: hsl(256, 70%, 60%);
    @success: hsl(130, 85%, 60%);
    @warning: hsl(50, 85%, 60%);
    @error: hsl(10, 85%, 60%);

    @shadow-color: hsla(0, 0%, 100%, 0.25);
    @modal-color: hsla(0, 0%, 0%, 0.25);

    *color-scheme: dark;
`

macro("#theme.dark")`
    #theme.base;
    @font: Roboto;

    @background: hsl(0, 0%, 10%);
    @background-layer: hsl(220, 30%, 15%);
    @background-element: hsl(220, 30%, 20%);

    @text-color-normal: hsl(220, 0%, 95%);
    @text-color-secondary: hsl(220, 0%, 65%);
    @text-color-fill: hsl(220, 0%, 5%);
    @text-size-normal: 14px;

    @plain: @text-color-normal;
    @primary: hsl(184, 70%, 60%);
    @accent: hsl(220, 70%, 60%);
    @info: hsl(256, 70%, 60%);
    @success: hsl(130, 85%, 60%);
    @warning: hsl(50, 85%, 60%);
    @error: hsl(10, 85%, 60%);

    @shadow-color: hsla(0, 0%, 100%, 0.25);
    @modal-color: hsla(0, 0%, 0%, 0.25);

    *color-scheme: dark;
`

macro("#theme.light")`
    #theme.base;
    @font: Roboto;

    @background: hsl(220, 0%, 98%);
    @background-layer: hsl(220, 70%, 95%);
    @background-element: hsl(220, 70%, 90%);

    @text-color-normal: hsl(220, 0%, 5%);
    @text-color-secondary: hsl(220, 0%, 15%);
    @text-color-fill: hsl(220, 0%, 95%);

    @plain: @text-color-normal;
    @primary: hsl(184, 70%, 35%);
    @accent: hsl(220, 90%, 45%);
    @info: hsl(256, 80%, 45%);
    @success: hsl(130, 95%, 30%);
    @warning: hsl(50, 85%, 40%);
    @error: hsl(10, 85%, 45%);

    @shadow-color: hsla(0, 0%, 20%, 0.25);
    @modal-color: hsla(0, 0%, 0%, 0.25);
`
