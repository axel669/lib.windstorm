import { component } from "#lib/macro"

component("a[data-ws]:not([button])")`
    @color: @primary;

    ! &:visited, &:hover {
        *color: @color;
    }

    ! &[disabled] {
        *pointer-events: none;
    }
`
