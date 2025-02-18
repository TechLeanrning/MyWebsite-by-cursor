<template>
  <section class="stats-section" id="stats">
    <div class="stats-container">
      <!-- 数据可视化区域 -->
      <div class="stats-visual">
        <div class="visual-container">
          <div class="stats-cards">
            <div v-for="stat in stats" 
                 :key="stat.id"
                 class="stat-card"
                 :class="{ 'card-active': stat.isActive }"
                 @mouseenter="stat.isActive = true"
                 @mouseleave="stat.isActive = false">
              <div class="stat-icon">
                <i :class="stat.icon"></i>
              </div>
              <div class="stat-content">
                <h3>{{ stat.title }}</h3>
                <div class="stat-value">{{ stat.value }}</div>
                <p>{{ stat.description }}</p>
              </div>
              <div class="stat-chart" v-if="stat.isActive">
                <canvas :ref="'chart-' + stat.id"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 成就展示 -->
      <div class="achievements-grid">
        <div v-for="achievement in achievements" 
             :key="achievement.id"
             class="achievement-card"
             :class="{ 'achievement-active': achievement.isActive }"
             @mouseenter="achievement.isActive = true"
             @mouseleave="achievement.isActive = false">
          <div class="achievement-icon">
            <i :class="achievement.icon"></i>
          </div>
          <div class="achievement-content">
            <h4>{{ achievement.title }}</h4>
            <p>{{ achievement.description }}</p>
            <div class="achievement-date">{{ achievement.date }}</div>
          </div>
        </div>
      </div>

      <!-- 技能概览 -->
      <div class="skills-overview">
        <h3 class="section-subtitle">技能矩阵</h3>
        <div class="skills-matrix">
          <div v-for="skill in skills" 
               :key="skill.id"
               class="skill-category">
            <div class="skill-header">
              <i :class="skill.icon"></i>
              <h4>{{ skill.name }}</h4>
            </div>
            <div class="skill-progress">
              <div class="progress-bar" :style="{ width: skill.level + '%' }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Chart from 'chart.js/auto'

export default {
  name: 'StatsSection',
  data() {
    return {
      stats: [
        {
          id: 1,
          title: '代码提交',
          icon: 'fas fa-code-branch',
          value: '1000+',
          description: '活跃的开发记录',
          chartData: [30, 45, 60, 70, 85, 95, 100],
          isActive: false
        },
        {
          id: 2,
          title: '项目经验',
          icon: 'fas fa-project-diagram',
          value: '50+',
          description: '成功交付的项目',
          chartData: [20, 35, 55, 75, 90, 95, 100],
          isActive: false
        },
        {
          id: 3,
          title: '开发时长',
          icon: 'fas fa-clock',
          value: '5000+',
          description: '小时的编码时间',
          chartData: [25, 40, 65, 80, 90, 95, 100],
          isActive: false
        }
      ],
      achievements: [
        {
          id: 1,
          icon: 'fas fa-award',
          title: '最佳开发者',
          description: '2023年度技术创新奖',
          date: '2023年',
          isActive: false
        },
        {
          id: 2,
          icon: 'fas fa-certificate',
          title: '技术认证',
          description: '多个领域的专业认证',
          date: '2023年',
          isActive: false
        }
      ],
      skills: [
        {
          id: 1,
          name: '前端开发',
          icon: 'fas fa-laptop-code',
          level: 95
        },
        {
          id: 2,
          name: '后端开发',
          icon: 'fas fa-server',
          level: 90
        },
        {
          id: 3,
          name: '数据库',
          icon: 'fas fa-database',
          level: 85
        },
        {
          id: 4,
          name: 'DevOps',
          icon: 'fas fa-cogs',
          level: 80
        }
      ]
    }
  },
  methods: {
    initChart(stat) {
      const ctx = this.$refs[`chart-${stat.id}`][0].getContext('2d')
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
          datasets: [{
            data: stat.chartData,
            borderColor: '#00ffff',
            tension: 0.4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      })
    }
  },
  watch: {
    'stats.*.isActive'(newVal, oldVal) {
      if (newVal) {
        this.$nextTick(() => {
          const stat = this.stats.find(s => s.isActive)
          if (stat) {
            this.initChart(stat)
          }
        })
      }
    }
  }
}
</script>

<style scoped>
.stats-section {
  padding: var(--spacing-large) 8%;
  background: rgba(0, 0, 0, 0.2);
}

.stats-container {
  max-width: 1400px;
  margin: 0 auto;
}

.stats-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.stat-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: var(--border-radius-medium);
  padding: 2rem;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.card-active {
  transform: translateY(-5px);
  background: rgba(0, 255, 255, 0.05);
}

.stat-icon {
  width: 60px;
  height: 60px;
  background: rgba(0, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-icon i {
  font-size: 24px;
  color: var(--color-primary);
}

.stat-content {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--color-primary);
  margin: 0.5rem 0;
}

.stat-chart {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 150px;
  height: 60px;
  opacity: 0.5;
}

.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.achievement-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: var(--border-radius-medium);
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: all 0.3s ease;
}

.achievement-active {
  transform: translateX(10px);
  background: rgba(0, 255, 255, 0.05);
}

.achievement-icon {
  width: 48px;
  height: 48px;
  background: rgba(0, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.achievement-icon i {
  font-size: 24px;
  color: var(--color-primary);
}

.skills-matrix {
  display: grid;
  gap: 1.5rem;
  margin-top: 2rem;
}

.skill-category {
  background: rgba(255, 255, 255, 0.05);
  border-radius: var(--border-radius-small);
  padding: 1rem;
}

.skill-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.skill-header i {
  font-size: 24px;
  color: var(--color-primary);
}

.skill-progress {
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: var(--gradient-primary);
  border-radius: 4px;
  position: relative;
  transition: width 1s ease-out;
}

@media (max-width: 768px) {
  .stats-cards {
    grid-template-columns: 1fr;
  }
  
  .stat-chart {
    display: none;
  }
}
</style> 