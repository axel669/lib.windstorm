import { addSize, createMacro } from "./mapping.js"

addSize("sm")`(max-width: 600px)`
addSize("md")`(max-width: 1024px)`
addSize("lg")`(min-width: 1025px)`
addSize("lnd")`(orientation: landscape)`
addSize("prt")`(orientation: portrait)`

createMacro("area")`[*grid-area %arg]`
createMacro("b")`[*border %arg]`
createMacro("b.b")`[*border-bottom %arg]`
createMacro("b.b.c")`[*border-bottom-color %arg]`
createMacro("b.b.s")`[*border-bottom-style %arg]`
createMacro("b.b.w")`[*border-bottom-width %arg]`
createMacro("b.c")`[*border-color %arg]`
createMacro("b.l")`[*border-left %arg]`
createMacro("b.l.c")`[*border-left-color %arg]`
createMacro("b.l.s")`[*border-left-style %arg]`
createMacro("b.l.w")`[*border-left-width %arg]`
createMacro("b.r")`[*border-right %arg]`
createMacro("b.r.c")`[*border-right-color %arg]`
createMacro("b.r.s")`[*border-right-style %arg]`
createMacro("b.r.w")`[*border-right-width %arg]`
createMacro("b.s")`[*border-style %arg]`
createMacro("b.t")`[*border-top %arg]`
createMacro("b.t.c")`[*border-top-color %arg]`
createMacro("b.t.s")`[*border-top-style %arg]`
createMacro("b.t.w")`[*border-top-width %arg]`
createMacro("b.w")`[*border-width %arg]`
createMacro("b.x")`[*border-left %arg] [*border-right %arg]`
createMacro("b.x.c")`[*border-left-color %arg] [*border-right-color %arg]`
createMacro("b.x.s")`[*border-left-style %arg] [*border-right-style %arg]`
createMacro("b.x.w")`[*border-left-width %arg] [*border-right-width %arg]`
createMacro("b.y")`[*border-top %arg] [*border-bottom %arg]`
createMacro("b.y.c")`[*border-top-color %arg] [*border-bottom-color %arg]`
createMacro("b.y.s")`[*border-top-style %arg] [*border-bottom-style %arg]`
createMacro("b.y.w")`[*border-top-width %arg] [*border-bottom-width %arg]`
createMacro("bg")`[*background %arg]`
createMacro("bg.att")`[*background-attachment %arg]`
createMacro("bg.c")`[*background-color %arg]`
createMacro("bg.img")`[*background-image %arg]`
createMacro("bg.pos")`[*background-position %arg]`
createMacro("bg.rep")`[*background-repeat %arg]`
createMacro("bg.sz")`[*background-size %arg]`
createMacro("c")`[*color %arg]`
createMacro("col")`[*grid-column %arg]`
createMacro("cur")`[*cursor %arg]`
createMacro("disp")`[*display %arg]`
createMacro("fl.basis")`[*flex-basis %arg]`
createMacro("fl.cross")`[*align-items %arg]`
createMacro("fl.dir")`[*flex-direction %arg]`
createMacro("fl.flow")`[*flex-flow %arg]`
createMacro("fl.grow")`[*flex-grow %arg]`
createMacro("fl.main")`[*justify-content %arg]`
createMacro("fl.shrink")`[*flex-shrink %arg]`
createMacro("fl.size")`[*flex %arg]`
createMacro("fl.wr")`[*flex-wrap %arg]`
createMacro("font")`[*font-family %arg]`
createMacro("gap")`[*gap %arg]`
createMacro("gap.col")`[*column-gap %arg]`
createMacro("gap.row")`[*row-gap %arg]`
createMacro("gr.area")`[*grid-template-areas %arg]`
createMacro("gr.cols")`[*grid-template-columns %arg]`
createMacro("gr.cols.a")`[*grid-auto-columns %arg]`
createMacro("gr.flow")`[*grid-auto-flow %arg]`
createMacro("gr.rows")`[*grid-template-rows %arg]`
createMacro("gr.rows.a")`[*grid-auto-rows %arg]`
createMacro("h")`[*height %arg]`
createMacro("h.max")`[*max-height %arg]`
createMacro("h.min")`[*min-height %arg]`
createMacro("inset")`[*top %arg] [*left %arg] [*bottom %arg] [*right %arg]`
createMacro("inset.x")`[*left %arg] [*right %arg]`
createMacro("inset.y")`[*top %arg] [*bottom %arg]`
createMacro("m")`[*margin %arg]`
createMacro("m.b")`[*margin-bottom %arg]`
createMacro("m.l")`[*margin-left %arg]`
createMacro("m.r")`[*margin-right %arg]`
createMacro("m.t")`[*margin-top %arg]`
createMacro("m.x")`[*margin-left %arg] [*margin-right %arg]`
createMacro("m.y")`[*margin-bottom %arg] [*margin-top %arg]`
createMacro("o")`[*opacity %arg]`
createMacro("outln")`[*outline %arg]`
createMacro("over")`[*overflow %arg]`
createMacro("over.x")`[*overflow-x %arg]`
createMacro("over.y")`[*overflow-y %arg]`
createMacro("p")`[*padding %arg]`
createMacro("p.b")`[*padding-bottom %arg]`
createMacro("p.l")`[*padding-left %arg]`
createMacro("p.r")`[*padding-right %arg]`
createMacro("p.t")`[*padding-top %arg]`
createMacro("p.x")`[*padding-left %arg] [*padding-right %arg]`
createMacro("p.y")`[*padding-top %arg] [*padding-bottom %arg]`
createMacro("pos")`[*position %arg]`
createMacro("pos.abs")`[*position absolute]`
createMacro("pos.fix")`[*position fixed]`
createMacro("pos.rel")`[*position relative]`
createMacro("r")`[*border-radius %arg]`
createMacro("r.b")`[*border-bottom-left-radius %arg] [*border-bottom-right-radius %arg]`
createMacro("r.bl")`[*border-bottom-left-radius %arg]`
createMacro("r.br")`[*border-bottom-right-radius %arg]`
createMacro("r.l")`[*border-top-left-radius %arg] [*border-bottom-left-radius %arg]`
createMacro("r.r")`[*border-top-right-radius %arg] [*border-bottom-right-radius %arg]`
createMacro("r.t")`[*border-top-left-radius %arg] [*border-top-right-radius %arg]`
createMacro("r.tl")`[*border-top-left-radius %arg]`
createMacro("r.tr")`[*border-top-right-radius %arg]`
createMacro("row")`[*grid-row %arg]`
createMacro("sel")`[*user-select %arg]`
createMacro("self.cross")`[*align-self %arg]`
createMacro("self.main")`[*justify-self %arg]`
createMacro("sh.box")`[*box-shadow %arg]`
createMacro("sh.text")`[*text-shadow %arg]`
createMacro("t.a")`[*text-align %arg]`
createMacro("t.br")`[*word-break %arg]`
createMacro("t.c")`[*color %arg]`
createMacro("t.dec")`[*text-decoration %arg]`
createMacro("t.lh")`[*line-height %arg]`
createMacro("t.over")`[*text-overflow %arg]`
createMacro("t.sz")`[*font-size %arg]`
createMacro("t.tf")`[*text-transform %arg]`
createMacro("t.ws")`[*white-space %arg]`
createMacro("t.wt")`[*font-weight %arg]`
createMacro("tf")`[*transform %arg]`
createMacro("tf.o")`[*transform-origin %arg]`
createMacro("tf.p")`[*perspective %arg]`
createMacro("tr")`[*transition %arg]`
createMacro("vis")`[*visibility %arg]`
createMacro("w")`[*width %arg]`
createMacro("w.max")`[*max-width %arg]`
createMacro("w.min")`[*min-width %arg]`
createMacro("x")`[*left %arg]`
createMacro("-x")`[*right %arg]`
createMacro("y")`[*top %arg]`
createMacro("-y")`[*bottom %arg]`
createMacro("z")`[*z-index %arg]`

createMacro("fl-center")`[fl.cross center] [fl.main center]`
createMacro("flex")`[%arg column] [disp flex] [fl.dir %arg]`
createMacro("grid")`[%arg row] [disp grid] [gr.flow %arg]`
createMacro("hide")`[disp none]`
createMacro("invis")`[vis hidden]`
createMacro("sticky")`[pos sticky] [y 0px] [z +1]`
createMacro("$adorn")`[disp flex] [fl-center] [p 4px]`
createMacro("$outline")`[b.w 1px] [b.c @color]`
createMacro("$color")`[@color %arg]`
createMacro("$compact")`[p 0px 8px]`
createMacro("$fill")`[@text-color @text-color-fill] [@fill-color @color]`
// createMacro("$flat")`[@border-size 0px] [bg.c transparent]`
createMacro("$lined")`[b.w 0px] [b.b.w @border-size] [bg.c transparent] [r 0px]`
createMacro("$lined-fill")`[b.w 0px] [b.b.w @border-size] [r.b 0px]`
createMacro("gr.cols-fit")`[*grid-template-columns repeat(auto-fit, minmax(%arg))]`
createMacro("gr.cols-fill")`[*grid-template-columns repeat(auto-fill, minmax(%arg))]`
createMacro("$subtitle-text")`[t.sz @text-size-subtitle] [flex] [fl.main center] [p 0px 8px]`
createMacro("$title-text")`[t.sz @text-size-title] [flex] [fl.main center] [p 4px 8px]`
createMacro("$elevate")`[sh.box 0px 2px 4px @shadow-color]`

createMacro(".title")`[*grid-area title]`
createMacro(".action")`[*grid-area action]`
createMacro(".menu")`[*grid-area menu]`

createMacro(".content")`[*grid-area content]`
createMacro(".header")`[*grid-area header]`
createMacro(".footer")`[*grid-area footer]`
