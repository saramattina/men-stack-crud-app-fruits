const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.MONGODB_URI);

//add event listeners for disconnected or error events

module.exports = mongoose.connection;
