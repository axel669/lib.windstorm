import { component } from "#lib/macro"

component("ws-text")`
    ! &[title] {
        *font-size: 28px;
        *display: flex;
        *flex-direction: column;
        *padding: 0px 8px;
        *align-items: start;
        *justify-content: center;
    }
    ! &[header] {
        *font-size: 22px;
        *display: flex;
        *flex-direction: column;
        *padding: 0px 8px;
        *align-items: start;
        *justify-content: center;
    }
    ! &[subtitle] {
        *display: inline-block;
        *font-size: 14px;
        *padding: 0px 8px;
    }
    ! &[subtext] {
        *display: inline-block;
        *font-size: 10px;
    }
`
