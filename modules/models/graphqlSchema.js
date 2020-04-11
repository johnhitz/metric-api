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
    cell_phone: String,
    home_phone: String,
    alt_phone: String,
    email: String
  },
  type Query {
    products: [Product],
    product(id: ID!): Product,
    customers: [Customer],
    customer(id: ID, name: String, contact: String, cell_phone: String, home_phone: String): Customer
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


    addCustomer(
      name: String!,
      contact: String!,
      cell_phone: String,
      home_phone: String,
      alt_phone: String,
      email: String): Customer
  }
`

module.exports = typeDefs
