import { component } from "#lib/macro"

component("ws-text")`
    ! &[title] {
        t.sz: 28px;
        disp: flex;
        fl.dir: column;
        p: 0px 8px;
        fl.cross: start;
        fl.main: center;
    }
    ! &[header] {
        t.sz: 22px;
        disp: flex;
        fl.dir: column;
        p: 0px 8px;
        fl.cross: start;
        fl.main: center;
    }
    ! &[subtitle] {
        disp: inline-block;
        t.sz: 14px;
        p: 0px 8px;
    }
    ! &[subtext] {
        disp: inline-block;
        t.sz: 10px;
    }
`
