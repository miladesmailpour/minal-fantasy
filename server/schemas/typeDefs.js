const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    userName: String
    email: String
    password: String
  }
  input CreateUserInput {
    firstName: String!
    lastName: String
    email: String!
    password: String!
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    users: [User]
    getUser(_id: ID!): User
    getByEmailUserName(userNameOrEmail: String!): User
  }
  type Mutation {
    createUser(input: CreateUserInput!): Auth
  }
`;

module.exports = typeDefs;
