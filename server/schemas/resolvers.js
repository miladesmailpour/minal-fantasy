const User = require("../models/User");

const resolvers = {
  Query: {
    Users: async () => {
      try {
        const users = await User.find({});
        return users;
      } catch (error) {
        throw new Error("Failed to fetch users");
      }
    },
    getUser: async (_, { id }) => {
      try {
        const user = await User.findById(id);
        return user;
      } catch (error) {
        throw new Error("Failed to fetch user");
      }
    },
    getUserByEmail: async (_, { email }) => {
      try {
        const user = await User.findOne({ email });
        return user;
      } catch (error) {
        throw new Error("Failed to fetch user");
      }
    },
    getUserByUserName: async (_, { userName }) => {
      try {
        const user = await User.findOne({ userName });
        return user;
      } catch (error) {
        throw new Error("Failed to fetch user");
      }
    },
  },
  Mutation: {
    createUser: async (_, { input }) => {
      try {
        const user = await User.create(input);
        return user;
      } catch (error) {
        throw new Error("Failed to create user" + error);
      }
    },
  },
};

module.exports = resolvers;
