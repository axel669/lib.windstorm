# Table
Visual updates to the `table` html element and its children.

More styling options probably to come.

## Component Macros
- $color<br />
    Changes the color of the space between cells, and the text color of the
    header cells.
- $fill-header<br />
    Fills the header with the current color.
- $sticky-header<br />
    Makes the cells in the thead, as well as any th elements in the tbody rows
    stickly position to the top and sides. Empty th elements in thead will also
    show above the other non sticky cols like in the examples below.
    > If you do not want the empty th to be stick, add a space inside it. the
    > `$sticky-col` macro can be used on any th to make it sticky as well.

[component.md : ../../../../test/preview/examples/table.html :]: #
