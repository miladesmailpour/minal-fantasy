const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    userName: String!
    email: String!
  }

  type Query {
    getUser(id: ID!): User
    Users: [User]
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
  }

  input CreateUserInput {
    firstName: String!
    lastName: String!
    userName: String!
    email: String!
  }
`;

module.exports = typeDefs;
