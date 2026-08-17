/* ==========================================================================
   WEB AUDIO API SOUND ENGINE & SACRED CHIMES
   ========================================================================== */

class SacredSoundEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.isBgmPlaying = false;
    this.bgmOscillator = null;
  }

  initContext() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Auspicious Temple Bell Resonance
  playTempleBell() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const freqs = [528, 1056, 1584, 2112]; // Solfeggio 528Hz love/miracle harmonic tone

    freqs.forEach((freq, index) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = index === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, now);

      const baseVolume = 0.25 / (index + 1);
      gain.gain.setValueAtTime(baseVolume, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.2 - index * 0.4);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 3.5);
    });
  }

  // Shankh (Conch Shell) Divine Swell
  playConchSound() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(330, now + 0.8);
    osc.frequency.exponentialRampToValueAtTime(220, now + 2.2);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.18, now + 0.6);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.5);

    // Lowpass filter for warm horn resonance
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(600, now);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 2.6);
  }

  // Japa Bead Click / Wooden Tulsi Bead Sound
  playBeadClick() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(180, now + 0.08);

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.09);
  }

  // Sparkle / Blessing Harp Chime
  playBlessingSparkle() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.5, 1318.51]; // C Major festive arpeggio

    notes.forEach((note, index) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(note, now + index * 0.08);

      gain.gain.setValueAtTime(0.001, now + index * 0.08);
      gain.gain.linearRampToValueAtTime(0.15, now + index * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + index * 0.08 + 0.8);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + index * 0.08);
      osc.stop(now + index * 0.08 + 0.9);
    });
  }

  // Toggle Global Audio Mute
  toggleMute() {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  }
}

// Global instance
window.soundEngine = new SacredSoundEngine();
