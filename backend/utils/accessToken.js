const jwt = require("jsonwebtoken");

const accessToken = (id, isAdmin) => {
  return jwt.sign({ id, isAdmin }, process.env.SECRET_KEY, {
    expiresIn: "5d",
  });
};

module.exports = accessToken;
