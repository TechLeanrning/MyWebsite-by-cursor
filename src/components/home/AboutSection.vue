<template>
  <section class="about-section" id="about">
    <div class="about-container">
      <!-- 个人简介 -->
      <div class="profile-section">
        <div class="profile-content">
          <h2 class="section-title">
            <gradient-text>关于</gradient-text> 我
          </h2>
          <div class="profile-description">
            <div class="profile-header">
              <div class="avatar-container">
                <img src="@/assets/images/avatar.jpg" alt="个人照片" class="avatar">
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
                <div class="tags">
                  <span class="tag">开源贡献者</span>
                  <span class="tag">技术博主</span>
                  <span class="tag">解决方案架构师</span>
                </div>
              </div>
            </div>
            <div class="bio-content">
              <p class="bio-text">{{ profile.introduction }}</p>
              <div class="highlight-cards">
                <div v-for="highlight in profile.highlights" 
                     :key="highlight.title"
                     class="highlight-card">
                  <i :class="highlight.icon"></i>
                  <h4>{{ highlight.title }}</h4>
                  <p>{{ highlight.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 专业经历 -->
      <div class="experience-timeline">
        <h3 class="timeline-title">职业生涯</h3>
        <div class="timeline">
          <div v-for="exp in experience" 
               :key="exp.id"
               class="timeline-item"
               :class="{ 'item-active': exp.isActive }"
               @mouseenter="exp.isActive = true"
               @mouseleave="exp.isActive = false">
            <div class="timeline-date">
              <span class="year">{{ exp.year }}</span>
              <span class="duration">{{ exp.duration }}</span>
            </div>
            <div class="timeline-content">
              <div class="company-logo">
                <img :src="exp.companyLogo" :alt="exp.company">
              </div>
              <div class="exp-details">
                <h4 class="position">{{ exp.position }}</h4>
                <p class="company-name">{{ exp.company }}</p>
                <ul class="achievements">
                  <li v-for="(achievement, index) in exp.achievements" 
                      :key="index">{{ achievement }}</li>
                </ul>
                <div class="tech-used">
                  <img v-for="tech in exp.technologies" 
                       :key="tech.name"
                       :src="tech.icon"
                       :alt="tech.name"
                       :title="tech.name">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 教育背景 -->
      <div class="education-section">
        <h3 class="section-subtitle">教育经历</h3>
        <div class="education-cards">
          <div v-for="edu in education" 
               :key="edu.id"
               class="education-card">
            <img :src="edu.schoolLogo" :alt="edu.school" class="school-logo">
            <div class="edu-info">
              <h4>{{ edu.degree }}</h4>
              <p class="school">{{ edu.school }}</p>
              <p class="major">{{ edu.major }}</p>
              <p class="period">{{ edu.period }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 个人兴趣 -->
      <div class="interests-section">
        <h3 class="section-subtitle">兴趣爱好</h3>
        <div class="interests-grid">
          <div v-for="interest in interests" 
               :key="interest.name"
               class="interest-card">
            <img :src="interest.icon" :alt="interest.name">
            <h4>{{ interest.name }}</h4>
            <p>{{ interest.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue'
import GradientText from '@/components/common/GradientText.vue'

export default defineComponent({
  name: 'AboutSection',
  components: {
    GradientText
  },
  data() {
    return {
      profile: {
        introduction: '作为一名全栈开发工程师，我专注于创建高性能、可扩展的现代化应用。热衷于探索新技术，并将创新理念转化为实际解决方案。',
        highlights: [
          {
            icon: 'fas fa-rocket',
            title: '创新思维',
            description: '持续探索新技术和解决方案'
          },
          {
            icon: 'fas fa-users',
            title: '团队协作',
            description: '良好的沟通能力和团队精神'
          },
          {
            icon: 'fas fa-lightbulb',
            title: '问题解决',
            description: '分析问题并找到最优解决方案'
          }
        ]
      },
      experience: [
        {
          id: 1,
          year: '2023',
          duration: '至今',
          position: '高级全栈开发工程师',
          company: '创新科技有限公司',
          companyLogo: require('@/assets/images/company1.png'),
          achievements: [
            '领导团队完成多个大型项目开发',
            '优化系统性能提升50%',
            '设计实现微服务架构'
          ],
          technologies: [
            {
              name: 'Vue.js',
              icon: require('@/assets/icons/vue.svg')
            },
            {
              name: 'Node.js',
              icon: require('@/assets/icons/nodejs.svg')
            }
          ],
          isActive: false
        }
      ],
      education: [
        {
          id: 1,
          degree: '计算机科学与技术学士',
          school: '某知名大学',
          schoolLogo: require('@/assets/images/university.png'),
          major: '计算机科学',
          period: '2015-2019'
        }
      ],
      interests: [
        {
          name: '开源贡献',
          icon: require('@/assets/icons/opensource.svg'),
          description: '积极参与开源社区，分享技术经验'
        },
        {
          name: '技术写作',
          icon: require('@/assets/icons/writing.svg'),
          description: '撰写技术博客，分享学习心得'
        }
      ]
    }
  },
  methods: {
    getTagStyle(index) {
      const phi = Math.acos(-1 + 2 * index / this.technologies.length)
      const theta = Math.sqrt(this.technologies.length * Math.PI) * phi
      const x = Math.cos(theta) * Math.sin(phi)
      const y = Math.sin(theta) * Math.sin(phi)
      const z = Math.cos(phi)
      const scale = (z + 2) / 3

      return {
        transform: `translate3d(${x * 100}px, ${y * 100}px, ${z * 100}px) scale(${scale})`,
        opacity: scale
      }
    }
  }
})
</script>

<style scoped>
.about-section {
  padding: var(--spacing-large) 8%;
  background: rgba(0, 0, 0, 0.2);
}

.about-container {
  max-width: 1400px;
  margin: 0 auto;
}

.profile-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
}

.intro-text {
  font-size: 1.2rem;
  line-height: 1.8;
  color: var(--color-text-secondary);
  margin-bottom: 2rem;
}

.highlight-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.highlight-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: var(--border-radius-medium);
  transition: all 0.3s ease;
}

.highlight-card:hover {
  transform: translateY(-5px);
  background: rgba(0, 255, 255, 0.05);
}

.highlight-card i {
  font-size: 32px;
  color: var(--color-primary);
  margin-bottom: 1rem;
}

.code-sphere {
  position: relative;
  width: 300px;
  height: 300px;
  margin: 0 auto;
  perspective: 1000px;
  transform-style: preserve-3d;
  animation: sphereRotate 20s linear infinite;
}

.tech-tag {
  position: absolute;
  padding: 0.5rem 1rem;
  background: rgba(0, 255, 255, 0.1);
  border-radius: 20px;
  white-space: nowrap;
  transition: all 0.3s ease;
}

.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: rgba(0, 255, 255, 0.2);
}

.timeline-item {
  position: relative;
  padding: 2rem 0;
}

.timeline-marker {
  position: absolute;
  left: -2rem;
  width: 1rem;
  height: 1rem;
  background: var(--color-primary);
  border-radius: 50%;
  transform: translateX(50%);
}

.timeline-content {
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: var(--border-radius-medium);
  transition: all 0.3s ease;
}

.item-active .timeline-content {
  transform: translateX(10px);
  background: rgba(0, 255, 255, 0.05);
}

.exp-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.5rem;
}

.period {
  color: var(--color-primary);
  font-size: 0.9rem;
}

.company {
  color: var(--color-text-secondary);
  margin-bottom: 1rem;
}

.achievements {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.achievements li {
  margin-bottom: 0.5rem;
  color: var(--color-text-secondary);
}

.tech-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: rgba(0, 255, 255, 0.1);
  border-radius: var(--border-radius-small);
  margin: 0.25rem;
  font-size: 0.9rem;
}

.cert-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.cert-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: var(--border-radius-medium);
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1.5rem;
  align-items: center;
  transition: all 0.3s ease;
}

.cert-active {
  transform: translateX(10px);
  background: rgba(0, 255, 255, 0.05);
}

.interests-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.interest-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: var(--border-radius-medium);
  text-align: center;
  transition: all 0.3s ease;
}

.interest-card:hover {
  transform: translateY(-5px);
  background: rgba(0, 255, 255, 0.05);
}

.interest-icon {
  font-size: 2rem;
  color: var(--color-primary);
  margin-bottom: 1rem;
}

@keyframes sphereRotate {
  from { transform: rotateX(0) rotateY(0); }
  to { transform: rotateX(360deg) rotateY(360deg); }
}

@media (max-width: 1024px) {
  .profile-section {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .highlight-cards {
    grid-template-columns: 1fr;
  }

  .timeline {
    padding-left: 1rem;
  }

  .timeline-marker {
    left: -1rem;
  }
}

.location i {
  margin-right: 0.5rem;
  color: var(--color-primary);
}
</style> 