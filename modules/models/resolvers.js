const Product = require('./product')
const Customer = require('./customer')

const resolvers = {
  Query: {
    products: () => Product.find({}),
    product: (_, args) => Product.findById(args.id),
    customers: () => Customer.find({}),
    customer: async (_, args) => {
      const customers = await Customer.find({...args}).exec()
      return customers[0]
    }
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
    // updateProduct: (parent, product) => {
    //   const updatedProduct({
    //     args: {_id: product.id,
    //       name: product.name,
    //       rate_per_acer: product.rate_per_acer,
    //       multiplier: product.bill_unit,
    //       price_per: product.price_per}
    //   })
    //   return Product.findByAndUpdate(product.id, args)
    // }

    addCustomer: (parent, customer) => {
      const newCustomer = new Customer({
        name: customer.name,
        contact: customer.contact,
        location: customer.location
      })
      return newCustomer.save()
    }
  }
}

module.exports = resolvers
