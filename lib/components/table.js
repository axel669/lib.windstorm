import { component } from "#lib/macro"

component("table[data-ws]")`
    @color: @primary;

    *border-collapse: separate;
    *border-spacing: 0px;

    b.s: solid;
    b.c: hsl(@color, @layer-border);
    b.b.w: 1px;

    ! & th {
        bg.c: hsl(@color, @layer-container);
    }
    ! & :is(th, td:not(:empty)) {
        b.s: solid;
        b.c: hsl(@color, @layer-border);
        b.b.w: 1px;
        p: 4px;
    }
    ! & tbody tr:last-child :is(td, th) {
        b.b.w: 0px;
    }
    ! &[sticky-header] thead {
        pos.stick;
        y: 0px;
        z: +2;
    }
    ! &[sticky-header] th:first-child {
        pos.stick;
        z: +1;
        x: 0px;
        -x: 0px;
    }
`
