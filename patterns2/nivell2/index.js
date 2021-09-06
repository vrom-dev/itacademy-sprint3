const { Product } = require('./Product')
const { decorate } = require('./Decorator')


const macbookAirM1 = new Product('macbook air m1 256gb', 1124.90, 'USD')
const macbookProM1 = new Product('macbook pro m1 256gb', 149500, 'JPY')


decorate.apply(macbookAirM1).printInfo()
macbookProM1.printInfo()