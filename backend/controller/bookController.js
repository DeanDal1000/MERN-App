const asyncHandler = require('express-async-handler');

//@desc Get Books
//@route Get /api/books
//@access private

const getBooks = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get Books' });
});

const setBook = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add text field');
  }
  res.status(200).json({ message: 'Set Book' });
});

const updateBook = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Book ${req.params.id}` });
});

const deleteBook = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Book ${req.params.id}` });
});

module.exports = {
  getBooks,
  setBook,
  updateBook,
  deleteBook,
};

function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render('error', { error: err });
}
