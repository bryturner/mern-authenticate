const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5010;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

app.use(express.json());
app.use(cookieParser());

mongoose.connect(
  process.env.MONGO_DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => (err ? console.error(err) : console.log('Connected to DB'))
);

app.use('/auth', require('./routers/user.router'));
app.use('/habit', require('./routers/habit.router'));
