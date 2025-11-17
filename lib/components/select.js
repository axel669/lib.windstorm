import html from "#com/html"
import { component } from "#lib/macro"
import hoverable from "#com/hoverable"
import clickable from "#com/clickable"

import { preloadIcons } from "#lib/icon-processor"

const iconName = "caret-down-filled"
preloadIcons(iconName)
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
        --color: var(--plain);
        --modal-color: transparent;
        --anim-time: 200ms;
        --max-height: 200px;
        display: inline-grid;
        grid-template-rows: 1fr 0px;
        user-select: none;
        cursor: default;
        position: relative;
        border: 1px solid var(--color);
        border-radius: var(--base-radius);
        padding: 4px;
    }

    slot[name=options] {
        display: block;
        overflow: visible;
    }
    ws-options {
        box-sizing: border-box;
        border: 1px solid var(--color);
        border-radius: var(--base-radius);
        display: grid;
        position: absolute;
        max-height: var(--max-height);
        overflow: auto;
        background-color: var(--background-layer);
        grid-template-columns: 1fr;
        border-radius: var(--base-radius);
        box-shadow: 0px 2px 4px var(--shadow-color);
        visibility: none;
        transform: scaleY(0);
        transition:
            visibility var(--anim-time) linear,
            transform var(--anim-time) linear
        ;
    }
    :host([open]) ws-options {
        transform: scaleY(1);
        visibility: visible;
    }
    @media (pointer: fine) {
        ws-options {
            top: calc(var(--y) + var(--h));
            left: var(--x);
            width: var(--w);
            transform-origin: top center;
        }
        :host([direction="up"]) ws-options {
            top: unset;
            bottom: calc(100% - var(--y));
            transform-origin: bottom center;
        }
    }
    @media (pointer: coarse) {
        ws-options {
            transform-origin: bottom center;
            bottom: 0px;
            left: 0px;
            right: 0px;
        }
    }

    value-display {
        display: grid;
        user-select: none;
        grid-template-columns: 1fr min-content;
        height: 100%;
    }
    value-display:focus {
        outline: none;
    }
    ws-sel-caret {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 4px;
    }
    ws-sel-caret::before {
        display: block;
        font-family: ws-icon-${iconName};
        content: attr(data-icon);
        height: 10px;
    }
    slot[name="selected"] {
        display: flex;
        align-items: center;
    }
    :host(:focus) {
        outline: -webkit-focus-ring-color auto 1px;
    }
</style>

<value-display tabindex="-1">
    <slot name="selected">
        <ws-selected>No Selection</ws-selected>
    </slot>
    <ws-sel-caret data-icon="${iconName}"></ws-sel-caret>
</value-display>
<ws-popover>
    <slot slot="popover" name="options">
        <ws-options>
            <slot></slot>
        </ws-options>
    </slot>
</ws-popover>
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
        #popover = null
        #preview = null
        #shadow = null
        #valueDisplay = null

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

            this.#shadow = this.attachShadow({
                mode: "closed",
                delegatesFocus: true,
            })
            this.#shadow.append(
                template()
            )
            this.#preview = this.#shadow.querySelector("ws-selected")
            this.#popover = this.#shadow.querySelector("ws-popover")
            this.#valueDisplay = this.#shadow.querySelector("value-display")
            this.#popover.sizeTarget = this
            this.removeAttribute("open")
        }

        connectedCallback() {
            this.tabIndex = this.getAttribute("tabindex") ?? "0"
            const o = new MutationObserver(this.#changes.bind(this))
            o.observe(this, { childList: true, subtree: true })
            this.#observer = o

            this.role = "combobox"
            this.addEventListener(
                "click",
                () => {
                    this.toggle()
                    this.#valueDisplay.focus()
                },
                { passive: true }
            )
            this.#popover.addEventListener(
                "close",
                () => this.close()
            )
            this.#popover.addEventListener(
                "pointerdown",
                (e) => e.preventDefault()
            )
            this.#shadow.querySelector("slot[name='options']").addEventListener(
                "pointerdown",
                (e) => e.preventDefault()
            )
            this.#shadow.querySelector("slot[name='options']").addEventListener(
                "click",
                (e) => {
                    const tag = e.target.tagName?.toLowerCase()
                    if (tag !== "ws-option") {
                        return
                    }
                    this.selectedIndex = this.#nodes().indexOf(e.target)
                    this.close()
                    this.dispatchEvent(
                        new Event("change")
                    )
                    this.dispatchEvent(
                        new Event("input")
                    )
                }
            )
        }

        disconnectedCallback() {
            this.#observer.disconnect()
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
                ?? this.getAttribute("blank")
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
            this.#popover.show()
            const opts = (
                this.querySelector("ws-options")
                ?? this.#shadow.querySelector("ws-options")
            )
            opts.scrollTop = 0
            this.#current?.scrollIntoView()
        }
        close() {
            this.removeAttribute("open")
            this.#popover.hide()
        }
    }
)
