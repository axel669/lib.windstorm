import { component } from "#lib/macro"

component("label[control][data-ws]")`
    @color: @primary;
    @active: @mono;

    pos: relative;
    disp: inline-grid;
    gr.areas: "label label label" "start control end" "extra extra extra";
    gr.rows: minmax(0px, min-content) auto minmax(0px, min-content);
    gr.cols: minmax(0px, min-content) auto minmax(0px, min-content);
    *user-select: none;
    over: hidden;
    b: 0px solid hsl(@color, @layer-border);
    bg.c: hsl(@active, @layer-container);
    r: @base-radius;

    ! &:focus-within {
        @active: @color;
    }

    ! &:has(:not(button):disabled) {
        *filter: saturate(50%) brightness(0.7);
    }

    ! & > :is(input, select, ws-select, textarea) {
        area: control;
        b.w: 0px;
        @color: inherit;
        ! &:focus {
            outln: none;
        }
    }

    ! & > :where(input, textarea) {
        t.c: hsl(@mono, @layer-text);
        font: @font;
        h.min: 28px;
        w: 100%;
        h: 100%;
        p: 4px;
        bg.c: transparent;
        w.min: 16px;
    }

    ! & > :where(input[type="file"]) {
        pos: relative;
        p: 0px;

        ! &::file-selector-button {
            font: @font;
            h: 100%;
            m: 0px;
            m.r: 4px;
            p: 4px;
            t.c: hsl(@color, @layer-element);
            bg.c: transparent;
            b.w: 0px;
            t.deco: underline;
        }
    }

    ! & > [label-text] {
        area: label;
        p: 4px;
        disp: flex;
        fl.dir: column;
        fl.cross: start;
        t.c: hsl(@color, @layer-element);
        t.ws: nowrap;
        t.sz: @text-size-normal;
    }
`
