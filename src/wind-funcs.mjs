import { prop, simple, multi } from "./css-funcs.mjs"

/*md
[@] CSS Shorthands

# Wind Shorthands
Windstorm provides a number of shorthands for common css. The arguments allow
css format, but all spaces inside arguments need be single underscores, and if
an underscore is needed in the value, use 2 undescores\\
> Invalid: `w[min(100px, 50%)]`\\
> should be `w[min(100px,_50%)]` or `w[min(100px,50%)]`

CSS custom properties (variables) can also be set using windstorm syntax:
> `&var[teal]` -> `--var: teal`
> `&thing[&other-thing]` -> `--thing: var(--other-thing)`
> `&border[1px_solid_var(--primary)]` -> `--border: 1px solid var(--primary)`

It also allows a shorthand for arguments that are just variables:
> `h[&height]` -> `height: var(--height)`\\
> `bd[1px_solid_&border]` will not become `border: 1px solid var(--border)`\\
> (might be able to allow the second on in the future)
*/

const windFuncs = {
    /*md
	## area[name]
	Shorthand for `grid-area`
	*/
	"area": simple("grid-area"),
    /*md
    ## b[borderStyle]
    Shorthand for `border`
    */
    "b": simple("border"),
    /*md
    ## b-c[color]
    Shorthand for `border-color`
    */
    "b-c": simple("border-color"),
    /*md
    ## b-s[style]
    Shorthand for `border-style`
    */
    "b-s": simple("border-style"),
    /*md
    ## b-w[width]
    Shorthand for `border-width`
    */
    "b-w": simple("border-width"),
    /*md
    ## b[borderStyle]
    Shorthand for `border-top`
    */
    "b-t": simple("border-top"),
    /*md
    ## b-c[color]
    Shorthand for `border-top-color`
    */
    "b-t-c": simple("border-top-color"),
    /*md
    ## b-s[style]
    Shorthand for `border-top-style`
    */
    "b-t-s": simple("border-top-style"),
    /*md
    ## b-w[width]
    Shorthand for `border-top-width`
    */
    "b-t-w": simple("border-top-width"),
    /*md
    ## b-b[borderStyle]
    Shorthand for `border-bottom`
    */
    "b-b": simple("border-bottom"),
    /*md
    ## b-b-c[color]
    Shorthand for `border-bottom-color`
    */
    "b-b-c": simple("border-bottom-color"),
    /*md
    ## b-b-s[style]
    Shorthand for `border-bottom-style`
    */
    "b-b-s": simple("border-bottom-style"),
    /*md
    ## b-b-w[width]
    Shorthand for `border-bottom-width`
    */
    "b-b-w": simple("border-bottom-width"),
    /*md
    ## b-l[borderStyle]
    Shorthand for `border-left`
    */
    "b-l": simple("border-left"),
    /*md
    ## b-l-c[color]
    Shorthand for `border-left-color`
    */
    "b-l-c": simple("border-left-color"),
    /*md
    ## b-l-s[style]
    Shorthand for `border-left-style`
    */
    "b-l-s": simple("border-left-style"),
    /*md
    ## b-l-w[width]
    Shorthand for `border-left-width`
    */
    "b-l-w": simple("border-left-width"),
    /*md
    ## b-r[borderStyle]
    Shorthand for `border-right`
    */
    "b-r": simple("border-right"),
    /*md
    ## b-r-c[color]
    Shorthand for `border-right-color`
    */
    "b-r-c": simple("border-right-color"),
    /*md
    ## b-r-s[style]
    Shorthand for `border-right-style`
    */
    "b-r-s": simple("border-right-style"),
    /*md
    ## b-r-w[width]
    Shorthand for `border-right-width`
    */
    "b-r-w": simple("border-right-width"),
    /*md
	## bg[backgroundStyle]
	Shorthand for `background`
	*/
	"bg": simple("background"),
    /*md
	## bg-a[attachment]
	Shorthand for `background-attachment`
	*/
	"bg-a": simple("background-attachment"),
    /*md
	## bg-c[color]
	Shorthand for `background-color`
	*/
	"bg-c": simple("background-color"),
    /*md
	## bg-img[image]
	Shorthand for `background-image`
	*/
	"bg-img": simple("background-image"),
    /*md
    ## block
    Sets `display: block`
    */
    "block": () => [prop("display", "block")],
    /*md
	## c[color]
	Shorthand for `color`
	*/
	"c": simple("color"),
    /*md
	## col[column]
	Shorthand for `grid-column`
	*/
	"col": simple("grid-column"),
    /*md
	## cur[cursor]
	Shorthand for `cursor`
	*/
	"cur": simple("cursor"),
    /*md
    ## flex[direction = "column"]
    Sets `display: flex` and sets the `flex-direction`. Default direction is
    `"column"`
    */
    "flex": (_, direction = "column") => [
        prop("display", "flex"),
        prop("flex-direction", direction)
    ],
    /*md
    ## fl-center[align]
    Shorthand for `align-items: center` and `justify-content: center`
    */
    "fl-center": () => [
        prop("align-items", "center"),
        prop("justify-content", "center"),
    ],
    /*md
    ## fl-cr-a[align]
    Shorthand for `align-items`\\
    Aligns flex items along the cross axis
    */
    "fl-cr-a": simple("align-items"),
    /*md
    ## fl-dir[direction]
    Shorthand for `flex-direction`
    */
    "fl-dir": simple("flex-direction"),
    /*md
    ## fl-wr[wrapType]
    Shorthand for `flex-wrap`
    */
    "fl-wr": simple("flex-wrap"),
    /*md
    ## fl-m-a[align]
    Shorthand for `justify-content`\\
    Aligns flex items along the main axis
    */
    "fl-m-a": simple("justify-content"),
    /*md
	## font[family]
	Shorthand for `font-family`
	*/
	"font": simple("font-family"),
    /*md
	## gap[size]
	Shorthand for `gap`
	*/
	"gap": simple("gap"),
    /*md
    ## grid[flow = "row"]
    Sets `display: grid` and sets the `grid-auto-flow`. Default flow is `"row"`
    */
    "grid": (_, flow = "row") => [
        prop("display", "grid"),
        prop("grid-auto-flow", flow)
    ],
    /*md
	## gr-col[colTemplate]
	Shorthand for `grid-template-columns`
	*/
	"gr-col": simple("grid-template-columns"),
    /*md
	## gr-row[rowTemplate]
	Shorthand for `grid-template-rows`
	*/
	"gr-row": simple("grid-template-rows"),
    /*md
	## gr-acol[autoCol]
	Shorthand for `grid-auto-columns`
	*/
	"gr-acol": simple("grid-auto-columns"),
    /*md
	## gr-arow[autoRow]
	Shorthand for `grid-auto-rows`
	*/
	"gr-arow": simple("grid-auto-rows"),
    /*md
	## gr-flow[flow]
	Shorthand for `grid-auto-flow`
	*/
	"gr-flow": simple("grid-auto-flow"),
    /*md
	## h[size]
	Shorthand for `height`
	*/
	"h": simple("height"),
    /*md
	## h-max[size]
	Shorthand for `max-height`
	*/
	"h-max": simple("max-height"),
    /*md
	## h-min[size]
	Shorthand for `min-height`
	*/
	"h-min": simple("min-height"),
    /*md
    ## hide
    Hides the element by setting `display: none`
    */
    "hide": () => [prop("display", "none")],
    /*md
    ## iblock
    Sets `display: inline-block`
    */
    "iblock": () => [prop("display", "inline-block")],
    /*md
    ## iflex[direction = "column"]
    Sets `display: inline-flex` and sets the `flex-direction`. Default direction
    is `"column"`
    */
    "iflex": (_, direction = "column") => [
        prop("display", "inline-flex"),
        prop("flex-direction", direction)
    ],
    /*md
    ## igrid[flow = "row"]
    Sets `display: inline-grid` and sets the `grid-auto-flow`.
    Default flow is `"row"`
    */
    "igrid": (_, flow = "row") => [
        prop("display", "inline-grid"),
        prop("grid-auto-flow", flow)
    ],
    /*md
    ## inset[distance]
    Shorthand for `left`, `top`, `right`, `bottom`
    */
    "inset": multi("top", "left", "bottom", "right"),
    /*md
    ## inset[distance]
    Shorthand for `left`, `right`
    */
    "inset-x": multi("left", "right"),
    /*md
    ## inset[distance]
    Shorthand for `top`, `bottom`
    */
    "inset-y": multi("top", "bottom"),
    /*md
	## m[size]
	Shorthand for `margin`
	*/
	"m": simple("margin"),
    /*md
	## m-b[size]
	Shorthand for `margin-bottom`
	*/
	"m-b": simple("margin-bottom"),
    /*md
	## m-l[size]
	Shorthand for `margin-left`
	*/
	"m-l": simple("margin-left"),
    /*md
	## m-r[size]
	Shorthand for `margin-right`
	*/
	"m-r": simple("margin-right"),
    /*md
	## m-t[size]
	Shorthand for `margin-top`
	*/
	"m-t": simple("margin-top"),
    /*md
	## over[style]
	Shorthand for `overflow`
	*/
	"over": simple("overflow"),
    /*md
	## over-x[style]
	Shorthand for `overflow-x`
	*/
	"over-x": simple("overflow-x"),
    /*md
	## over-y[style]
	Shorthand for `overflow-y`
	*/
	"over-y": simple("overflow-y"),
    /*md
	## p[size]
	Shorthand for `padding`
	*/
	"p": simple("padding"),
    /*md
	## p-b[size]
	Shorthand for `padding-bottom`
	*/
	"p-b": simple("padding-bottom"),
    /*md
	## p-l[size]
	Shorthand for `padding-left`
	*/
	"p-l": simple("padding-left"),
    /*md
	## p-r[size]
	Shorthand for `padding-right`
	*/
	"p-r": simple("padding-right"),
    /*md
	## p-t[size]
	Shorthand for `padding-top`
	*/
	"p-t": simple("padding-top"),
    /*md
    ## p-x[size]
    Shorthand for `padding-left` and `padding-right`
    */
    "p-x": multi(
        "padding-left",
        "padding-right",
    ),
    /*md
    ## p-y[size]
    Shorthand for `padding-top` and `padding-bottom`
    */
    "p-y": multi(
        "padding-top",
        "padding-bottom",
    ),
    /*md
	## pos[type]
	Shorthand for `position`
	*/
	"pos": simple("position"),
    /*md
	## r[size]
	Shorthand for `border-radius`
	*/
	"r": simple("border-radius"),
    /*md
	## r-tl[size]
	Shorthand for `border-top-left-radius`
	*/
	"r-tl": simple("border-top-left-radius"),
    /*md
	## r-tr[size]
	Shorthand for `border-top-right-radius`
	*/
	"r-tr": simple("border-top-right-radius"),
    /*md
	## r-bl[size]
	Shorthand for `border-bottom-left-radius`
	*/
	"r-bl": simple("border-bottom-left-radius"),
    /*md
	## r-br[size]
	Shorthand for `border-bottom-right-radius`
	*/
	"r-br": simple("border-bottom-right-radius"),
    /*md
    ## r-t[size]
    Shorthand for `border-top-left-radius` and `border-top-right-radius`
    */
    "r-t": multi(
        "border-top-left-radius",
        "border-top-right-radius",
    ),
    /*md
    ## r-r[size]
    Shorthand for `border-top-right-radius` and `border-bottom-right-radius`
    */
    "r-r": multi(
        "border-top-right-radius",
        "border-bottom-right-radius",
    ),
    /*md
    ## r-l[size]
    Shorthand for `border-bottom-left-radius` and `border-top-left-radius`
    */
    "r-l": multi(
        "border-bottom-left-radius",
        "border-top-left-radius",
    ),
    /*md
    ## r-b[size]
    Shorthand for `border-bottom-right-radius` and `border-bottom-left-radius`
    */
    "r-b": multi(
        "border-bottom-right-radius",
        "border-bottom-left-radius",
    ),
    /*md
	## row[rowStyle]
	Shorthand for `grid-row`
	*/
	"row": simple("grid-row"),
    /*md
    ## sel[type]
	Shorthand for `user-select`
    */
   "sel": simple("user-select"),
    /*md
	## shdw[style]
	Shorthand for `box-shadow`
	*/
	"shdw": simple("box-shadow"),
    /*md
	## t-a[style]
	Shorthand for `word-break`
	*/
	"t-a": simple("text-align"),
    /*md
	## t-br[style]
	Shorthand for `word-break`
	*/
	"t-br": simple("word-break"),
    /*md
	## t-deco[decoration]
	Shorthand for `text-decoration`
	*/
	"t-deco": simple("text-decoration"),
    /*md
	## t-lh[height]
	Shorthand for `line-height`
	*/
    "t-lh": simple("line-height"),
    /*md
	## t-over[style]
	Shorthand for `text-overflow`
	*/
	"t-over": simple("text-overflow"),
    /*md
	## t-sz[size]
	Shorthand for `font-size`
	*/
	"t-sz": simple("font-size"),
    /*md
	## t-tr[transform]
	Shorthand for `text-transform`
	*/
	"t-tr": simple("text-transform"),
    /*md
	## t-wght[weight]
	Shorthand for `white-space`
	*/
	"t-wght": simple("font-weight"),
    /*md
	## t-ws[style]
	Shorthand for `white-space`
	*/
	"t-ws": simple("white-space"),
    /*md
    ## theme[name]
    Sets the baseline styles for a theme but doesn't apply anything related to
    the name in the wind function itself.
    */
    "theme": () => [
        prop("color", "var(--text-color-normal)"),
        prop("font-family", "var(--font)"),
        prop("font-size", "var(--text-size-normal)"),
    ],
    /*md
	## tr[transform]
	Shorthand for `transform`
	*/
	"tr": simple("transform"),
    /*md
	## w[size]
	Shorthand for `width`
	*/
	"w": simple("width"),
    /*md
	## w-max[size]
	Shorthand for `max-width`
	*/
	"w-max": simple("max-width"),
    /*md
	## w-min[size]
	Shorthand for `min-width`
	*/
	"w-min": simple("min-width"),
    /*md
	## x[distance]
	Shorthand for `left`
	*/
	"x": simple("left"),
    /*md
	## y[distance]
	Shorthand for `top`
	*/
	"y": simple("top"),
    /*md
	## -x[distance]
	Shorthand for `right`
	*/
	"-x": simple("right"),
    /*md
	## -y[distance]
	Shorthand for `bottom`
	*/
	"-y": simple("bottom"),
    /*md
	## z[index]
	Shorthand for `z-index`
	*/
	"z": simple("z-index"),
    /*md
    ## $color[colorName]
    Used with components to set the base color and the ripple color for the
    component.\\
    The function only accepts color names and uses that name to fill
    in the corresponding color variable and ripple color variable.
    > works: `$color[primary]`\\
    > doesn't work: `$color[&primary]`
    */
    "$color": (_, color) => [
        prop("--color", `&${color}`),
        prop("--ripple-color", `&${color}-ripple`),
    ],
    /*md
    ## $adorn[area]
    Used inside components to add adornments next to the input element
    */
    "$adorn": () => [
        prop("display", "flex"),
        prop("justify-content", "center"),
        prop("align-items", "center"),
        prop("padding", "2px"),
    ],
    "$compact": () => [prop("padding", "0px 8px")],
    "$title": () => [
        prop("font-size", "&text-size-title"),
        prop("font-weight", "700")
    ],
    "$subtitle": () => [
        prop("font-size", "&text-size-subtitle"),
    ],
    /*md
    ## @flat
    Component style that removes borders
    */
    "@flat": () => [
        prop("border-width", "0px"),
        prop("--border-size", "0px"),
    ],
    /*md
    ## @outline
    Component style that provides thin borders inside and around the component
    */
    "@outline": () => [
        prop("border-width", "1px"),
        prop("border-color", "&color"),
    ],
    /*md
    ## @fill
    Button style that fills the button with color instead of just adding
    borders. Technically can be used on other things but that's untested
    */
    "@fill": () => [
        prop("--ripple-color", `var(--ripple-dark) !important`),
        prop("--text-color", "&text-color-fill"),
        prop("background-color", "&color"),
        prop("color", "&text-color-fill"),
    ],
}

export default windFuncs
