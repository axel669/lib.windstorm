# Icon
Displays an icon with optional text next to it using
[Tabler Icons](https://tabler.io/icons).

> Windstorm actually splits the tabler icons font file into a single font file
> per icon with ligatures to control the display, rather than using the large
> Tabler Icons font as is. Doing so allows it to load only the icons that are
> actually necessary on the page, rather than trying to cache megabytes of
> unused icons on every page.

## Attributes

### data-icon
Use the `data-icon` attribute to set which icon is set (instead of a windstorm
macro). Windstorm automagically scans the DOM for `ws-icon` elements and uses
this attribute to determine which font file to load.
