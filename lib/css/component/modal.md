# Modal

Puts a modal on screen with visibility toggling through either a hidden
checkbox input next to the modal or using the $show wind function.

Differnt types of modals are just positions applied to whatever container
the modal content is put inside.

## Wind Functions
- $dialog
    > Positions in the center of the screen
- $select
    > Position at the top, centered horizontally
- $menu
    > Menu drawer that sits on the left side of the screen
- $action
    > Actions drawer that sits on the right side of the screen

## Variables
The `--anim-time` variable can be set on a modal (or its child) to control how
fast it animates in/out. Default value is 250ms.

[html: examples/modal.html : component.md]: #
