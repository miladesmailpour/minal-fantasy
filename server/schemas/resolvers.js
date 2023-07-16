const User = require("../models/User");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      try {
        const users = await User.find({});
        return users;
      } catch (error) {
        throw new Error("Failed to fetch users");
      }
    },
    getUser: async (parent, { _id }) => {
      try {
        const user = await User.findById(_id);
        return user;
      } catch (error) {
        throw new Error("Failed to fetch user");
      }
    },
    getByEmailUserName: async (parent, { userNameOrEmail }) => {
      try {
        let user;
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
    createUser: async (parent, { input }) => {
      const { firstName, lastName, email, password } = input;
      try {
        const user = await User.create({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        });
        // console.log(user);
        const tokenPlayload = {
          email: user.email,
          userName: user.userName,
          _id: user._id,
        };
        // console.log(tokenPlayload);
        const token = signToken(tokenPlayload);
        // console.log(token);
        return { token, user };
      } catch (error) {
        throw new Error("Failed to create user: " + error.message);
      }
    },
  },
};

module.exports = resolvers;
