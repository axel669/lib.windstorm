export default `
    *overflow: hidden;
    *position: relative;

    ! &::after {
        *content: "";
        *position: absolute;
        *top: 0px;
        *left: 0px;
        *bottom: 0px;
        *right: 0px;
        *pointer-events: none;
        *opacity: 0;
        *background-color: @text;
        *transition: opacity 150ms linear;
    }
    ! &:where(:not(:disabled)):active::after {
        *transition: none;
        *opacity: 0.3;
    }
`
