document.addEventListener('DOMContentLoaded', async () => {
  const loginSection = document.getElementById('adminLoginSection');
  const panelSection = document.getElementById('adminPanelSection');
  const adminAlert = document.getElementById('adminLoginAlert');
  const btnLogout = document.getElementById('btnAdminLogout');

  let cachedOverview = null;

  async function tryLoadAdmin() {
    const token = API.getToken();
    if (!token) return;
    try {
      const me = await API.request('/api/auth/me');
      if (me.user.role !== 'admin') return;
      loginSection.classList.add('hidden');
      panelSection.classList.remove('hidden');
      btnLogout.classList.remove('hidden');
      await refreshOverview();
    } catch (_) {
      API.clearSession();
    }
  }

  async function refreshOverview() {
    const data = await API.request('/api/admin/overview');
    cachedOverview = data;
    const m = data.metrics;

    document.getElementById('kpiTotalUsers').textContent = m.totalCandidates;
    document.getElementById('kpiActiveDonors').textContent = `${m.activeDonors} / ${m.totalCandidates}`;
    document.getElementById('kpiTotalKz').textContent = `${m.totalArrecadado.toLocaleString('pt-AO')} Kz`;
    document.getElementById('kpiAvgProgress').textContent = `${m.avgPlatformProgress}%`;
    document.getElementById('kpiCatalog').textContent = `${m.catalogLessons} Aulas / ${m.catalogQuestions} Questões`;
    document.getElementById('kpiQuizzes').textContent = `${m.totalQuizzesTaken} (Média ${m.avgQuizScore}%)`;

    // Tabela de Doações
    const txBody = document.getElementById('adminDonationsBody');
    if (data.donations.length === 0) {
      txBody.innerHTML = '<tr><td colspan="7">Nenhuma contribuição registada ainda.</td></tr>';
    } else {
      txBody.innerHTML = data.donations.map(tx => `
        <tr>
          <td class="mono">${tx.id}</td>
          <td>${tx.userName} <span class="mono">(${tx.userCode})</span></td>
          <td class="mono">${tx.referencia} / ${tx.numero}</td>
          <td><strong>${tx.amount} Kz</strong></td>
          <td class="mono">${tx.receiptCode}</td>
          <td><span class="badge ${tx.status === 'Confirmado' ? 'badge-success' : 'badge-warn'}">${tx.status}</span></td>
          <td>
            <button class="btn btn-outline" style="padding:0.35rem 0.65rem; font-size:0.8rem;" onclick="toggleTx('${tx.id}')">
              Alternar Estado
            </button>
          </td>
        </tr>
      `).join('');
    }

    // Tabela de Candidatos
    const candBody = document.getElementById('adminCandidatesBody');
    if (data.candidates.length === 0) {
      candBody.innerHTML = '<tr><td colspan="7">Nenhum candidato registado.</td></tr>';
    } else {
      candBody.innerHTML = data.candidates.map(c => `
        <tr>
          <td class="mono">${c.code}</td>
          <td><strong>${c.fullName}</strong><br><small>@${c.username}</small></td>
          <td>${c.orgaoAlvo} (${c.nivel})</td>
          <td><span class="badge ${c.donationConfirmed ? 'badge-success' : 'badge-warn'}">${c.donationConfirmed ? '200 Kz Confirmado' : 'Pendente'}</span></td>
          <td>${c.completedCount}/${c.totalLessons} (${c.progressPct}%)</td>
          <td>${c.quizzesCount} (Melhor: ${c.bestScore}%)</td>
          <td>${new Date(c.createdAt).toLocaleDateString('pt-AO')}</td>
        </tr>
      `).join('');
    }
  }

  window.toggleTx = async (txId) => {
    await API.request(`/api/admin/donations/${txId}/toggle`, { method: 'PATCH' });
    await refreshOverview();
  };

  document.getElementById('adminLoginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    adminAlert.classList.add('hidden');
    try {
      const res = await API.request('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({
          username: document.getElementById('admUser').value,
          password: document.getElementById('admPass').value,
          expectedRole: 'admin'
        })
      });
      API.setSession(res.token, res.user);
      await tryLoadAdmin();
    } catch (err) {
      adminAlert.textContent = err.message;
      adminAlert.classList.remove('hidden');
    }
  });

  document.getElementById('btnExportCsv').addEventListener('click', () => {
    if (!cachedOverview) return;
    const rows = [
      ['Codigo', 'Nome', 'Orgao', 'Nivel', 'Solidariedade_200Kz', 'Progresso_Pct', 'Simulados', 'Melhor_Nota'],
      ...cachedOverview.candidates.map(c => [
        c.code, `"${c.fullName}"`, `"${c.orgaoAlvo}"`, c.nivel,
        c.donationConfirmed ? 'Confirmado' : 'Pendente', c.progressPct, c.quizzesCount, c.bestScore
      ])
    ];
    const csv = rows.map(r => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `relatorio-academia-minint-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
  });

  btnLogout.addEventListener('click', () => {
    API.clearSession();
    window.location.href = '/index.html';
  });

  await tryLoadAdmin();
});
