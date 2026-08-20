import { macro } from "./macro.js"

macro("appr")`*apperance: %arg; *-webkit-appearance: %arg;`
macro("area")`*grid-area: %arg;`
macro("b")`*border: %arg;`
macro("b.b")`*border-bottom: %arg;`
macro("b.b.c")`*border-bottom-color: %arg;`
macro("b.b.s")`*border-bottom-style: %arg;`
macro("b.b.w")`*border-bottom-width: %arg;`
macro("b.c")`*border-color: %arg;`
macro("b.l")`*border-left: %arg;`
macro("b.l.c")`*border-left-color: %arg;`
macro("b.l.s")`*border-left-style: %arg;`
macro("b.l.w")`*border-left-width: %arg;`
macro("b.r")`*border-right: %arg;`
macro("b.r.c")`*border-right-color: %arg;`
macro("b.r.s")`*border-right-style: %arg;`
macro("b.r.w")`*border-right-width: %arg;`
macro("b.s")`*border-style: %arg;`
macro("b.t")`*border-top: %arg;`
macro("b.t.c")`*border-top-color: %arg;`
macro("b.t.s")`*border-top-style: %arg;`
macro("b.t.w")`*border-top-width: %arg;`
macro("b.w")`*border-width: %arg;`
macro("b.x")`*border-left: %arg; *border-right: %arg;`
macro("b.x.c")`*border-left-color: %arg; *border-right-color: %arg;`
macro("b.x.s")`*border-left-style: %arg; *border-right-style: %arg;`
macro("b.x.w")`*border-left-width: %arg; *border-right-width: %arg;`
macro("b.y")`*border-top: %arg; *border-bottom: %arg;`
macro("b.y.c")`*border-top-color: %arg; *border-bottom-color: %arg;`
macro("b.y.s")`*border-top-style: %arg; *border-bottom-style: %arg;`
macro("b.y.w")`*border-top-width: %arg; *border-bottom-width: %arg;`
macro("bg")`*background: %arg;`
macro("bg.att")`*background-attachment: %arg;`
macro("bg.c")`*background-color: %arg;`
macro("bg.img")`*background-image: %arg;`
macro("bg.pos")`*background-position: %arg;`
macro("bg.rep")`*background-repeat: %arg;`
macro("bg.sz")`*background-size: %arg;`
macro("c")`*color: %arg;`
macro("col")`*grid-column: %arg;`
macro("cur")`*cursor: %arg;`
macro("disp")`*display: %arg;`
macro("fl.basis")`*flex-basis: %arg;`
macro("fl.cross")`*align-items: %arg;`
macro("fl.dir")`*flex-direction: %arg;`
macro("fl.flow")`*flex-flow: %arg;`
macro("fl.grow")`*flex-grow: %arg;`
macro("fl.main")`*justify-content: %arg;`
macro("fl.shrink")`*flex-shrink: %arg;`
macro("fl.size")`*flex: %arg;`
macro("fl.wr")`*flex-wrap: %arg;`
macro("font")`*font-family: %arg;`
macro("gap")`*gap: %arg;`
macro("gap.col")`*column-gap: %arg;`
macro("gap.row")`*row-gap: %arg;`
macro("gr.areas")`*grid-template-areas: %arg;`
macro("gr.cols")`*grid-template-columns: %arg;`
macro("gr.cols.a")`*grid-auto-columns: %arg;`
macro("gr.flow")`*grid-auto-flow: %arg;`
macro("gr.rows")`*grid-template-rows: %arg;`
macro("gr.rows.a")`*grid-auto-rows: %arg;`
macro("h")`*height: %arg;`
macro("h.max")`*max-height: %arg;`
macro("h.min")`*min-height: %arg;`
macro("inset")`*top: %arg; *left: %arg; *bottom: %arg; *right: %arg;`
macro("inset.x")`*left: %arg; *right: %arg;`
macro("inset.y")`*top: %arg; *bottom: %arg;`
macro("m")`*margin: %arg;`
macro("m.b")`*margin-bottom: %arg;`
macro("m.l")`*margin-left: %arg;`
macro("m.r")`*margin-right: %arg;`
macro("m.t")`*margin-top: %arg;`
macro("m.x")`*margin-left: %arg; *margin-right: %arg;`
macro("m.y")`*margin-bottom: %arg; *margin-top: %arg;`
macro("o")`*opacity: %arg;`
macro("outln")`*outline: %arg;`
macro("over")`*overflow: %arg;`
macro("over.x")`*overflow-x: %arg;`
macro("over.y")`*overflow-y: %arg;`
macro("p")`*padding: %arg;`
macro("p.b")`*padding-bottom: %arg;`
macro("p.l")`*padding-left: %arg;`
macro("p.r")`*padding-right: %arg;`
macro("p.t")`*padding-top: %arg;`
macro("p.x")`*padding-left: %arg; *padding-right: %arg;`
macro("p.y")`*padding-top: %arg; *padding-bottom: %arg;`
macro("pos")`*position: %arg;`
macro("pos.abs")`*position: absolute;`
macro("pos.fix")`*position: fixed;`
macro("pos.rel")`*position: relative;`
macro("pos.stick")`*position: sticky;`
macro("r")`*border-radius: %arg;`
macro("r.b")`*border-bottom-left-radius: %arg; *border-bottom-right-radius: %arg;`
macro("r.bl")`*border-bottom-left-radius: %arg;`
macro("r.br")`*border-bottom-right-radius: %arg;`
macro("r.l")`*border-top-left-radius: %arg; *border-bottom-left-radius: %arg;`
macro("r.r")`*border-top-right-radius: %arg; *border-bottom-right-radius: %arg;`
macro("r.t")`*border-top-left-radius: %arg; *border-top-right-radius: %arg;`
macro("r.tl")`*border-top-left-radius: %arg;`
macro("r.tr")`*border-top-right-radius: %arg;`
macro("row")`*grid-row: %arg;`
macro("sel")`*user-select: %arg;`
macro("self.cross")`*align-self: %arg;`
macro("self.main")`*justify-self: %arg;`
macro("sh.box")`*box-shadow: %arg;`
macro("sh.text")`*text-shadow: %arg;`
macro("t.a")`*text-align: %arg;`
macro("t.br")`*word-break: %arg;`
macro("t.c")`*color: %arg;`
macro("t.deco")`*text-decoration: %arg;`
macro("t.lh")`*line-height: %arg;`
macro("t.over")`*text-overflow: %arg;`
macro("t.st")`*font-style: %arg;`
macro("t.sz")`*font-size: %arg;`
macro("t.tf")`*text-transform: %arg;`
macro("t.var")`*font-variant: %arg;`
macro("t.wrap")`*word-wrap: %arg;`
macro("t.ws")`*white-space: %arg;`
macro("t.wt")`*font-weight: %arg;`
macro("tf")`*transform: %arg;`
macro("tf.o")`*transform-origin: %arg;`
macro("tf.p")`*perspective: %arg;`
macro("tr")`*transition: %arg;`
macro("v.a")`*vertical-align: %arg;`
macro("vis")`*visibility: %arg;`
macro("w")`*width: %arg;`
macro("w.max")`*max-width: %arg;`
macro("w.min")`*min-width: %arg;`
macro("x")`*left: %arg;`
macro("-x")`*right: %arg;`
macro("y")`*top: %arg;`
macro("-y")`*bottom: %arg;`
macro("z")`*z-index: %arg;`

macro("fl.cn")`fl.cross: center; fl.main: center;`
macro("fl.cn.cross")`fl.cross: center;`
macro("fl.cn.main")`fl.main: center;`
macro("flex")`disp: flex; fl.dir: %arg;`
macro("grid")`disp: grid; gr.flow: %arg;`
macro("hide")`disp: none;`
macro("invis")`vis: hidden;`
macro("sticky")`pos: sticky; y: 0px; z: +1;`
macro("adorn")`disp: flex; fl.cn; p: 4px;`
macro("pad.compact")`p: 0px 4px;`
macro("var.outln")`b.w: 1px;`
macro("var.fill")`
    @text-color: @c2;
    @fill-color: @c1;
    @active: @c2;
    b.c: transparent;
`
macro("var.lined")`b.w: 0px; b.b.w: @border-size; r.b: 0px;`
macro("gr.cols-fit")`*grid-template-columns: repeat(auto-fit, minmax(%arg));`
macro("gr.cols-fill")`*grid-template-columns: repeat(auto-fill, minmax(%arg));`
macro("text.subtitle")`t.sz: @text-size-subtitle; flex; fl.main: center; p: 0px 8px;`
macro("text.title")`t.sz: @text-size-title; flex; fl.main: center; p: 4px 8px;`
macro("raise")`sh.box: 0px calc(%arg * 2px) calc(%arg * 1px + 2px) calc(%arg * 1px + 1px) @shadow-color; z: +%arg;`
macro("raised")`raise: 1;`
macro("scrollable")`over: auto;`
macro("#animate")`
    @modal-transition: visibility @anim-time linear;
    @dialog-transition: opacity @anim-time ease;
    @popover-transition: opacity @anim-time ease;
    @drawer-transition: transform @anim-time ease;
`
macro("#no-animate")`
    @modal-transition: none;
    @dialog-transition: none;
    @popover-transition: none;
    @drawer-transition: none;
`
macro("#no-select-animate")`
    @select-cancel: none;
`
macro("#app")`
    disp: grid;
    gr.areas: "header" "content" "footer";
    gr.rows: min-content 1fr min-content;
    gr.cols: 1fr;
    ! :where(& > *) {
        area: content;
    }
`

macro("layout.base")`
    over: hidden;
    ! body > & {
        pos: absolute;
        x: 0px;
        y: 0px;
        w: 100%;
        h: 100%;
    }
    ! & > * {
        area: content;
    }
`
macro("layout.center-3x3")`
    layout.base;
    @width: auto;
    @height: auto;

    disp: grid;
    gr.cols: 1fr @width 1fr;
    gr.rows: 1fr @height 1fr;
    gr.areas:
        "tl tc tr"
        "ml content mr"
        "bl bc br"
    ;
`
macro("layout.3row-center")`
    layout.base;
    disp: grid;
    gr.cols.a: 1fr;
    gr.rows: 1fr auto 1fr;
    gr.areas: "top" "content" "bottom";
`
macro("layout.3col-center")`
    layout.base;
    disp: grid;
    gr.cols: 1fr auto 1fr;
    gr.rows.a: 1fr;
    gr.areas: "left content right";
`
macro("layout.3row-controls")`
    layout.base;
    disp: grid;
    gr.cols.a: 1fr;
    gr.rows: min-content 1fr min-content;
    gr.areas: "header" "content" "footer";
`
macro("layout.3col-controls")`
    layout.base;
    disp: grid;
    gr.cols: min-content 1fr min-content;
    gr.rows.a: 1fr;
    gr.areas: "menu content action";
`
macro("layout.2col-sidebar")`
    layout.base;
    @col-a: 1fr;
    @col-b: 2fr;
    disp: grid;
    gr.cols: @col-a @col-b;
    gr.rows.a: 1fr;
    gr.areas: "sidebar content";
`
