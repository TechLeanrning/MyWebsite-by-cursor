<template>
  <section class="tech-stack-section" id="skills">
    <div class="section-header">
      <h2 class="section-title">
        <gradient-text>技术</gradient-text> 栈
      </h2>
      <p class="section-subtitle">专业技能与开发工具</p>
    </div>

    <div class="tech-container">
      <!-- 主要技术领域 -->
      <div class="tech-areas">
        <div v-for="area in techAreas" 
             :key="area.id"
             class="tech-area"
             :class="{ 'area-active': area.isActive }"
             @mouseenter="area.isActive = true"
             @mouseleave="area.isActive = false">
          <div class="area-header">
            <i :class="area.icon"></i>
            <h3>{{ area.name }}</h3>
          </div>
          <div class="area-content">
            <p class="area-desc">{{ area.description }}</p>
            <div class="tech-list">
              <div v-for="tech in area.technologies" 
                   :key="tech.name"
                   class="tech-item">
                <i :class="tech.icon"></i>
                <div class="tech-info">
                  <span class="tech-name">{{ tech.name }}</span>
                  <div class="tech-level">
                    <div class="level-bar" :style="{ width: tech.level + '%' }"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 工具展示墙 -->
      <div class="tools-wall">
        <h3 class="wall-title">开发工具</h3>
        <div class="tools-grid">
          <div v-for="tool in tools" 
               :key="tool.name"
               class="tool-card"
               :class="{ 'tool-active': tool.isActive }"
               @mouseenter="activateTool(tool)"
               @mouseleave="deactivateTool(tool)">
            <i :class="tool.icon"></i>
            <span class="tool-name">{{ tool.name }}</span>
            <div class="tool-details" v-if="tool.isActive">
              <p>{{ tool.description }}</p>
              <div class="experience-level">
                <span>熟练度:</span>
                <div class="stars">
                  <i v-for="n in 5" 
                     :key="n"
                     class="star"
                     :class="{ 'filled': n <= tool.stars }"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 学习进度 -->
      <div class="learning-section">
        <h3 class="section-subtitle">正在学习</h3>
        <div class="learning-cards">
          <div v-for="item in learningItems" 
               :key="item.name"
               class="learning-card">
            <div class="learning-header">
              <i :class="item.icon"></i>
              <h4>{{ item.name }}</h4>
            </div>
            <div class="progress-container">
              <div class="progress-bar">
                <div class="progress" :style="{ width: item.progress + '%' }"></div>
              </div>
              <span class="progress-text">{{ item.progress }}%</span>
            </div>
            <p class="learning-desc">{{ item.description }}</p>
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
      techAreas: [
        {
          id: 1,
          name: '前端开发',
          icon: 'fas fa-laptop-code',
          description: '构建现代化的用户界面和交互体验',
          isActive: false,
          technologies: [
            {
              name: 'Vue.js',
              icon: 'fab fa-vuejs',
              level: 90
            },
            {
              name: 'React',
              icon: 'fab fa-react',
              level: 85
            },
            {
              name: 'TypeScript',
              icon: 'fas fa-code',
              level: 80
            }
          ]
        },
        {
          id: 2,
          name: '后端开发',
          icon: 'fas fa-server',
          description: '设计和实现高性能的服务端应用',
          isActive: false,
          technologies: [
            {
              name: 'Node.js',
              icon: 'fab fa-node-js',
              level: 85
            },
            {
              name: 'Python',
              icon: 'fab fa-python',
              level: 80
            }
          ]
        }
      ],
      tools: [
        {
          name: 'VS Code',
          icon: 'fas fa-code',
          description: '主力开发工具',
          stars: 5,
          isActive: false
        },
        {
          name: 'Git',
          icon: 'fab fa-git-alt',
          description: '版本控制',
          stars: 5,
          isActive: false
        }
      ],
      learningItems: [
        {
          name: 'WebAssembly',
          icon: 'fas fa-microchip',
          progress: 60,
          description: '探索高性能Web应用的新方向'
        },
        {
          name: 'Rust',
          icon: 'fas fa-cogs',
          progress: 40,
          description: '系统级编程语言学习'
        }
      ]
    }
  },
  methods: {
    activateTool(tool) {
      tool.isActive = true
    },
    deactivateTool(tool) {
      tool.isActive = false
    }
  }
}
</script>

<style scoped>
.tech-stack-section {
  padding: var(--spacing-large) 8%;
  background: rgba(0, 0, 0, 0.2);
}

.tech-container {
  max-width: 1400px;
  margin: 0 auto;
}

.tech-areas {
  display: grid;
  gap: 2rem;
  margin-bottom: 4rem;
}

.tech-area {
  background: rgba(255, 255, 255, 0.05);
  border-radius: var(--border-radius-medium);
  padding: 2rem;
  transition: all 0.3s ease;
}

.area-active {
  transform: translateY(-5px);
  background: rgba(0, 255, 255, 0.05);
}

.area-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.area-header i {
  font-size: 24px;
}

.area-desc {
  color: var(--color-text-secondary);
  margin-bottom: 2rem;
}

.tech-list {
  display: grid;
  gap: 1.5rem;
}

.tech-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.tech-item i {
  font-size: 24px;
}

.tech-info {
  flex: 1;
}

.tech-level {
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
  margin-top: 0.5rem;
}

.level-bar {
  height: 100%;
  background: var(--gradient-primary);
  border-radius: 3px;
  transition: width 1s ease-out;
}

.tools-wall {
  margin-bottom: 4rem;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.tool-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: var(--border-radius-medium);
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
}

.tool-active {
  transform: translateY(-5px);
  background: rgba(0, 255, 255, 0.05);
}

.tool-card i {
  font-size: 24px;
  margin-bottom: 1rem;
}

.tool-details {
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.9);
  padding: 1rem;
  border-radius: var(--border-radius-small);
  width: 200px;
  z-index: 1;
}

.stars {
  display: flex;
  gap: 0.25rem;
  justify-content: center;
  margin-top: 0.5rem;
}

.star {
  width: 16px;
  height: 16px;
  background: rgba(255, 255, 255, 0.2);
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}

.star.filled {
  background: var(--color-primary);
}

.learning-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.learning-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: var(--border-radius-medium);
  padding: 1.5rem;
}

.learning-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.learning-header i {
  font-size: 24px;
}

.progress-container {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.progress-bar {
  flex: 1;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background: var(--gradient-primary);
  border-radius: 3px;
  transition: width 1s ease-out;
}

@media (max-width: 768px) {
  .tools-grid {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }
  
  .tool-details {
    display: none;
  }
}
</style> 