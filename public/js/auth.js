document.addEventListener('DOMContentLoaded', () => {
  const tabLogin = document.getElementById('tabLogin');
  const tabRegister = document.getElementById('tabRegister');
  const formLogin = document.getElementById('formLogin');
  const formRegister = document.getElementById('formRegister');
  const authAlert = document.getElementById('authAlert');

  function showAlert(msg, type = 'error') {
    authAlert.textContent = msg;
    authAlert.className = `alert alert-${type}`;
    authAlert.classList.remove('hidden');
  }

  tabLogin.addEventListener('click', () => {
    tabLogin.classList.add('active');
    tabRegister.classList.remove('active');
    formLogin.classList.remove('hidden');
    formRegister.classList.add('hidden');
    authAlert.classList.add('hidden');
  });

  tabRegister.addEventListener('click', () => {
    tabRegister.classList.add('active');
    tabLogin.classList.remove('active');
    formRegister.classList.remove('hidden');
    formLogin.classList.add('hidden');
    authAlert.classList.add('hidden');
  });

  formLogin.addEventListener('submit', async (e) => {
    e.preventDefault();
    authAlert.classList.add('hidden');
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    try {
      const res = await API.request('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ username, password })
      });
      API.setSession(res.token, res.user);
      if (res.user.role === 'admin') {
        window.location.href = '/pages/admin.html';
      } else {
        window.location.href = '/pages/dashboard.html';
      }
    } catch (err) {
      showAlert(err.message, 'error');
    }
  });

  formRegister.addEventListener('submit', async (e) => {
    e.preventDefault();
    authAlert.classList.add('hidden');

    const payload = {
      fullName: document.getElementById('regFullName').value,
      username: document.getElementById('regUsername').value,
      email: document.getElementById('regEmail').value,
      orgaoAlvo: document.getElementById('regOrgao').value,
      nivel: document.getElementById('regNivel').value,
      password: document.getElementById('regPassword').value
    };

    try {
      const res = await API.request('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify(payload)
      });
      API.setSession(res.token, res.user);
      window.location.href = '/pages/dashboard.html';
    } catch (err) {
      showAlert(err.message, 'error');
    }
  });
});
