const router = require("express").Router();
const bcrypt = require("bcrypt");
const { protect } = require("../middleWare/authMiddleware");
const {
  userUpdate,
  deleteUser,
  findUser,
  findAllUsers,
  userStats,
} = require("../controllers/usersController");

//UPDATE
router.route("/:id").put(protect, userUpdate);
//DELETE
router.route("/:id").delete(protect, deleteUser);
//GET USER
router.route("/find/:id").get(findUser);
//GET ALL USER
router.route("/").get(protect, findAllUsers);
//GET USER STATS
router.route("/stats").get(protect, userStats);

module.exports = router;
