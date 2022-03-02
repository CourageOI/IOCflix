const mongoose = require("mongoose");

const MovieSchema = mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    descr: { type: String },
    img: { type: String },
    imgTitle: { type: String },
    imgMovie: { type: String },
    trailer: { type: String },
    fullVideo: { type: String },
    year: { type: Number },
    limit: { type: Number },
    genre: { type: String },
    isSeries: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;
