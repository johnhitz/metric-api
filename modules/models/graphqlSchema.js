const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Product {
    _id: ID,
    name: String,
    bill_unit: String,
    price_per_acre: Float
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
      bill_unit: String!,
      price_per_acre: Float!): Product,

    updateProduct(
      name: String!,
      bill_unit: String,
      price_per_acre: Float
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
