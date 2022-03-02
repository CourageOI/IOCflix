const jwt = require("jsonwebtoken");
const User = require("../models/Users");

exports.protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    res.status(400);
    throw new Error("Not authorized to access this route");
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    const user = await User.findById(decoded.id);

    if (!user) {
      res.status(404);
      throw new Error("No user found with this id");
    }

    req.user = user;

    next();
  } catch (err) {
    res.status(401);
    throw new Error("Not authorized to access this router");
  }
};
