const { User } = require("../models");

const resolvers = {
  Query: {
    Users: async () => {
      return await User.find({});
    },
    getUser: async (_, { id }) => {
      try {
        const user = await User.findById(id);
        return user;
      } catch (e) {
        throw new Error("Faild to fetch user");
      }
    },
  },
  // Mutation: {  },
};

module.exports = resolvers;
