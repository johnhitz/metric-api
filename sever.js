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
app.get('/customer/name/:name/', (req, res) => {
  let response = null
  console.log(req.params.name);
  axios({
    url: `http://localhost:3333/graphql`,
    method: 'post',
    data: {
      query: `
        query {
          customer(name: "${req.params.name}"){
            name
            contact
            location
          }
        }
      `
    }
  })
  .then((result) => {
    response = result.data
    console.log(response.data)
    console.log(req.query.thing);
    res.send(response.data.customer)
  })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}${server.graphqlPath}`);
});
