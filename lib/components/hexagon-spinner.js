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
    circle {
        stroke-width: 0;
        fill: var(--c);
        offset-path: path("M 0 -45 L 39 -22.5 L 39 22.5 L 0 45 L -39 22.5 L -39 -22.5 L 0 -45");
        animation-name: mover;
        animation-duration: 3000ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
    @keyframes mover {
        0% {
            offset-distance: 0%;
        }
        100% {
            offset-distance: 100%;
        }
    }
    @keyframes trail {
        0% {
            stroke-dashoffset: 0;
        }
        100% {
            stroke-dashoffset: var(--len);
        }
    }
    path {
        animation-name: trail;
        animation-duration: 3000ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        stroke: var(--c);
        stroke-width: 6;
        fill: none;
        animation-direction: var(--anim);
    }
</style>
<svg viewbox="-50 -50 100 100">
    <path
        d="M 0 -36 L 31 -18 L 31 18 L 0 36 L -31 18 L -31 -18 L 0 -36 Z"
        style="--c: var(--alt-color); --len: 216;"
        stroke-dasharray="36 36"
    />
    <path
        d="M 0 -22.5 L 19.5 -11.25 L 19.5 11.25 L 0 22.5 L -19.5 11.25 L -19.5 -11.25 L 0 -22.5 Z"
        style="--c: var(--core-color); --anim: reverse; --len: 135;"
        stroke-dasharray="22.5 22.5"
    />
    <circle r="3" style="--c: var(--core-color); animation-delay: -250ms;"/>
    <circle r="3" style="--c: var(--core-color); animation-delay: -1250ms;" />
    <circle r="3" style="--c: var(--core-color); animation-delay: -2250ms;" />
</svg>
`

customElements.define(
    "ws-hexagon-spinner",
    class HexagonSpinner extends HTMLElement {
        constructor() {
            super()

            const shadow = this.attachShadow({ mode: "closed" })
            shadow.appendChild(template())
        }
    }
)
