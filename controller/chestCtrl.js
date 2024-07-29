const asyncHandler = require('express-async-handler');
const ChestExercise = require('../models/chestExerciseModel');

const createChestExercise = asyncHandler(async (req, res) => {
    try {
      const newExercise = await ChestExercise.create(req.body);
      res.json(newExercise);
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: 'Invalid request payload' });
    }
  });

const getChestExercise = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const exercise = await ChestExercise.findById(id);
    res.json(exercise);
  } catch (error) {
    throw new Error(error);
  }
});

const getAllChestExercises = asyncHandler(async (req, res) => {
  try {
    const exercises = await ChestExercise.find();
    res.json(exercises);
  } catch (error) {
    throw new Error(error);
  }
});

const updateChestExercise = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const exercise = await ChestExercise.findByIdAndUpdate(id, req.body, { new: true });
    res.json(exercise);
  } catch (error) {
    throw new Error(error);
  }
});

const deleteChestExercise = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const exercise = await ChestExercise.findByIdAndDelete(id);
    res.json(exercise);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createChestExercise,
  getChestExercise,
  getAllChestExercises,
  updateChestExercise,
  deleteChestExercise
};