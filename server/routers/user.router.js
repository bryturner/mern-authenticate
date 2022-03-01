const router = require('express').Router();
const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/', async (req, res) => {
  try {
    const { firstName, email, username, password, passwordVerify } = req.body;

    //  Validation
    // Capture error and display on front-end
    if (!firstName || !email || !username || !password || !passwordVerify)
      return res
        .status(400)
        .json({ errorMessage: 'Please enter all required fields' });

    if (password.length < 8)
      return res.status(400).json({
        errorMessage: 'Password must be at least 8 characters long',
      });

    if (password !== passwordVerify)
      return res.status(400).json({
        errorMessage: 'Please enter the same password twice',
      });

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({
        errorMessage: 'An account with this email already exists',
      });

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      email,
      username,
      passwordHash,
    });

    const savedUser = await newUser.save();
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

module.exports = router;
