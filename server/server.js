const express = require('express');
const path = require('path');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const donationRoutes = require('./routes/donationRoutes');
const contentRoutes = require('./routes/contentRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Servir ficheiros estáticos do frontend
app.use(express.static(path.join(__dirname, '..', 'public')));

// Rotas da API
app.use('/api/auth', authRoutes);
app.use('/api/donations', donationRoutes);
app.use('/api/content', contentRoutes);
app.use('/api/admin', adminRoutes);

// Fallback para página inicial
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Academia MININT em execução em http://localhost:${PORT}`);
});
