# Labled Control
The labeled control is a label that contains a text-style input (input that
isn't checkbox or radio, textarea) or a select element and the text that
make up the label.

To mark a label as a labeled control, add the `@@control` marker.

## Component Macros
- $flat
- $color

## Areas

### $label
Sets the element with the text for the label

### $start / $end
Adds an adornment to the input area, probably only looks good with
input elements that are typed text.

### $extra
Adds text below the control element (but still inside the border). Has a default
padding set so that simple text can be used without anything additional, but
the padding can be overriden as normal.

[component.md : ../../../../test/preview/examples/control.html :]: #
