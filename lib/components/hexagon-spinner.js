import html from "./html.js"

import "./spinner.js"

const template = html`
<style>
    :host {
        --color: var(--primary);
        --size: 100px;
        display: inline;
    }
    @keyframes spin {
        from {
            transform: rotateY(0deg);
        }
        to {
            transform: rotateY(360deg);
        }
    }
    path {
        animation-name: spin;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        transform-origin: 50% 50%;
        stroke: var(--color)
    }
    path:nth-child(1) {
        animation-duration: 3s;
    }
    path:nth-child(2) {
        animation-duration: 2s;
        animation-direction: reverse;
    }
    path:nth-child(3) {
        animation-duration: 1s;
    }

    svg {
        display: inline-block;
        width: var(--size);
        height: var(--size);
    }
</style>

<svg  viewBox="0 0 100 100">
    <path stroke-width="4" fill="none" d="M91.57 26v48L50 98 8.43 74V26L50 2l41.57 24Z"></path>
    <path stroke-opacity="0.5" stroke-width="4" fill="none" d="M81.177 32v36L50 86 18.823 68V32L50 14l31.177 18Z"></path>
    <path stroke-width="4" fill="none" d="M70.785 38v24L50 74 29.215 62V38L50 26l20.785 12Z"></path>
</svg>
`

customElements.define(
    "ws-hexagon-spinner",
    class WSHex extends HTMLElement {
        constructor() {
            super()

            const shadow = this.attachShadow({ mode: "closed" })
            shadow.appendChild(template())
        }
    }
)
