import html from "./html.js"

const template = html`
<style>
@keyframes busy-load {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(400%);
    }
}
:host {
    display: block;
    height: 8px;
    border-radius: var(--base-radius);
    background-color: hsl(var(--mono), var(--layer-border));
    position: relative;
    overflow: hidden;
    --color: var(--mono);
}
div::before, div::after {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    --range: calc(var(--max, 1) - var(--min, 0));
    --bar-width: calc(100% * var(--value, 0) / var(--range));
    --buffer-width: calc(100% * var(--buffer, 0) / var(--range));
}
div::before {
    background-color: hsl(var(--color), var(--layer-element));
}
div::after {
    opacity: 0.3;
    background-color: hsl(var(--color), var(--layer-element));
}
:host(:not([busy])) div::before {
    width: var(--bar-width);
}
:host(:not([busy])) div::after {
    width: var(--buffer-width);
}
:host([busy]) div::before {
    width: 25%;
    animation-name: busy-load;
    animation-iteration-count: infinite;
    animation-duration: 2s;
}
</style>

<div></div>
`

customElements.define(
    "ws-progress",
    class WSProgress extends HTMLElement {
        static observedAttributes = ["min", "max", "value", "buffer"]

        #core = null

        constructor() {
            super()

            const shadow = this.attachShadow({ mode: "closed" })
            shadow.append(template())
            this.#core = shadow.querySelector("div")
        }

        get value() {
            return parseFloat(this.getAttribute("value") ?? "0")
        }
        get buffer() {
            return parseFloat(this.getAttribute("buffer") ?? "0")
        }
        get min() {
            return parseFloat(this.getAttribute("min") ?? "0")
        }
        get max() {
            return parseFloat(this.getAttribute("max") ?? "1")
        }
        get busy() {
            return this.hasAttribute("busy")
        }

        set value(next) {
            if (next === false) {
                this.removeAttribute("value")
            }
            this.setAttribute("value", "")
        }
        set buffer(next) {
            if (next === false) {
                this.removeAttribute("buffer")
            }
            this.setAttribute("buffer", "")
        }
        set min(next) {
            if (next === false) {
                this.removeAttribute("min")
            }
            this.setAttribute("min", "")
        }
        set max(next) {
            if (next === false) {
                this.removeAttribute("max")
            }
            this.setAttribute("max", "")
        }
        set busy(next) {
            if (next === false) {
                this.removeAttribute("busy")
            }
            this.setAttribute("busy", "")
        }

        #setInternalVar(attr, defValue) {
            this.#core.style.setProperty(
                `--${attr}`,
                this.getAttribute(attr) || defValue
            )
        }

        connectedCallback() {
            this.#setInternalVar("value", "0")
            this.#setInternalVar("buffer", "0")
            this.#setInternalVar("min", "0")
            this.#setInternalVar("max", "1")
        }

        attributeChangedCallback(name, prev, next) {
            this.#setInternalVar(name, next)
        }
    }
)
