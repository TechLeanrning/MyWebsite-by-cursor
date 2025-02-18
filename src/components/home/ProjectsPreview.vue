<template>
  <section class="projects-section" id="projects">
    <div class="section-header">
      <h2 class="section-title">
        <gradient-text>精选</gradient-text> 项目
      </h2>
      <p class="section-subtitle">我的最新作品展示</p>
    </div>

    <div class="projects-grid">
      <div v-for="project in projects" 
           :key="project.id" 
           class="project-card"
           @mouseenter="project.isHovered = true"
           @mouseleave="project.isHovered = false">
        <div class="project-preview">
          <img :src="`https://via.placeholder.com/800x400?text=${project.name}`" :alt="project.name">
          <div class="project-overlay" :class="{ active: project.isHovered }">
            <div class="project-links">
              <a :href="project.demo" target="_blank" class="project-link">
                <i class="fas fa-external-link-alt"></i>
                在线演示
              </a>
              <a :href="project.github" target="_blank" class="project-link">
                <i class="fab fa-github"></i>
                源代码
              </a>
            </div>
          </div>
        </div>
        <div class="project-info">
          <h3 class="project-title">{{ project.name }}</h3>
          <p class="project-description">{{ project.description }}</p>
          <div class="project-tech">
            <span v-for="tech in project.technologies" 
                  :key="tech.name" 
                  class="tech-tag">
              <i :class="tech.icon"></i>
              {{ tech.name }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="projects-showcase">
      <div class="showcase-stats">
        <div class="stat-item" v-for="stat in projectStats" :key="stat.label">
          <div class="stat-icon">
            <i :class="stat.icon"></i>
          </div>
          <div class="stat-value">{{ stat.value }}</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
      
      <div class="github-activity">
        <h3>GitHub 贡献</h3>
        <div class="contribution-graph">
          <div class="contribution-grid">
            <div v-for="(week, weekIndex) in contributionData" 
                 :key="weekIndex"
                 class="contribution-week">
              <div v-for="(day, dayIndex) in week" 
                   :key="`${weekIndex}-${dayIndex}`"
                   class="contribution-day"
                   :style="{ backgroundColor: getContributionColor(day) }"
                   :title="`${day} contributions`">
              </div>
            </div>
          </div>
          <div class="contribution-legend">
            <span>少</span>
            <div class="legend-colors">
              <div v-for="(color, index) in contributionColors" 
                   :key="index"
                   class="legend-color"
                   :style="{ backgroundColor: color }">
              </div>
            </div>
            <span>多</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import GradientText from '@/components/common/GradientText.vue'

export default {
  name: 'ProjectsPreview',
  components: {
    GradientText
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          name: '智能商务平台',
          description: '基于AI的新一代电商解决方案，整合机器学习实现智能推荐和用户行为分析',
          image: 'https://via.placeholder.com/800x400?text=智能商务平台',
          technologies: [
            {
              name: 'Vue.js',
              icon: 'fab fa-vuejs'
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
          demo: '#',
          github: '#',
          isHovered: false
        },
        {
          id: 2,
          name: 'Cloud-Native DevOps Dashboard',
          description: 'Comprehensive DevOps monitoring and management platform with real-time metrics.',
          image: 'https://via.placeholder.com/600x400',
          technologies: ['React', 'Go', 'Docker', 'Kubernetes'],
          demo: '#',
          github: '#',
          isHovered: false
        },
        {
          id: 3,
          name: 'Blockchain-based Supply Chain',
          description: 'Decentralized supply chain management system with smart contracts.',
          image: 'https://via.placeholder.com/600x400',
          technologies: ['Solidity', 'Web3.js', 'React', 'Node.js'],
          demo: '#',
          github: '#',
          isHovered: false
        }
      ],
      projectStats: [
        {
          icon: 'fas fa-code-branch',
          value: '50+',
          label: '完成项目'
        },
        {
          icon: 'fas fa-code-commit',
          value: '1000+',
          label: '代码提交'
        },
        {
          icon: 'fas fa-users',
          value: '20+',
          label: '客户好评'
        }
      ],
      contributionColors: [
        'rgba(0, 255, 255, 0.1)',
        'rgba(0, 255, 255, 0.2)',
        'rgba(0, 255, 255, 0.4)',
        'rgba(0, 255, 255, 0.6)',
        'rgba(0, 255, 255, 0.8)'
      ],
      contributionData: this.generateContributionData()
    }
  },
  methods: {
    generateContributionData() {
      // 生成52周的数据
      return Array(52).fill().map(() => 
        // 每周7天
        Array(7).fill().map(() => 
          // 随机生成0-30的贡献数
          Math.floor(Math.random() * 30)
        )
      )
    },
    getContributionColor(count) {
      if (count === 0) return 'rgba(255, 255, 255, 0.05)'
      if (count < 5) return this.contributionColors[0]
      if (count < 10) return this.contributionColors[1]
      if (count < 15) return this.contributionColors[2]
      if (count < 20) return this.contributionColors[3]
      return this.contributionColors[4]
    }
  }
}
</script>

<style scoped>
.projects-section {
  padding: var(--spacing-large) 8%;
  background: rgba(0, 0, 0, 0.3);
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.section-subtitle {
  color: var(--color-text-secondary);
  font-size: 1.2rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.project-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: var(--border-radius-medium);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-preview {
  position: relative;
  overflow: hidden;
}

.project-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-overlay.active {
  opacity: 1;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  padding: 0.8rem 1.5rem;
  border-radius: var(--border-radius-small);
  background: var(--color-primary);
  color: var(--color-text);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: transform 0.3s ease;
}

.project-link:hover {
  transform: scale(1.05);
}

.project-info {
  padding: 1.5rem;
}

.project-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--color-primary);
}

.project-description {
  color: var(--color-text-secondary);
  margin-bottom: 1rem;
  line-height: 1.6;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  padding: 0.3rem 0.8rem;
  background: rgba(0, 255, 255, 0.1);
  border-radius: var(--border-radius-small);
  font-size: 0.9rem;
}

.tech-tag i {
  margin-right: 0.5rem;
}

.projects-showcase {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  margin-top: 4rem;
}

.showcase-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}

.stat-item {
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: var(--border-radius-small);
  text-align: center;
}

.stat-icon {
  margin-bottom: 0.5rem;
}

.stat-icon i {
  font-size: 24px;
  color: var(--color-primary);
}

.stat-value {
  font-size: 2rem;
  color: var(--color-primary);
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: var(--color-text-secondary);
}

.github-activity {
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: var(--border-radius-medium);
}

.contribution-graph {
  margin-top: 1rem;
}

.contribution-grid {
  display: grid;
  grid-template-columns: repeat(52, 1fr);
  gap: 3px;
  margin-bottom: 1rem;
}

.contribution-week {
  display: grid;
  grid-template-rows: repeat(7, 1fr);
  gap: 3px;
}

.contribution-day {
  width: 10px;
  height: 10px;
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.05);
  transition: transform 0.2s ease;
}

.contribution-day:hover {
  transform: scale(1.2);
}

.contribution-legend {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 1rem;
  color: var(--color-text-secondary);
  font-size: 0.9rem;
}

.legend-colors {
  display: flex;
  gap: 2px;
}

.legend-color {
  width: 15px;
  height: 15px;
  border-radius: 2px;
}

@media (max-width: 768px) {
  .projects-showcase {
    grid-template-columns: 1fr;
  }

  .project-links {
    flex-direction: column;
  }

  .contribution-grid {
    gap: 2px;
  }

  .contribution-day {
    width: 8px;
    height: 8px;
  }
}
</style> 