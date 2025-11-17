import { component } from "#lib/macro"

component("label[control]")`
    @color: @primary;
    @active-color: @plain;

    *position: relative;
    *display: inline-grid;
    *grid-template-areas: "label label label" "start control end" "extra extra extra";
    *grid-template-rows: minmax(0px, min-content) auto minmax(0px, min-content);
    *grid-template-columns: minmax(0px, min-content) auto minmax(0px, min-content);
    *user-select: none;
    *overflow: hidden;
    *border: 1px solid @active-color;
    *background-color: @background-element;
    *border-radius: @base-radius;

    ! &:focus-within {
        @active-color: @color;
    }

    ! & > :is(input, select, ws-select, textarea) {
        *grid-area: control;
        *border-width: 0px;
        @color: inherit;
        ! &:focus {
            *outline: none;
        }
    }

    ! & > :where(input, textarea) {
        *color: @text-color-normal;
        *min-height: 28px;
        *width: 100%;
        *height: 100%;
        *padding: 4px;
        *background-color: transparent;
        *min-width: 16px;
    }

    ! & > :where(input[type="file"]) {
        *position: relative;
        *padding: 0px;

        ! &::file-selector-button {
            *font-family: @font;
            *height: 100%;
            *margin: 0px;
            *margin-right: 4px;
            *padding: 4px;
            *color: @text-color-normal;
            *background-color: transparent;
            *border-width: 0px;
            *text-decoration: underline;
        }
    }

    ! & > [label] {
        *grid-area: label;
        *padding: 4px;
        *display: flex;
        *flex-direction: column;
        *align-items: start;
        *color: @active-color;
        *white-space: nowrap;
        *font-size: @text-size-subtitle;
    }
`
