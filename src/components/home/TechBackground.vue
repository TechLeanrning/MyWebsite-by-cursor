<template>
  <div class="tech-background">
    <div class="grid"></div>
    <div class="particles">
      <div v-for="i in 50" :key="i" class="particle"
           :style="getParticleStyle(i)"></div>
    </div>
    <div class="glow-effects">
      <div class="glow glow-1"></div>
      <div class="glow glow-2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TechBackground',
  methods: {
    getParticleStyle(i) {
      const size = Math.random() * 3 + 1
      const left = Math.random() * 100
      const animationDuration = Math.random() * 20 + 10
      const delay = Math.random() * -20
      return {
        width: `${size}px`,
        height: `${size}px`,
        left: `${left}%`,
        animationDuration: `${animationDuration}s`,
        animationDelay: `${delay}s`
      }
    }
  }
}
</script>

<style scoped>
.tech-background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background: linear-gradient(135deg, #0a1a2f 0%, #0d0d2b 100%);
  overflow: hidden;
}

.grid {
  position: absolute;
  width: 200%;
  height: 200%;
  background-image: 
    linear-gradient(rgba(0, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  transform: rotate(-45deg);
  animation: gridMove 20s linear infinite;
}

.particles {
  position: absolute;
  width: 100%;
  height: 100%;
}

.particle {
  position: absolute;
  background: rgba(0, 255, 255, 0.5);
  border-radius: 50%;
  animation: particleFloat linear infinite;
}

.glow-effects {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
}

.glow-1 {
  top: 20%;
  left: 20%;
  width: 300px;
  height: 300px;
  background: rgba(0, 255, 255, 0.15);
  animation: glowPulse 8s ease-in-out infinite;
}

.glow-2 {
  bottom: 30%;
  right: 20%;
  width: 400px;
  height: 400px;
  background: rgba(255, 0, 255, 0.1);
  animation: glowPulse 12s ease-in-out infinite alternate;
}

@keyframes gridMove {
  0% { transform: rotate(-45deg) translateY(0); }
  100% { transform: rotate(-45deg) translateY(-50%); }
}

@keyframes particleFloat {
  0% { transform: translateY(100vh); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(-100vh); opacity: 0; }
}

@keyframes glowPulse {
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.2); opacity: 0.8; }
}
</style> 