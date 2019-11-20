const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Routes
const items = require('./routes/api/items');

const app = express();

// Bodyparser middleware
//app.use(
//  bodyParser.urlencoded({
//    extended: true,
//  })
//);

app.use(bodyParser.json());

// DB Config
const db = require('./config/keys');

// Connect to Mongo
mongoose
  .connect(db.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started at port ${port}`));
