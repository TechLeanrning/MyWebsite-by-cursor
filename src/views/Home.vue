<template>
  <div class="home">
    <div class="section hero-section" id="hero">
      <HeroSection />
    </div>
    
    <div class="section tech-section">
      <div class="section-background">
        <div class="gradient-overlay"></div>
      </div>
      <TechStack />
    </div>
    
    <div class="section projects-section">
      <div class="section-background">
        <div class="gradient-overlay"></div>
      </div>
      <ProjectsPreview />
    </div>
    
    <div class="section stats-section">
      <div class="section-background">
        <div class="gradient-overlay"></div>
      </div>
      <StatsSection />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import TechBackground from '../components/home/TechBackground.vue'
import HeroSection from '../components/home/HeroSection.vue'
import TechStack from '../components/home/TechStack.vue'
import ProjectsPreview from '../components/home/ProjectsPreview.vue'
import StatsSection from '../components/home/StatsSection.vue'

// 导入样式
import '../styles/animations.css'
import '../styles/variables.css'
import '../styles/common.css'

export default defineComponent({
  name: 'Home',
  components: {
    TechBackground,
    HeroSection,
    TechStack,
    ProjectsPreview,
    StatsSection
  }
})
</script>

<style scoped>
/* 通用过渡效果 */
.section {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  transition: background-color 0.5s ease;
}

/* 背景装饰 */
.section-background {
  position: absolute;
  inset: 0;
  z-index: 0;
  opacity: 0.8;
}

/* 每个部分的过渡区域 */
.section::before {
  content: '';
  position: absolute;
  top: -150px;
  left: 0;
  right: 0;
  height: 150px;
  background: linear-gradient(to bottom, 
    var(--prev-section-bg, transparent) 0%,
    var(--section-bg) 100%
  );
  opacity: 0.8;
}

/* Hero Section - 简洁明亮 */
.hero-section {
  --section-bg: var(--section-hero-bg);
  background: var(--section-bg);
}

.hero-section .section-background {
  background: radial-gradient(
    circle at 70% 30%,
    rgba(255, 107, 107, 0.06) 0%,
    transparent 70%
  );
}

/* Tech Section - 科技感 */
.tech-section {
  --section-bg: var(--section-tech-bg);
  background: var(--section-bg);
}

.tech-section .section-background {
  background: radial-gradient(
    circle at 30% 60%,
    rgba(59, 130, 246, 0.06) 0%,
    transparent 70%
  );
}

/* Projects Section - 专业感 */
.projects-section {
  --section-bg: var(--section-projects-bg);
  background: var(--section-bg);
}

.projects-section .section-background {
  background: radial-gradient(
    circle at 70% 40%,
    rgba(139, 92, 246, 0.06) 0%,
    transparent 70%
  );
}

/* Stats Section - 清新感 */
.stats-section {
  --section-bg: var(--section-stats-bg);
  background: var(--section-bg);
}

.stats-section .section-background {
  background: radial-gradient(
    circle at 40% 60%,
    rgba(16, 185, 129, 0.06) 0%,
    transparent 70%
  );
}

/* 统一的卡片样式 */
:deep(.card) {
  background: var(--bg-card);
  backdrop-filter: var(--blur-amount);
  border: var(--border-card);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
}

:deep(.card:hover) {
  background: var(--bg-card-hover);
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

/* 统一的文字样式 */
:deep(.text) {
  color: var(--color-text);
}

:deep(.text-secondary) {
  color: var(--color-text-secondary);
}

/* 装饰性元素 */
.section::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--accent-hero) 50%,
    transparent
  );
  opacity: 0.1;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .section::before {
    height: 100px;
    top: -100px;
  }
}

/* 移除之前的几何装饰元素相关代码 */
.geometric-shapes,
.shape,
.shape-1,
.shape-2,
.shape-3 {
  display: none;
}
</style> 