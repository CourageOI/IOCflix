const asyncHandler = require("express-async-handler");
const List = require("../models/List");

//CREATE
exports.createList = asyncHandler(async (req, res) => {
  if (req.user.isAdmin) {
    const newList = new List(req.body);
    try {
      const saveList = await newList.save();
      res.status(201).json(saveList);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403);
    throw new Error("You are not authorized to perform this operation");
  }
});
//DELETE
exports.deleteList = asyncHandler(async (req, res) => {
  if (req.user.isAdmin) {
    try {
       await List.findByIdAndDelete(req.params.id)
      res.status(201).json('List has been deleted...');
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403);
    throw new Error("You are not authorized to perform this operation");
  }
});
