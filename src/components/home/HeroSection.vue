<template>
  <section class="hero-section">
    <!-- 动态背景 -->
    <div class="hero-container">
      <!-- 背景图片轮播 -->
      <div class="background-slideshow">
        <div v-for="(bg, index) in backgrounds" 
             :key="index"
             class="background-slide"
             :class="{ active: currentBg === index }">
          <img :src="bg.url" :alt="bg.alt">
        </div>
      </div>

      <!-- Canvas 粒子效果 -->
      <canvas ref="bgCanvas" class="bg-canvas"></canvas>
      
      <!-- 动态光效 -->
      <div class="glow-effects">
        <div class="glow glow-1"></div>
        <div class="glow glow-2"></div>
      </div>
    </div>

    <!-- 内容区域 -->
    <div class="hero-content">
      <div class="title-group">
        <div class="intro-badge">
          <span class="badge-dot"></span>
          <span class="badge-text">开放远程工作机会</span>
        </div>
        
        <h1 class="main-title">
          <span class="greeting">Hi,我是</span>
          <gradient-text class="name">小明</gradient-text>
        </h1>
        
        <div class="title-desc">
          <span class="typed-text"></span>
          <span class="cursor">|</span>
        </div>

        <p class="bio-text" ref="bioText"></p>
      </div>

      <div class="tech-stack">
        <div class="tech-badges">
          <span v-for="tech in mainTechnologies" 
                :key="tech.name" 
                class="tech-badge">
            <i :class="tech.icon"></i>
            {{ tech.name }}
          </span>
        </div>
      </div>

      <div class="cta-group">
        <a href="#projects" class="cta-button primary">
          <i class="fas fa-code-branch"></i>
          查看作品
        </a>
        <a href="https://github.com" target="_blank" class="cta-button secondary">
          <i class="fab fa-github"></i>
          GitHub
        </a>
        <a href="https://juejin.cn" target="_blank" class="cta-button secondary">
          <i class="fas fa-book"></i>
          掘金主页
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import GradientText from '@/components/common/GradientText.vue'
import Typed from 'typed.js'

export default {
  name: 'HeroSection',
  components: { GradientText },
  data() {
    return {
      canvas: null,
      ctx: null,
      particles: [],
      connections: [],
      animationFrame: null,
      mainTechnologies: [
        {
          name: 'Vue.js',
          icon: 'fab fa-vuejs'
        },
        {
          name: 'React',
          icon: 'fab fa-react'
        },
        {
          name: 'Node.js',
          icon: 'fab fa-node-js'
        },
        {
          name: 'Python',
          icon: 'fab fa-python'
        }
      ],
      currentBg: 0,
      backgrounds: [
        {
          url: '/images/tech-bg-1.jpg',
          alt: '科技背景1'
        },
        {
          url: '/images/tech-bg-2.jpg',
          alt: '科技背景2'
        },
        {
          url: '/images/tech-bg-3.jpg',
          alt: '科技背景3'
        },
        {
          url: '/images/tech-bg-4.jpg',
          alt: '科技背景4'
        }
      ]
    }
  },
  mounted() {
    // 初始化 Canvas
    this.initCanvas()
    
    // 打字机效果
    new Typed('.typed-text', {
      strings: [
        '全栈开发工程师',
        '开源项目贡献者',
        '技术分享博主'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true
    })

    // 渐显文字效果
    if (this.$refs.bioText) {
      this.$refs.bioText.innerHTML = '热衷于探索新技术，专注于构建高性能的现代化应用。' +
        '擅长全栈开发，对技术创新和用户体验有独到见解。'
    }

    // 启动背景轮播
    this.startBackgroundSlideshow()
  },
  beforeDestroy() {
    // 清理动画
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame)
    }
    
    // 清理背景轮播定时器
    if (this.slideshowTimer) {
      clearInterval(this.slideshowTimer)
    }
  },
  methods: {
    initCanvas() {
      this.canvas = this.$refs.bgCanvas
      this.ctx = this.canvas.getContext('2d')
      
      // 设置 Canvas 尺寸
      const setSize = () => {
        this.canvas.width = window.innerWidth
        this.canvas.height = window.innerHeight
      }
      
      setSize()
      window.addEventListener('resize', setSize)
      
      // 创建粒子
      this.createParticles()
      
      // 开始动画
      this.animate()
    },
    createParticles() {
      const particleCount = Math.min(window.innerWidth / 10, 100)
      
      for (let i = 0; i < particleCount; i++) {
        this.particles.push({
          x: Math.random() * this.canvas.width,
          y: Math.random() * this.canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          color: `rgba(56, 189, 248, ${Math.random() * 0.5 + 0.1})`
        })
      }
    },
    animate() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      
      // 更新和绘制粒子
      this.particles.forEach(particle => {
        // 更新位置
        particle.x += particle.vx
        particle.y += particle.vy
        
        // 边界检查
        if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1
        
        // 绘制粒子
        this.ctx.beginPath()
        this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        this.ctx.fillStyle = particle.color
        this.ctx.fill()
      })
      
      // 绘制连接线
      this.drawConnections()
      
      // 继续动画循环
      this.animationFrame = requestAnimationFrame(() => this.animate())
    },
    drawConnections() {
      this.particles.forEach((p1, i) => {
        this.particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 100) {
            this.ctx.beginPath()
            this.ctx.moveTo(p1.x, p1.y)
            this.ctx.lineTo(p2.x, p2.y)
            this.ctx.strokeStyle = `rgba(56, 189, 248, ${0.1 * (1 - distance / 100)})`
            this.ctx.stroke()
          }
        })
      })
    },
    startBackgroundSlideshow() {
      this.slideshowTimer = setInterval(() => {
        this.currentBg = (this.currentBg + 1) % this.backgrounds.length
      }, 5000) // 每5秒切换一次背景
    }
  }
}
</script>

<style scoped>
/* 基础布局 */
.hero-section {
  min-height: calc(100vh - var(--header-height));
  display: flex;
  align-items: center;
  padding: var(--spacing-lg) var(--container-padding);
  position: relative;
  overflow: hidden;
}

/* 背景效果 */
.hero-container {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.glow-effects {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

.glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
}

.glow-1 {
  top: -10%;
  right: -5%;
  width: 50%;
  height: 50%;
  background: var(--gradient-glow-1);
  opacity: 0.4;
  animation: float 15s ease-in-out infinite;
}

.glow-2 {
  bottom: -20%;
  left: -10%;
  width: 60%;
  height: 60%;
  background: var(--gradient-glow-2);
  opacity: 0.3;
  animation: float 20s ease-in-out infinite reverse;
}

/* 内容样式 */
.hero-content {
  position: relative;
  z-index: 1;
  max-width: var(--max-width);
  margin: 0 auto;
}

.intro-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) var(--spacing-sm);
  background: var(--bg-card);
  border-radius: var(--border-radius-lg);
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-md);
  animation: fadeInDown 1s ease-out;
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: var(--color-primary);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.main-title {
  font-size: var(--font-size-3xl);
  line-height: 1.2;
  margin-bottom: var(--spacing-sm);
  font-weight: var(--font-weight-bold);
  animation: fadeInUp 1s ease-out 0.3s both;
}

.title-desc {
  font-size: var(--font-size-xl);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-md);
  font-weight: var(--font-weight-medium);
}

.bio-text {
  font-size: var(--font-size-md);
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: var(--spacing-lg);
  max-width: 600px;
  min-height: 3.6em;
}

/* 技术标签 */
.tech-badges {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
}

.tech-badge {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) var(--spacing-sm);
  background: var(--bg-card);
  border-radius: var(--border-radius-sm);
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  transition: var(--transition-normal);
}

.tech-badge:hover {
  transform: translateY(-2px);
  background: var(--bg-card-hover);
  color: var(--color-text);
}

.tech-badge i {
  color: var(--color-primary);
}

/* CTA按钮组 */
.cta-group {
  display: flex;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius-sm);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  transition: var(--transition-normal);
}

.cta-button.primary {
  background: var(--color-primary);
  color: var(--color-background);
}

.cta-button.secondary {
  background: var(--bg-card);
  color: var(--color-text);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

/* 动画效果 */
@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.1; }
  50% { transform: scale(1.02); opacity: 0.15; }
}

@keyframes rotate {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

@keyframes float {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-20px, -20px); }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 响应式调整 */
@media (max-width: 768px) {
  .hero-section {
    padding: var(--spacing-md) var(--container-padding);
    text-align: center;
  }

  .main-title {
    font-size: var(--font-size-2xl);
  }

  .title-desc {
    font-size: var(--font-size-lg);
  }

  .bio-text {
    margin-left: auto;
    margin-right: auto;
  }

  .tech-badges {
    justify-content: center;
  }

  .cta-group {
    justify-content: center;
  }

  .glow {
    filter: blur(40px);
  }
}

/* Canvas 样式 */
.bg-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.7;
}

/* 背景轮播样式 */
.background-slideshow {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.background-slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.background-slide.active {
  opacity: 1;
}

.background-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.3) contrast(1.2) saturate(1.1);
}
</style>