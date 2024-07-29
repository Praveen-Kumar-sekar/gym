const asyncHandler = require('express-async-handler');
const ShoulderExercise = require('../models/shoulderExerciseModel');

const createShoulderExercise = asyncHandler(async (req, res) => {
  try {
    const newExercise = await ShoulderExercise.create(req.body);
    res.json(newExercise);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Invalid request payload' });
  }
});

const getShoulderExercise = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const exercise = await ShoulderExercise.findById(id);
    res.json(exercise);
  } catch (error) {
    throw new Error(error);
  }
});

const getAllShoulderExercises = asyncHandler(async (req, res) => {
  try {
    const exercises = await ShoulderExercise.find();
    res.json(exercises);
  } catch (error) {
    throw new Error(error);
  }
});

const updateShoulderExercise = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const exercise = await ShoulderExercise.findByIdAndUpdate(id, req.body, { new: true });
    res.json(exercise);
  } catch (error) {
    throw new Error(error);
  }
});

const deleteShoulderExercise = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const exercise = await ShoulderExercise.findByIdAndDelete(id);
    res.json(exercise);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createShoulderExercise,
  getShoulderExercise,
  getAllShoulderExercises,
  updateShoulderExercise,
  deleteShoulderExercise
};