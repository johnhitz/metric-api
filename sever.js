const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors')
// const gqlHTTP = require("express-graphql");
const { makeExecutableSchema } = require('graphql-tools')

const mongoose = require('./config/database');

const typeDefs = require('./modules/models/graphqlSchema');
const resolvers = require('./modules/models/resolvers');

// const schema = makeExecutableSchema({ typeDefs, resolvers })

const server = new ApolloServer({ typeDefs, resolvers });

const PORT = process.env.PORT || 3333

const app = express();

// Middleware
app.use(express.json())

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist) {
      callback(null, true)
    } else {
      callback(new Error('not allowed by CORS'))
    }
  }
}
app.use(cors())

// app.use("/graphql", gqlHTTP({
//   schema: schema,
//   rootValue: root,
//   graphiql: true })
// );

server.applyMiddleware({ app });

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}${server.graphqlPath}`);
});
