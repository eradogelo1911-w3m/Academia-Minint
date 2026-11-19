const express = require('express');
const { readDB, writeDB } = require('../config/database');
const { authenticateToken, requireDonation } = require('../middleware/authMiddleware');
const { LESSONS } = require('../data/lessons');
const { QUESTIONS } = require('../data/questions');

const router = express.Router();

// Listar aulas (exige contribuição de 200 Kz)
router.get('/lessons', authenticateToken, requireDonation, (req, res) => {
  res.json({
    lessons: LESSONS,
    completedLessons: req.user.completedLessons || []
  });
});

// Marcar aula como concluída
router.post('/lessons/:lessonId/complete', authenticateToken, requireDonation, (req, res) => {
  const { lessonId } = req.params;
  const db = readDB();
  const user = db.users.find(u => u.id === req.user.id);

  if (!user.completedLessons) user.completedLessons = [];
  if (!user.completedLessons.includes(lessonId)) {
    user.completedLessons.push(lessonId);
    writeDB(db);
  }

  res.json({ completedLessons: user.completedLessons });
});

// Obter questões para o Simulado / Jogo (exige contribuição de 200 Kz)
router.get('/questions', authenticateToken, requireDonation, (req, res) => {
  const { disciplina, count } = req.query;
  let pool = [...QUESTIONS];

  if (disciplina && disciplina !== 'Todas') {
    pool = pool.filter(q => q.disciplina === disciplina);
  }

  // Baralhar questões
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  const limit = Math.min(Math.max(parseInt(count, 10) || 10, 5), pool.length || 5);
  res.json({ questions: pool.slice(0, limit) });
});

// Guardar resultado de um simulado
router.post('/quiz-result', authenticateToken, requireDonation, (req, res) => {
  const { disciplina, totalQuestions, correctAnswers, scorePercent, points } = req.body;
  const db = readDB();
  const user = db.users.find(u => u.id === req.user.id);

  if (!user.quizHistory) user.quizHistory = [];
  const record = {
    id: 'QZ-' + Date.now(),
    disciplina: disciplina || 'Todas',
    totalQuestions: Number(totalQuestions) || 0,
    correctAnswers: Number(correctAnswers) || 0,
    scorePercent: Number(scorePercent) || 0,
    points: Number(points) || 0,
    date: new Date().toISOString()
  };

  user.quizHistory.unshift(record);
  writeDB(db);

  res.json({ quizHistory: user.quizHistory });
});

module.exports = router;
