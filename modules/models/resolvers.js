const Product = require('./product')

const resolvers = {
  Query: {
    products: () => Products.find({})
  },

  Mutation: {
    addProduct: (parent, product) => {
      const newProduct = new Product({
        name: product.name,
        rate_per_acer: product.rate_per_acer,
        multiplier: product.multiplier,
        bill_unit: product.bill_unit,
        price_per: product.price_per
      })
      return newProduct.save()
    }
  }
}

module.exports = resolvers
