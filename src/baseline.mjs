/*md
[@] Themes

# Themes
Windstorm comes packaged with 3 themes by default: Light, Dark, and Tron.

In order for windstorm styling to take effect a theme must be applied to the
<body> tag.

The light theme is a standard light theme for regular humans, dark theme is
also intended for regular people, but is nice and dark, and the tron theme is a
high contrast theme for people who really like high contrast dark themes.

To use a theme add `theme[name]` into the ws-x attribute, and it will apply to
the element and all its descendants. Themes do not apply upward in the DOM tree
but multiple themes can be applied in different parts of the tree freely.

## Usage
```html
<body ws-x="theme[dark]">
    <ws-paper>
        <div slot="contet">
            This content is readable
        </div>
    </ws-paper>
    <ws-paper ws-x="theme[light]">
        <div slot="contet">
            This content hurts my eyes (light theme)
        </div>
    </ws-paper>
</body>
```
*/

const head = document.head
const style = document.createElement("style")

import styles from "$$css"

const lastDigit = Math.ceil(screen.width * devicePixelRatio * 10) % 10
const roundDown = lastDigit >= 5

styles.push({
    name: "correction",
    style: `body {--sub-pixel-offset:${roundDown ? 1 : 0}px}`
})
for (const {name, style} of styles) {
    const st = document.createElement("style")
    st.setAttribute("ws-name", name)
    st.innerHTML = style
    head.appendChild(st)
}

head.appendChild(style)

style.setAttribute("ws-calculated", "")

export { head, style }
