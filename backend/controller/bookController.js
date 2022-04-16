//@desc Get Books
//@route Get /api/books
//@access private

const getBooks = (req, res) => {
  res.status(200).json({ message: 'Get Books' });
};
const setBook = (req, res) => {
  res.status(200).json({ message: 'Set Book' });
};

const updateBook = (req, res) => {
  res.status(200).json({ message: `Update Book ${req.params.id}` });
};

const deleteBook = (req, res) => {
  res.status(200).json({ message: `Delete Book ${req.params.id}` });
};

module.exports = {
  getBooks,
  setBook,
  updateBook,
  deleteBook,
};
