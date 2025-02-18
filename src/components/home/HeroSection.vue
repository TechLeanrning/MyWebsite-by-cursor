<template>
  <section class="hero-section">
    <div class="hero-content">
      <div class="title-group">
        <div class="badge">
          <span class="pulse"></span>
          开放合作机会
        </div>
        <h1 class="main-title">
          <gradient-text>创新</gradient-text>
          <glitch-text text="开发者" />
          <span class="subtitle-small">打造数字化未来</span>
        </h1>
        <p class="bio-text">
          专注于构建高性能、可扩展的现代化应用
          <br>用技术创新推动业务发展
        </p>
        <div class="tech-badges">
          <span v-for="tech in mainTechnologies" 
                :key="tech.name" 
                class="tech-badge" 
                :class="tech.class">
            <i :class="tech.icon"></i>
            {{ tech.name }}
          </span>
        </div>
      </div>
      <div class="cta-group">
        <a href="#contact" class="cta-button primary">
          <i class="fas fa-paper-plane"></i>
          联系我
        </a>
        <a href="#projects" class="cta-button secondary">
          <i class="fas fa-code-branch"></i>
          查看项目
        </a>
        <div class="social-links">
          <a href="https://github.com" target="_blank" class="social-link">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" class="social-link">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com" target="_blank" class="social-link">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="hero-visual">
      <div class="profile-card">
        <div class="profile-header">
          <div class="avatar-container">
            <img src="https://via.placeholder.com/150" alt="个人照片" class="avatar">
            <div class="status-badge">
              <span class="status-dot"></span>
              接受远程工作
            </div>
          </div>
          <div class="basic-info">
            <h3>全栈开发工程师</h3>
            <p class="location">
              <i class="fas fa-map-marker-alt"></i>
              北京，中国
            </p>
          </div>
        </div>
        <div class="skill-highlights">
          <div class="skill-item">
            <i class="fas fa-laptop-code"></i>
            <span>前端开发</span>
          </div>
          <div class="skill-item">
            <i class="fas fa-server"></i>
            <span>后端开发</span>
          </div>
          <div class="skill-item">
            <i class="fas fa-cloud"></i>
            <span>云服务</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue'
import GradientText from '@/components/common/GradientText.vue'
import GlitchText from '@/components/common/GlitchText.vue'
import CtaButtons from './CtaButtons.vue'
import DeveloperProfile from './DeveloperProfile/index.vue'

export default defineComponent({
  name: 'HeroSection',
  components: {
    GradientText,
    GlitchText,
    CtaButtons,
    DeveloperProfile
  },
  data() {
    return {
      mainTechnologies: [
        {
          name: 'Vue.js',
          icon: 'fab fa-vuejs',
          class: 'vue'
        },
        {
          name: 'React',
          icon: 'fab fa-react',
          class: 'react'
        },
        {
          name: 'Node.js',
          icon: 'fab fa-node-js',
          class: 'node'
        },
        {
          name: 'Python',
          icon: 'fab fa-python',
          class: 'python'
        }
      ],
      codeSnippet: `class Developer {
  constructor() {
    this.name = "Your Name";
    this.role = "Full Stack Developer";
    this.languages = ["JavaScript", "Python", "Go"];
    this.specialties = [
      "Web Development",
      "Cloud Architecture",
      "DevOps"
    ];
  }

  async createSolution(problem) {
    const solution = await this.analyze(problem);
    return this.implement(solution);
  }

  learnNewTechnology(tech) {
    this.skills.add(tech);
    return this.share(tech);
  }
}`,
      floatingElements: [
        { icon: 'fab fa-docker', style: { top: '10%', left: '80%' } },
        { icon: 'fab fa-aws', style: { top: '20%', right: '85%' } },
        { icon: 'fas fa-database', style: { bottom: '15%', left: '75%' } }
      ],
      experience: [
        { years: 5, description: 'Years of Development' },
        { years: 50, description: 'Projects Completed' },
        { years: 20, description: 'Happy Clients' }
      ]
    }
  }
})
</script>

<style scoped>
.hero-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  padding: 4rem 8%;
  min-height: 100vh;
  align-items: center;
}

.profile-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.avatar-container {
  position: relative;
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
}

.status-badge {
  position: absolute;
  bottom: 0;
  right: 0;
  background: rgba(0, 255, 0, 0.8);
  border-radius: 10px;
  padding: 0.2rem 0.5rem;
  font-size: 0.8rem;
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #00ff00;
  border-radius: 50%;
  margin-right: 4px;
}

.basic-info {
  text-align: right;
}

.h3 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.location {
  font-size: 1.2rem;
  color: var(--color-text-secondary);
}

.skill-highlights {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
}

.skill-item i {
  font-size: 24px;
  color: var(--color-primary);
  margin-right: 0.5rem;
  transition: transform 0.3s ease;
}

.skill-item:hover i {
  transform: scale(1.2);
}

.tech-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}

.tech-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.tech-badge i {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.tech-badge:hover i {
  transform: rotate(360deg);
}

.tech-badge.vue i { color: #42b883; }
.tech-badge.react i { color: #61dafb; }
.tech-badge.node i { color: #68a063; }
.tech-badge.python i { color: #ffd43b; }

.tech-badge:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background: rgba(0, 255, 255, 0.1);
  border-radius: 20px;
  font-size: 0.9rem;
  margin-bottom: 2rem;
}

.pulse {
  width: 8px;
  height: 8px;
  background: #00ff00;
  border-radius: 50%;
  margin-right: 8px;
  position: relative;
}

.pulse::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: inherit;
  border-radius: inherit;
  animation: pulse 2s ease-out infinite;
}

.main-title {
  font-size: 4.5rem;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.subtitle-small {
  display: block;
  font-size: 1.2rem;
  color: var(--color-text-secondary);
  margin-top: 0.5rem;
}

.bio-text {
  font-size: 1.2rem;
  color: var(--color-text-secondary);
  max-width: 600px;
  margin-bottom: 2rem;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.social-link:hover {
  transform: translateY(-3px);
  background: var(--color-primary);
}

.social-link i {
  font-size: 24px;
  color: var(--color-text);
  transition: all 0.3s ease;
}

.social-link:hover i {
  color: var(--color-text);
  transform: scale(1.1);
}

.code-editor {
  background: #1e1e1e;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  position: relative;
}

.editor-header {
  background: #2d2d2d;
  padding: 1rem;
  display: flex;
  align-items: center;
}

.dots {
  display: flex;
  gap: 6px;
}

.dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dots span:nth-child(1) { background: #ff5f56; }
.dots span:nth-child(2) { background: #ffbd2e; }
.dots span:nth-child(3) { background: #27c93f; }

.editor-content {
  padding: 1.5rem;
  font-family: 'Fira Code', monospace;
  color: #d4d4d4;
  line-height: 1.6;
}

.floating-element {
  position: absolute;
  font-size: 2rem;
  color: var(--color-primary);
  animation: float 6s ease-in-out infinite;
  opacity: 0.5;
}

.experience-card {
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 1.5rem;
  width: 300px;
}

.exp-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-primary);
  margin-bottom: 1rem;
}

.exp-item {
  display: flex;
  align-items: baseline;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.years {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--color-primary);
}

.desc {
  color: var(--color-text-secondary);
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(3); opacity: 0; }
}

.location i {
  color: var(--color-primary);
  margin-right: 0.5rem;
}

.cta-button i {
  margin-right: 0.5rem;
  font-size: 1.1rem;
}

@media (max-width: 1024px) {
  .hero-section {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .main-title {
    font-size: 3rem;
  }

  .tech-badges {
    justify-content: center;
  }

  .social-links {
    justify-content: center;
  }

  .experience-card {
    position: static;
    width: 100%;
    margin-top: 2rem;
  }
}
</style> 