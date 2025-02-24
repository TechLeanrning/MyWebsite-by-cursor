<template>
  <section class="stats-section" id="stats">
    <div class="section-header">
      <h2 class="section-title">
        <gradient-text>工作经验</gradient-text>
      </h2>
      <p class="section-desc">我的技术成长历程</p>
    </div>

    <div class="stats-grid">
      <!-- 核心数据 -->
      <div class="stats-cards">
        <div v-for="stat in stats" 
             :key="stat.id"
             class="stat-card"
             @mouseenter="stat.isActive = true"
             @mouseleave="stat.isActive = false">
          <div class="stat-icon">
            <i :class="stat.icon"></i>
          </div>
          <div class="stat-info">
            <div class="stat-value">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>

      <!-- 工作经历 -->
      <div class="experience-timeline">
        <div v-for="exp in experience" 
             :key="exp.id"
             class="timeline-item"
             :class="{ 'item-active': exp.isActive }"
             @mouseenter="exp.isActive = true"
             @mouseleave="exp.isActive = false">
          <div class="timeline-date">{{ exp.period }}</div>
          <div class="timeline-content">
            <h3>{{ exp.role }}</h3>
            <div class="company">{{ exp.company }}</div>
            <p>{{ exp.description }}</p>
            <div class="tech-used">
              <span v-for="tech in exp.technologies" 
                    :key="tech"
                    class="tech-tag">
                {{ tech }}
              </span>
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
  name: 'StatsSection',
  components: {
    GradientText
  },
  data() {
    return {
      stats: [
        {
          id: 1,
          icon: 'fas fa-code-branch',
          value: '5+',
          label: '年开发经验',
          isActive: false
        },
        {
          id: 2,
          icon: 'fas fa-project-diagram',
          value: '50+',
          label: '项目经验',
          isActive: false
        },
        {
          id: 3,
          icon: 'fas fa-users',
          value: '20+',
          label: '团队协作',
          isActive: false
        }
      ],
      experience: [
        {
          id: 1,
          period: '2022 - 至今',
          role: '高级前端工程师',
          company: '字节跳动',
          description: '负责抖音电商核心业务开发，优化性能提升30%',
          technologies: ['Vue3', 'TypeScript', 'Vite', '微前端'],
          isActive: false
        },
        {
          id: 2,
          period: '2020 - 2022',
          role: '前端开发工程师',
          company: '腾讯',
          description: '参与企业微信开发，构建高可用组件库',
          technologies: ['React', 'Node.js', 'Webpack', 'Jest'],
          isActive: false
        }
      ]
    }
  }
}
</script>

<style scoped>
.stats-section {
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

.stats-grid {
  display: grid;
  gap: 3rem;
}

.stats-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.stat-card {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.05);
}

.stat-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(0, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-icon i {
  font-size: 1.5rem;
  color: var(--color-primary);
}

.stat-value {
  font-size: 2rem;
  font-weight: bold;
  color: var(--color-primary);
  margin-bottom: 0.25rem;
}

.stat-label {
  color: var(--color-text-secondary);
  font-size: 0.9rem;
}

.experience-timeline {
  display: grid;
  gap: 2rem;
}

.timeline-item {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.timeline-item:hover {
  transform: translateX(10px);
  background: rgba(255, 255, 255, 0.05);
}

.timeline-date {
  color: var(--color-primary);
  font-weight: 500;
  white-space: nowrap;
}

.timeline-content h3 {
  margin-bottom: 0.5rem;
}

.company {
  color: var(--color-text-secondary);
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.tech-used {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.tech-tag {
  padding: 0.25rem 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  font-size: 0.85rem;
  color: var(--color-primary);
}

@media (max-width: 768px) {
  .stats-section {
    padding: 3rem 5%;
  }

  .section-title {
    font-size: 2rem;
  }

  .timeline-item {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .timeline-date {
    color: var(--color-primary);
  }
}
</style> 