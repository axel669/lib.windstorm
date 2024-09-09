const base = `
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
    border-radius: 4px;
    background-color: var(--background-element);
    position: relative;
    overflow: hidden;
    --color: var(--default);
    --ripple-base-color: var(--default-ripple);
}
div::before, div::after {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    --range: calc(var(--max) - var(--min));
    --bar-width: calc(100% * var(--value) / var(--range));
    --buffer-width: calc(100% * var(--buffer) / var(--range));
}
div::before {
    background-color: var(--color);
}
div::after {
    background-color: var(--ripple-base-color);
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
const template = document.createElement("template")
template.innerHTML = base
customElements.define(
    "ws-progress",
    class WSProgress extends HTMLElement {
        static observedAttributes = ["min", "max", "value", "buffer"]

        constructor() {
            super()

            const root = template.content.cloneNode(true)
            const shadow = this.attachShadow({ mode: "closed" })
            shadow.appendChild(root)
            this.core = shadow.querySelector("div")
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
            return this.getAttribute("busy") !== null
        }

        set value(next) { this.setAttribute("value", next.toString()) }
        set buffer(next) { this.setAttribute("buffer", next.toString()) }
        set min(next) { this.setAttribute("min", next.toString()) }
        set max(next) { this.setAttribute("max", next.toString()) }
        set busy(next) { this.setAttribute("busy", next.toString()) }

        #setSize(attr, defValue) {
            this.core.style.setProperty(
                `--${attr}`,
                this.getAttribute(attr) || defValue
            )
        }

        connectedCallback() {
            this.#setSize("value", "0")
            this.#setSize("buffer", "0")
            this.#setSize("min", "0")
            this.#setSize("max", "1")
        }

        attributeChangedCallback(name, prev, next) {
            this.#setSize(name, next)
        }
    }
)
