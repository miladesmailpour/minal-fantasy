const jwt = require("jsonwebtoken");

const secret = "Minal Fantasy Secret";
const expiration = "1h";

module.exports = {
  signToken: async ({ email, userName, _id }) => {
    const payload = { email, userName, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
