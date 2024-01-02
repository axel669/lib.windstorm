# Labled Toggle
The labeled toggle is a label that contains a toggle-style input
(type "checkbox"/"radio"). Has an option for the "switch" style toggle as well.
Instead of having a slot for the label text, the labeled toggle puts both
child elements on the same line, so reversing the order of the children will
change which side the label text is displayed on.

To mark a label as a labeled toggle, add the `@toggle` marker.

## Component Macros
- $outline
- $color

## Child Markers

### @switch
Used to change an `<input type="checkbox">` to look like a switch visually.

[component.md : ../examples/toggle.html :]: #
