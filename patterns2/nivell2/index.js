const { Product } = require('./Product')
const { Decorator } = require('./Decorator')

//Decorated product
const macbookAir = Decorator(new Product('macbook air m1 256gb', 1124.90, 'USD'))

//Not decorated product
const macbookPro = new Product('macbook pro m1 256gb', 149500, 'JPY')

macbookAir
  .printInfo()

macbookPro
  .printInfo()