# Paper
- _colorized_

Generic container component for making areas visually distinct from each
other on the page. Uses a grid layout with 3 named areas for placing content.

## Grid Areas

### content
The main content of the paper. Paper elements expect the content to be a single
element with any number of child elements so that when the other slots are
present everything aligns properly. Paper will place any elements without an
area set into this area.

### header
Puts content at the top of the paper, above the content. If the content area
scrolls, the header will stay in place without the need for hacky setups to make
a sticky header.

### footer
Puts content at the bottom of the paper, above the content. If the content area
scrolls, the footer will stay in place without the need for hacky setups to make
a sticky footer.
