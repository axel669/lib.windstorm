# Labled Control
The labeled control is a label that contains a text-style input (input that
isn't checkbox or radio, textarea) or a select element and the text that
make up the label.

To mark a label as a labeled control, add the `@control` marker.

## Component Macros
- $flat
- $color

## Attributes

### ws-error
Adding the ws-error attribute to the lable will make error text display
below the component.

## Slots

### label-text
Sets the element with the text for the label
- attr: ws-hint
    The ws-hint attribute can be applied to the element marked as the
    label and will have the content of the attribute added as a hint
    underneath the label for the element.

### start / end
Adds an adornment to the input area, probably only looks good with
input elements that are typed text.

[component.md : ../examples/control.html :]: #
