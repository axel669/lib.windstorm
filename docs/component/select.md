# Select
- _colorized_
- _variants: outline, lined_

## Attributes

### direction
Set the direction the select opens (it's not determined with magic code _yet_).
Default direction is down, can be set to `"up"`.

### open
Can be used to determine if the select is open. Any value will open the select,
only removing the attribute closes it.

## Properties

### value
Same as the regular select value.

### selectedIndex
Same as the regular select selectedIndex.

## Functions

### toggle()
Toggles the open/closed state of the select.

### open()
Opens the select. If the select is already open, does nothing.

### close()
Closes the select. If the select is already closed, does nothing.
