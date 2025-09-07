component(":where(ws-avatar)")`
    @color: transparent;
    @size: 36px;

    *display: inline-flex;
    *overflow: hidden;
    *border-radius: 500px;
    *align-items: center;
    *justify-content: center;
    *width: @size;
    *height: @size;
    *background-color: @color;
    *color: @text-color-fill;
    *vertical-align: text-bottom;

    !& > img {
        width: 100%;
    }
    !& > object {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
