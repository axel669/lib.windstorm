/*md
[@] Components/Circle Spinner

# Circle Spiner

The cirlce spinner is an element that shows an animated circular load spinner.

## Wind Functions
- $color\\
    Sets the colors for each of the circular pieces

## Variables
- size\\
    The width and height of the spinner. The animated pieces fit into the size
    given.

{yaml}
frame:  index.html#circle-spinner
code:  circle-spinner.html
height: 400px
*/

const base = `
<style>
@keyframes hi{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
circle{animation-name:hi;animation-iteration-count:infinite;animation-timing-function:linear;transform-origin:50% 50%;}
circle:nth-child(1){animation-duration:4s;}
circle:nth-child(2){animation-duration:3s;animation-direction:reverse;}
circle:nth-child(3){animation-duration:2s;}
</style>
<svg style="width:var(--size);height:var(--size)" viewBox="0 0 100 100"><circle stroke="var(--color)" cx="50" cy="50" stroke-width="4" fill="transparent" r="48" stroke-dasharray="0 37.7 75.4 75.4 75.4 75.4"/><circle stroke="var(--ripple-color)" cx="50" cy="50" stroke-width="4" fill="transparent" r="40" stroke-dasharray="0 31.4 62.83 62.83 62.83 62.83"/><circle stroke="var(--color)" cx="50" cy="50" stroke-width="4" fill="transparent" r="32" stroke-dasharray="0 12.57 25.13 25.13 25.13 25.13 25.13 25.13 25.13 25.13"/></svg>`
const template = document.createElement("template")
template.innerHTML = base
customElements.define(
    "ws-circle-spinner",
    class WSHex extends HTMLElement {
        constructor() {
            super()

            const root = template.content.cloneNode(true)
            const shadow = this.attachShadow({ mode: "closed" })
            shadow.appendChild(root)
        }
    }
)
