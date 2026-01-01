import html from "#com/html"
import "#com/modal"

const template = html`
<style>
    :host {
        --anim-time: 0ms;
    }
</style>
<slot></slot>

<ws-modal>
    <ws-popover-position>
        <slot name="popover"></slot>
    </ws-popover-position>
</ws-modal>
`

customElements.define(
    "ws-popover",
    class WSPopup extends HTMLElement {
        static observedAttributes = [
            "open",
            "persistent"
        ]

        #shadow = null
        #modal = null

        constructor() {
            super()

            this.#shadow = this.attachShadow({
                mode: "closed",
                delegatesFocus: true,
            })
            this.#shadow.append(
                template()
            )
            this.#modal = this.#shadow.querySelector("ws-modal")
        }

        connectedCallback() {
            this.#modal.addEventListener(
                "close",
                () => {
                    this.hide()
                    this.dispatchEvent(
                        new Event("close")
                    )
                }
            )
            this.#modal.addEventListener(
                "click",
                (e) => e.stopPropagation()
            )
            if (this.open === false) {
                return
            }
            this.#modal.open = this.open
            this.setVars()
        }

        attributeChangedCallback(name, prev, curr) {
            if (curr === null) {
                this.#modal[name] = false
                return
            }
            this.#modal[name] = true
            if (name !== "open") {
                return
            }
            this.setVars()
        }

        setVars() {
            const rect = (this.sizeTarget ?? this).getBoundingClientRect()
            this.style.setProperty("--x", `${rect.x}px`)
            this.style.setProperty("--y", `${rect.y}px`)
            this.style.setProperty("--w", `${rect.width}px`)
            this.style.setProperty("--h", `${rect.height}px`)
        }
        get open() {
            return this.hasAttribute("open")
        }
        set open(state) {
            this.#modal.open = state
            if (state === false) {
                this.removeAttribute("open")
                return
            }
            this.setAttribute("open", "")
        }
        get persistent() { return this.hasAttribute("persistent") }
        set persistent(state) {
            this.#modal.persistent = state
            if (state === false) {
                this.removeAttribute("persistent")
                return
            }
            this.setAttribute("persistent", "")
        }

        show() {
            this.open = true
            this.focus()
        }
        hide() {
            this.open = false
        }
    }
)
