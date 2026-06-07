import html from "./html.js"

import "./spinner.js"

const template = html`
<style>
    :host {
        --color: var(--primary);
        --core-color: hsl(var(--color), var(--layer-element));
        --alt-color: hsl(var(--color), var(--layer-border));
        --size: 200px;
    }
    svg {
        width: var(--size);
        height: var(--size);
    }
    @keyframes turn {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    circle {
        animation-name: turn;
        animation-duration: calc(1000ms * var(--n));
        animation-iteration-count: infinite;
        animation-timing-function: ease;
        stroke: var(--c);
        stroke-width: 6;
        fill: none;
        animation-direction: var(--anim);
    }
</style>
<svg viewbox="-50 -50 100 100">
    <circle style="--c: var(--core-color);--o: 1; --anim: forward; --n: 2.5;" cx=0 cy=0 r=45 stroke-dasharray="45 45"></circle>
    <circle style="--c: var(--alt-color);--o: 0.5; --anim: reverse; --n: 2;" cx=0 cy=0 r=35 stroke-dasharray="35 35"></circle>
    <circle style="--c: var(--core-color);--o: 0.75; --anim: forward; --n: 3.5;" cx=0 cy=0 r=25 stroke-dasharray="25 25"></circle>
</svg>
`

customElements.define(
    "ws-circle-spinner",
    class HexSpinner extends HTMLElement {
        constructor() {
            super()

            const shadow = this.attachShadow({ mode: "closed" })
            shadow.appendChild(template())
        }
    }
)
