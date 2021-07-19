class Middleware {
  constructor(target) {
    this.target = target
    this.middlewares = []
    this.req = {}

    const prototype = Object.getPrototypeOf(this.target)
    const propertyNames = Object.getOwnPropertyNames(prototype)
    propertyNames.forEach(fn => (fn !== "constructor") ? this.addFn(fn) : null);
  }

  use(middleware) {
    this.middlewares = [...this.middlewares, middleware]
  }

  runMiddlewares(i = 0) {
    if (i < this.middlewares.length) {
      this.middlewares[i].call(this, this.req, () => this.runMiddlewares(i + 1))
    }
  }

  addFn(fn) {
    this[fn] = args => {
      this.req = args
      this.req.result = this.target[fn].call(this, this.req)
      this.runMiddlewares()
      return this.req.result
    }
  }
}

module.exports = Middleware