const express = require('express');
const { readJSON, writeJSON } = require('../utils/fileHandler');
const authenticate = require('../middleware/auth');

const router = express.Router(); // 👈 ¡esto faltaba!

// Obtener reseñas de un libro
router.get('/:bookId', (req, res) => {
  const reviews = readJSON('reviews.json');
  const bookId = parseInt(req.params.bookId);
  const bookReviews = reviews.filter(r => r.bookId === bookId);
  res.json(bookReviews);
});

// Crear reseña (solo usuarios autenticados)
router.post('/', authenticate, (req, res) => {
  const { bookId, rating, comment } = req.body;
  const username = req.user.username; // usuario autenticado
  const reviews = readJSON('reviews.json');
  const newReview = {
    id: Date.now(),
    bookId,
    username,
    rating,
    comment,
    date: Date.now()
  };
  reviews.push(newReview);
  writeJSON('reviews.json', reviews);
  res.json(newReview);
});

module.exports = router;
