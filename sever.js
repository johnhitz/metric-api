const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors')
const axios = require('axios')


/********************************************
Dependencies
********************************************/
// const gqlHTTP = require("express-graphql");
const { makeExecutableSchema } = require('graphql-tools')

const typeDefs = require('./modules/models/graphqlSchema');
const resolvers = require('./modules/models/resolvers');

/********************************************
Database
********************************************/
const mongoose = require('./config/database');

// const schema = makeExecutableSchema({ typeDefs, resolvers })

const server = new ApolloServer({ typeDefs, resolvers });

const PORT = process.env.PORT || 3333

const app = express();

/********************************************
Middleware
********************************************/
app.use(express.json())

const whitelist = ['http://localhost:3333', 'http://deployment/url']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist) {
      callback(null, true)
    } else {
      callback(new Error('not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions))

server.applyMiddleware({ app });

/********************************************
Routes
********************************************/
// app.post('/customer/add/:name/:contact/:cell_phone/:home_phone/:alt_phone/:email', (req, res) => {
//   let response = null
//   console.log("Added new customer: ", req.params.name);
//   axios({
//     url: `http://localhost:3333/graphql`,
//     method: 'POST',
//     data: {
//       query: `
//         mutation {
//           addCustomer(
//             name: "${req.params.name}",
//             contact: "${req.params.contact}",
//             cell_phone: "${req.params.cell_phone}",
//             home_phone: "${req.params.home_phone}",
//             alt_phone: "${req.params.alt_phone}",
//             email: "${req.params.email}"
//           ){
//             _id
//             name
//             contact
//             cell_phone
//             home_phone
//             alt_phone
//             email
//           }
//         }
//       `
//     }
//   })
//   .then((result) => {
//     response = result.data
//     console.log(response.data)
//     res.send(response.data.customer)
//   })
// })
app.get('/customer/name/:name/', (req, res) => {
  let response = null
  console.log(req.params.name);
  axios({
    url: `http://localhost:3333/graphql`,
    method: 'POST',
    data: {
      query: `
        query {
          customer(name: "${req.params.name}"){
            _id
            name
            contact
            cell_phone
            home_phone
            alt_phone
            email
          }
        }
      `
    }
  })
  .then((result) => {
    response = result.data
    console.log(response.data)
    res.send(response.data.customer)
  })
})

app.get('/customers', (req, res) => {
  let response = null
  axios({
    url: `http://localhost:3333/graphql`,
    method: 'POST',
    data: {
      query: `
        query{
          customers{
            _id
            name
            contact
            cell_phone
            home_phone
            alt_phone
            email
          }
        }
      `
    }
  })
  .then((result) => {
    response = result.data
    // console.log(response.data.customers);
    res.send(response.data.customers)
  })
})

app.get('/products', (req, res) => {
  let response = null
  axios({
    url: `http://localhost:3333/graphql`,
    method: 'POST',
    data: {
      query: `
        query{
          products{
            _id
            name
            rate_per_acer
            multiplier
            bill_unit
            price_per
          }
        }
      `
    }
  })
  .then((result) => {
    response = result.data
    // console.log(response.data.products);
    res.send(response.data.products)
  })
})


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}${server.graphqlPath}`);
});
