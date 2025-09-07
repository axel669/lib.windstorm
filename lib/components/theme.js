import { macro } from "../macro.js"

macro("#theme.tron")`
    *background-color: black;
    *color: white;
    @font: Tektur;

    @primary: hsl(166, 70%, 60%);
    @accent: hsl(202, 70%, 60%);
    @info: hsl(238, 70%, 60%);
    @success: hsl(130, 85%, 60%);
    @warning: hsl(50, 85%, 60%);
    @error: hsl(10, 85%, 60%);
`
