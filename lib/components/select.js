import html from "#com/html"
import { component } from "#lib/macro"
import hoverable from "#com/hoverable"
import clickable from "#com/clickable"
import colors from "#com/colors"

import { preloadIcons } from "#lib/icon-processor"

const iconName = "caret-down-filled"
preloadIcons(iconName)
component("ws-option")`
    ${colors("@layer-element", "@layer-fill")}

    disp: block;
    p: 8px;
    *pointer-events: auto;
    t.c: @text-color-normal;
    w.min: fit-content;

    ! &[selected] {
        bg.c: @core-color;
        t.c: @alt-color;
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
        bg.c: hsl(@color, @layer-container);
    }

    ! & > * {
        col: 2;
    }
`
const template = html`
<style>
    :host {
        --color: var(--mono);
        --modal-color: transparent;
        --max-height: 250px;
        --core-color: hsl(var(--color), var(--layer-border));
        --alt-color: hsl(var(--color), var(--layer-surface));
        display: inline-grid;
        grid-template-rows: 1fr 0px;
        user-select: none;
        cursor: default;
        position: relative;
        border: 1px solid var(--core-color);
        border-radius: var(--base-radius);
        padding: 4px;
    }

    slot[name=options] {
        display: block;
        overflow: visible;
    }
    ws-options {
        box-sizing: border-box;
        border: 1px solid var(--core-color);
        border-radius: var(--base-radius);
        color: hsl(var(--mono), var(--layer-text));
        display: grid;
        position: absolute;
        max-height: var(--max-height);
        overflow: auto;
        background-color: var(--alt-color);
        grid-template-columns: 1fr;
        border-radius: var(--base-radius);
        box-shadow: 0px 2px 4px var(--shadow-color);
        opacity: 0;
        transform: translateY(10px);
        visibility: none;
        transition:
            opacity var(--anim-time) ease-out,
            transform var(--anim-time) ease-out,
            visibility var(--anim-time) ease-out
        ;

        --sign: sign(var(--y) - 100vh + var(--opt-h));
        --pos: calc(
            var(--y)
            - calc(
                max(var(--sign), 0)* (var(--opt-h) - var(--h))
            )
        );
        top: var(--pos);
        left: var(--x);
        width: var(--w);
        transform-origin: top center;
    }
    :host([open]) ws-options {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
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
        padding-right: 0px;
        width: 24px;
    }
    ws-sel-caret::before {
        display: block;
        font-family: ws-icon-${iconName};
        content: attr(data-icon);
    }
    slot[name="selected"] {
        display: none;
    }
    slot[name="display"] {
        display: flex;
        align-items: center;
    }
    :host(:focus:not(:disabled)) {
        outline-style: auto;
        outline-width: 1px;
    }

    ws-popover {
        --anim-time: unset;
    }

    :host(:disabled) {
        filter: saturate(50%) brightness(0.8);
    }
</style>

<value-display tabindex="0">
    <slot name="selected">
        <ws-selected>No Selection</ws-selected>
    </slot>
    <slot name="display"></slot>
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
            this.updatePreview()
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
            this.#preview = this.#shadow.querySelector("slot[name=selected]")
            this.#popover = this.#shadow.querySelector("ws-popover")
            this.#valueDisplay = this.#shadow.querySelector("value-display")
            this.#popover.sizeTarget = this
            this.removeAttribute("open")
            this.display = document.createElement("ws-display")
            this.display.slot = "display"
        }

        connectedCallback() {
            this.insertBefore(this.display, this.firstChild)
            this.updatePreview()
            this.tabIndex = this.getAttribute("tabindex") ?? "0"
            const o = new MutationObserver(this.#changes.bind(this))
            o.observe(this, { childList: true, subtree: true })
            this.#observer = o

            this.role = "combobox"
            this.addEventListener(
                "click",
                () => {
                    this.open()
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
            this.#popover.addEventListener(
                "click",
                (e) => {
                    e.stopPropagation()
                    e.preventDefault()
                }
            )
            this.#shadow.querySelector("slot[name='options']").addEventListener(
                "pointerdown",
                (e) => e.preventDefault()
            )
            this.#shadow.querySelector("slot[name='options']").addEventListener(
                "click",
                (e) => {
                    e.stopPropagation()
                    e.preventDefault()
                    const tag = e.target.tagName?.toLowerCase()
                    if (tag !== "ws-option") {
                        return
                    }
                    this.selectedIndex = this.#nodes().indexOf(e.target)
                    this.close()
                    this.dispatchEvent(
                        new Event("change", { bubbles: true })
                    )
                    this.dispatchEvent(
                        new Event("input", { bubbles: true })
                    )
                }
            )
        }

        disconnectedCallback() {
            this.#observer.disconnect()
        }

        get value() { return this.#value }
        set value(nextValue) {
            this.#value = nextValue
            if (nextValue === null) {
                this.selectedIndex = -1
                return
            }

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
                ?? this.#value
            )
            this.updatePreview()
        }

        updatePreview() {
            const preview =
                this.querySelector("[slot=selected]")
                ?? this.#preview
            this.display.innerHTML = preview.innerHTML
            this.display.querySelector("ws-selected").innerHTML = (
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
            const opts = (
                this.querySelector("ws-options")
                ?? this.#shadow.querySelector("ws-options")
            )
            const optRect = opts.getBoundingClientRect()
            opts.style.setProperty("--opt-h", `${optRect.height}px`)
            opts.style.setProperty("--opt-w", `${optRect.width}px`)
            this.#popover.show()
            opts.scrollTop = 0
            this.#current?.scrollIntoView()
        }
        close() {
            this.removeAttribute("open")
            this.#popover.hide()
        }
        __childValueMatch(child) {
            const index = this.#nodes().indexOf(child)
            this.selectedIndex = index
        }
    }
)
