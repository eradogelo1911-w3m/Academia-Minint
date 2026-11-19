# Academia MININT — Plataforma Completa para Hospedagem

Plataforma estruturada em pastas e ficheiros separados (**Frontend + Backend Node.js/Express + Banco de Dados JSON/SQL-Ready**), pronta para ser hospedada em VPS, cPanel Node.js, Render, Railway ou DigitalOcean.

## Estrutura do Projeto

```text
academia-minint/
├── package.json
├── README.md
├── public/
│   ├── index.html               # Entrada e Portal de Login / Criar Conta
│   ├── css/
│   │   └── styles.css           # Sistema visual editorial e responsivo
│   ├── js/
│   │   ├── api.js               # Cliente HTTP para comunicação com o servidor
│   │   ├── auth.js              # Gestão de sessão, criação de conta e login
│   │   ├── doacao.js            # Pagamento por Referência (10116 / 936110847 - 200 Kz)
│   │   ├── sala.js              # Sala de Aula multi-órgão e multi-disciplina
│   │   ├── simulado.js          # Motor do Simulado / Jogo de Perguntas com cronómetro
│   │   └── admin.js             # Painel isolado do Administrador
│   └── pages/
│       ├── dashboard.html       # Área do Candidato (Sala de Aula, Simulado, Doação)
│       └── admin.html           # Portal Isolado do Administrador
└── server/
    ├── server.js                # Servidor Express principal
    ├── config/
    │   └── database.js          # Persistência de utilizadores, transações e progresso
    ├── middleware/
    │   └── authMiddleware.js    # Proteção JWT, controlo de administrador e bloqueio de doação
    ├── routes/
    │   ├── authRoutes.js        # Rotas /api/auth (register, login, admin-login, me)
    │   ├── contentRoutes.js     # Rotas /api/content (aulas, perguntas, progresso)
    │   ├── donationRoutes.js    # Rotas /api/donations (referência 10116, valor fixo 200 Kz)
    │   └── adminRoutes.js       # Rotas /api/admin (auditoria, utilizadores, exportação)
    └── data/
        ├── lessons.js           # Banco extenso de aulas (todos os órgãos e disciplinas)
        └── questions.js         # Banco extenso de questões comentadas
```

## Como Executar na Hospedagem

1. Envie a pasta `academia-minint` para o servidor.
2. No terminal da hospedagem, execute:
   ```bash
   npm install
   npm start
   ```
3. Aceda a `http://localhost:3000` (ou ao seu domínio configurado com SSL/HTTPS).
4. **Credenciais iniciais de Administrador:**
   - Utilizador: `admin.minint`
   - Senha: `Minint@2026!Admin`
   - Endereço direto: `/pages/admin.html`

## Regras de Contribuição Solidária
- **Entidade / Referência:** `10116`
- **Número Associado:** `936110847`
- **Valor Mínimo e Máximo:** `200 Kz` (valor único obrigatório para desbloquear Sala de Aula e Simulados).
