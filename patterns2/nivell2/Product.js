class Product {
  constructor(name, price, currency) {
    this.name = name
    this.price = price
    this.currency = currency
    this.info = `Product: ${this.name}, Price: { ${this.currency}: ${this.price} }`
  }
  printInfo = () => console.log(this.info)
}

module.exports = { Product }