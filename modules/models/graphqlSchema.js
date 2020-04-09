const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Product {
    _id: ID,
    name: String,
    multiplier: Int,
    bill_unit: String,
    price_per: Float
  },
  type Query {
    products: Product
  },
  type Mutation {
    addProduct(name: String!, multiplier: Int!, bill_unit: String!, price_per: Float!): Product,
  }
`

module.exports = typeDefs
