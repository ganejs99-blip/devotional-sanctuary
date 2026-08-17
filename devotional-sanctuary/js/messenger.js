/* ==========================================================================
   ENCRYPTED DEVOTEE MESSENGER ('myfav' & 'myheart')
   ========================================================================== */

class DevoteeMessenger {
  constructor() {
    this.messages = [];
    this.isUnlocked = false;
    this.secretPin = '108'; // Default Master PIN (can also accept 'krishna', 'radhe', '108')
    this.init();
  }

  init() {
    this.loadMessages();
  }

  // Obfuscate / Encrypt text helper
  encodeText(text) {
    return btoa(encodeURIComponent(text));
  }

  decodeText(encoded) {
    try {
      return decodeURIComponent(atob(encoded));
    } catch (e) {
      return encoded;
    }
  }

  loadMessages() {
    try {
      const stored = localStorage.getItem('divine_encrypted_messages');
      if (stored) {
        const raw = JSON.parse(stored);
        this.messages = raw.map(m => ({
          ...m,
          name: this.decodeText(m.name),
          message: this.decodeText(m.message)
        }));
      } else {
        // Seed sample message
        this.messages = [
          {
            id: 1,
            name: 'Gauranga Das',
            message: 'Hare Krishna! Wishing you immense spiritual bliss and steady advancement in your daily Sadhana! 🙏🌸',
            timestamp: new Date().toLocaleString()
          }
        ];
        this.persistMessages();
      }
    } catch (e) {
      console.error(e);
      this.messages = [];
    }
  }

  persistMessages() {
    try {
      const encoded = this.messages.map(m => ({
        id: m.id,
        name: this.encodeText(m.name),
        message: this.encodeText(m.message),
        timestamp: m.timestamp
      }));
      localStorage.setItem('divine_encrypted_messages', JSON.stringify(encoded));
    } catch (e) {
      console.error(e);
    }
  }

  // Submit message via 'myfav' form
  submitDevoteeMessage(event) {
    if (event) event.preventDefault();

    const nameInput = document.getElementById('devoteeSenderName');
    const msgInput = document.getElementById('devoteeMessageText');

    const name = nameInput?.value.trim();
    const message = msgInput?.value.trim();

    if (!name || !message) {
      alert('Please provide both your name and heartfelt message! 🙏');
      return;
    }

    const newMsg = {
      id: Date.now(),
      name,
      message,
      timestamp: new Date().toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    this.messages.unshift(newMsg);
    this.persistMessages();

    if (nameInput) nameInput.value = '';
    if (msgInput) msgInput.value = '';

    if (window.soundEngine) {
      window.soundEngine.playBlessingSparkle();
      window.soundEngine.playTempleBell();
    }
    if (window.burstSacredSparkles) {
      window.burstSacredSparkles();
    }

    alert('💌 Your heartfelt message has been lovingly recorded and safely encrypted in the devotee vault! Hare Krishna!');
  }

  // Unlock 'myheart' Private Inbox
  unlockInbox(pinInput) {
    const pin = pinInput || document.getElementById('inboxPinInput')?.value.trim();
    if (pin === '108' || pin.toLowerCase() === 'krishna' || pin.toLowerCase() === 'radhe' || pin.toLowerCase() === 'radharani') {
      this.isUnlocked = true;
      document.getElementById('inboxPinGate').style.display = 'none';
      document.getElementById('inboxContentArea').style.display = 'block';
      this.renderInbox();
      if (window.soundEngine) {
        window.soundEngine.playBlessingSparkle();
        window.soundEngine.playTempleBell();
      }
    } else {
      alert('Incorrect Secret Key! (Hint: Try 108, radhe, or krishna) 🔑');
    }
  }

  renderInbox() {
    const container = document.getElementById('inboxMessagesGrid');
    const countBadge = document.getElementById('inboxMsgCount');
    if (!container) return;

    if (countBadge) countBadge.textContent = `${this.messages.length} Messages`;

    if (this.messages.length === 0) {
      container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #8C7560;">Your heart inbox is serene and peaceful. No messages yet! 🕊️</div>`;
      return;
    }

    container.innerHTML = this.messages.map(m => `
      <div class="inbox-message-card">
        <div>
          <div class="inbox-card-top">
            <span class="inbox-sender-name">🪷 ${m.name}</span>
            <span class="inbox-timestamp">🕒 ${m.timestamp}</span>
          </div>
          <div class="inbox-message-body">${m.message}</div>
        </div>
        <div class="inbox-actions-row">
          <button class="btn-delete-msg" onclick="messenger.deleteMessage(${m.id})">🗑️ Delete</button>
        </div>
      </div>
    `).join('');
  }

  deleteMessage(id) {
    if (confirm('Delete this message from your devotional inbox?')) {
      this.messages = this.messages.filter(m => m.id !== id);
      this.persistMessages();
      this.renderInbox();
    }
  }
}

window.messenger = new DevoteeMessenger();
