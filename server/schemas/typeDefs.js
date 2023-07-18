const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    userName: String
    email: String
    password: String
    game: Game
    createdAt: String
  }
  type Game {
    _id: ID!
    name: String
    level: Int!
    shop: Shop
    enemy: Enemy
    createdAt: String!
  }
  type Enemy {
    _id: ID!
    name: String
    hp: Int
    str: Int
    def: Int
    mdef: Int
    agi: Int
    xp: Int
    sprite: String
  }
  type Item {
    name: String
    category: String
    level: Int!
  }
  type Shop {
    _id: ID!
    name: String
  }
  type Cell {
    reward: Boolean!
    threat: Boolean!
    adjacentThreat: Int!
    adjacentReward: Int!
    revealed: Boolean!
    flagged: Boolean!
  }
  input MatrixInput {
    reward: Boolean!
    threat: Boolean!
    adjacentThreat: Int!
    adjacentReward: Int!
    revealed: Boolean!
    flagged: Boolean!
  }
  input CreateUserInput {
    firstName: String!
    lastName: String
    email: String!
    password: String!
  }
  input UpdateUserInput {
    firstName: String
    lastName: String
    userName: String
    password: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    users: [User]
    getUser(_id: ID!): User
    getByEmailUserName(userNameOrEmail: String!): User
    games(_id: ID!): Game
    shop: [Shop]
    getMatrix(rows: Int, columns: Int, threats: Int, rewards: Int): [[Cell!]]!
    printMatrix(matrix: [[MatrixInput]]): [[String!]]!
  }
  type Mutation {
    updateUser(id: ID!, input: UpdateUserInput!): User
    createUser(input: CreateUserInput!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
