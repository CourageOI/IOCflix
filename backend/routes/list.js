const router = require("express").Router();
const { createList } = require("../controllers/listControllers");
const { protect } = require("../middleWare/authMiddleware");

router.route("/").post(protect, createList);

module.exports = router;
