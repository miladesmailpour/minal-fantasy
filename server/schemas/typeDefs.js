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
    character: Character
    shop: Shop
    createdAt: String!
  }
  type Item {
    name: String
    category: String
    level: Int!
  }
  type Character {
    _id: ID!
    name: String
    class: Class
  }
  type Class {
    _id: ID!
    name: String
    lvl: Int!
    hp: Int!
    mp: Int!
    str: Int!
    int: Int!
    def: Int!
    mdef: Int!
    agi: Int!
    sprite: String
  }
  type Shop {
    _id: ID!
    name: String
    items: [Item]
  }
  type Enemy {
    _id: ID!
    name: String
    hp: Int!
    mp: Int!
    str: Int!
    int: Int!
    def: Int!
    mdef: Int!
    agi: Int!
    xp: Int!
    sprite: String
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
    games: [Game]
    enemy: [Enemy]
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
