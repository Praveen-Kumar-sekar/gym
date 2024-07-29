const express = require("express");
const router = express.Router();
const { createShoulderExercise, 
    getShoulderExercise, 
    getAllShoulderExercises, 
    updateShoulderExercise, 
    deleteShoulderExercise } = require('../controller/shoulderCtrl');

router.post('/', createShoulderExercise);
router.get('/:id', getShoulderExercise);
router.get('/', getAllShoulderExercises);
router.put('/:id', updateShoulderExercise);
router.delete('/:id', deleteShoulderExercise);

module.exports = router;