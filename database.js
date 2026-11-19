const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

const DB_FILE = path.join(__dirname, 'db.json');

function initDB() {
  if (!fs.existsSync(DB_FILE)) {
    const adminHash = bcrypt.hashSync('Minint@2026!Admin', 10);
    const initialData = {
      users: [
        {
          id: 'usr_admin_001',
          code: 'ADM-0001',
          fullName: 'Direção Académica MININT',
          username: 'admin.minint',
          email: 'admin@academiaminint.ao',
          orgaoAlvo: 'Administração Central',
          nivel: 'Superior',
          passwordHash: adminHash,
          role: 'admin',
          donationConfirmed: true,
          completedLessons: [],
          quizHistory: [],
          createdAt: new Date().toISOString()
        }
      ],
      donations: []
    };
    fs.writeFileSync(DB_FILE, JSON.stringify(initialData, null, 2), 'utf8');
  }
}

function readDB() {
  initDB();
  return JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
}

function writeDB(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf8');
}

module.exports = { readDB, writeDB };
