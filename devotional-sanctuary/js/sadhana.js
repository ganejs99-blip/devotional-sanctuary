/* ==========================================================================
   DAILY BHAKTI & SADHANA TRACKER LOGIC
   ========================================================================== */

const SACRED_SLOKAS = [
  {
    source: 'Bhagavad Gita 9.26',
    sanskrit: 'पत्रं पुष्पं फलं तोयं यो मे भक्त्या प्रयच्छति।\nतदहं भक्त्युपहृतमश्नामि प्रयतात्मनः॥',
    translation: 'If one offers Me with love and devotion a leaf, a flower, a fruit or water, I will accept it.'
  },
  {
    source: 'Bhagavad Gita 18.66',
    sanskrit: 'सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।\nअहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥',
    translation: 'Abandon all varieties of religion and just surrender unto Me. I shall deliver you from all sinful reactions. Do not fear.'
  },
  {
    source: 'Bhagavad Gita 2.47',
    sanskrit: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥',
    translation: 'You have a right to perform your prescribed duty, but you are not entitled to the fruits of action. Never consider yourself the cause of the results of your activities, and never be attached to not doing your duty.'
  },
  {
    source: 'Bhagavad Gita 12.8',
    sanskrit: 'मय्येव मन आधत्स्व मयि बुद्धिं निवेशय।\nनिवसिष्यसि मय्येव अत ऊर्ध्वं न संशयः॥',
    translation: 'Just fix your mind upon Me, the Supreme Personality of Godhead, and engage all your intelligence in Me. Thus you will live in Me always, without a doubt.'
  },
  {
    source: 'Srimad Bhagavatam 1.2.6',
    sanskrit: 'स वै पुंसां परो धर्मो यतो भक्तिरधोक्षजे।\nअहैतुक्यप्रतिहता ययात्मा सम्प्रसीदति॥',
    translation: 'The supreme occupation [dharma] for all humanity is that by which men can attain to loving devotional service unto the transcendent Lord. Such devotional service must be unmotivated and uninterrupted to completely satisfy the self.'
  }
];

class SadhanaController {
  constructor() {
    this.currentBead = 0;
    this.currentRounds = 0;
    this.slokaIndex = 0;
    this.logs = [];

    this.init();
  }

  init() {
    this.loadLogs();
    this.setTodayDate();
    this.renderSloka();
  }

  setTodayDate() {
    const dateEl = document.getElementById('currentSadhanaDate');
    if (dateEl) {
      const today = new Date();
      const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
      dateEl.textContent = '📅 ' + today.toLocaleDateString('en-US', options);
    }
  }

  // Japa Mala Bead Actions
  chantBead() {
    this.currentBead++;
    if (window.soundEngine) {
      window.soundEngine.playBeadClick();
    }

    if (this.currentBead > 108) {
      this.currentBead = 1;
      this.currentRounds++;
      if (window.soundEngine) {
        window.soundEngine.playBlessingSparkle();
        window.soundEngine.playTempleBell();
      }
      if (window.burstSacredSparkles) {
        window.burstSacredSparkles();
      }
    }

    this.updateJapaVisuals();
  }

  resetJapa() {
    if (confirm('Reset today\'s Japa bead counter?')) {
      this.currentBead = 0;
      this.currentRounds = 0;
      this.updateJapaVisuals();
    }
  }

  updateJapaVisuals() {
    const beadCountEl = document.getElementById('japaBeadCount');
    const roundsEl = document.getElementById('japaRoundCount');
    const progressRing = document.getElementById('japaProgressRing');
    const formRoundsInput = document.getElementById('formRoundsInput');

    if (beadCountEl) beadCountEl.textContent = this.currentBead;
    if (roundsEl) roundsEl.textContent = `${this.currentRounds} Completed`;
    if (formRoundsInput) formRoundsInput.value = this.currentRounds;

    if (progressRing) {
      const circumference = 2 * Math.PI * 90; // r=90 -> ~565.48
      const offset = circumference - (this.currentBead / 108) * circumference;
      progressRing.style.strokeDashoffset = offset;
    }
  }

  // Sloka Navigation
  renderSloka() {
    const sloka = SACRED_SLOKAS[this.slokaIndex];
    const tagEl = document.getElementById('slokaTag');
    const sanskritEl = document.getElementById('slokaSanskrit');
    const translationEl = document.getElementById('slokaTranslation');
    const formSlokaInput = document.getElementById('formSlokaInput');

    if (tagEl) tagEl.textContent = '📖 ' + sloka.source;
    if (sanskritEl) sanskritEl.innerHTML = sloka.sanskrit.replace(/\n/g, '<br>');
    if (translationEl) translationEl.textContent = `"${sloka.translation}"`;
    if (formSlokaInput && !formSlokaInput.value) {
      formSlokaInput.value = sloka.source;
    }
  }

  nextSloka() {
    this.slokaIndex = (this.slokaIndex + 1) % SACRED_SLOKAS.length;
    this.renderSloka();
    if (window.soundEngine) window.soundEngine.playBlessingSparkle();
  }

  // Save Daily Sadhana Log
  saveLog(event) {
    if (event) event.preventDefault();

    const dateStr = new Date().toISOString().split('T')[0];
    const rounds = document.getElementById('formRoundsInput')?.value || this.currentRounds || 0;
    const katha = document.getElementById('formKathaInput')?.value.trim() || 'Srila Prabhupada Katha';
    const seva = document.getElementById('formSevaInput')?.value.trim() || 'Deity & Chanting Seva';
    const sloka = document.getElementById('formSlokaInput')?.value.trim() || SACRED_SLOKAS[this.slokaIndex].source;
    const reading = document.getElementById('formReadingInput')?.value.trim() || 'Bhagavad Gita';
    const realization = document.getElementById('formRealizationInput')?.value.trim() || 'Grateful for Krishna\'s mercy.';

    const newEntry = {
      id: Date.now(),
      date: dateStr,
      rounds: Number(rounds),
      katha,
      seva,
      sloka,
      reading,
      realization
    };

    // Check if entry for today exists, replace or unshift
    const existingIndex = this.logs.findIndex(e => e.date === dateStr);
    if (existingIndex >= 0) {
      this.logs[existingIndex] = newEntry;
    } else {
      this.logs.unshift(newEntry);
    }

    this.saveToStorage();
    this.renderTable();

    if (window.soundEngine) {
      window.soundEngine.playTempleBell();
      window.soundEngine.playBlessingSparkle();
    }
    if (window.burstSacredSparkles) {
      window.burstSacredSparkles();
    }

    alert('✨ Hare Krishna! Your Daily Bhakti has been saved successfully!');
  }

  loadLogs() {
    try {
      const stored = localStorage.getItem('divine_sadhana_logs');
      if (stored) {
        this.logs = JSON.parse(stored);
      } else {
        // Seed with sample initial records so the user immediately sees a clean table
        this.logs = [
          {
            id: 1,
            date: new Date(Date.now() - 86400000).toISOString().split('T')[0],
            rounds: 16,
            katha: 'SB 1.2.6 by Srila Prabhupada',
            seva: 'Tulsi Puja & Aarti',
            sloka: 'BG 9.26',
            reading: 'Bhagavad Gita As It Is - Ch 9',
            realization: 'Pure devotional service brings true peace.'
          }
        ];
        this.saveToStorage();
      }
    } catch (e) {
      console.error(e);
      this.logs = [];
    }
    this.renderTable();
  }

  saveToStorage() {
    try {
      localStorage.setItem('divine_sadhana_logs', JSON.stringify(this.logs));
    } catch (e) {
      console.error(e);
    }
  }

  renderTable() {
    const tbody = document.getElementById('sadhanaTableBody');
    if (!tbody) return;

    if (this.logs.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" class="table-empty-state">No sadhana records found. Fill the form above to record your first day! 🙏</td></tr>`;
      return;
    }

    tbody.innerHTML = this.logs.map(log => `
      <tr>
        <td style="font-weight: 700; color: var(--crimson-divine);">${log.date}</td>
        <td><span style="background: #FFF1D2; padding: 2px 8px; border-radius: 99px; font-weight: 700; color: var(--saffron-deep);">${log.rounds}</span></td>
        <td>${log.katha}</td>
        <td>${log.seva}</td>
        <td>${log.sloka}</td>
        <td>${log.reading}</td>
        <td>
          <button onclick="sadhana.deleteLog(${log.id})" style="background:none; border:none; color:#C0392B; cursor:pointer;" title="Delete">🗑️</button>
        </td>
      </tr>
    `).join('');
  }

  deleteLog(id) {
    if (confirm('Are you sure you want to delete this sadhana record?')) {
      this.logs = this.logs.filter(l => l.id !== id);
      this.saveToStorage();
      this.renderTable();
    }
  }
}

window.sadhana = new SadhanaController();
