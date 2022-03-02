const express = require("express");
const router = express.Router();
const { getPrivateRoute } = require("../controllers/jwtExample");
const { protect } = require("../middleWare/autho");

router.route("/").get(protect, getPrivateRoute);

module.exports = router;
