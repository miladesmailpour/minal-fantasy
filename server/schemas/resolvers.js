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
    getUser: async (parent, { id }) => {
      try {
        const user = await User.findById(id);
        return user;
      } catch (error) {
        throw new Error("Failed to fetch user");
      }
    },
    getByEmailUserName: async (parent, { userNameOrEmail }) => {
      let user;
      try {
        if (userNameOrEmail.includes("@")) {
          user = await User.findOne({ email: userNameOrEmail });
        } else {
          user = await User.findOne({ userName: userNameOrEmail });
        }

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
