# Screen
The screen acts as a wrapper for a paper (or other container) to sit in
and only provides the sizing/centering with the stacking visual effect.
The top level of a page will likely be a screen but it doesnt have to be.

When using Screen elements, the `@app` marker needs to be set on the body. The
marker sets some styles that the ws-screen interacts with to make things work
correctly.

## Component Macros
- $left<br />
    Left aligns the container in the screen

## Variables

### screen-width
Defines how wide the screen's contents will be.<br />
default: `min(720px, 100%)`

### stack
Increasing the stack number increases the space surrounding a screen,
creating a stacking effect when multiple screens are overlayed with
incrementing stack values.

[component.md : ../examples/screen.html :]: #
