function WindstormError(...args) {
    const instance = Reflect.construct(Error, args)
    Reflect.setPrototypeOf(instance, Reflect.getPrototypeOf(this))
    return instance
}
WindstormError.prototype = Object.create(Error.prototype, {
    constructor: {
        value: Error,
        enumerable: false,
        writable: true,
        configurable: true
    }
})
Reflect.setPrototypeOf(WindstormError, Error)

export default WindstormError
