<template>
  <div class="tech-background">
    <div class="grid"></div>
    <div class="glow-effects">
      <div class="glow glow-1"></div>
      <div class="glow glow-2"></div>
    </div>
    <div class="noise"></div>
  </div>
</template>

<style scoped>
.tech-background {
  position: fixed;
  inset: 0;
  z-index: -1;
  background: var(--gradient-background);
  overflow: hidden;
}

.grid {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(56, 189, 248, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(56, 189, 248, 0.03) 1px, transparent 1px);
  background-size: 32px 32px;
  mask-image: radial-gradient(
    circle at 50% 30%,
    black 30%,
    transparent 70%
  );
  transform: perspective(1000px) rotateX(60deg) translateY(-30%) scale(2);
  transform-origin: center top;
  opacity: 0.5;
}

.glow-effects {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(150px);
  opacity: 0.15;
}

.glow-1 {
  top: -20%;
  left: 25%;
  width: 1200px;
  height: 1200px;
  background: var(--color-primary);
  opacity: 0.1;
  animation: glowPulse 20s ease-in-out infinite alternate;
}

.glow-2 {
  bottom: -30%;
  right: 15%;
  width: 1000px;
  height: 1000px;
  background: var(--color-secondary);
  opacity: 0.08;
  animation: glowPulse 25s ease-in-out infinite;
}

.noise {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns=' http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E");
  opacity: 0.4;
  mix-blend-mode: overlay;
}

@keyframes glowPulse {
  0%, 100% { transform: scale(1); opacity: 0.15; }
  50% { transform: scale(1.1); opacity: 0.2; }
}

@media (max-width: 768px) {
  .grid {
    background-size: 24px 24px;
  }
  
  .glow {
    filter: blur(100px);
  }
}
</style> 