const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    userName: String
    email: String!
    password: String!
  }
  input CreateUserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }
  input UpdateUserInput {
    firstName: String
    lastName: String
    userName: String
    password: String
  }
  type Query {
    Users: [User!]!
    getUser(id: ID!): User
    getUserByEmail(email: String!): User
    getUserByUserName(userName: String!): User
  }
  type Mutation {
    createUser(input: CreateUserInput!): User
    updateUser(id: ID!, input: UpdateUserInput!): User
  }
`;

module.exports = typeDefs;
