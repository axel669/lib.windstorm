import { component } from "#lib/macro"

component("a[data-ws]:not([button])")`
    @color: @plain;

    ! &:visited, &:hover {
        t.c: @color;
    }

    ! &[disabled] {
        *pointer-events: none;
    }
`
