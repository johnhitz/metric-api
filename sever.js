const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const gqlHTTP = require("express-graphql");
const { makeExecutableSchema } = require('graphql-tools')

const mongoose = require('./config/database');

const typeDefs = require('./modules/models/graphqlSchema');
const resolvers = require('./modules/models/resolvers');

const schema = makeExecutableSchema({ typeDefs, resolvers })

const server = new ApolloServer({ typeDefs, resolvers });

const PORT = 3333

const app = express();

app.use(
  "/graphql",
  gqlHTTP({ schema: schema, rootValue: root, graphiql: true })
);

server.applyMiddleware({ app });

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}${server.graphqlPath}`);
});
