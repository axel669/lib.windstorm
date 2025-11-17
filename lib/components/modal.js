import html from "#com/html"

const template = html`
<style>
    ws-modal-overlay {
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100vw;
        height: 100vh;
        background-color: var(--modal-color);
        z-index: var(--z-cover);
        transition: visibility linear var(--anim-time, 0ms);
    }
    ws-modal-overlay:focus {
        outline: none;
    }
    :host(:not([open])) ws-modal-overlay {
        visibility: hidden;
    }
    :host([invis]) ws-modal-overlay {
        background-color: transparent;
    }
</style>

<ws-modal-overlay>
    <slot></slot>
</ws-modal-overlay>
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
                    this.dispatchEvent(
                        new Event("close")
                    )
                }
            )
            const overlay = this.#shadow.querySelector("ws-modal-overlay")
            overlay.addEventListener(
                "click",
                (e) => {
                    if (e.target !== overlay || this.persistent === true) {
                        return
                    }
                    this.hide()
                    this.dispatchEvent(
                        new Event("close")
                    )
                }
            )
        }

        get open() {
            return this.hasAttribute("open")
        }
        set open(state) {
            if (state === false) {
                this.removeAttribute("open")
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

        show() {
            this.open = true
        }
        hide() {
            this.open = false
        }
    }
)
