const cssvalue = (value) =>
    (value.startsWith("&") === true)
        ? `var(--${value.slice(1)})`
        : value
const cssprop = (name, value) => `${name}: ${cssvalue(value)}`
const simple = (name) =>
    (value) => [cssprop(name, value)]
const multi = (...names) =>
    (value) => names.map(
        (name) => cssprop(name, value)
    )
/*md
# Wind Shorthands
Windstorm provides a number of shorthands for common css. The arguments allow
css as is (no special formatting required) ex: `w[min(100px, 50%)]`. It also
allows a shorthand for arguments that are just variables:
> `h[&height]` -> `h[var(--height)]`
> `bd[1px solid &border]` will not become `bd[1px solid var(--border)]`
> (might be able to allow the second on in the future)
*/

const windFuncs = {
    /*md
	## area[name]
	Shorthand for `grid-area`
	*/
	"area": simple("grid-area"),
    /*md
	## bd[borderStyle]
	Shorthand for `border`
	*/
	"bd": simple("border"),
    /*md
	## bd-c[color]
	Shorthand for `border-color`
	*/
	"bd-c": simple("border-color"),
    /*md
	## bd-s[style]
	Shorthand for `border-style`
	*/
	"bd-s": simple("border-style"),
    /*md
	## bd-w[width]
	Shorthand for `border-width`
	*/
	"bd-w": simple("border-width"),
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
    "block": () => cssprop("display", "block"),
    /*md
	## col[column]
	Shorthand for `grid-column`
	*/
	"col": simple("grid-column"),
    /*md
    ## flex[direction = "column"]
    Sets `display: flex` and sets the `flex-direction`. Default direction is
    `"column"`
    */
    "flex": (direction = "column") => [
        cssprop("display", "flex"),
        cssprop("flex-direction", direction)
    ],
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
    "grid": (flow = "row") => [
        cssprop("display", "grid"),
        cssprop("grid-auto-flow", flow)
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
	Shorthand for `grid-auto-column`
	*/
	"gr-acol": simple("grid-auto-column"),
    /*md
	## gr-arow[autoRow]
	Shorthand for `grid-auto-row`
	*/
	"gr-arow": simple("grid-auto-row"),
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
    "hide": () => cssprop("display", "none"),
    /*md
    ## block
    Sets `display: inline-block`
    */
    "iblock": () => cssprop("display", "inline-block"),
    /*md
    ## iflex[direction = "column"]
    Sets `display: inline-flex` and sets the `flex-direction`. Default direction
    is `"column"`
    */
    "iflex": (direction = "column") => [
        cssprop("display", "inline-flex"),
        cssprop("flex-direction", direction)
    ],
    /*md
    ## igrid[flow = "row"]
    Sets `display: inline-grid` and sets the `grid-auto-flow`.
    Default flow is `"row"`
    */
    "igrid": (flow = "row") => [
        cssprop("display", "inline-grid"),
        cssprop("grid-auto-flow", flow)
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
	## shdw[style]
	Shorthand for `box-shadow`
	*/
	"shdw": simple("box-shadow"),
    /*md
	## t-br[style]
	Shorthand for `word-break`
	*/
	"t-br": simple("word-break"),
    /*md
	## t-c[color]
	Shorthand for `color`
	*/
	"t-c": simple("color"),
    /*md
	## t-deco[decoration]
	Shorthand for `text-decoration`
	*/
	"t-deco": simple("text-decoration"),
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
	## t-ws[style]
	Shorthand for `white-space`
	*/
	"t-ws": simple("white-space"),
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
    > works: `$color[primary]`
    > doesn't work: `$color[&primary]`
    */
    "$color": (color) => [
        cssprop("--color", `&${color}`),
        cssprop("--ripple-color", `&${color}-ripple`),
    ],
    /*md
    ## $adorn[area]
    Used inside components to add adornments next to the input element
    */
    "$adorn": (area) => [
        cssprop("grid-area", area),
        cssprop("display", "flex"),
        cssprop("justify-content", "center"),
        cssprop("align-items", "center"),
    ],
    /*md
    ## @flat
    Component style that removes borders
    */
    "@flat": () => [
        cssprop("border-width", "0px"),
        cssprop("--border-size", "0px"),
    ],
    /*md
    ## @outline
    Component style that provides thin borders inside and around the component
    */
    "@outline": () => [
        cssprop("border-width", "1px"),
        cssprop("border-color", "&color"),
    ],
    /*md
    ## @fill
    Button style that fills the button with color instead of just adding
    borders. Technically can be used on other things but that's untested
    */
    "@fill": () => [
        cssprop("--ripple-color", `var(--ripple-dark) !important`),
        cssprop("background-color", "&color"),
        cssprop("color", "&text-color-fill"),
    ],
}

export { cssprop, simple, multi }
export default windFuncs
