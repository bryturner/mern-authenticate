const router = require('express').Router();
const Habit = require('../models/habit.model');
const auth = require('../middleware/auth');

router.post('/', auth, async (req, res) => {
  try {
    const {
      habitTitle,
      habitDescription,
      habitFrequency,
      habitDuration,
      checkboxColor,
    } = req.body;

    const newHabit = new Habit({
      habitTitle,
      habitDescription,
      habitFrequency,
      habitDuration,
      checkboxColor,
    });

    const savedHabit = await newHabit.save();

    res.json(savedHabit);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

module.exports = router;
