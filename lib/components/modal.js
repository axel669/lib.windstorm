import html from "#com/html"

const template = html`
<style>
    :host {
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100vw;
        height: 100vh;
        background-color: var(--modal-color);
        z-index: var(--z-cover);
        transition: var(--modal-transition, none);
        backdrop-filter: blur(2px);
    }
    ws-modal-overlay {
        position: absolute;
        inset: 0px;
    }
    ws-modal-overlay:focus {
        outline: none;
    }
    :host(:not([open])) {
        visibility: hidden;
    }
    :host([clear]) {
        background-color: transparent;
    }
    @media (hover: hover) {
        :host([inline-desktop]) {
            position: relative;
            width: unset;
            height: unset;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
            z-index: unset;
        }
        :host([inline-desktop]) ws-modal-overlay {
            display: none;
        }
    }
</style>

<ws-modal-overlay>
</ws-modal-overlay>
<slot></slot>
`

customElements.define(
    "ws-modal",
    class WindstormModal extends HTMLElement {
        #shadow = null

        constructor() {
            super()

            this.#shadow = this.attachShadow({
                mode: "closed",
                delegatesFocus: true,
            })
            this.#shadow.append(
                template()
            )
        }

        connectedCallback() {
            window.addEventListener(
                "keydown",
                (e) => {
                    const skip = (
                        this.open === false
                        || e.key !== "Escape"
                        || this.persistent === true
                    )
                    if (skip === true) {
                        return
                    }
                    this.hide()
                }
            )
            const overlay = this.#shadow.querySelector("ws-modal-overlay")
            overlay.addEventListener(
                "click",
                (e) => {
                    if (this.persistent === true) {
                        return
                    }
                    this.hide()
                }
            )
        }

        get open() {
            return this.hasAttribute("open")
        }
        set open(state) {
            if (state === false) {
                if (this.open === false) {
                    return
                }
                this.removeAttribute("open")
                this.dispatchEvent(
                    new Event("close")
                )
                return
            }
            this.setAttribute("open", "")
        }
        get persistent() { return this.hasAttribute("persistent") }
        set persistent(state) {
            if (state === false) {
                this.removeAttribute("persistent")
                return
            }
            this.setAttribute("persistent", "")
        }

        get managed() { return this.hasAttribute("managed") }
        set managed(state) {
            if (state === false) {
                this.removeAttribute("managed")
                return
            }
            this.setAttribute("managed", "")
        }

        show() {
            this.open = true
        }
        hide(force) {
            if (this.managed === true && force !== true) {
                return
            }
            this.open = false
        }
    }
)
