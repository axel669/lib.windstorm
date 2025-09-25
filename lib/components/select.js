import html from "./html.js"
import { component } from "#lib/macro"
import hoverable from "#com/hoverable"
import clickable from "#com/clickable"

component("ws-option")`
    @fill: var(--fill-color, transparent);
    @text: var(--text-color, @color);

    *display: block;
    *padding: 8px;
    *pointer-events: auto;
    t.c: @text-color-normal;

    ! &[selected] {
        bg.c: @color;
        t.c: @text-color-fill;
        b.c: @color;
    }

    ! & * {
        *pointer-events: none;
    }

    ${hoverable}
    ${clickable}
`
component("ws-optgroup")`
    grid;
    gr.cols: 16px 1fr;
    *pointer-events: none;

    ! &::before {
        *content: attr(label);
        disp: block;
        p: 8px;
        col: 1 / -1;
        bg.c: @background-element;
    }

    ! & > * {
        col: 2;
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
            position: fixed;
            top: var(--top);
            left: var(--left);
            right: calc(100% - var(--right));
            max-height: 200px;
            overflow: auto;
            background-color: var(--background-layer);
            grid-template-columns: 1fr;
            border-radius: var(--base-radius);
            box-shadow: 0px 2px 4px var(--shadow-color);
        }
        :host([direction="up"]) ws-options {
            top: unset;
            bottom: calc(100% - var(--bottom));
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
        static formAssociated = true

        #value = null
        #index = -1
        #current = null
        #observer = null
        #preview = null
        #shadow = null
        #options = null

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
                mode: "open",
                delegatesFocus: true,
            })
            shadow.appendChild(root)
            this.#shadow = shadow
            this.#options = shadow.querySelector("slot[name=options]")
            this.#preview = shadow.querySelector("ws-selected")
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
            const rect = this.getBoundingClientRect()
            this.#options.style.setProperty("--top", `${rect.top}px`)
            this.#options.style.setProperty("--left", `${rect.left}px`)
            this.#options.style.setProperty("--bottom", `${rect.bottom}px`)
            this.#options.style.setProperty("--right", `${rect.right}px`)
            const opts = (
                this.querySelector("ws-options")
                ?? this.#shadow.querySelector("ws-options")
            )
            opts.scrollTop = 0
            this.#current?.scrollIntoView()
        }
        close() { this.removeAttribute("open") }

        connectedCallback() {
            const o = new MutationObserver(this.#changes.bind(this))
            o.observe(this, { childList: true, subtree: true })
            this.#observer = o

            this.role = "combobox"
            this.addEventListener(
                "click",
                (evt) => {
                    const path = evt.composedPath().map(
                        node => node.tagName?.toLowerCase()
                    )
                    if (path.includes("slot") === false) {
                        this.toggle()
                        return
                    }
                    const target = evt.target.tagName?.toLowerCase?.()
                    if (target !== "ws-option") {
                        return
                    }

                    this.toggle()
                    this.selectedIndex = this.#nodes().indexOf(evt.target)
                    const changed = new Event("change")
                    this.dispatchEvent(changed)
                    const inputed = new Event("input")
                    this.dispatchEvent(inputed)
                },
                { passive: true }
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
        }

        disconnectedCallback() {
            this.#observer.disconnect()
        }
    }
)
