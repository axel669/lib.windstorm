# Popover
Display content in a modal fashion but tie the location to a specific element
(itself) on the page, rather than displaying completely separate from content.
When the popover opens, it sets four variables on itself: `--x, --y, --w, --h`
that are the x, y position and width/height of the bounding client rect for the
popover element. The popover element displays its children in a standard inline
display wrapper, and uses the `popver` slot to show popover content.

## Attributes

### open
Determines if the popover is shown or not via an attribute. Any value will make
the modal show.

### persistent
If set, the popover will not close when the user clicks outside the popover
slot content.

## Slots

### popover
The content to show when the popover is shown.

## Variables

### anim-time
The popover overrides the theme `--anim-time` variable with a value of `0ms` so
that simple content that doesn't need to animate in and out can be shown without
weirdly slow reaction time. Setting this will allow animations again.
