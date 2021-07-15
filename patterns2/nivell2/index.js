const converter = require('./currency_conversions.json')

const Product = function (name, price, currency) {
  this.name = name
  this.price = price
  this.currency = currency
  this.printInfo = () => {
    console.log(`Product: ${this.name}, Price: { ${this.currency}: ${this.price} }`)
  }
}

const DecoratedProduct = function (product) {
  const { name, price, currency } = product
  const converterKeys= Object.keys(converter)
  const conversionRate = converterKeys.find(rate => rate.includes(`${currency}_EUR`))
  const priceInEUR = Math.round(price * converter[conversionRate] * 100)/100 
  
  this.name = name
  this.price = price
  this.currency = currency
  this.priceInEUR = priceInEUR
  this.printInfo = () => {
    console.log(`Product: ${this.name}, Price: { ${this.currency}: ${this.price}, EUR: ${this.priceInEUR} }`)
  }
}
const macbookAirM1 = new Product('macbook air m1 256gb', 1124.90, 'USD')
const macbookProM1 = new Product('macbook pro m1 256gb', 149500, 'JPY')

const macbookAirM1EUR = new DecoratedProduct(macbookAirM1)
const macbookProM1EUR = new DecoratedProduct(macbookProM1)


macbookAirM1.printInfo()
macbookAirM1EUR.printInfo()
macbookProM1.printInfo()
macbookProM1EUR.printInfo()