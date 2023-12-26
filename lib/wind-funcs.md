# Built-in Functions
Windstorm has a number of built-in functions, many of which are shorthands for
commonly used bits of css (similar to things like tailwind). The main difference
is that all of these can be fully customized with values instead of giving a
dozen presets.

## Simple Functions
The simple functions are just functions that map to specific css properties.
These can be used to customize any regular elements, or add more style to any
of the components that ship with windstorm.

[funcs/simple.md : simple.yml : funcs]: ###

## Flow/Layout Functions

### `flex`
Makes an element use flexbox for layout. The argument is optional and will
specify the flex-direction. Will use column direction by default.

### `grid`
Makes an element use css grid for layout. The argument is optional and will
specify the grid-direction. Will use row layout by default.

### `hide`
Hides an element and removes it from the layout calculations.

## Component Functions
Windstorm uses functions prefixed with `"$"` to specify component
customizations. These functions can be written and used as normal, but are
intended for use with components because they set multiple properties, many of
which aren't used by regular elements.

### `$color`
Sets the color scheme for a component. Colors are specified using the name of
the css variable that defines them (ex: `--primary -> $color[primary]`).

### `$compact`
Reduces the padding on buttons. Useful for putting them into adornment areas.

### `$flat`, `$fill`, `$outline`
Changes how the border and fill of a component look. Flat components have no
background or borders, fill have no borders but a filled background, and outline
has no background but visible borders.

### `$title` and `$subtitle`
Used to adjust the size and style of text in things like the `ws-titlebar`.

### `$theme`
Sets the theme of the element and all of its children. Will usually be used on
the body element, but could also be used on elements on the page to make
specific areas have a theme.
