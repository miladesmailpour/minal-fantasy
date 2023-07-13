const { User } = require('../models');

const resolvers = {
  Query: { 
    Users: async ()=>{
      return await User.find({})
    }
   },
  // Mutation: {  },
};

module.exports = resolvers;
