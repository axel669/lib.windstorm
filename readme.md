

# Windstorm
Windstorm is a library that allows element customization without needing to
use css directly and without predefining hundreds or thousands of css classes
with minor differences between a set of 20.

[Docs Here](https://axel669.github.io/lib.windstorm/)

## Installation

### CDN Link (global variable)
```html
<script src="https://cdn.jsdelivr.net/npm/@axel669/windstorm/dist/browser.js"></script>
```

### CDN Link (module)
```js
// Only scanning, no functions
import "https://cdn.jsdelivr.net/npm/@axel669/windstorm/dist/module.mjs"
// Import functions + scanning
import wind from "https://cdn.jsdelivr.net/npm/@axel669/windstorm/dist/module.mjs"

wind.wsx({stuff})
```

### Node Modules
```bash
pnpm add @axel669/windstorm
```

## Usage
After adding Windstorm to a page, it will automagically scan elements for the
`ws-x` attribute and generate css as needed. Any changes to the attribute on
elements are also detected and generated.

Component css is automatically added to the head as well, so no work needs to be
done to use any of the components.

> Any html elements that do not have the `ws-x` attribute are left alone,
> allowing windstorm to play nice with any other css lib (that I tried).

```html
<div ws-x="w[100px] h[200px] bg-c[teal]"></div>
<ws-paper ws-x="@outline">
    <ws-flex>
        <button ws-x="@fill $color[primary] r[8px]">
            Click Me!
        </button>
    </ws-flex>
</ws-paper>
```

### Custom Functions
Windstorm has 3 different kinds of custom function:
- normal functions that are just text and hyphens
- component props that are prefixed with `$`
- component styles that are prefixed with `@`

Internally, there is no difference in how these are detected and processed, the
prefixes are for programmers to be able to easily see which functions are for
what purpose in the html.