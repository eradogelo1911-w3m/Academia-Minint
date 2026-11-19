const jwt = require('jsonwebtoken');
const { readDB } = require('../config/database');

const JWT_SECRET = process.env.JWT_SECRET || 'academia_minint_secret_key_2026_ao';

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Sessão não autenticada. Faça login.' });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Token expirado ou inválido.' });
    }
    const db = readDB();
    const user = db.users.find(u => u.id === decoded.id);
    if (!user) {
      return res.status(404).json({ error: 'Utilizador não encontrado.' });
    }
    req.user = user;
    next();
  });
}

function requireAdmin(req, res, next) {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Acesso exclusivo à Administração.' });
  }
  next();
}

function requireDonation(req, res, next) {
  if (req.user.role === 'admin') return next();
  if (!req.user.donationConfirmed) {
    return res.status(402).json({
      error: 'Acesso bloqueado. É obrigatória a contribuição solidária única de 200 Kz (Referência 10116 / Número 936110847).'
    });
  }
  next();
}

module.exports = {
  JWT_SECRET,
  authenticateToken,
  requireAdmin,
  requireDonation
};
