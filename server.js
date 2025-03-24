import { ApolloServer } from '@apollo/server';
import { gql } from 'graphql-tag';
import fetch from 'node-fetch';
import { startStandaloneServer } from '@apollo/server/standalone';
import cors from 'cors';
import express from 'express';

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3003',
    credentials: true,
  })
);

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    password: String!
  }

  type Query {
    login(email: String!, password: String!): User
  }
`;

const resolvers = {
  Query: {
    login: async (_, { email, password }) => {
      const response = await fetch('http://localhost:3003/users');
      const users = await response.json();
      const user = users.find(
        (user) => user.email === email && user.password === password
      );
      if (!user) {
        throw new Error('Credenciais inválidas');
      }
      return user;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  listen: { port: 4001 },
}).then(({ url }) => {
  console.log(`Servidor GraphQL rodando em ${url}`);
  app.listen(4000, () => {
    console.log('Servidor Express rodando na porta 40001');
  });
});
