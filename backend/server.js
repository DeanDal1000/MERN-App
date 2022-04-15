const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
//use .env to find port 5000 or 5000 if not found
const port = process.env.PORT || 5000;
//Make code cleaner by having routes in a seperate folder
app.use('/api/books', require('./routes/bookRoutes.js'));

app.listen(port, console.log(`Server started on ${port}`));
