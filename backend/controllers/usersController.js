const User = require("../models/Users");
const asyncHandler = require("express-async-handler");

// UPDATE
exports.userUpdate = asyncHandler(async (req, res, next) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
      const userUpdate = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );
      res.status(200).json(userUpdate);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403);
    throw new Error("You can only update your account");
  }
});

// DELETE

exports.deleteUser = asyncHandler(async (req, res, next) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
      await User.findByIdAndDelete(req.params.id);

      res.status(200).json("User has been removed from database");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403);
    throw new Error("You are not authorirized to perform this operation");
  }
});

// GET USER
exports.findUser = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GETALL USERS
exports.findAllUsers = asyncHandler(async (req, res) => {
  const query = req.query.new;
  if (req.user.isAdmin) {
    try {
      const users = query
        ? await User.find().select("-password").limit(10)
        : await User.find().select("-password");
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(401);
    throw new Error("You are not allowed to perform this operation");
  }
});

// USER STATS
exports.userStats = asyncHandler(async (req, res) => {
  const today = new Date();
  const lastYear = today.setFullYear(today.setFullYear() - 1);
  const monthArray = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  try {
    const data = await User.aggregate([
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});
