const express = require('express');
const router = express.Router();
const {
  getBooks,
  setBook,
  updateBook,
  deleteBook,
} = require('../controller/bookController');

//Need to place an id(parameter), so that we can identify the book, we use back ticks to add variable
//Use router.route to make it cleaner , using chainable routes
router.route('/').get(getBooks).post(setBook);
router.route('/:id').put(updateBook).delete(deleteBook);

module.exports = router;
