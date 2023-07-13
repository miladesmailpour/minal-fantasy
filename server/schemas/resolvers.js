const { User } = require("../models");

const resolvers = {
  Query: {
    Users: async () => {
      try{
        const users = await User.find({});
        return users
      } catch (e){
        throw new Error('Failed to fetch users');
      }
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
