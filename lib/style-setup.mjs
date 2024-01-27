import componentStyles from "$$component-css"
import coreMacros from "./simple.yml"

const head = document.head

const lastDigit = Math.ceil(screen.width * devicePixelRatio * 10) % 10
const roundDown = lastDigit >= 5

componentStyles.push({
    name: "correction",
    style: `body {--sub-pixel-offset:${roundDown ? 1 : 0}px}`
})
for (const { name, style } of componentStyles) {
    const st = document.createElement("style")
    st.setAttribute("ws-name", name)
    st.innerHTML = style
    head.append(st)
}

const style = document.createElement("style")
document.head.append(style)
const sheet = style.sheet

style.setAttribute("ws-name", "windstorm-generated")

const baseMacros = document.createElement("style")
baseMacros.setAttribute("ws-name", "core macros")
baseMacros.setAttribute("ws-root", "")
baseMacros.innerHTML = `.ws-style {
    ${coreMacros}
    --fl-center: [fl.cross center] [fl.main center];
    --flex: $="column" [disp flex] [fl.dir {$}];
    --grid: $="row" [disp grid] [gr.flow {$}];
    --hide: [disp none];
    --invis: [vis hidden];
    --\\$adorn: [disp flex] [fl.cross center] [fl.main center] [p 2px];
    --\\$outline: [b.w 1px] [b.c @color];
    --\\$color: [@color {$}] [@ripple-normal {$}-ripple];
    --\\$compact: [p 0px 8px];
    --\\$fill: [@text-color @text-color-fill] [@fill-color @color] [@ripple-color @ripple-dark];
    --\\$flat: [b.w 0px] [@border-size 0px];
    --\\$subtitle: [t.sz @text-size-subtitle] [flex] [fl.main center] [p 0px 4px];
    --\\$title: [t.sz @text-size-title] [flex] [fl.main center] [p 4px];
}`
document.head.insertBefore(baseMacros, document.head.firstChild)

export { head, style, sheet }
