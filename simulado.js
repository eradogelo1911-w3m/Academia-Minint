const SimuladoModule = {
  questions: [],
  currentIndex: 0,
  score: 0,
  points: 0,
  streak: 0,
  timePerQuestion: 30,
  timeLeft: 30,
  timerInterval: null,
  answered: false,
  selectedDisciplina: 'Todas',

  async start() {
    this.selectedDisciplina = document.getElementById('quizDisciplina').value;
    const count = Number(document.getElementById('quizCount').value);
    this.timePerQuestion = Number(document.getElementById('quizTime').value);

    const data = await API.request(`/api/content/questions?disciplina=${encodeURIComponent(this.selectedDisciplina)}&count=${count}`);
    this.questions = data.questions || [];
    if (this.questions.length === 0) {
      alert('Não existem questões disponíveis para este filtro.');
      return;
    }

    this.currentIndex = 0;
    this.score = 0;
    this.points = 0;
    this.streak = 0;

    document.getElementById('quizSetup').classList.add('hidden');
    document.getElementById('quizResult').classList.add('hidden');
    document.getElementById('quizArena').classList.remove('hidden');

    this.renderQuestion();
  },

  renderQuestion() {
    clearInterval(this.timerInterval);
    this.answered = false;
    this.timeLeft = this.timePerQuestion;

    const q = this.questions[this.currentIndex];
    document.getElementById('quizProgressLabel').textContent = `Questão ${this.currentIndex + 1} de ${this.questions.length}`;
    document.getElementById('quizDisciplineBadge').textContent = q.disciplina;
    document.getElementById('quizScoreLabel').textContent = `Pontos: ${this.points}`;
    document.getElementById('quizQuestionText').textContent = q.enunciado;
    document.getElementById('quizExplanation').classList.add('hidden');
    document.getElementById('btnNextQuestion').classList.add('hidden');

    const optionsContainer = document.getElementById('quizOptions');
    optionsContainer.innerHTML = q.opcoes.map((opt, idx) => `
      <button class="option-btn" onclick="SimuladoModule.selectAnswer(${idx})">
        <strong>${String.fromCharCode(65 + idx)})</strong> ${opt}
      </button>
    `).join('');

    this.updateTimerUI();
    this.timerInterval = setInterval(() => {
      this.timeLeft -= 1;
      this.updateTimerUI();
      if (this.timeLeft <= 0) {
        clearInterval(this.timerInterval);
        this.handleTimeout();
      }
    }, 1000);
  },

  updateTimerUI() {
    const label = document.getElementById('quizTimerText');
    const bar = document.getElementById('quizTimerBar');
    label.textContent = `${this.timeLeft}s`;
    const pct = Math.max(0, (this.timeLeft / this.timePerQuestion) * 100);
    bar.style.width = `${pct}%`;
    bar.style.backgroundColor = this.timeLeft <= 7 ? '#A62C2B' : '#173B30';
  },

  handleTimeout() {
    if (this.answered) return;
    this.answered = true;
    this.streak = 0;
    const q = this.questions[this.currentIndex];
    const buttons = document.querySelectorAll('#quizOptions .option-btn');
    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === q.correta) btn.classList.add('correct');
    });

    const exp = document.getElementById('quizExplanation');
    exp.innerHTML = `<strong>Tempo esgotado!</strong> ${q.explicacao}`;
    exp.className = 'alert alert-error';
    exp.classList.remove('hidden');
    document.getElementById('btnNextQuestion').classList.remove('hidden');
  },

  selectAnswer(selectedIdx) {
    if (this.answered) return;
    this.answered = true;
    clearInterval(this.timerInterval);

    const q = this.questions[this.currentIndex];
    const buttons = document.querySelectorAll('#quizOptions .option-btn');
    const isCorrect = selectedIdx === q.correta;

    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === q.correta) btn.classList.add('correct');
      if (idx === selectedIdx && !isCorrect) btn.classList.add('wrong');
    });

    const exp = document.getElementById('quizExplanation');
    if (isCorrect) {
      this.score += 1;
      this.streak += 1;
      const bonus = this.timeLeft * 2 + (this.streak > 1 ? 15 : 0);
      this.points += 100 + bonus;
      exp.innerHTML = `<strong>Correto!</strong> ${q.explicacao}`;
      exp.className = 'alert alert-success';
    } else {
      this.streak = 0;
      exp.innerHTML = `<strong>Incorreto.</strong> ${q.explicacao}`;
      exp.className = 'alert alert-error';
    }

    document.getElementById('quizScoreLabel').textContent = `Pontos: ${this.points}`;
    exp.classList.remove('hidden');
    document.getElementById('btnNextQuestion').classList.remove('hidden');
  },

  async next() {
    this.currentIndex += 1;
    if (this.currentIndex < this.questions.length) {
      this.renderQuestion();
    } else {
      await this.finish();
    }
  },

  async finish() {
    clearInterval(this.timerInterval);
    document.getElementById('quizArena').classList.add('hidden');
    document.getElementById('quizResult').classList.remove('hidden');

    const total = this.questions.length;
    const pct = Math.round((this.score / total) * 100);

    document.getElementById('resScorePct').textContent = `${pct}%`;
    document.getElementById('resDetails').textContent = `Acertou ${this.score} de ${total} questões • Pontuação total: ${this.points} pts`;

    await API.request('/api/content/quiz-result', {
      method: 'POST',
      body: JSON.stringify({
        disciplina: this.selectedDisciplina,
        totalQuestions: total,
        correctAnswers: this.score,
        scorePercent: pct,
        points: this.points
      })
    });
  },

  resetToSetup() {
    clearInterval(this.timerInterval);
    document.getElementById('quizArena').classList.add('hidden');
    document.getElementById('quizResult').classList.add('hidden');
    document.getElementById('quizSetup').classList.remove('hidden');
  }
};
