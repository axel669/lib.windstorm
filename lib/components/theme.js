import { macro } from "#lib/macro"

const lastDigit = Math.ceil(screen.height * devicePixelRatio * 10) % 10
const roundDown = lastDigit >= 5

macro("#theme.base")`
    font: @font;

    @sub-pixel-offset: ${roundDown ? 1 : 0}px;
    @z-info: 5;
    @z-cover: 25;
    @z-notif: 50;
    @z-layer: 100;

    @base-radius: 4px;
    @anim-time: 250ms;
    @short-anim-time: 150ms;

    @text-size-normal: 15px;
    @text-size-title: calc(@text-size-normal * 2);
    @text-size-header: calc(@text-size-normal * 1.5);
    @text-size-subtitle: calc(@text-size-normal * 0.9);
    @text-size-info: calc(@text-size-normal * 0.75);

    @color: @mono;

    @page-text-color: hsl(@color, @layer-text);
    bg.c: hsl(@color, @layer-bg);
    t.c: @page-text-color;
    t.sz: @text-size-normal;
`

/*
    @plain: @text-color-normal;
    @primary: hsl(184, 70%, 60%);
    @accent: hsl(220, 70%, 60%);
    @info: hsl(256, 70%, 60%);
    @success: hsl(130, 70%, 60%);
    @warning: hsl(58, 70%, 60%);
    @error: hsl(4, 70%, 60%);
*/
macro("#theme.tron")`
    #theme.base;

    @font: Tektur;

    @mono: 0, 0%;
    @primary: 184, 80%;
    @accent: 160, 80%;
    @info: 208, 80%;
    @success: 130, 80%;
    @warning: 58, 80%;
    @error: 4, 80%;

    @layer-bg: 15%;
    @layer-surface: 5%;
    @layer-element: 65%;
    @layer-container: 10%;
    @layer-border: 25%;
    @layer-text: 95%;
    @layer-fill: 5%;

    @shadow-color: hsla(0, 0%, 100%, 0.25);
    @modal-color: hsla(0, 0%, 0%, 0.25);

    *color-scheme: dark;
`

/*
    @plain: @text-color-normal;
    @primary: hsl(184, 70%, 60%);
    @accent: hsl(220, 70%, 60%);
    @info: hsl(256, 70%, 60%);
    @success: hsl(130, 85%, 60%);
    @warning: hsl(50, 85%, 60%);
    @error: hsl(10, 85%, 60%);
*/
macro("#theme.dark")`
    #theme.base;
    @font: Roboto;

    @mono: 0, 0%;
    @primary: 184, 80%;
    @accent: 160, 80%;
    @info: 208, 80%;
    @success: 130, 80%;
    @warning: 58, 80%;
    @error: 4, 80%;

    @layer-bg: 20%;
    @layer-surface: 10%;
    @layer-element: 50%;
    @layer-container: 15%;
    @layer-border: 30%;
    @layer-text: 90%;
    @layer-fill: 10%;

    @shadow-color: hsla(0, 0%, 100%, 0.25);
    @modal-color: hsla(0, 0%, 0%, 0.25);

    *color-scheme: dark;
`

/*
    @plain: @text-color-normal;
    @primary: hsl(184, 70%, 35%);
    @accent: hsl(220, 90%, 45%);
    @info: hsl(256, 80%, 45%);
    @success: hsl(130, 95%, 30%);
    @warning: hsl(50, 85%, 40%);
    @error: hsl(10, 85%, 45%);
*/
macro("#theme.light")`
    #theme.base;
    @font: Roboto;

    @mono: 0, 0%;
    @primary: 184, 70%;
    @accent: 160, 85%;
    @info: 208, 85%;
    @success: 130, 90%;
    @warning: 58, 85%;
    @error: 4, 80%;

    @layer-bg: 85%;
    @layer-surface: 95%;
    @layer-element: 37.5%;
    @layer-container: 90%;
    @layer-border: 80%;
    @layer-text: 10%;
    @layer-fill: 95%;

    @shadow-color: hsla(0, 0%, 20%, 0.25);
    @modal-color: hsla(0, 0%, 0%, 0.25);
`
