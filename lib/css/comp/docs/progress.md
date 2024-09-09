# Progress Bar
A custom element (`ws-progress`) that is a simpler progress bar that is easier
to customize consistently between browsers.

## Attributes
The `ws-progress` element uses attrs similar to the regular progress element in
html. `min`, `max`, and `value` all work as standard, with `buffer` working like
the `value` attribute, but for the buffer bar. Instead of using aria-*
attributes with additional elements, setting the `busy` attribute will make the
ws-progress show as indeterminate.

[component.md : ../../../../test/preview/examples/progress.html :]: #
