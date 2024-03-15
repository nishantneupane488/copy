// Importing required modules
const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

// Importing database connection module
const mongoDf = require("./db");

// Middleware to allow cross-origin requests from http://localhost:3000
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Using CORS middleware
app.use(cors());

// Importing routes for handling different functionalities
const roomsRoute = require('./routers/Datafecting'); // Route for fetching room data
const User_Data = require('./routers/User_Data'); // Route for handling user data
const Add_Hotel = require('./routers/Add_Hotel'); // Route for adding hotels
const Booked_HotelTakingId = require("./routers/DataForAvail"); // Route for booking hotels
const Update_Data = require("./routers/Updatedata"); // Route for updating data
const Cancel = require("./routers/Cancel"); // Route for canceling bookings

// Middleware to parse JSON request bodies
app.use(express.json());

// Mounting routes
app.use('/api/Database1forRoom', roomsRoute);
app.use('/api/Database1forRoom', Add_Hotel);
app.use('/api/Database1forRoom', User_Data);
app.use('/api/Database1forRoom', Booked_HotelTakingId);
app.use('/api/Database1forRoom', Cancel);
app.use('/api/Database1forRoom', Update_Data);

// Default route
app.get('/', (req, res) => {
  res.send("hello world");
});

// Starting the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
