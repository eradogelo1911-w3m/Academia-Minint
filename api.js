const API = {
  getToken() {
    return localStorage.getItem('minint_token');
  },

  setSession(token, user) {
    localStorage.setItem('minint_token', token);
    localStorage.setItem('minint_user', JSON.stringify(user));
  },

  clearSession() {
    localStorage.removeItem('minint_token');
    localStorage.removeItem('minint_user');
  },

  getCachedUser() {
    const raw = localStorage.getItem('minint_user');
    return raw ? JSON.parse(raw) : null;
  },

  async request(endpoint, options = {}) {
    const token = this.getToken();
    const headers = {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {})
    };

    const response = await fetch(endpoint, {
      ...options,
      headers
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      const error = new Error(data.error || 'Erro na comunicação com o servidor.');
      error.status = response.status;
      throw error;
    }
    return data;
  }
};
