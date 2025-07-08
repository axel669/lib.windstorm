# Table
Visual updates to the `table` html element and its children.
In order to make things look cooler and more consistent, the layout is converted
to grid under the hood but maintains the html for a table so that screen readers
do not break, and you don't need a bunch of aria-role attributes on everything.

These will work more or less like a regular table for basic layouts, but grid
rules around size and overflow (which are much easier to work with) now apply.
This means that row and column "borders" are actually just css grid gaps, and
are controlled by the same css.

The caviat to making all this work nicely is that in order to have rows that
don't look strange with cells spanning multiple, each tr that has a spanning
cell needs to also span rows (see example #2).

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
    <!-- > If you do not want the empty th to be stick, add a space inside it. the
    > `$sticky-col` macro can be used on any th to make it sticky as well. -->

[component.md : ../../../../test/preview/examples/table.html :]: #
