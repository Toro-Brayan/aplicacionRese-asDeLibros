const bcrypt = require('bcryptjs');

// Usuario admin creado con password "123456"
const hashedPassword = bcrypt.hashSync("123456", 10);

let users = [
  { id: 1, username: "admin", password: hashedPassword }
];

let books = [
  {
    id: 1,
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    category: "Realismo mágico",
    summary: "Historia de la familia Buendía en Macondo.",
    reviews: []
  },
  {
    id: 2,
    title: "El Quijote",
    author: "Miguel de Cervantes",
    category: "Novela",
    summary: "Las aventuras de Don Quijote y Sancho Panza.",
    reviews: []
  }
];

module.exports = { users, books };
