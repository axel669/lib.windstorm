# Toast
- _colorized_

The `ws-toast` displays some text in an area intended to draw attention towards
it either inline or in conjuction with the toaster component.

# Toaster
The `ws-toaster` puts toast messages in specific places around the viewport.

## Grid Areas

### content
The content area is where the main content should go. Element with the
`notif-text` attribute are placed in this area.

### start/end
Areas within the border where additional controls and content can be placed.
Elements placed in this area have the `variant.fill` macro applied automatically
since they are on the border background.

## Attributes

### pos
The position to align the toasts to. Valid values are:
- `top-left`
- `top-center`
- `top-right`
- `center-left`
- `center-right`
- `bottom-left`
- `bottom-center`
- `bottom-right`
