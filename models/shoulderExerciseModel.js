const mongoose = require('mongoose');

const shoulderExerciseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  muscle: {
    type: String,
    required: true
  },
  muscleWorked: {
    type: String,
    required: true
  },
  equipment: {
    type: String,
    required: true
  },
  reps: {
    type: Number,
    required: true
  },
  sets: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  unit: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  }
});

const ShoulderExercise = mongoose.model('ShoulderExercise', shoulderExerciseSchema, 'shoulderexercises');

module.exports = ShoulderExercise;