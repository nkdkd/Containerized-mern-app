// Assign dependencies to variables.
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const app = express();
dotenv.config();
// Specify a port number to run (5000). If that is not available, use any available port.
const PORT = process.env.PORT || 5000;

app.use(cors());
/* Add the bodyParser middleware to parse JSON requests. It will extract the JSON data from 
the request and parse it into a JavaScript object that can be 
easily manipulated in your server-side code.*/
app.use(bodyParser.json());

// Connect to database
const URL = process.env.MONGO_URI;

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to database!');
    // Start listening for incoming requests
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.error("Database connection error: ", err));

// Check once connected to the database
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB Connection Success!');
});

// Create connection between frontend and backend
const studentRoute = require('./routes/students_route');

/* By using app.use() method with the '/student' route as the first argument,
you are telling Express to use this middleware for any route that starts with '/student'.
This means that if a client makes a request to /student/create, /student/view, /student/update, or 
any other route that starts with '/student', the request will be passed on to the studentRoute middleware
to handle.*/
app.use('/student', studentRoute);

