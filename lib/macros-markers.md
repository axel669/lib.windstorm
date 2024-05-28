# Macros and Markers
Windstorm uses macros to customize elements. Many of the built in macros are
shorthands for common css tweaks, similar to libraries like tailwind, but
instead of defining hundreds of rules ahead of time and needing a build step to
reduce them down, the macros just take arguments generate the necessary styling
at runtime so that the core library doesn't need a special step to reduce its
size. Despite generating information at runtime, windstorm is incredibly fast
and plays nicely with other libraries and frameworks.

Markers are customizations that change the presentation of an element in a
substantial way (themes, making anchors look like buttons, etc.). Markers have
no macro definition because they are maintained in regular css.

### Macro Types
Windstorm has 3 kinds of macros that can be used:
- normal macros that are just text, hypens, and dots (`[\w\-\.]+`)
- component customization macros are prefixed with `$`
- css custom properties (varaibles) that are prefixed with `@`

Internally there are slight differences in how each of these are processed.
- If no definition is found for a normal macro, windstorm will log an error
    into the console.
- If no definition is found for component macros, no error is logged.
- CSS variables do not attempt to find a macro.

### Adding Custom Macros
Windstorm supports adding custom macros through ~~abuse of~~ css that is loaded
before the script begins processing the page. Custom macros will do string
interpolation on the definitions (except in the default argument def), so macros
can build on top of other macros. In order to prevent accidental recursion all
macros must be defined before they are used in another macros definition.

For custom macros to be processed, a `<link>` or `<style>` tag must have the
`ws-root` attribute on it. Those tags can contain any normal css declarations,
with macros only being built from any `.ws-style` declarations.
```html
<style ws-root>
    /* ignored by windstorm, still applies as normal css */
    div { font: Courier New; }

    /*
    macro names need to start with "--" so that the browser sees them as
    custom css properties and doesn't throw them away. The "--" is removed
    automatically to buld the macros and check their names.
    */
    .ws-root {
        /* creates a macro named "cool-text" */
        --cool-text:
            /* use strings for standard css properties */
            "color: teal"
            /* macro syntax works for custom macros defs \o/ */
            [b 1px solid teal]
            /* variables too */
            [@color teal]
        ;
        --cooler-text:
            /* $ is the argument to the macro, and can have a default value */
            $="@primary"
            /* use "{$}" to put the argument somewhere */
            [t.c {$}]
            /* argument can be used in string interpolation */
            "background-color: {$}-ripple"
        ;
    }
</style>
<script src="{windstorm}"></script>

<div ws-x="[cool-text]">Teal border, blue text</div>
<div ws-x="[cooler-text @secondary]">Green border, blue text, sick background</div>
```

## Standard Macros
The standard macros are just macros that map to specific css properties.
These can be used to customize any regular elements, or add more style to any
of the components that ship with windstorm.

[funcs/simple.md : simple.yml : funcs]: ###

## Flow/Layout Macros

### `[flex $]`
Makes an element use flexbox for layout. The argument is optional and will
specify the flex-direction. Will use column direction by default.

### `[fl-center]`
Makes a flex display element center the content horizontally and vertically.

### `[grid $]`
Makes an element use css grid for layout. The argument is optional and will
specify the grid-direction. Will use row layout by default.

### `[hide]`
Hides an element and removes it from the layout calculations (uses
`display: none`).

### `[invis]`
Hides an element but does not remove it from the layout (uses
`visibility: hidden`).

## Component Macros
Windstorm uses macros prefixed with `"$"` to specify component
customizations. These macros can be written and used as normal, but are
intended for use with components because they set multiple properties, many of
which aren't used by regular elements.

### `[$color $]`
Sets the color scheme for a component. Expects a color variable like `@primary`.

### `[$compact]`
Reduces the padding on buttons. Useful for putting them into adornment areas.

### `[$flat]`, `[$fill]`, `[$outline]`
Changes how the border and fill of a component look. Flat components have no
background or borders, fill have no borders but a filled background, and outline
has no background but visible borders.

### `[$title]` and `[$subtitle]`
Used to adjust the size and style of text in things like the `ws-titlebar`.
