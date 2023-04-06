const fireEach = (array, args) => {
    if (array === undefined) {
        return
    }
    for (let index = 0; index < array.length; index += 1) {
        array[index](...args)
    }
}

const signal = () => {
    let handlers = []
    const signal = (handler) => {
        handlers.push(handler)
        return () => {
            const index = handlers.indexOf(handler)
            if (index === -1) {
                return
            }
            handlers.splice(index, 1)
        }
    }
    signal.enabled = true
    signal.fire = (...args) => {
        if (signal.enabled === false) {
            return
        }
        fireEach(handlers, args)
    }
    signal.clear = () => {
        handlers = []
    }

    return signal
}

export default signal
