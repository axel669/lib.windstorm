export const config = {
    attr: "ws-x",
    // Using a window variable is not the coolest method, but when a script is
    // loaded in an async tag, it's much more difficult to get the tag details
    // to pull out config in a cooler way.
    ...window.windstormConfig
}
