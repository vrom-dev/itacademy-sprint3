const Middleware = require('./middleware')
const { a, b } = require('./data.json')

const sum = (a, b) => a + b
const substract = (a, b) => a - b
const multiply = (a, b) => a * b

const square = num => num**2
const cube = num => num**3
const half = num => num/2

const middleware = new Middleware()

middleware.use(square)
middleware.use(cube)
middleware.use(half)

console.log(middleware.run(sum(a, b))) // 1+2 = 3 => 3**2 = 9 => 9**3 = 729 => 729/2 = 364.5
console.log(middleware.run(substract(a, b))) // 1-2 = -1 => -1**2 = 1 => 1**3 = 1 => 1/2 = 0.5
console.log(middleware.run(multiply(a, b))) // 1*2 = 2 => 2**2 = 4 => 4**3 = 64 => 64/2 = 32