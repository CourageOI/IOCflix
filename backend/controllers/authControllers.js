const User = require("../models/Users");
const accessToken = require("../utils/accessToken");
const asyncHandler = require("express-async-handler");

exports.register = asyncHandler(async (req, res) => {
  const { username, email, password, profilePic, isAdmin } = req.body;

  const userExist = await User.findOne({ email, username });
  if (userExist) {
    res.status(401);
    throw new Error("Username or Email already exist");
  }
  const user = await User.create({
    username,
    email,
    password,
    profilePic,
    isAdmin,
  });

  if (user) {
    res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      password: user.password,
      isAdmin: user.isAdmin,
      token: accessToken(user._id, user.isAdmin),
    });
  } else {
    res.status(400);
    throw new Error("Error occurred");
  }
});

exports.login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      password: user.password,
      isAdmin: user.isAdmin,
      token: accessToken(user._id, user.isAdmin),
    });
  } else {
    res.status(401);
    throw new Error("Wrong email or password");
  }
});
