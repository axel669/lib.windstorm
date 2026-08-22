# Macros
Windstorm uses macros to customize elements. Many of the built in macros are
shorthands for common css tweaks, similar to libraries like tailwind, but
instead of defining hundreds of rules ahead of time and needing a build step to
reduce them down, the macros just take arguments generate the necessary styling
at runtime so that the core library doesn't need a special step to reduce its
size. Despite generating information at runtime, windstorm is incredibly fast
and plays nicely with other libraries and frameworks.

### Adding Custom Macros
Windstorm supports adding custom macros at anytime through JS. While macros can
be added at anytime, only macros that exist at parse time for any element or new
macro will be processed correctly, so you will need to make sure you define
macros before you use them.

When macros are used they will use basic string replacement for arguments
provided. Positional arguments are substitued using `%n`, where `n >= 0`. If no
positional arguments are provided, `%arg` will be entire string provided as a
single argument. If positional args are provided, `%arg` will all the arguments
trimmed and joined with a single space char `" "`.

```
Single Arg
<macro>: 1px solid white;
    %arg = "1px solid white"

Multi Arg
<macro>: #thing0 #thing 1   #thing-2
    %arg = "thing0 thing 1 thing-2"
    %0 = "thing0"
    %1 = "thing 1"
    %2 = "thing-2"
```

```html
<script src="{windstorm}"></script>
<script>
    ws.macro("cool-text")`
        *color: teal;
        b: 1px solid teal;
        @color: teal;
    `
    ws.macro("cooler-text")`
        t.c: %arg;
        *background-color: %arg-ripple;
    `
</script>

<div data-ws="@success-ripple: lightgreen;">
    <div data-ws="cool-text;">Teal border, blue text</div>
    <div data-ws="cooler-text: @success;">Green text, light green background</div>
</div>
```

## Built-in Macros
Windstorm has a number of macros built-in that can be used. They are most of the
common ones someone might need to control layout and details of a page.

| Name | Def |
| :--- | :--- |
|  `appr` | *apperance: %arg;<br /> *-webkit-appearance: %arg; |
|  `area` | *grid-area: %arg; |
|  `b` | *border: %arg; |
|  `b.b` | *border-bottom: %arg; |
|  `b.b.c` | *border-bottom-color: %arg; |
|  `b.b.s` | *border-bottom-style: %arg; |
|  `b.b.w` | *border-bottom-width: %arg; |
|  `b.c` | *border-color: %arg; |
|  `b.l` | *border-left: %arg; |
|  `b.l.c` | *border-left-color: %arg; |
|  `b.l.s` | *border-left-style: %arg; |
|  `b.l.w` | *border-left-width: %arg; |
|  `b.r` | *border-right: %arg; |
|  `b.r.c` | *border-right-color: %arg; |
|  `b.r.s` | *border-right-style: %arg; |
|  `b.r.w` | *border-right-width: %arg; |
|  `b.s` | *border-style: %arg; |
|  `b.t` | *border-top: %arg; |
|  `b.t.c` | *border-top-color: %arg; |
|  `b.t.s` | *border-top-style: %arg; |
|  `b.t.w` | *border-top-width: %arg; |
|  `b.w` | *border-width: %arg; |
|  `b.x` | *border-left: %arg;<br /> *border-right: %arg; |
|  `b.x.c` | *border-left-color: %arg;<br /> *border-right-color: %arg; |
|  `b.x.s` | *border-left-style: %arg;<br /> *border-right-style: %arg; |
|  `b.x.w` | *border-left-width: %arg;<br /> *border-right-width: %arg; |
|  `b.y` | *border-top: %arg;<br /> *border-bottom: %arg; |
|  `b.y.c` | *border-top-color: %arg;<br /> *border-bottom-color: %arg; |
|  `b.y.s` | *border-top-style: %arg;<br /> *border-bottom-style: %arg; |
|  `b.y.w` | *border-top-width: %arg;<br /> *border-bottom-width: %arg; |
|  `bg` | *background: %arg; |
|  `bg.att` | *background-attachment: %arg; |
|  `bg.c` | *background-color: %arg; |
|  `bg.img` | *background-image: %arg; |
|  `bg.pos` | *background-position: %arg; |
|  `bg.rep` | *background-repeat: %arg; |
|  `bg.sz` | *background-size: %arg; |
|  `c` | *color: %arg; |
|  `col` | *grid-column: %arg; |
|  `cur` | *cursor: %arg; |
|  `disp` | *display: %arg; |
|  `fl.basis` | *flex-basis: %arg; |
|  `fl.cross` | *align-items: %arg; |
|  `fl.dir` | *flex-direction: %arg; |
|  `fl.flow` | *flex-flow: %arg; |
|  `fl.grow` | *flex-grow: %arg; |
|  `fl.main` | *justify-content: %arg; |
|  `fl.shrink` | *flex-shrink: %arg; |
|  `fl.size` | *flex: %arg; |
|  `fl.wr` | *flex-wrap: %arg; |
|  `font` | *font-family: %arg; |
|  `gap` | *gap: %arg; |
|  `gap.col` | *column-gap: %arg; |
|  `gap.row` | *row-gap: %arg; |
|  `gr.areas` | *grid-template-areas: %arg; |
|  `gr.cols` | *grid-template-columns: %arg; |
|  `gr.cols.a` | *grid-auto-columns: %arg; |
|  `gr.flow` | *grid-auto-flow: %arg; |
|  `gr.rows` | *grid-template-rows: %arg; |
|  `gr.rows.a` | *grid-auto-rows: %arg; |
|  `h` | *height: %arg; |
|  `h.max` | *max-height: %arg; |
|  `h.min` | *min-height: %arg; |
|  `inset` | *top: %arg;<br /> *left: %arg;<br /> *bottom: %arg;<br /> *right: %arg; |
|  `inset.x` | *left: %arg;<br /> *right: %arg; |
|  `inset.y` | *top: %arg;<br /> *bottom: %arg; |
|  `m` | *margin: %arg; |
|  `m.b` | *margin-bottom: %arg; |
|  `m.l` | *margin-left: %arg; |
|  `m.r` | *margin-right: %arg; |
|  `m.t` | *margin-top: %arg; |
|  `m.x` | *margin-left: %arg;<br /> *margin-right: %arg; |
|  `m.y` | *margin-bottom: %arg;<br /> *margin-top: %arg; |
|  `o` | *opacity: %arg; |
|  `outln` | *outline: %arg; |
|  `over` | *overflow: %arg; |
|  `over.x` | *overflow-x: %arg; |
|  `over.y` | *overflow-y: %arg; |
|  `p` | *padding: %arg; |
|  `p.b` | *padding-bottom: %arg; |
|  `p.l` | *padding-left: %arg; |
|  `p.r` | *padding-right: %arg; |
|  `p.t` | *padding-top: %arg; |
|  `p.x` | *padding-left: %arg;<br /> *padding-right: %arg; |
|  `p.y` | *padding-top: %arg;<br /> *padding-bottom: %arg; |
|  `pos` | *position: %arg; |
|  `pos.abs` | *position: absolute; |
|  `pos.fix` | *position: fixed; |
|  `pos.rel` | *position: relative; |
|  `r` | *border-radius: %arg; |
|  `r.b` | *border-bottom-left-radius: %arg;<br /> *border-bottom-right-radius: %arg; |
|  `r.bl` | *border-bottom-left-radius: %arg; |
|  `r.br` | *border-bottom-right-radius: %arg; |
|  `r.l` | *border-top-left-radius: %arg;<br /> *border-bottom-left-radius: %arg; |
|  `r.r` | *border-top-right-radius: %arg;<br /> *border-bottom-right-radius: %arg; |
|  `r.t` | *border-top-left-radius: %arg;<br /> *border-top-right-radius: %arg; |
|  `r.tl` | *border-top-left-radius: %arg; |
|  `r.tr` | *border-top-right-radius: %arg; |
|  `row` | *grid-row: %arg; |
|  `sel` | *user-select: %arg; |
|  `self.cross` | *align-self: %arg; |
|  `self.main` | *justify-self: %arg; |
|  `sh.box` | *box-shadow: %arg; |
|  `sh.text` | *text-shadow: %arg; |
|  `t.a` | *text-align: %arg; |
|  `t.br` | *word-break: %arg; |
|  `t.c` | *color: %arg; |
|  `t.deco` | *text-decoration: %arg; |
|  `t.lh` | *line-height: %arg; |
|  `t.over` | *text-overflow: %arg; |
|  `t.st` | *font-style: %arg; |
|  `t.sz` | *font-size: %arg; |
|  `t.tf` | *text-transform: %arg; |
|  `t.var` | *font-variant: %arg; |
|  `t.ws` | *white-space: %arg; |
|  `t.wt` | *font-weight: %arg; |
|  `tf` | *transform: %arg; |
|  `tf.o` | *transform-origin: %arg; |
|  `tf.p` | *perspective: %arg; |
|  `tr` | *transition: %arg; |
|  `v.a` | *vertical-align: %arg; |
|  `vis` | *visibility: %arg; |
|  `w` | *width: %arg; |
|  `w.max` | *max-width: %arg; |
|  `w.min` | *min-width: %arg; |
|  `x` | *left: %arg; |
|  `-x` | *right: %arg; |
|  `y` | *top: %arg; |
|  `-y` | *bottom: %arg; |
|  `z` | *z-index: %arg; |

### Customization Macros
Customization macros aren't written or used in any special way; instead they are
just built to leverage some of Windstorm's component setup to make customizing
components easier.

| Name | Def |
| :-- | :-- |
|  `elevate` | sh.box: 0px 2px 2px @shadow-color; |
|  `elevated` | sh.box: 0px 2px calc(%arg * 2px) @shadow-color; |
|  `fl.cn` | fl.cross: center;<br /> fl.main: center; |
|  `fl.cn.cross` | fl.cross: center; |
|  `fl.cn.main` | fl.main: center; |
|  `flex` | disp: flex;<br /> fl.dir: %arg; |
|  `grid` | disp: grid;<br /> gr.flow: %arg; |
|  `hide` | disp: none; |
|  `invis` | vis: hidden; |
|  `sticky` | pos: sticky;<br /> y: 0px;<br /> z: +1; |
|  `adorn` | disp: flex;<br /> fl.cn;<br /> p: 4px; |
|  `pad.compact` | p: 0px 4px; |
|  `var.outln` | b.w: 1px; |
|  `var.fill` | @text-color: @alt-color;<br /> @fill-color: @core-color;<br /> @active: @alt-color; |
|  `var.lined` | b.w: 0px;<br /> b.b.w: @border-size;<br /> bg.c: transparent;<br /> r: 0px; |
|  `var.lined-fill` | b.w: 0px;<br /> b.b.w: @border-size;<br /> r.b: 0px; |
|  `gr.cols-fit` | *grid-template-columns: repeat(auto-fit, minmax(%arg)); |
|  `gr.cols-fill` | *grid-template-columns: repeat(auto-fill, minmax(%arg)); |
|  `text.subtitle` | t.sz: @text-size-subtitle;<br /> flex;<br /> fl.main: center;<br /> p: 0px 8px; |
|  `text.title` | t.sz: @text-size-title;<br /> flex;<br /> fl.main: center;<br /> p: 4px 8px; |
