const { User } = require("../models");

const resolvers = {
  Query: {
    Users: async () => {
      try {
        const users = await User.find({});
        return users;
      } catch (e) {
        throw new Error("Failed to fetch users");
      }
    },
    getUser: async (_, { id }) => {
      try {
        const user = await User.findById(id);
        return user;
      } catch (e) {
        throw new Error("Failed to fetch user");
      }
    },
    getUserByEmail: async (_, { email }) => {
      try {
        const user = await User.findOne({ email });
        return user;
      } catch (e) {
        throw new Error("Failed to fetch user");
      }
    },
    getUserByUserName: async (_, { userName }) => {
      try {
        const user = await User.findOne({ userName });
        return user;
      } catch (e) {
        throw new Error("Failed to fetch user");
      }
    },
  },
  Mutation: {
    createUser: async (_, { input }) => {
      try {
        const user = await User.create(input);
        return user;
      } catch (e) {
        throw new Error("Failed to create user");
      }
    },
  },
};

module.exports = resolvers;
