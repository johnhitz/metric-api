const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Product {
    _id: ID,
    name: String,
    rate_per_acer: Int,
    multiplier: Int,
    bill_unit: String,
    price_per: Float
  },
  type Customer {
    _id: ID,
    name: String,
    contact: String,
    location: String
  },
  type Query {
    products: [Product],
    product: Product,
    customers: [Customer],
    customer: Customer
  },
  type Mutation {
    addProduct(
      name: String!,
      multiplier: Int!,
      bill_unit: String!,
      price_per: Float!): Product,

    updateProduct(
      name: String!,
      rate_per_acer: Int,
      multiplier: Int,
      bill_unit: String,
      price_per: Float
    ): Product


    addCustomer(name: String!, contact: String!, location: String!): Customer
  }
`

module.exports = typeDefs
