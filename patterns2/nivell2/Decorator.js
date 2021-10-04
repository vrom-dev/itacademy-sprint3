const converter = require('./currency_conversions.json')

function Decorator (product) {
  product.toEUR = function () {
    const converterKeys= Object.keys(converter)
    const conversionRate = converterKeys.find(rate => rate === `${product.currency}_EUR`)
    const priceInEUR = Math.round(product.price * converter[conversionRate] * 100)/100 
    product.priceInEUR = priceInEUR
    product.info = `Product: ${product.name}, Price: { ${product.currency}: ${product.price}, EUR: ${product.priceInEUR} }`
  }
  product.printInfo = function () {
    if (product.priceInEUR === undefined) {
      product.toEUR()
    }
    console.log(this.info)
  }
  return product
}

module.exports = { Decorator }