# Screen
The screen acts as a wrapper for a paper (or other container) to sit in
and only provides the sizing/centering with simple controls. Most use will be
at the top level of an app/page, or within modals for stacking contexts, but
could be nested inside content areas if it makes sense.

## Variables

### screen-width
Defines how wide the screen's contents will be.<br />
default: `min(720px, 100%)`

### pad-x/y
Sets the padding on the horizontal or vertical blank space around the screen.
Default is `auto`.

### pad-top/left/bottom/right
Sets the padding on one side of the blank space around the screen. Defaults to
the `pad-x/y` that overrides it.
