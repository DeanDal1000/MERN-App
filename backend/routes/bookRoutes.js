const express = require('express');
const router = express.Router();
const { getBooks } = require('../controller/bookController');

router.get('/', getBooks);

router.post('/', (req, res) => {
  res.status(200).json({ message: 'Set Books' });
});
//Need to place an id(parameter), so that we can identify the book, we use back ticks to add variable
router.put('/:id', (req, res) => {
  res.status(200).json({ message: `Update Book ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
  res.status(200).json({ message: `Delete Book ${req.params.id}` });
});

module.exports = router;
