import { component } from "#lib/macro"

component("a[data-ws]:not([button])")`
    @color: @primary;

    t.c: hsl(@color, @layer-element);

    ! &:visited, &:hover {
        t.c: hsl(@color, @layer-element);
    }

    ! &[disabled] {
        *pointer-events: none;
        *filter: saturation(30%) brightness(0.7);
    }
`
