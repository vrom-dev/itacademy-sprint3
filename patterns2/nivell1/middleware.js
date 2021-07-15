class Middleware {
  constructor() {
    this.middlewares = []
  }

  use(fn) {
    this.middlewares = [...this.middlewares, fn]
  }

  run(num) {
    const reducer = (acc, middleware) => middleware(acc)
    return this.middlewares.reduce(reducer, num)
  }
}

module.exports = Middleware