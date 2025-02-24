<template>
  <section class="tech-stack-section" id="skills">
    <div class="section-header">
      <h2 class="section-title">
        <gradient-text>技术栈</gradient-text>
      </h2>
      <p class="section-desc">我的技术工具箱</p>
    </div>

    <div class="tech-grid">
      <!-- 前端开发 -->
      <div class="tech-category">
        <div class="category-header">
          <i class="fas fa-code"></i>
          <h3>前端开发</h3>
        </div>
        <div class="tech-list">
          <div class="tech-item" v-for="tech in frontendTech" :key="tech.name">
            <i :class="tech.icon"></i>
            <span class="tech-name">{{ tech.name }}</span>
            <div class="tech-level">
              <div class="level-bar" :style="{ width: tech.level + '%' }"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- 后端开发 -->
      <div class="tech-category">
        <div class="category-header">
          <i class="fas fa-server"></i>
          <h3>后端开发</h3>
        </div>
        <div class="tech-list">
          <div class="tech-item" v-for="tech in backendTech" :key="tech.name">
            <i :class="tech.icon"></i>
            <span class="tech-name">{{ tech.name }}</span>
            <div class="tech-level">
              <div class="level-bar" :style="{ width: tech.level + '%' }"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- 开发工具 -->
      <div class="tech-category">
        <div class="category-header">
          <i class="fas fa-tools"></i>
          <h3>开发工具</h3>
        </div>
        <div class="tech-list">
          <div class="tech-item" v-for="tool in devTools" :key="tool.name">
            <i :class="tool.icon"></i>
            <span class="tech-name">{{ tool.name }}</span>
            <div class="tech-level">
              <div class="level-bar" :style="{ width: tool.level + '%' }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import GradientText from '@/components/common/GradientText.vue'

export default {
  name: 'TechStack',
  components: {
    GradientText
  },
  data() {
    return {
      frontendTech: [
        { name: 'Vue.js', icon: 'fab fa-vuejs', level: 95 },
        { name: 'React', icon: 'fab fa-react', level: 90 },
        { name: 'TypeScript', icon: 'fas fa-code', level: 85 },
        { name: 'CSS3', icon: 'fab fa-css3-alt', level: 90 }
      ],
      backendTech: [
        { name: 'Node.js', icon: 'fab fa-node-js', level: 85 },
        { name: 'Python', icon: 'fab fa-python', level: 80 },
        { name: 'MongoDB', icon: 'fas fa-database', level: 75 },
        { name: 'MySQL', icon: 'fas fa-database', level: 80 }
      ],
      devTools: [
        { name: 'Git', icon: 'fab fa-git-alt', level: 90 },
        { name: 'VS Code', icon: 'fas fa-code', level: 95 },
        { name: 'Docker', icon: 'fab fa-docker', level: 80 },
        { name: 'Webpack', icon: 'fas fa-box-open', level: 85 }
      ]
    }
  }
}
</script>

<style scoped>
.tech-stack-section {
  padding: 4rem 8%;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.section-desc {
  color: var(--color-text-secondary);
  font-size: 1.1rem;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.tech-category {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.tech-category:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.05);
}

.category-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  color: var(--color-primary);
}

.category-header i {
  font-size: 1.5rem;
}

.tech-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.tech-item {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  align-items: center;
}

.tech-item i {
  font-size: 1.2rem;
  width: 24px;
  color: var(--color-primary);
}

.tech-name {
  font-size: 0.95rem;
}

.tech-level {
  grid-column: 1 / -1;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
  margin-top: 0.5rem;
}

.level-bar {
  height: 100%;
  background: var(--color-primary);
  border-radius: 2px;
  transition: width 1s ease-out;
}

@media (max-width: 768px) {
  .tech-stack-section {
    padding: 3rem 5%;
  }

  .section-title {
    font-size: 2rem;
  }

  .tech-grid {
    grid-template-columns: 1fr;
  }
}
</style> 