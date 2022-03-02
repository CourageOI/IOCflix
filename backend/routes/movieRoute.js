
const router = require("express").Router();
const {
  updateMovie,
  createMovie,
  randomMovie,
  getMovie,
  deleteMovie,
  getAllMovies,
} = require("../controllers/moviesController");
const { protect } = require("../middleWare/authMiddleware");

router.route("/").post(protect, createMovie);
router.route("/:id").put(protect, updateMovie);
router.route("/:id").delete(protect, deleteMovie);
router.route("/find/:id").get(protect, getMovie);
router.route("/random").get(protect, randomMovie);
router.route("/").get(protect, getAllMovies);

module.exports = router;
