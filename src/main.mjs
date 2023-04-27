/*md
[@] Home

# Windstorm
Windstorm is a library that allows element customization without needing to
use css directly and without predefining hundreds or thousands of css classes
with minor differences between a set of 20.

[Docs Here](https://axel669.github.io/lib.windstorm/)

## Installation

> Note: the version number is not necessary in the url, but is recommended.
> Including the version ensures that if updates are made to the library, any
> compatibility issues or bugs that get introduced won't affect existing
> pages, and also allows updates to be done when intended.

### CDN Link (global variable)
```html
<script src="https://cdn.jsdelivr.net/npm/@axel669/windstorm@0.1.12/dist/browser.js"></script>
```

### CDN Link (module)
```js
// Only scanning, no functions
import "https://cdn.jsdelivr.net/npm/@axel669/windstorm@0.1.12/dist/module.mjs"
// Import functions + scanning
import wind from "https://cdn.jsdelivr.net/npm/@axel669/windstorm@0.1.12/dist/module.mjs"

wind.wsx({stuff})
```

### Node Modules
```bash
pnpm add @axel669/windstorm
```

## Usage
Windstorm can be used as a standalone script added to the page, or included in
a bundle with other scripts/frameworks. Regardless of which form it's used in,
windstorm should be included in the body of the page before the content that it
will style in order to prevent FOUC. For static content, this means trhe script
tag that uses it should not be async or defered. For content generated by a
framework like React or Svelte, this should not be an issue as including
windstorm in the build bundle will allow it to run before the framework adds
DOM elements to the page.

Once added to the page, windstorm will scan all current elements, and any
elements added later for the `ws-x` attribute, and generate the necessary css
immediately. Component css is automatically added to the head as well, so no
extra work is needed to use any of the components. Components that transform
standard tags will only work if the tag has the `ws-x` on it (although the value
can be empty).

> Many of the windstorm components expect some css variables defined by the
> theme to be present, so a theme should always be applied to the body.

```html
<body ws-x="theme[tron]">
    <script src="<windstorm>"></script>
    Static content here
</body>
```

> Any html elements that do not have the `ws-x` attribute are left alone,
> allowing windstorm to play nice with any other css lib (that I tried).

### @app and ws-screen
The ws-screen component is designed to be a top level container for content that
has consistent scrolling behavior for child elements across browsers and
devices without the page resizing in weird ways from the various browser bars
hiding and unhiding themselves from scrolling on mobile.

As such, the use of ws-screen is entirely optional as all components will work
without it being used, and if the regular browser scrolling behavior is not an
issue, then ws-screen can be skipped entirely.

If ws-screen is used, the body tag must have the `@app` wind function added to
the `ws-x` attribute. This will setup the css properties needed for ws-screen
to control the scrolling behavior more effectively.

```html
<body ws-x="theme[tron] @app">
    <script src="<windstorm>"></script>
    <ws-screen>
        <ws-paper ws-x="@outline">
            <ws-flex>
                <button ws-x="@fill $color[primary] r[8px]">
                    Click Me!
                </button>
                <div ws-x="w[100px] h[200px] bg-c[teal]"></div>
            </ws-flex>
        </ws-paper>
    </ws-screen>
</body>
```

### Custom Functions
Windstorm has different kinds of custom function:
- normal functions that are just text and hyphens
- component props that are prefixed with `$`
- component styles that are prefixed with `@`
- css custom properties (varaibles) that are prefixed with `&`

Internally, there is no difference in how these are detected and processed, the
prefixes are for programmers to be able to easily see which functions are for
what purpose in the html.
*/
import processNode from "./process-node.mjs"
import * as css from "./css-funcs.mjs"

import "./js-comp/ws-circle-spinner.mjs"
import "./js-comp/ws-hexagon-spinner.mjs"

const mut = {
    childList(evt) {
        if (evt.addedNodes.length === 0) {
            return
        }
        for (const node of evt.addedNodes) {
            const nodes =
                (node.tagName === undefined)
                ? []
                : [node, ...node.querySelectorAll("*")]
            nodes.forEach(processNode)
        }
    },
    attributes(evt) {
        processNode(evt.target)
    }
}
const observer = new MutationObserver(
    (muts) => muts.forEach(
        evt => mut[evt.type](evt)
    )
)

observer.observe(
    document.body,
    {
        subtree: true,
        attributes: true,
        childList: true,
        attributeFilter: ["ws-x"]
    }
)
for (const node of document.body.querySelectorAll("*")) {
    processNode(node)
}

export default css
