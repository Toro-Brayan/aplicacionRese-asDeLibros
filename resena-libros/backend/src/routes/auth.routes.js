const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { readJSON, writeJSON } = require('../utils/fileHandler');

const router = express.Router();
const SECRET = "mi_clave_secreta";

// 📌 Registro
router.post('/register', (req, res) => {
  const { email, password, fullname } = req.body;
  let users = readJSON('users.json');

  if (users.find(u => u.username === email)) {
    return res.status(400).json({ message: 'Usuario ya existe' });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = { id: Date.now(), username: email, fullname: fullname, password: hashedPassword };

  users.push(newUser);
  writeJSON('users.json', users);

  res.json({ message: 'Usuario registrado con éxito' });
});

// 📌 Login
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  let users = readJSON('users.json');

  const user = users.find(u => u.username === username);
  if (!user) return res.status(401).json({ message: 'Credenciales inválidas' });

  const isValid = bcrypt.compareSync(password, user.password);
  if (!isValid) return res.status(401).json({ message: 'Credenciales inválidas' });

  const token = jwt.sign({ id: user.id, username: user.username }, SECRET, { expiresIn: '1h' });

  res.json({ token });
});

module.exports = router;
