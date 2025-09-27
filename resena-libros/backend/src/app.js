const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth.routes');
const bookRoutes = require('./routes/books.routes');
const reviewRoutes = require('./routes/reviews.routes');

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use('/auth', authRoutes);
app.use('/books', bookRoutes);
app.use('/reviews', reviewRoutes);

app.get("/", (req, res) => res.send("🚀 API Controlbox lista"));

module.exports = app; // 👈 Exporta la app, no levantes el servidor aquí
