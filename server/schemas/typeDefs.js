const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    userName: String
    email: String
    password: String
    gameId: Game
    createdAt: String
  }
  type Game {
    _id: ID
    name: String
    level: Int
    createdAt: String
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
    games: [Game]
  }
  type Mutation {
    createUser(input: CreateUserInput!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
