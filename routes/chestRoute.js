const express = require("express");
const router = express.Router();
const { createChestExercise, 
    getChestExercise, 
    getAllChestExercises, 
    updateChestExercise, 
    deleteChestExercise } = require('../controller/chestCtrl');

router.post('/', createChestExercise);
router.get('/:id', getChestExercise);
router.get('/', getAllChestExercises);
router.put('/:id', updateChestExercise);
router.delete('/:id', deleteChestExercise);

module.exports = router;