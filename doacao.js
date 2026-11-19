const DoacaoModule = {
  async load() {
    const config = await API.request('/api/donations/config');
    const statusBox = document.getElementById('donationStatusBanner');
    const historyBody = document.getElementById('donationHistoryBody');

    if (config.donationConfirmed) {
      statusBox.className = 'alert alert-success';
      statusBox.innerHTML = '<strong>Acesso Desbloqueado:</strong> A sua contribuição solidária de <strong>200 Kz</strong> está confirmada. Já pode aceder livremente à Sala de Aula e aos Simulados.';
    } else {
      statusBox.className = 'alert alert-info';
      statusBox.innerHTML = '<strong>Acesso Bloqueado:</strong> Para abrir a Sala de Aula e o Simulado de Perguntas, efetue a contribuição solidária única de <strong>200 Kz</strong> (valor mínimo e máximo) através da Referência <strong>10116</strong> e Número <strong>936110847</strong>.';
    }

    if (config.historico && config.historico.length > 0) {
      historyBody.innerHTML = config.historico.map(tx => `
        <tr>
          <td class="mono">${tx.id}</td>
          <td class="mono">${tx.referencia} / ${tx.numero}</td>
          <td><strong>${tx.amount} Kz</strong></td>
          <td class="mono">${tx.receiptCode}</td>
          <td><span class="badge badge-success">${tx.status}</span></td>
          <td>${new Date(tx.createdAt).toLocaleString('pt-AO')}</td>
        </tr>
      `).join('');
    } else {
      historyBody.innerHTML = '<tr><td colspan="6">Nenhuma contribuição registada nesta conta.</td></tr>';
    }
  },

  bindForm(onSuccessCallback) {
    const form = document.getElementById('donationForm');
    const alertEl = document.getElementById('donationFormAlert');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      alertEl.classList.add('hidden');
      const amount = Number(document.getElementById('donationAmount').value);
      const receiptCode = document.getElementById('donationReceipt').value;

      if (amount !== 200) {
        alertEl.textContent = 'O valor mínimo e máximo permitido para solidariedade é exatamente 200 Kz.';
        alertEl.className = 'alert alert-error';
        alertEl.classList.remove('hidden');
        return;
      }

      try {
        const res = await API.request('/api/donations/confirm', {
          method: 'POST',
          body: JSON.stringify({ amount: 200, receiptCode })
        });
        alertEl.textContent = res.message;
        alertEl.className = 'alert alert-success';
        alertEl.classList.remove('hidden');
        await this.load();
        if (onSuccessCallback) await onSuccessCallback();
      } catch (err) {
        alertEl.textContent = err.message;
        alertEl.className = 'alert alert-error';
        alertEl.classList.remove('hidden');
      }
    });
  }
};
