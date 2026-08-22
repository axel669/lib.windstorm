# Layouts
Windstorm comes with a few common layout built as macros so that they can be
applied to conainers easily without extra nested elements. All layouts have a
`content` grid-area in them, and all of them place child elemnts in that area
unless its given a specific area.

All of the layouts can be made using the ws-grid component, but it has default
styling that is better suited to laying out pieces of content rather than
putting things into specific positions like these macros (ex: ws-grid has
padding while these do not).

## `layout.3x3-center`
A 3x3 grid layout with content grid-area being in the center. `left` and `right`
are available as named columns for grid-areas, as are `top` and `bottom` rows.

The `width` and `height` variables can be set to control the size of the content
area, and both are `auto` as the default. Because they are two different vars,
it's possible to set only one at a time for different layout requirements.

## `layout.3col-center` & `layout.3row-center`
Layouts that have a centered piece of content and equal size rows/columns around
it. Like the 3x3, `top`, `bottom`, `left`, and `right` are available, but only
in the layout that uses columns vs rows.

## `layout.3row-controls`
This layout uses three rows of content, with the top and bottom rows only taking
up enough space to display their content (and shrinking to 0 height when empty).
Instead of using `top` and `bottom` it uses `header` and `footer` grid-areas for
placing elements above and below the content. Generally used to turn
`ws-surface` elemnts into Cards from the Material UI Design.

## `layout.3col-controls`
Similar to the `3row-controls` layout but using columns, with the `left` and
`right` columns become the `menu` and `action` columns respectively. This layout
is how the `ws-titlebar` is laid out, and thats the most common use for it.

## `2col-sidebar`
This layout has two columns whose width is controlled by the `@col-a` and
`@col-b` variables. Has a `sidebar` column on the left with the `content`
column being on the right.
