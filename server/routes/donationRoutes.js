const express = require('express');
const { readDB, writeDB } = require('../config/database');
const { authenticateToken } = require('../middleware/authMiddleware');

const router = express.Router();

const REFERENCIA_OFICIAL = '10116';
const NUMERO_OFICIAL = '936110847';
const VALOR_SOLIDARIO_KZ = 200;

// Obter parâmetros oficiais de contribuição
router.get('/config', authenticateToken, (req, res) => {
  const db = readDB();
  const userDonations = db.donations.filter(d => d.userId === req.user.id);
  res.json({
    referencia: REFERENCIA_OFICIAL,
    numero: NUMERO_OFICIAL,
    valorMinimo: VALOR_SOLIDARIO_KZ,
    valorMaximo: VALOR_SOLIDARIO_KZ,
    moeda: 'Kz',
    donationConfirmed: req.user.donationConfirmed,
    historico: userDonations
  });
});

// Submeter comprovativo de contribuição solidária (exatamente 200 Kz)
router.post('/confirm', authenticateToken, (req, res) => {
  const amount = Number(req.body.amount);
  const receiptCode = (req.body.receiptCode || '').trim();

  if (amount !== VALOR_SOLIDARIO_KZ) {
    return res.status(400).json({
      error: `O valor mínimo e máximo da contribuição solidária é exatamente ${VALOR_SOLIDARIO_KZ} Kz.`
    });
  }

  if (receiptCode.length < 4) {
    return res.status(400).json({
      error: 'Informe o código de operação / talão Multicaixa (mínimo 4 caracteres).'
    });
  }

  const db = readDB();
  const userIdx = db.users.findIndex(u => u.id === req.user.id);
  if (userIdx === -1) {
    return res.status(404).json({ error: 'Utilizador não encontrado.' });
  }

  const tx = {
    id: 'TX-' + Date.now(),
    userId: req.user.id,
    userCode: req.user.code,
    userName: req.user.fullName,
    referencia: REFERENCIA_OFICIAL,
    numero: NUMERO_OFICIAL,
    amount: VALOR_SOLIDARIO_KZ,
    receiptCode: receiptCode.toUpperCase(),
    status: 'Confirmado',
    createdAt: new Date().toISOString()
  };

  db.donations.push(tx);
  db.users[userIdx].donationConfirmed = true;
  writeDB(db);

  res.json({
    message: 'Contribuição solidária de 200 Kz validada com sucesso! Sala de Aula e Simulados desbloqueados.',
    transaction: tx,
    donationConfirmed: true
  });
});

module.exports = router;
