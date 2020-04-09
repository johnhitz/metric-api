const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Product {
    _id: ID,
    name: String,
    multiplier: Int,
    bill_unit: String,
    price_per: Float
  },
  type Customer {
    _id: ID,
    name: String,
    constact: String,
    location: String
  }
  type Query {
    products: Product,
    customers: Customer
  },
  type Mutation {
    addProduct(name: String!, multiplier: Int!, bill_unit: String!, price_per: Float!): Product,


    addCustomer(name: String!, contact: String!, location: String!): Customer
  }
`

module.exports = typeDefs
