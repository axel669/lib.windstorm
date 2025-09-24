import html from "./html.js"
import { component } from "#lib/macro"

component("ws-option")`
    *display: block;
    *border: 1px solid @text-color-normal;
    *padding: 4px;

    ! &[selected] {
        bg.c: @color;
        t.c: @text-color-fill;
        b.c: @color;
    }
`
const template = html`
    <style>
        :host {
            --color: var(--primary);
            display: inline-grid;
            user-select: none;
            cursor: default;
            position: relative;
            border: 1px solid var(--color);
            padding: 4px;
        }

        slot[name=options] {
            display: block;
            position: absolute;
            top: 0px;
            left: 0px;
            bottom: 0px;
            right: 0px;
            z-index: calc(var(--z-cover) + 1);
            overflow: visible;
        }
        ws-options {
            display: grid;
            position: absolute;
            top: 50%;
            left: 0px;
            right: 0px;
            max-height: 200px;
            overflow: auto;
            background-color: var(--background-layer);
            transform: translateY(-50%);
            border: 2px solid var(--color);
            grid-template-columns: 1fr;
            gap: 2px;
            padding: 0px 4px;
            border-radius: 4px;
        }

        value-display {
            display: block;
            pointer-events: none;
        }
        value-display:focus {
            outline: none;
        }
        :host:focus {
            outline: inherit;
        }

        modal-overlay {
            position: fixed;
            top: 0px;
            left: 0px;
            width: 100vw;
            height: 100vh;
            background-color: var(--modal-color);
            z-index: var(--z-cover);
        }

        :host(:not([open])) :is(modal-overlay, slot[name=options]) {
            display: none;
        }
    </style>

    <value-display tabindex="1">
        <slot name="selected">
            <ws-selected>No Selection</ws-selected>
        </slot>
    </value-display>

    <modal-overlay></modal-overlay>
    <slot name="options">
        <ws-options>
            <slot></slot>
        </ws-options>
    </slot>
`
const tag = "ws-option"
customElements.define(
    "ws-select",
    class WSSelect extends HTMLElement {
        #value = null
        #index = -1
        #current = null
        #observer = null
        #preview = null

        #nodes() {
            return [...this.querySelectorAll(tag)]
        }
        #changes(changes) {
            const added = Array.from(
                changes,
                (change) => [...change.addedNodes]
            ).flat()
            const hasOptions = added.some(
                node => node.tagName?.toLowerCase() === tag
            )
            if (hasOptions === false) {
                return
            }
            const next = added.findLast(
                node => (
                    node.tagName?.toLowerCase() === tag
                    && node.hasAttribute("selected") === true
                )
            ) ?? this.#current
            const nodes = this.#nodes()
            for (const node of nodes) {
                node.removeAttribute("selected")
            }
            this.selectedIndex = nodes.indexOf(next)
        }

        constructor() {
            super()

            const root = template.content.cloneNode(true)
            const shadow = this.attachShadow({
                mode: "closed",
                delegatesFocus: true,
            })
            shadow.appendChild(root)
            this.shadow = shadow
            this.options = shadow.querySelector("slot[name=options]")
            this.#preview = shadow.querySelector("ws-selected")

            const o = new MutationObserver(this.#changes.bind(this))
            o.observe(this, { childList: true, subtree: true })
            this.#observer = o
        }

        get value() { return this.#value }
        set value(nextValue) {
            const nodes = this.#nodes()
            const next = nodes.find(
                node => (
                    node.value === nextValue
                    || node.getAttribute("value") === nextValue
                )
            )
            this.selectedIndex = nodes.indexOf(next)
        }
        get selectedIndex() { return this.#index }
        set selectedIndex(nextIndex) {
            this.#current?.removeAttribute("selected")
            const nodes = this.#nodes()
            const idx = Math.min(nextIndex, nodes.length)
            this.#current = nodes[idx] ?? null
            this.#index = idx
            this.#current?.setAttribute("selected", "")
            this.#value = (
                this.#current?.value
                ?? this.#current?.getAttribute("value")
                ?? null
            )
            const preview =
                this.querySelector("[slot=selected] ws-selected") ?? this.#preview
            preview.innerHTML = (
                this.#current?.getAttribute("preview")
                ?? this.#current?.innerHTML
                ?? "No Selection"
            )
        }

        toggle() {
            if (this.getAttribute("open") === null) {
                this.open()
                return
            }
            this.close()
        }
        open() {
            this.setAttribute("open", "")
            const opts = (
                this.querySelector("ws-options")
                ?? this.shadow.querySelector("ws-options")
            )
            opts.scrollTop = 0
            this.#current?.scrollIntoView()
        }
        close() { this.removeAttribute("open") }

        connectedCallback() {
            this.addEventListener(
                "click",
                (evt) => {
                    this.toggle()
                    if (evt.target === this) {
                        return
                    }

                    this.selectedIndex = this.#nodes().indexOf(evt.target)
                    const changed = new Event("change")
                    this.dispatchEvent(changed)
                },
                { capture: true, passive: true }
            )
            this.addEventListener(
                "keydown",
                (evt) => {
                    if (evt.key !== "Escape") {
                        return
                    }
                    this.close()
                }
            )
            this.shadow.querySelector("modal-overlay").addEventListener(
                "click",
                () => this.close()
            )
        }

        disconnectedCallback() {
            this.#observer.disconnect()
        }
    }
)
