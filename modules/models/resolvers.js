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
        bill_unit: product.bill_unit,
        price_per_acre: product.price_per_acre
      })
      return newProduct.save()
    },
    // updateProduct: (parent, product) => {
    //   const updatedProduct({
    //     args: {_id: product.id,
    //       name: product.name,
    //       rate_per_acre: product.rate_per_acre,
    //       multiplier: product.bill_unit,
    //       price_per: product.price_per}
    //   })
    //   return Product.findByAndUpdate(product.id, args)
    // }

    addCustomer: (parent, customer) => {
      const newCustomer = new Customer({
        name: customer.name,
        contact: customer.contact,
        cell_phone: customer.cell_phone,
        home_phone: customer.home_phone,
        alt_phone: customer.alt_phone,
        email: customer.email
      })
      return newCustomer.save()
    },
  }
}

module.exports = resolvers
