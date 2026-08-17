/* ==========================================================================
   VAISHNAVA SONGBOOK & AUDIO PLAYER (HH Bhakti Ashraya Vaisnava Swami Maharaj)
   ========================================================================== */

const VAISHNAVA_SONGS = [
  {
    id: 'radha-krishna-pran-mora',
    title: 'Radha Krishna Pran Mora',
    author: 'Srila Narottama Dasa Thakura',
    singer: 'HH Bhakti Ashraya Vaisnava Swami Maharaj',
    audioFile: 'audio/radha_krishna_pran_mora.mp3',
    rag: 'Prarthana / Intimate Bhakti',
    verses: [
      {
        sanskrit: `राधा-कृष्ण प्राण मोर युगल-किशोर\nजीवने मरणे गति आर नाहि मोर`,
        translation: `The youthful divine couple, Sri Sri Radha and Krishna, are my life and soul. In life or in death I have no other refuge.`
      },
      {
        sanskrit: `कालिन्दीर कूले केलि-कदम्बेर वन\nरतन-बेदीर उपरे बसाब दु’जन`,
        translation: `In a forest of blooming Kadamba trees on the sacred banks of Yamuna River, I will seat the divine couple on a throne of shining jewels.`
      },
      {
        sanskrit: `श्यामर गौरी-अङ्गे चन्दन बिलाब\nचामर ढुलाब कबे मुख निरखिब`,
        translation: `I will lovingly smear fragrant sandalwood paste upon Shyamasundara and Radharani's transcendental forms. When will I fan Them with a fly-whisk and gaze upon Their moon-like lotus faces?`
      },
      {
        sanskrit: `गाँथिया मालती-माला दिबा दोँहार गले\nअधरे तुलिया दिब कर्पूर-ताम्बूले`,
        translation: `Stringing garlands of fresh, fragrant Malati flowers, I will place them around Their lotus necks. And with pure love, I will offer Them sweet camphor-scented betel nuts.`
      },
      {
        sanskrit: `ललिता विशाखा-आदि यत सखी-वृन्द\nआज्ञाय करिब सेवा चरणारविन्द`,
        translation: `Under the loving guidance of Lalita, Vishakha, and all the gopi sakhis of Vraja, I will serve the lotus feet of Sri Sri Radha and Krishna.`
      },
      {
        sanskrit: `श्री-कृष्ण-चैतन्य-प्रभुर् दासेर अनुदास\nसेवा अभिलाष करे नरोत्तम-दास`,
        translation: `Narottama Dasa, the humble servant of the servants of Lord Sri Krishna Chaitanya Mahaprabhu, longs only for this eternal devotional service.`
      }
    ]
  },
  {
    id: 'caurastakam',
    title: 'Sri Caurastakam (The Thief of Hearts)',
    author: 'Sri Bilvamangala Thakura',
    singer: 'HH Bhakti Ashraya Vaisnava Swami Maharaj',
    audioFile: null,
    rag: 'Vraja Bhakti / Deep Prayer',
    verses: [
      {
        sanskrit: `व्रजे प्रसिद्धं नवनीत-चौरं\nगोपाङ्गनानां च दुकूल-चौरम्।\nअनेकताजन्म-उपार्जित-पाप-चौरं\nचौराग्रगण्यं पुरुषं नमामि॥`,
        translation: `To the foremost of all thieves, who is celebrated in Vraja as the butter-stealer, who stole the clothes of the cowherd maidens, and who steals away the accumulated sins of countless lifetimes—I offer my respectful obeisances!`
      },
      {
        sanskrit: `श्रीराधिकाया हृदयस्य चौरं\nपद्मावने केलिकला-प्रवीणम्।\nकालिन्द्युपान्ते कृत-रास-रङ्गं\nचौराग्रगण्यं पुरुषं नमामि॥`,
        translation: `To Him who stole the very heart of Sri Radhika, who is the expert master of playful pastimes in the lotus groves, and who performs the ecstatic Rasa dance on the banks of the Yamuna—I offer my pranams to that supreme Thief of hearts.`
      },
      {
        sanskrit: `गोपालरत्नं भुवनैक-रत्नं\nराधाकराम्भोज-युगेन बद्धम्।\nयशोदया गाढ-निबद्ध-कण्ठं\nचौराग्रगण्यं पुरुषं नमामि॥`,
        translation: `To that Jewel among cowherd boys, the singular Jewel of the entire creation, who is held in the lotus hands of Srimati Radharani and tied tightly by the loving arms of Mother Yasoda—I bow down.`
      },
      {
        sanskrit: `मदीय-मानसं चौरं मदीयायुष-चौरकम्।\nमदीय-सर्वस्व-चौरं कृष्णं वन्दे जगत्पतिम्॥`,
        translation: `I offer my humble obeisances to Lord Krishna, the Master of the Universe, who has stolen my mind, my life, and my everything.`
      }
    ]
  },
  {
    id: 'jaya-radha-madhava',
    title: 'Jaya Radha Madhava',
    author: 'Srila Bhaktivinoda Thakura',
    singer: 'Classic Gaudiya Kirtan',
    audioFile: null,
    rag: 'Bhairavi / Kirtan',
    verses: [
      {
        sanskrit: `(जय) राधा-माधव (जय) कुञ्ज-विहारी\n(जय) गोपी-जन-वल्लभ (जय) गिरि-वर-धारी`,
        translation: `Krishna is the lover of Radha. He displays many wonderful pastimes in the groves of Vrindavana. He is the lover of the cowherd maidens and the lifter of Govardhana Hill.`
      },
      {
        sanskrit: `(जय) यशोदा-नन्दन, (जय) व्रज-जन-रञ्जन,\n(जय) यमुना-तीर-वन-चारी`,
        translation: `He is the darling son of mother Yasoda, the delight of the inhabitants of Vraja, and he wanders in the forests along the banks of the Yamuna River.`
      }
    ]
  },
  {
    id: 'damodarashtakam',
    title: 'Sri Damodarashtakam',
    author: 'Sri Satyavrata Muni (Padma Purana)',
    singer: 'Kartika Deepam Prayer',
    audioFile: null,
    rag: 'Misra Pilu / Kartika Bhakti',
    verses: [
      {
        sanskrit: `नमामीश्वरं सच्चिदानन्दरूपं\nलसत्कुण्डलं गोकुले भ्राजमानम्।\nयशोदाभियोलूखलाद्धावमानं\nपरामृष्टमत्यन्ततो द्रुत्य गोप्या॥`,
        translation: `To the supreme Lord, whose form is eternal existence, knowledge, and bliss, whose shark-shaped earrings oscillate, who shines beautifully in Gokula, and who is fleeing from the wooden mortar out of fear of mother Yasoda—I offer my humble obeisances.`
      },
      {
        sanskrit: `रुदन्तं मुहुर्नेत्रयुग्मं मृजन्तं\nकराम्भोजयुग्मेन सातङ्कनेत्रम्।\nमुहुः श्वासकम्पत्रिरेखाङ्ककण्ठ-\nग्रहं ग्रैवेयं दामोदरं भक्तिबद्धम्॥`,
        translation: `Seeing the whipping rod in His mother's hand, He cries and rubs His two eyes again and again with His two lotus hands. His eyes are full of fear, and His neck trembles as He breathes heavily. To that Supreme Lord Damodara, bound only by love, I offer my pranams.`
      }
    ]
  },
  {
    id: 'sri-guru-vandana',
    title: 'Sri Guru Vandana',
    author: 'Srila Narottama Dasa Thakura',
    singer: 'Morning Aarti Prayer',
    audioFile: null,
    rag: 'Kalyan / Morning Prayer',
    verses: [
      {
        sanskrit: `श्री-गुरु-चरण-पद्म, केवल-भकति-सद्म,\nवन्दो मुइ सावधान मते।\nयाहार प्रसादे भाई, ए भव तोरिया याई,\nकृष्ण-प्राप्ति होय याहा हो’ते॥`,
        translation: `The lotus feet of the spiritual master are the abode of pure devotional service. I bow down to them with utmost care and attention. By his grace, O brother, one crosses over this ocean of material existence and attains Lord Krishna.`
      }
    ]
  }
];

class UniversalAudioPlayer {
  constructor() {
    this.currentSongIndex = 0;
    this.audioElement = new Audio();
    this.isPlaying = false;
    this.init();
  }

  init() {
    this.audioElement.addEventListener('timeupdate', () => this.onTimeUpdate());
    this.audioElement.addEventListener('ended', () => this.onEnded());
    this.audioElement.addEventListener('play', () => this.updatePlayState(true));
    this.audioElement.addEventListener('pause', () => this.updatePlayState(false));
  }

  renderList() {
    const listEl = document.getElementById('songsListContainer');
    if (!listEl) return;

    listEl.innerHTML = VAISHNAVA_SONGS.map((song, index) => {
      const isCurrent = index === this.currentSongIndex;
      return `
        <div class="song-list-item ${isCurrent ? 'active' : ''}" onclick="songbook.selectSong(${index})">
          <div style="display:flex; align-items:center; gap:12px;">
            <div class="song-list-play-badge">${isCurrent && this.isPlaying ? '🔊' : '▶'}</div>
            <div>
              <div class="song-item-title">${song.title}</div>
              <div class="song-item-author">🎙️ ${song.singer || song.author}</div>
            </div>
          </div>
          <span style="font-size: 0.75rem; background: #FFF1D2; padding: 2px 8px; border-radius: 99px; color: var(--crimson-divine); font-weight:700;">
            ${song.audioFile ? 'MP3' : 'Lyrics'}
          </span>
        </div>
      `;
    }).join('');
  }

  selectSong(index) {
    this.currentSongIndex = index;
    const song = VAISHNAVA_SONGS[index];
    this.renderList();
    this.renderActiveLyrics();

    if (song.audioFile) {
      this.audioElement.src = encodeURI(song.audioFile);
      this.play();
    } else {
      this.pause();
    }

    if (window.soundEngine) {
      window.soundEngine.playBlessingSparkle();
    }
  }

  renderActiveLyrics() {
    const song = VAISHNAVA_SONGS[this.currentSongIndex];
    if (!song) return;

    const titleEl = document.getElementById('activeSongTitle');
    const authorEl = document.getElementById('activeSongAuthor');
    const lyricsEl = document.getElementById('activeSongLyrics');
    const playerTitleEl = document.getElementById('bottomPlayerTitle');
    const playerSingerEl = document.getElementById('bottomPlayerSinger');

    if (titleEl) titleEl.textContent = song.title;
    if (authorEl) authorEl.textContent = `Composed by ${song.author} • Sung by ${song.singer || 'Devotees'}`;
    if (playerTitleEl) playerTitleEl.textContent = song.title;
    if (playerSingerEl) playerSingerEl.textContent = song.singer || song.author;

    if (lyricsEl) {
      lyricsEl.innerHTML = song.verses.map((v, i) => `
        <div class="lyrics-verse-box">
          <div style="font-size: 0.75rem; color: var(--gold-dark); font-weight: 700; margin-bottom: 6px;">VERSE ${i + 1}</div>
          <div class="verse-original">${v.sanskrit.replace(/\n/g, '<br>')}</div>
          <div class="verse-translation">"${v.translation}"</div>
        </div>
      `).join('');
    }
  }

  togglePlay() {
    if (this.isPlaying) {
      this.pause();
    } else {
      const song = VAISHNAVA_SONGS[this.currentSongIndex];
      if (song.audioFile) {
        this.audioElement.src = encodeURI(song.audioFile);
        this.play();
      } else {
        // Fallback procedural blessing chime
        if (window.soundEngine) {
          window.soundEngine.playTempleBell();
          window.soundEngine.playBlessingSparkle();
        }
        this.isPlaying = true;
        this.updatePlayState(true);
      }
    }
  }

  play() {
    this.audioElement.play().then(() => {
      this.isPlaying = true;
      this.updatePlayState(true);
    }).catch(e => {
      // Audio playback fallback
      console.log('Audio playback note:', e.message);
      if (window.soundEngine) {
        window.soundEngine.playTempleBell();
      }
      this.isPlaying = true;
      this.updatePlayState(true);
    });
  }

  pause() {
    this.audioElement.pause();
    this.isPlaying = false;
    this.updatePlayState(false);
  }

  nextTrack() {
    this.currentSongIndex = (this.currentSongIndex + 1) % VAISHNAVA_SONGS.length;
    this.selectSong(this.currentSongIndex);
  }

  prevTrack() {
    this.currentSongIndex = (this.currentSongIndex - 1 + VAISHNAVA_SONGS.length) % VAISHNAVA_SONGS.length;
    this.selectSong(this.currentSongIndex);
  }

  updatePlayState(isPlaying) {
    this.isPlaying = isPlaying;
    const playBtns = document.querySelectorAll('.audio-toggle-btn');
    const discVisual = document.getElementById('playerDiscVisual');

    playBtns.forEach(btn => {
      btn.innerHTML = isPlaying ? '⏸' : '▶';
    });

    if (discVisual) {
      if (isPlaying) {
        discVisual.classList.add('spinning');
      } else {
        discVisual.classList.remove('spinning');
      }
    }
  }

  onTimeUpdate() {
    const duration = this.audioElement.duration || 1;
    const currentTime = this.audioElement.currentTime || 0;
    const pct = (currentTime / duration) * 100;

    const fillBars = document.querySelectorAll('.audio-progress-fill');
    fillBars.forEach(fill => fill.style.width = pct + '%');

    const timeLabel = document.getElementById('audioTimeDisplay');
    if (timeLabel) {
      timeLabel.textContent = `${this.formatTime(currentTime)} / ${this.formatTime(duration)}`;
    }
  }

  onEnded() {
    this.nextTrack();
  }

  seek(event, progressBar) {
    const rect = progressBar.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const width = rect.width;
    const pct = clickX / width;
    if (this.audioElement.duration) {
      this.audioElement.currentTime = pct * this.audioElement.duration;
    }
  }

  setVolume(vol) {
    this.audioElement.volume = vol;
  }

  formatTime(secs) {
    if (isNaN(secs)) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  }
}

window.songbook = new UniversalAudioPlayer();
