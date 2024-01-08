# Themes

Windstorm comes with 3 pre-built themes: Light, Dark, and Tron.

The light and dark themes are tuned for normal people, while the tron theme is a
high contrast theme that only a handful of people will like (me).

## Custom Theme

To create a custom theme, a single css rule needs to be defined with a number of
variables that windstorm uses in the components and functions.

The selector should be: `[ws-x~="@theme:<theme name>"]`

### Theme Properties

Windstorm uses css custom properties (css variables) to control a number of
aspects of the styles without the need for js.

#### Text Display

The text proprties control the size, color, and font of the text on the page.

- `--font`<br />
    Default font for the page
- `--text-light`<br />
    Text color that should be on the lighter side of colors
- `--text-dark`<br />
    Text color that should be on the darker side of colors
- `--text-color-normal`<br />
    Default color for text on the page
- `--text-color-secondary`<br />
    Color of text that is used in things like subtitles
- `--text-color-invert`<br />
    The invert of the normal text color
- `--text-color-fill`<br />
    Text color to use when an element has a background color
- `--text-size-normal`<br />
    Default text size
- `--text-size-title`<br />
    Text size in titles
- `--text-size-header`<br />
    Text size for section headers
- `--text-size-info`<br />
    Text size for informational text, like badges
- `--text-size-subtitle`<br />
    Text size for subtitles

#### Page/Component Styles

These variables control the overall look and feel of the components in multiple
states, as well as the page itself.

- `--background`<br />
    Background color of the page
- `--background-layer`<br />
    Background color of layered containers, like paper
- `--layer-border-width`<br />
    Border width for layered containers
- `--layer-border-color`<br />
    Border color for layered containers that dont specificy a color
- `--ripple-normal`<br />
    The default ripple color for elements that have the effect
- `--shadow-color`<br />
    The color of the shadow on layered containers
- `--disabled-background`<br />
    The background color for elments that are disabled (inputs, buttons, etc.)
- `color-scheme` _Optional_ <br />
    For dark themes, set this to `dark` as a reliable, cross-browser solution
    to the coloration of things like scrollbars

#### Theme Colors

The theme colors are used with the `$color[<name>]` function. The colors are
applied to various parts of a component (border, text, background, etc.). The
ripple colors are used for things that have a ripple effect on them, usually
only `button` or `a`'s with `$button` on them.

- `--default`<br />
    Color used when a color is not specified
- `--default-ripple`<br />
    Color used for the ripple effect when a color is not specified
- `--primary`<br />
    Primary color
- `--primary-ripple`<br />
    Primary ripple color
- `--secondary`<br />
    Secondary color
- `--secondary-ripple`<br />
    Secondary ripple color
- `--danger`<br />
    Danger color
- `--danger-ripple`<br />
    Danger ripple color
- `--warning`<br />
    Warning color
- `--warning-ripple`<br />
    Warning ripple color
- `--accent`<br />
    Accent color
- `--accent-ripple`<br />
    Accent ripple color

### Custom Theme Template

```css
/* Replace custom with your theme name */
[ws-x~="@theme:custom"] {
    /* Font Display */
    --font: ;
    --text-light: ;
    --text-dark: ;
    --text-color-normal: ;
    --text-color-secondary: ;
    --text-color-invert: ;
    --text-color-fill: ;
    --text-size-normal: ;
    --text-size-title: ;
    --text-size-header: ;
    --text-size-info: ;
    --text-size-subtitle: ;

    /* Page/Component Styles */
    --background: ;
    --background-layer: ;
    --layer-border-width: ;
    --layer-border-color: ;
    --ripple-normal: ;
    --shadow-color: ;
    --disabled-background: ;
    color-scheme: ;

    /* Theme Colors */
    --default: ;
    --default-ripple: ;
    --primary: ;
    --primary-ripple: ;
    --secondary: ;
    --secondary-ripple: ;
    --danger: ;
    --danger-ripple: ;
    --warning: ;
    --warning-ripple: ;
    --accent: ;
    --accent-ripple: ;
}
```
