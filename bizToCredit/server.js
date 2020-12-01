const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// Setup server port
const port = process.env.PORT || 3000;

// Configuring the database
const dbConfig = require('./config/config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Require Users routes
const userRoutes = require('./src/routes/userRoute')

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())


// Connecting to the database
mongoose.connect(dbConfig.url, {
useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false
})

.then(() => {
  console.log("Successfully connected to the database");
})

.catch(err => {
  console.log('Could not connect to the database.', err);
  process.exit();
});

// define a root/default route
app.get('/', (req, res) => {
  res.json({"message": "Hello World"});
});

// using as middleware
app.use('/api/v1/users', userRoutes)


// listen for requests
app.listen(port, () => {
  console.log(`Node server is listening on port ${port}`);
});