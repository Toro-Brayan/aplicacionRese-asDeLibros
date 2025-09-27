const jwt = require('jsonwebtoken');
const SECRET = "mi_clave_secreta";

function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: 'Token requerido' });

  const token = authHeader.split(' ')[1];
  try {
    const payload = jwt.verify(token, SECRET);
    req.user = payload; // usuario autenticado
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token inválido' });
  }
}

module.exports = authenticate;
