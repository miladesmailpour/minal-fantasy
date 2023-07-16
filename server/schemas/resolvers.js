const { AuthenticationError } = require("apollo-server-express");
const User = require("../models/User");
const Game = require("../models/Game");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      try {
        const users = await User.find({}).populate("gameId");
        return users;
      } catch (error) {
        throw new Error("Failed to fetch users: " + error.message);
      }
    },
    getUser: async (parent, { _id }) => {
      try {
        const user = await User.findById(_id).populate("gameId");
        return user;
      } catch (error) {
        throw new Error("Failed to fetch user: " + error.message);
      }
    },
    getByEmailUserName: async (parent, { userNameOrEmail }) => {
      try {
        let user;
        if (userNameOrEmail.includes("@")) {
          user = await User.findOne({ email: userNameOrEmail }).populate(
            "gameId"
          );
        } else {
          user = await User.findOne({ userName: userNameOrEmail }).populate(
            "gameId"
          );
        }

        return user;
      } catch (error) {
        throw new Error("Failed to fetch user: " + error.message);
      }
    },
    games: async (parent, { email }) => {
      const params = email ? { email } : {};
      return Game.find(params).sort({ createdAt: -1 });
    },
  },
  Mutation: {
    createUser: async (parent, { input }) => {
      try {
        const { firstName, lastName, email, password } = input;
        const game = await Game.create({ name: "minal-fantasy", level: 0 });
        const user = await User.create({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          gameId: game._id,
        });
        const token = signToken(user);
        return { token, user };
      } catch (error) {
        throw new Error("Failed to create user: " + error.message);
      }
    },
    login: async (parent, { email, password }) => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          throw new AuthenticationError(
            `No user found with this email ${email}`
          );
        }

        const verifiedPassword = await user.isCorrectPassword(password);
        if (!verifiedPassword) {
          throw new AuthenticationError("Incorrect credentials");
        }

        const token = signToken(user);
        return { token, user };
      } catch (error) {
        throw new Error("Failed to login: " + error.message);
      }
    },
  },
};

module.exports = resolvers;
