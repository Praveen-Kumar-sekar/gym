const mongoose = require('mongoose');

const chestExerciseSchema = new mongoose.Schema({
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

const ChestExercise = mongoose.model('ChestExercise', chestExerciseSchema);

module.exports = ChestExercise;