import libInfo from "$package"

/**
@type {{
    attr: string
    origin: string
    version: string
    fontVersion: string
}}
*/
export const config = {
    attr: "ws-x",
    origin: "https://wind-cdn.axel669.net",
    // Using a window variable is not the coolest method, but when a script is
    // loaded in an async tag, it's much more difficult to get the tag details
    // to pull out config in a cooler way.
    ...window.wsConfig,
    ...libInfo,
}
