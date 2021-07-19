const Middleware = require('./Middleware')
const data = require('./data.json')

class Calculator {
  add({a, b}) {
    return a + b
  }
  substract({a, b}) {
    return a - b
  }
  multiply({a, b}) {
    return a * b
  }
}

const square = (req, next) => {
  req.result = req.result**2
  next()
}

const cube = (req, next) => {
  req.result = req.result**3
  next()
}

const half = (req, next) => {
  req.result = req.result/2
  next()
}

const calculator = new Calculator()
const app = new Middleware(calculator)

app.use(square)
app.use(cube)
app.use(half)

console.log(app.add(data)) // 1+2 = 3 => 3**2 = 9 => 9**3 = 729 => 729/2 = 364.5
console.log(app.substract(data)) // 1-2 = -1 => -1**2 = 1 => 1**3 = 1 => 1/2 = 0.5
console.log(app.multiply(data)) // 1*2 = 2 => 2**2 = 4 => 4**3 = 64 => 64/2 = 32