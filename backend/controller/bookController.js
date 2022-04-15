const getBooks = (req, res) => {
  res.status(200).json({ message: 'Get Books' });
};

module.exports = {
  getBooks,
};
