const Product = require('./product')
const Customer = require('./customer')

const resolvers = {
  Query: {
    products: () => { return Products.find({}) },
    customers: () => { return Customers.find({}) }
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
    },
    // updateProduct: (parent, ) => {}

    addCustomer: (parent, customer) => {
      const newCustomer = new Customer({
        name: customer.name,
        contact: customer.contact,
        name: customer.location
      })
      return newCustomer.save()
    }
  }
}

module.exports = resolvers
