/* ==========================================================================
   MASTER APPLICATION ROUTER & INTERACTION CONTROLLER
   ========================================================================== */

class SanctuaryApp {
  constructor() {
    this.currentSection = 'portal';
    this.init();
  }

  init() {
    this.bindEvents();
    this.handleUrlHash();
    if (window.gallery) {
      window.gallery.renderRadhaGovind('All');
      window.gallery.renderRadhaMadhav('All');
    }
    if (window.songbook) window.songbook.renderList();
    if (window.songbook) window.songbook.renderActiveLyrics();
    this.highlightActiveSchedule();
  }

  bindEvents() {
    // Enter key support in mantra input
    const input = document.getElementById('mantraInputField');
    if (input) {
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          this.processMantraInput();
        }
      });
    }
  }

  // Handle URL hash direct linking (e.g. #sadhana, #schedule, #radhagovind)
  handleUrlHash() {
    const hash = window.location.hash.replace('#', '').trim();
    if (hash) {
      this.routeKeyword(hash, false);
    }
  }

  // Process Mantra Input from entrance box
  processMantraInput(customKeyword = null) {
    const inputEl = document.getElementById('mantraInputField');
    const rawVal = customKeyword || inputEl?.value || '';
    const keyword = rawVal.trim().toLowerCase();

    if (!keyword) {
      alert('Are bhai bolo yrr "Hare Krishna" pehle! 🙏✨');
      return;
    }

    this.routeKeyword(keyword, true);
  }

  // Route keyword to corresponding sanctum
  routeKeyword(rawKeyword, triggerEnvelopeAnim = true) {
    const key = rawKeyword.toLowerCase().replace(/['"]/g, '').trim();

    let targetSectionId = null;

    if (key.includes('hare krishna') || key.includes('sadhana') || key.includes('bhakti') || key === 'japa') {
      targetSectionId = 'sadhanaSection';
    } else if (key.includes('radha & govind') || key.includes('radha and govind') || key === 'radha govind' || key === 'radhagovind ji') {
      targetSectionId = 'radhaGovindGallerySection';
    } else if (key.includes('radhagovind') || key.includes('schedule') || key.includes('routine')) {
      targetSectionId = 'scheduleSection';
    } else if (key.includes('radha madhav') || key.includes('radhamadhav')) {
      targetSectionId = 'radhaMadhavGallerySection';
    } else if (key.includes('vaishnav song') || key.includes('vaishnava song') || key.includes('kirtan') || key.includes('bhajan') || key.includes('song')) {
      targetSectionId = 'songbookSection';
    } else if (key === 'myfav' || key.includes('fav')) {
      targetSectionId = 'myFavMessengerSection';
    } else if (key === 'myheart' || key.includes('heart')) {
      targetSectionId = 'myHeartInboxSection';
    } else if (key === 'menu' || key === 'all' || key === 'help') {
      this.openGuideModal();
      return;
    } else {
      // Default to Sadhana or ask with warmth
      alert(`✨ Divine name "${rawKeyword}" acknowledged! Opening your Sacred Sadhana Sanctum... 🙏`);
      targetSectionId = 'sadhanaSection';
    }

    if (triggerEnvelopeAnim && this.currentSection === 'portal') {
      this.animateOpenEnvelope(targetSectionId);
    } else {
      this.switchSection(targetSectionId);
    }
  }

  // Realistic Envelope Opening Animation & Sound
  animateOpenEnvelope(targetSectionId) {
    const envelope = document.getElementById('sacredEnvelope');
    if (envelope) {
      envelope.classList.add('opened');
    }

    if (window.soundEngine) {
      window.soundEngine.playConchSound();
      window.soundEngine.playTempleBell();
    }
    if (window.burstSacredSparkles) {
      window.burstSacredSparkles();
    }

    setTimeout(() => {
      this.switchSection(targetSectionId);
    }, 900);
  }

  // Switch Active Section View
  switchSection(sectionId) {
    document.querySelectorAll('.sanctum-section').forEach(sec => {
      sec.classList.remove('active');
    });

    const target = document.getElementById(sectionId);
    if (target) {
      target.classList.add('active');
      this.currentSection = sectionId;
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Update URL hash
      window.location.hash = sectionId.replace('Section', '').toLowerCase();
    }
  }

  // Return to Portal Entrance
  returnToPortal() {
    const envelope = document.getElementById('sacredEnvelope');
    if (envelope) {
      envelope.classList.remove('opened');
    }
    const input = document.getElementById('mantraInputField');
    if (input) input.value = '';

    this.switchSection('portalSection');
    if (window.soundEngine) window.soundEngine.playTempleBell();
  }

  // Open & Close Guide Modal
  openGuideModal() {
    const modal = document.getElementById('guideModalOverlay');
    if (modal) modal.classList.add('active');
    if (window.soundEngine) window.soundEngine.playBlessingSparkle();
  }

  closeGuideModal() {
    const modal = document.getElementById('guideModalOverlay');
    if (modal) modal.classList.remove('active');
  }

  // Toggle Global Audio
  toggleAudio() {
    if (!window.soundEngine) return;
    const isMuted = window.soundEngine.toggleMute();
    const btn = document.getElementById('globalSoundBtn');
    if (btn) {
      btn.innerHTML = isMuted ? '🔇' : '🔔';
      btn.title = isMuted ? 'Sound Muted' : 'Sound Active';
    }
    if (!isMuted) {
      window.soundEngine.playTempleBell();
    }
  }

  // Lightbox Image Viewer
  openLightbox(imgSrc, caption) {
    const modal = document.getElementById('lightboxModal');
    const img = document.getElementById('lightboxImage');
    const cap = document.getElementById('lightboxCaptionText');

    if (img) img.src = imgSrc;
    if (cap) cap.textContent = caption;
    if (modal) modal.classList.add('active');

    if (window.soundEngine) window.soundEngine.playBlessingSparkle();
  }

  closeLightbox() {
    const modal = document.getElementById('lightboxModal');
    if (modal) modal.classList.remove('active');
  }

  // Highlight Current Seva in Daily Schedule
  highlightActiveSchedule() {
    const now = new Date();
    const currentHour = now.getHours() + now.getMinutes() / 60;

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
      const start = parseFloat(item.dataset.start);
      const end = parseFloat(item.dataset.end);
      if (currentHour >= start && currentHour < end) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }
}

// Global App Initialization
window.addEventListener('DOMContentLoaded', () => {
  window.app = new SanctuaryApp();
});
