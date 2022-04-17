const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const { dbConnection } = require('./config/db');
const { errorHandler } = require('./middleware/errorHandling');
const cors = require('cors');
const app = express();
//use .env to find port 5000 or 5000 if not found
const port = process.env.PORT || 5000;

dbConnection();
//add middleware to ask the server to accept that object
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Make code cleaner by having routes in a seperate folder
app.use('/api/books', require('./routes/bookRoutes.js'));
app.use(cors());
app.use(errorHandler);

app.listen(port, console.log(`Server started on ${port}`));
