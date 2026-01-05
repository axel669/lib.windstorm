# Colors

Windstorm has a system for constructing color values with pairs of variables to
avoid using 100+ variables just for colors like most other frameworks do. In
Windstorm a color has 2 parts: the color component, and the lightness. The color
is defined as the hue + saturation in HSL, and lightness is the property of the
same name in that color space. This means that colors are constructed as
`hsl(@color, @lightness)` across the built-in components and themes.

## Built-in Colors & Lightness

Windstorm comes with 7 built-in colors, and 7 lightness values that it uses to
build up all of the components. Additional colors and lightness values can be
added by simply defining new variables in the theme, and any of the values in
existing themes can be overriden.

| Layer | Desc |
| :-- | :-- |
| BG | Background of the element applying the theme |
| Surface | Background color for surfaces that contain content, like Paper |
| Element | For interactable & content elements, like Button or Chip |
| Container | Background color for composite elements, like filled Inputs |
| Border | Border for various elements |
| Text | For the normal text without any styling |
| Fill | For text that is inside elements that fill the background with a color |

<ws-grid data-ws="gr.cols: repeat(8, 1fr); gr.rows: repeat(8, 32px);">
    <div></div>
    <div>Mono</div>
    <div>Primary</div>
    <div>Info</div>
    <div>Accent</div>
    <div>Success</div>
    <div>Warning</div>
    <div>Error</div>
    <div>BG</div>
    <div data-ws="b: 1px solid hsl(@mono, @layer-border); bg.c: hsl(@mono, @layer-bg);"></div>
    <div data-ws="b: 1px solid hsl(@mono, @layer-border); bg.c: hsl(@primary, @layer-bg);"></div>
    <div data-ws="b: 1px solid hsl(@mono, @layer-border); bg.c: hsl(@info, @layer-bg);"></div>
    <div data-ws="b: 1px solid hsl(@mono, @layer-border); bg.c: hsl(@accent, @layer-bg);"></div>
    <div data-ws="b: 1px solid hsl(@mono, @layer-border); bg.c: hsl(@success, @layer-bg);"></div>
    <div data-ws="b: 1px solid hsl(@mono, @layer-border); bg.c: hsl(@warning, @layer-bg);"></div>
    <div data-ws="b: 1px solid hsl(@mono, @layer-border); bg.c: hsl(@error, @layer-bg);"></div>
    <div>Surface</div>
    <div data-ws="b: 1px solid hsl(@mono, @layer-border); bg.c: hsl(@mono, @layer-surface);"></div>
    <div data-ws="b: 1px solid hsl(@mono, @layer-border); bg.c: hsl(@primary, @layer-surface);"></div>
    <div data-ws="b: 1px solid hsl(@mono, @layer-border); bg.c: hsl(@info, @layer-surface);"></div>
    <div data-ws="b: 1px solid hsl(@mono, @layer-border); bg.c: hsl(@accent, @layer-surface);"></div>
    <div data-ws="b: 1px solid hsl(@mono, @layer-border); bg.c: hsl(@success, @layer-surface);"></div>
    <div data-ws="b: 1px solid hsl(@mono, @layer-border); bg.c: hsl(@warning, @layer-surface);"></div>
    <div data-ws="b: 1px solid hsl(@mono, @layer-border); bg.c: hsl(@error, @layer-surface);"></div>
    <div>Element</div>
    <div data-ws="b: 1px solid hsl(@mono, @layer-border); bg.c: hsl(@mono, @layer-element);"></div>
    <div data-ws="b: 1px solid hsl(@mono, @layer-border); bg.c: hsl(@primary, @layer-element);"></div>
    <div data-ws="b: 1px solid hsl(@mono, @layer-border); bg.c: hsl(@info, @layer-element);"></div>
    <div data-ws="b: 1px solid hsl(@mono, @layer-border); bg.c: hsl(@accent, @layer-element);"></div>
    <div data-ws="b: 1px solid hsl(@mono, @layer-border); bg.c: hsl(@success, @layer-element);"></div>
    <div data-ws="b: 1px solid hsl(@mono, @layer-border); bg.c: hsl(@warning, @layer-element);"></div>
    <div data-ws="b: 1px solid hsl(@mono, @layer-border); bg.c: hsl(@error, @layer-element);"></div>
    <div>Container</div>
    <div data-ws="b: 1px solid hsl(@mono, @layer-border); bg.c: hsl(@mono, @layer-container);"></div>
    <div data-ws="b: 1px solid hsl(@mono, @layer-border); bg.c: hsl(@primary, @layer-container);"></div>
    <div data-ws="b: 1px solid hsl(@mono, @layer-border); bg.c: hsl(@info, @layer-container);"></div>
    <div data-ws="b: 1px solid hsl(@mono, @layer-border); bg.c: hsl(@accent, @layer-container);"></div>
    <div data-ws="b: 1px solid hsl(@mono, @layer-border); bg.c: hsl(@success, @layer-container);"></div>
    <div data-ws="b: 1px solid hsl(@mono, @layer-border); bg.c: hsl(@warning, @layer-container);"></div>
    <div data-ws="b: 1px solid hsl(@mono, @layer-border); bg.c: hsl(@error, @layer-container);"></div>
    <div>Border</div>
    <div data-ws="b: 1px solid hsl(@mono, @layer-border); bg.c: hsl(@mono, @layer-border);"></div>
    <div data-ws="b: 1px solid hsl(@mono, @layer-border); bg.c: hsl(@primary, @layer-border);"></div>
    <div data-ws="b: 1px solid hsl(@mono, @layer-border); bg.c: hsl(@info, @layer-border);"></div>
    <div data-ws="b: 1px solid hsl(@mono, @layer-border); bg.c: hsl(@accent, @layer-border);"></div>
    <div data-ws="b: 1px solid hsl(@mono, @layer-border); bg.c: hsl(@success, @layer-border);"></div>
    <div data-ws="b: 1px solid hsl(@mono, @layer-border); bg.c: hsl(@warning, @layer-border);"></div>
    <div data-ws="b: 1px solid hsl(@mono, @layer-border); bg.c: hsl(@error, @layer-border);"></div>
    <div>Text</div>
    <div data-ws="b: 1px solid hsl(@mono, @layer-border); bg.c: hsl(@mono, @layer-text);"></div>
    <div data-ws="b: 1px solid hsl(@mono, @layer-border); bg.c: hsl(@primary, @layer-text);"></div>
    <div data-ws="b: 1px solid hsl(@mono, @layer-border); bg.c: hsl(@info, @layer-text);"></div>
    <div data-ws="b: 1px solid hsl(@mono, @layer-border); bg.c: hsl(@accent, @layer-text);"></div>
    <div data-ws="b: 1px solid hsl(@mono, @layer-border); bg.c: hsl(@success, @layer-text);"></div>
    <div data-ws="b: 1px solid hsl(@mono, @layer-border); bg.c: hsl(@warning, @layer-text);"></div>
    <div data-ws="b: 1px solid hsl(@mono, @layer-border); bg.c: hsl(@error, @layer-text);"></div>
    <div>Fill</div>
    <div data-ws="b: 1px solid hsl(@mono, @layer-border); bg.c: hsl(@mono, @layer-fill);"></div>
    <div data-ws="b: 1px solid hsl(@mono, @layer-border); bg.c: hsl(@primary, @layer-fill);"></div>
    <div data-ws="b: 1px solid hsl(@mono, @layer-border); bg.c: hsl(@info, @layer-fill);"></div>
    <div data-ws="b: 1px solid hsl(@mono, @layer-border); bg.c: hsl(@accent, @layer-fill);"></div>
    <div data-ws="b: 1px solid hsl(@mono, @layer-border); bg.c: hsl(@success, @layer-fill);"></div>
    <div data-ws="b: 1px solid hsl(@mono, @layer-border); bg.c: hsl(@warning, @layer-fill);"></div>
    <div data-ws="b: 1px solid hsl(@mono, @layer-border); bg.c: hsl(@error, @layer-fill);"></div>
</ws-grid>
