const express = require('express');
const { readJSON, writeJSON } = require('../utils/fileHandler');
const router = express.Router();

// Obtener todos los libros
router.get('/', (req, res) => {
  const books = readJSON('books.json');
  res.json(books);
});

// Agregar un libro (en proceso de desarrollo)
router.post('/', (req, res) => {
  const { title, author, category, summary } = req.body;
  let books = readJSON('books.json');

  const newBook = { id: Date.now(), title, author, category, summary };
  books.push(newBook);
  writeJSON('books.json', books);

  res.json(newBook);
});

module.exports = router;
