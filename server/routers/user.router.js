const router = require('express').Router();
const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// dfasd
// Register user
router.post('/', async (req, res) => {
  try {
    const { firstName, email, username, password, passwordVerify, habits } =
      req.body;

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

    const existingUserEmail = await User.findOne({ email });
    if (existingUserEmail)
      return res.status(400).json({
        errorMessage: 'An account with this email already exists',
      });

    const existingUsername = await User.findOne({ username });
    if (existingUsername)
      return res.status(400).json({
        errorMessage: 'An account with this username already exists',
      });

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      email,
      username,
      passwordHash,
      habits,
    });

    const savedUser = await newUser.save();

    const token = jwt.sign(
      {
        user: savedUser._id,
      },
      process.env.JWT_SECRET
    );

    res
      .cookie('token', token, {
        httpOnly: true,
      })
      .send();
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

// Log in user
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password)
      return res
        .status(400)
        .json({ errorMessage: 'Please enter all required fields' });

    const existingUser = await User.findOne({ username });
    if (!existingUser)
      return res.status(401).json({
        errorMessage: 'Username or password is incorrect',
      });

    const passwordCorrect = await bcrypt.compare(
      password,
      existingUser.passwordHash
    );
    if (!passwordCorrect)
      return res.status(401).json({
        errorMessage: 'Username or password is incorrect',
      });

    const token = jwt.sign(
      {
        user: existingUser._id,
      },
      process.env.JWT_SECRET
    );

    //  console.log(existingUser);
    res
      .cookie('token', token, {
        httpOnly: true,
      })
      .send(existingUser._id);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

// Log out user
router.get('/logout', (req, res) => {
  res
    .cookie('token', '', {
      httpOnly: true,
      expires: new Date(0),
    })
    .send();
});

// User is logged in
router.get('/loggedIn', (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) return res.json(false);

    jwt.verify(token, process.env.JWT_SECRET);

    res.send(true);
  } catch (err) {
    res.json(false);
  }
});

// router.get('/welcome', async (req, res) => {
//   try {
//     await User.find({}).then(users => {
//       res.json(users);
//     });
//   } catch (err) {
//     console.log(err);
//   }
// });

router.get('/login', async (req, res) => {
  try {
    await User.find({}).then(users => {
      res.send(users);
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
