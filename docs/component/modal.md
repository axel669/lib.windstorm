# Modal
Puts a modal on screen with visibility toggling through either a hidden
checkbox input next to the modal or using the $show wind function.

Differnt types of modals are just positions applied to whatever container
the modal content is put inside.

## Attributes

### open
Determines if the modal is shown or not via an attribute. Any value will make
the modal show.

### persistent
If set, the modal will not close when the user clicks outside the modal content.

## Functions

### show()
Shows the modal. If the modal is already showing, it does nothing.

### hide()
Hides the modal. If the modal is already hiding, it does nothing.

## Variables

### anim-time
The `--anim-time` variable can be set on a modal (or its child) to control how
fast it animates in/out. Default value comes from the current theme.
