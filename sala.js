const SalaModule = {
  lessons: [],
  completed: [],
  activeLesson: null,

  async load() {
    const data = await API.request('/api/content/lessons');
    this.lessons = data.lessons || [];
    this.completed = data.completedLessons || [];
    this.render();
  },

  render() {
    const orgaoFilter = document.getElementById('filterOrgao').value;
    const discFilter = document.getElementById('filterDisciplina').value;
    const search = document.getElementById('filterSearch').value.trim().toLowerCase();

    const filtered = this.lessons.filter(item => {
      const matchOrgao = orgaoFilter === 'Todos' || item.orgao.includes(orgaoFilter) || item.orgao.startsWith('Geral');
      const matchDisc = discFilter === 'Todas' || item.disciplina === discFilter;
      const matchText = !search ||
        item.titulo.toLowerCase().includes(search) ||
        item.resumo.toLowerCase().includes(search) ||
        item.disciplina.toLowerCase().includes(search);
      return matchOrgao && matchDisc && matchText;
    });

    const pct = this.lessons.length ? Math.round((this.completed.length / this.lessons.length) * 100) : 0;
    document.getElementById('salaProgressText').textContent = `${this.completed.length} de ${this.lessons.length} módulos concluídos (${pct}%)`;

    const grid = document.getElementById('lessonsGrid');
    if (filtered.length === 0) {
      grid.innerHTML = '<div class="card">Nenhuma aula encontrada com os filtros selecionados.</div>';
      return;
    }

    grid.innerHTML = filtered.map(lesson => {
      const isDone = this.completed.includes(lesson.id);
      return `
        <article class="card lesson-card">
          <div>
            <div style="display:flex; justify-content:space-between; gap:0.5rem; margin-bottom:0.65rem; flex-wrap:wrap;">
              <span class="badge badge-forest">${lesson.disciplina}</span>
              <span class="badge ${isDone ? 'badge-success' : 'badge-ochre'}">${isDone ? 'Concluída' : lesson.duracao}</span>
            </div>
            <h3 style="font-size:1.12rem; margin-bottom:0.45rem;">${lesson.titulo}</h3>
            <p style="font-size:0.82rem; color:var(--ink-secondary); margin-bottom:0.6rem;"><strong>Órgão:</strong> ${lesson.orgao}</p>
            <p style="font-size:0.9rem; color:var(--ink-secondary); margin-bottom:1rem;">${lesson.resumo}</p>
          </div>
          <button class="btn btn-primary btn-block" onclick="SalaModule.openLesson('${lesson.id}')">
            Estudar Módulo
          </button>
        </article>
      `;
    }).join('');
  },

  openLesson(id) {
    const lesson = this.lessons.find(l => l.id === id);
    if (!lesson) return;
    this.activeLesson = lesson;

    const reader = document.getElementById('lessonReader');
    document.getElementById('readerMeta').textContent = `${lesson.disciplina} • ${lesson.orgao} • ${lesson.duracao}`;
    document.getElementById('readerTitle').textContent = lesson.titulo;
    document.getElementById('readerBody').innerHTML = lesson.conteudo.map(p => `<p>${p}</p>`).join('');
    document.getElementById('readerPoints').innerHTML = lesson.pontosChave.map(pt => `<li>${pt}</li>`).join('');

    const isDone = this.completed.includes(lesson.id);
    const btn = document.getElementById('btnMarkComplete');
    btn.textContent = isDone ? 'Módulo Já Concluído' : 'Marcar Módulo como Concluído';
    btn.disabled = isDone;

    reader.classList.remove('hidden');
    reader.scrollIntoView({ behavior: 'smooth' });
  },

  async completeActiveLesson() {
    if (!this.activeLesson) return;
    const res = await API.request(`/api/content/lessons/${this.activeLesson.id}/complete`, { method: 'POST' });
    this.completed = res.completedLessons || [];
    this.openLesson(this.activeLesson.id);
    this.render();
  }
};
