const Movie = require("../models/Movies");
const asyncHandler = require("express-async-handler");

// CREATE
exports.createMovie = asyncHandler(async (req, res) => {
  if (req.user.isAdmin) {
    const newMovie = await new Movie(req.body);
    try {
      const saveMovie = await newMovie.save();
      res.status(201).json(saveMovie);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403);
    throw new Error("You are not authorized to perform this operation");
  }
});

// UPDATE
exports.updateMovie = asyncHandler(async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const updateMovie = await Movie.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updateMovie);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403);
    throw new Error("You are not authorized to perform this operation");
  }
});

// DELETE
exports.deleteMovie = asyncHandler(async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await Movie.findByIdAndDelete(req.params.id);
      res.status(200).json("Movie has been deleted");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403);
    throw new Error("You are not authorized to perform this operation");
  }
});

// GET
exports.getMovie = asyncHandler(async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET RANDOM

exports.randomMovie = asyncHandler(async (req, res) => {
  const type = req.query.type;
  let randMovie;
  try {
    if (type === "series") {
      randMovie = await Movie.aggregate([
        { $match: { isSeries: true } },
        { $sample: { size: 1 } },
      ]);
    } else {
      randMovie = await Movie.aggregate([
        { $match: { isSeries: false } },
        { $sample: { size: 1 } },
      ]);
    }
    res.status(200).json(randMovie);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET ALL

exports.getAllMovies = asyncHandler(async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const movies = await Movie.find();
      res.status(200).json(movies.reverse());
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403);
    throw new Error("You are not authorized to perform this operation");
  }
});
