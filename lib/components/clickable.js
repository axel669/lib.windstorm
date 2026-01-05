export default `
    over: hidden;
    pos: relative;
    cur: pointer;

    ! &::after {
        *content: "";
        pos: absolute;
        y: 0px;
        x: 0px;
        -y: 0px;
        -x: 0px;
        *pointer-events: none;
        o: 0;
        bg.c: @active;
        tr: opacity @anim-time linear;
    }
    ! &:where(:not(:disabled)):active::after {
        tr: none;
        o: 0.3;
    }
`
