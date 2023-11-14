window.addEventListener(
    "message",
    (evt) => document.body.setAttribute("ws-x", ws.x({ $theme: evt.data }))
)
