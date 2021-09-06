const converter = require('./currency_conversions.json')

function decorate () {
  const converterKeys= Object.keys(converter)
  const conversionRate = converterKeys.find(rate => rate === `${this.currency}_EUR`)
  const priceInEUR = Math.round(this.price * converter[conversionRate] * 100)/100 
  this.priceInEUR = priceInEUR
  this.info = `Product: ${this.name}, Price: { ${this.currency}: ${this.price}, EUR: ${this.priceInEUR} }`
  return this
}

module.exports = { decorate }