import { component } from "#lib/macro"

component("label[control][data-ws]")`
    @color: @primary;
    @active-color: @plain;

    pos: relative;
    disp: inline-grid;
    gr.areas: "label label label" "start control end" "extra extra extra";
    gr.rows: minmax(0px, min-content) auto minmax(0px, min-content);
    gr.cols: minmax(0px, min-content) auto minmax(0px, min-content);
    *user-select: none;
    over: hidden;
    b: 1px solid @active-color;
    bg.c: @background-element;
    r: @base-radius;

    ! &:focus-within {
        @active-color: @color;
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
        t.c: @text-color-normal;
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
            t.c: @text-color-normal;
            bg.c: transparent;
            b.w: 0px;
            t.deco: underline;
        }
    }

    ! & > [data-label] {
        area: label;
        p: 4px;
        disp: flex;
        fl.dir: column;
        fl.cross: start;
        t.c: @active-color;
        t.ws: nowrap;
        t.sz: @text-size-subtitle;
    }
`
