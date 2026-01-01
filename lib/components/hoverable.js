export default `
    over: hidden;
    pos: relative;

    ! |pointer: fine| {
        ! &::before {
            *content: "";
            pos: absolute;
            y: 0px;
            x: 0px;
            -y: 0px;
            -x: 0px;
            *pointer-events: none;
            o: 0;
            bg.c: @active;
        }
        ! &:where(:not(:disabled)):hover::before {
            tr: none;
            o: 0.1;
        }
    }
`
