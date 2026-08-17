/* ==========================================================================
   FLOATING LOTUS PETALS, GOLDEN SPARKLES & CELEBRATION PARTICLES
   ========================================================================== */

(function () {
  const canvas = document.getElementById('particlesCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width, height;
  let particles = [];
  const maxParticles = 40;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  class PetalParticle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : -20;
      this.size = Math.random() * 12 + 8;
      this.speedX = Math.sin(Math.random() * Math.PI) * 0.8 - 0.4;
      this.speedY = Math.random() * 1.2 + 0.6;
      this.rotation = Math.random() * 360;
      this.rotationSpeed = (Math.random() - 0.5) * 1.5;
      this.opacity = Math.random() * 0.6 + 0.2;
      this.colorType = Math.random() > 0.4 ? 'lotus' : (Math.random() > 0.5 ? 'marigold' : 'gold');
    }

    update() {
      this.y += this.speedY;
      this.x += Math.sin(this.y * 0.01) * 0.7;
      this.rotation += this.rotationSpeed;

      if (this.y > height + 20 || this.x < -20 || this.x > width + 20) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate((this.rotation * Math.PI) / 180);
      ctx.globalAlpha = this.opacity;

      ctx.beginPath();
      if (this.colorType === 'lotus') {
        ctx.fillStyle = '#E06377';
      } else if (this.colorType === 'marigold') {
        ctx.fillStyle = '#FF9900';
      } else {
        ctx.fillStyle = '#D4AF37';
      }

      // Draw graceful petal curve
      ctx.ellipse(0, 0, this.size * 0.5, this.size, Math.PI / 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < maxParticles; i++) {
    particles.push(new PetalParticle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let p of particles) {
      p.update();
      p.draw();
    }
    requestAnimationFrame(animate);
  }
  animate();

  // Burst Celebration Confetti / Sparkle helper
  window.burstSacredSparkles = function (x, y) {
    const burstCount = 35;
    const originX = x || width / 2;
    const originY = y || height / 2;

    for (let i = 0; i < burstCount; i++) {
      const p = new PetalParticle();
      p.x = originX;
      p.y = originY;
      p.speedX = (Math.random() - 0.5) * 8;
      p.speedY = (Math.random() - 0.5) * 8;
      p.opacity = 1;
      p.size = Math.random() * 14 + 6;
      particles.push(p);
    }
    // Trim back after a while
    setTimeout(() => {
      if (particles.length > maxParticles) {
        particles.splice(maxParticles, particles.length - maxParticles);
      }
    }, 4000);
  };
})();
