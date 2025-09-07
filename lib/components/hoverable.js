export default `
    *overflow: hidden;
    *position: relative;

    ! |pointer: fine| {
        ! &::before {
            *content: "";
            *position: absolute;
            *top: 0px;
            *left: 0px;
            *bottom: 0px;
            *right: 0px;
            *pointer-events: none;
            *opacity: 0;
            *background-color: @text;
        }
        ! &:where(:not(:disabled)):hover::before {
            *transition: none;
            *opacity: 0.1;
        }
    }
`
