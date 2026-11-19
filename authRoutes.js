const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { readDB, writeDB } = require('../config/database');
const { JWT_SECRET, authenticateToken } = require('../middleware/authMiddleware');

const router = express.Router();

// Criar Conta de Candidato
router.post('/register', (req, res) => {
  const { fullName, username, email, orgaoAlvo, nivel, password } = req.body;

  if (!fullName || !username || !password) {
    return res.status(400).json({ error: 'Preencha nome completo, nome de utilizador e senha.' });
  }
  if (password.length < 6) {
    return res.status(400).json({ error: 'A senha deve conter pelo menos 6 caracteres.' });
  }

  const db = readDB();
  const cleanUser = username.trim().toLowerCase();

  if (db.users.some(u => u.username.toLowerCase() === cleanUser)) {
    return res.status(409).json({ error: 'Este nome de utilizador já está registado.' });
  }

  const code = 'CAND-' + String(db.users.length + 1001);
  const newUser = {
    id: 'usr_' + Date.now(),
    code,
    fullName: fullName.trim(),
    username: cleanUser,
    email: (email || '').trim(),
    orgaoAlvo: orgaoAlvo || 'Polícia Nacional (PNA)',
    nivel: nivel || 'Médio',
    passwordHash: bcrypt.hashSync(password, 10),
    role: 'candidate',
    donationConfirmed: false,
    completedLessons: [],
    quizHistory: [],
    createdAt: new Date().toISOString()
  };

  db.users.push(newUser);
  writeDB(db);

  const token = jwt.sign({ id: newUser.id, role: newUser.role }, JWT_SECRET, { expiresIn: '24h' });
  res.status(201).json({
    token,
    user: sanitizeUser(newUser)
  });
});

// Login de Candidato ou Administrador
router.post('/login', (req, res) => {
  const { username, password, expectedRole } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Informe o utilizador e a senha.' });
  }

  const db = readDB();
  const cleanUser = username.trim().toLowerCase();
  const user = db.users.find(u => u.username.toLowerCase() === cleanUser);

  if (!user || !bcrypt.compareSync(password, user.passwordHash)) {
    return res.status(401).json({ error: 'Credenciais inválidas. Verifique o utilizador e a senha.' });
  }

  if (expectedRole === 'admin' && user.role !== 'admin') {
    return res.status(403).json({ error: 'Esta conta não possui privilégios de Administração.' });
  }

  const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '24h' });
  res.json({
    token,
    user: sanitizeUser(user)
  });
});

// Dados do utilizador autenticado
router.get('/me', authenticateToken, (req, res) => {
  res.json({ user: sanitizeUser(req.user) });
});

function sanitizeUser(user) {
  return {
    id: user.id,
    code: user.code,
    fullName: user.fullName,
    username: user.username,
    email: user.email,
    orgaoAlvo: user.orgaoAlvo,
    nivel: user.nivel,
    role: user.role,
    donationConfirmed: user.donationConfirmed,
    completedLessons: user.completedLessons || [],
    quizHistory: user.quizHistory || [],
    createdAt: user.createdAt
  };
}

module.exports = router;
