# Labled Control
- _colorized_
- _variants: outline, lined_

The labeled control is a label that contains a text-style input (input that
isn't checkbox or radio, textarea) or a select element and the text that
make up the label.

> Add the `control` and `data-ws` attributes to a `label` element to have
> windstorm styling for this component apply.

## Children

### \[label-text\]
Any text element with the `label-text` attribute set will be placed and styled
as the label for the control automagically.

## Grid Areas

### start / end
Adds an adornment to the input area, probably only looks good with
input elements that are typed text.

### extra
Adds text below the control element (but still inside the border). Has a default
padding set so that simple text can be used without anything additional, but
the padding can be overriden as normal.
