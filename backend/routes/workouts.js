const express = require("express");
const { 
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
} = require("../controllers/workoutController");
const requireAuth = require("../middleware/requireAuth"); 

const router = express.Router();

// middleware
router.use(requireAuth)

// GET all the workouts
router.get('/', getWorkouts)

// GET a single workout based on ID
router.get('/:id', getWorkout)

// POST a new workout
router.post('/', createWorkout)

// DELETE a workout
router.delete('/:id', deleteWorkout)

// UPDATE a workout
router.patch('/:id', updateWorkout)



module.exports = router