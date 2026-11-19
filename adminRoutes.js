const express = require('express');
const { readDB, writeDB } = require('../config/database');
const { authenticateToken, requireAdmin } = require('../middleware/authMiddleware');
const { LESSONS } = require('../data/lessons');
const { QUESTIONS } = require('../data/questions');

const router = express.Router();

// Visão Geral e Monitorização Completa
router.get('/overview', authenticateToken, requireAdmin, (req, res) => {
  const db = readDB();
  const candidates = db.users.filter(u => u.role === 'candidate');
  const confirmedDonations = db.donations.filter(d => d.status === 'Confirmado');
  const totalArrecadado = confirmedDonations.reduce((acc, item) => acc + Number(item.amount || 0), 0);

  const totalLessons = LESSONS.length;
  let totalCompletedSum = 0;
  let totalQuizzesTaken = 0;
  let avgScoreSum = 0;

  const candidateSummaries = candidates.map(c => {
    const completedCount = (c.completedLessons || []).length;
    const progressPct = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;
    totalCompletedSum += progressPct;

    const quizzes = c.quizHistory || [];
    totalQuizzesTaken += quizzes.length;
    const bestScore = quizzes.length > 0 ? Math.max(...quizzes.map(q => q.scorePercent)) : 0;
    avgScoreSum += bestScore;

    return {
      id: c.id,
      code: c.code,
      fullName: c.fullName,
      username: c.username,
      orgaoAlvo: c.orgaoAlvo,
      nivel: c.nivel,
      donationConfirmed: c.donationConfirmed,
      completedCount,
      totalLessons,
      progressPct,
      quizzesCount: quizzes.length,
      bestScore,
      createdAt: c.createdAt
    };
  });

  const avgPlatformProgress = candidates.length > 0 ? Math.round(totalCompletedSum / candidates.length) : 0;
  const avgQuizScore = candidates.length > 0 ? Math.round(avgScoreSum / candidates.length) : 0;

  res.json({
    metrics: {
      totalCandidates: candidates.length,
      activeDonors: candidates.filter(c => c.donationConfirmed).length,
      totalArrecadado,
      totalTransactions: db.donations.length,
      avgPlatformProgress,
      totalQuizzesTaken,
      avgQuizScore,
      catalogLessons: LESSONS.length,
      catalogQuestions: QUESTIONS.length
    },
    candidates: candidateSummaries,
    donations: db.donations.slice().reverse()
  });
});

// Alternar estado de auditoria de uma doação
router.patch('/donations/:txId/toggle', authenticateToken, requireAdmin, (req, res) => {
  const { txId } = req.params;
  const db = readDB();
  const tx = db.donations.find(d => d.id === txId);
  if (!tx) {
    return res.status(404).json({ error: 'Transação não encontrada.' });
  }

  tx.status = tx.status === 'Confirmado' ? 'Em Auditoria' : 'Confirmado';

  // Atualiza permissão do utilizador com base nas suas transações confirmadas
  const user = db.users.find(u => u.id === tx.userId);
  if (user) {
    const hasConfirmed = db.donations.some(d => d.userId === user.id && d.status === 'Confirmado');
    user.donationConfirmed = hasConfirmed;
  }

  writeDB(db);
  res.json({ transaction: tx });
});

module.exports = router;
