import { component } from "#lib/macro"

component("ws-text")`
    ! &[title] {
        t.sz: @text-size-title;
        disp: flex;
        fl.dir: column;
        p: 0px 8px;
        fl.cross: start;
        fl.main: center;
    }
    ! &[header] {
        t.sz: @text-size-header;
        disp: flex;
        fl.dir: column;
        p: 0px 8px;
        fl.cross: start;
        fl.main: center;
    }
    ! &[subtitle] {
        disp: inline-block;
        t.sz: @text-size-subtitle;
        p: 0px 8px;
    }
    ! &[info] {
        disp: inline-block;
        t.sz: @text-size-info;
    }
`
