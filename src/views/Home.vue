<template>
  <div class="home">
    <!-- 动态背景 -->
    <div class="tech-background">
      <div class="grid"></div>
      <div class="particles"></div>
      <div class="circles">
        <div v-for="i in 5" :key="i" :class="`circle-${i}`"></div>
      </div>
    </div>

    <!-- 英雄区 -->
    <section class="hero-section">
      <div class="hero-content">
        <div class="title-group">
          <h1 class="main-title">
            <span class="gradient-text">Future</span>
            <span class="glitch-text" data-text="Developer">Developer</span>
          </h1>
          <p class="subtitle typing-effect">构建下一代数字体验</p>
        </div>
        <div class="cta-group">
          <a href="#projects" class="cta-button primary">
            <span class="button-text">探索项目</span>
            <i class="fas fa-arrow-right"></i>
          </a>
          <a href="#about" class="cta-button secondary">
            了解更多
          </a>
        </div>
      </div>
      <div class="hero-visual">
        <div class="dev-profile">
          <div class="profile-cards">
            <!-- 核心特质卡片 -->
            <div class="trait-cards">
              <div class="trait-card">
                <div class="trait-icon">
                  <i class="fas fa-rocket"></i>
                </div>
                <h3>创新</h3>
                <p>突破传统，拥抱变革</p>
                <div class="glow-effect"></div>
              </div>
              <div class="trait-card">
                <div class="trait-icon">
                  <i class="fas fa-bullseye"></i>
                </div>
                <h3>专注</h3>
                <p>深入技术，精益求精</p>
                <div class="glow-effect"></div>
              </div>
              <div class="trait-card">
                <div class="trait-icon">
                  <i class="fas fa-fire"></i>
                </div>
                <h3>热情</h3>
                <p>热爱编程，永不止步</p>
                <div class="glow-effect"></div>
              </div>
            </div>

            <!-- 开发理念展示 -->
            <div class="philosophy-cards">
              <div class="philosophy-card">
                <div class="card-content">
                  <div class="card-icon">
                    <i class="fas fa-code"></i>
                  </div>
                  <div class="card-text">
                    <h4>代码创造</h4>
                    <p>创造数字未来</p>
                  </div>
                </div>
                <div class="card-bg"></div>
              </div>
              <div class="philosophy-card">
                <div class="card-content">
                  <div class="card-icon">
                    <i class="fas fa-brain"></i>
                  </div>
                  <div class="card-text">
                    <h4>持续学习</h4>
                    <p>知识与技能不断提升</p>
                  </div>
                </div>
                <div class="card-bg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 技术栈展示 -->
    <section class="tech-stack-section">
      <h2 class="section-title">技术栈</h2>
      <div class="tech-cards">
        <div v-for="tech in techStack" :key="tech.name" 
             class="tech-card" :class="{ 'card-active': tech.active }"
             @mouseenter="activateTech(tech.name)"
             @mouseleave="deactivateTech(tech.name)">
          <i :class="tech.icon"></i>
          <h3>{{ tech.name }}</h3>
          <p>{{ tech.description }}</p>
          <div class="tech-progress">
            <div class="progress-bar" :style="{ width: tech.proficiency + '%' }"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- 项目展示 -->
    <section class="projects-preview">
      <h2 class="section-title">精选项目</h2>
      <div class="project-cards">
        <div v-for="project in featuredProjects" :key="project.id" 
             class="project-card" :style="{ backgroundImage: `url(${project.image})` }">
          <div class="project-overlay">
            <h3>{{ project.name }}</h3>
            <p>{{ project.description }}</p>
            <div class="project-tech-tags">
              <span v-for="tag in project.technologies" :key="tag">{{ tag }}</span>
            </div>
            <a :href="project.link" class="project-link">
              查看详情 <i class="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 统计数据 -->
    <section class="stats-section">
      <div v-for="stat in statistics" :key="stat.label" 
           class="stat-card" v-intersection-observer="animateNumber">
        <div class="stat-icon">
          <i :class="stat.icon"></i>
        </div>
        <div class="stat-number">
          <span class="counter">{{ stat.value }}</span>{{ stat.suffix }}
        </div>
        <div class="stat-label">{{ stat.label }}</div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      codeSnippet: `class Developer {
  constructor() {
    this.passion = '创新';
    this.focus = '专注';
    this.spirit = '热情';
  }

  code() {
    return '创造数字未来';
  }

  learn() {
    while(true) {
      this.skills++;
      this.knowledge++;
    }
  }
}`,
      techStack: [
        {
          name: '前端开发',
          icon: 'fas fa-laptop-code',
          description: '构建现代化的用户界面',
          proficiency: 95,
          active: false
        },
        {
          name: '后端开发',
          icon: 'fas fa-server',
          description: '设计高性能服务架构',
          proficiency: 90,
          active: false
        },
        {
          name: '云原生',
          icon: 'fas fa-cloud',
          description: '容器化和微服务部署',
          proficiency: 85,
          active: false
        },
        {
          name: 'AI/ML',
          icon: 'fas fa-brain',
          description: '智能算法与数据分析',
          proficiency: 80,
          active: false
        }
      ],
      featuredProjects: [
        {
          id: 1,
          name: '智能商务平台',
          description: '基于AI的新一代电商解决方案',
          image: 'https://via.placeholder.com/400x300',
          technologies: ['Vue.js', 'Node.js', 'TensorFlow'],
          link: '#'
        },
        {
          id: 2,
          name: '云端协作系统',
          description: '实时协作的企业级应用',
          image: 'https://via.placeholder.com/400x300',
          technologies: ['React', 'WebSocket', 'Docker'],
          link: '#'
        }
      ],
      statistics: [
        {
          icon: 'fas fa-code-branch',
          value: 1000,
          suffix: '+',
          label: '代码提交'
        },
        {
          icon: 'fas fa-project-diagram',
          value: 50,
          suffix: '+',
          label: '完成项目'
        },
        {
          icon: 'fas fa-clock',
          value: 5,
          suffix: '年',
          label: '开发经验'
        },
        {
          icon: 'fas fa-users',
          value: 20,
          suffix: '+',
          label: '客户好评'
        }
      ]
    }
  },
  methods: {
    activateTech(techName) {
      const tech = this.techStack.find(t => t.name === techName)
      if (tech) tech.active = true
    },
    deactivateTech(techName) {
      const tech = this.techStack.find(t => t.name === techName)
      if (tech) tech.active = false
    },
    animateNumber(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // 添加数字增长动画
          const counter = entry.target.querySelector('.counter');
          const target = parseInt(counter.textContent);
          let count = 0;
          const duration = 2000;
          const increment = target / (duration / 16);
          
          const animate = () => {
            count += increment;
            counter.textContent = Math.min(Math.round(count), target);
            if (count < target) requestAnimationFrame(animate);
          };
          
          animate();
          observer.unobserve(entry.target);
        }
      });
    }
  }
}
</script>

<style scoped>
.home {
  overflow-x: hidden;
}

/* 英雄区样式 */
.hero-section {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  padding: 4rem 8%;
  align-items: center;
}

.title-group {
  margin-bottom: 2rem;
}

.main-title {
  font-size: 4.5rem;
  line-height: 1.1;
  margin-bottom: 1rem;
}

.gradient-text {
  background: linear-gradient(45deg, #00ffff, #ff00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.glitch-text {
  position: relative;
  display: block;
  animation: glitch 3s infinite;
}

.subtitle {
  font-size: 1.5rem;
  color: #888;
  margin-bottom: 2rem;
}

/* 代码编辑器样式 */
.code-editor {
  background: #1e1e1e;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.2);
}

.editor-header {
  background: #2d2d2d;
  padding: 0.8rem;
  display: flex;
  align-items: center;
}

.dots {
  display: flex;
  gap: 0.5rem;
}

.dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ff5f56;
}

.dots span:nth-child(2) { background: #ffbd2e; }
.dots span:nth-child(3) { background: #27c93f; }

.filename {
  margin-left: 1rem;
  color: #888;
}

.code-content {
  padding: 1.5rem;
  font-family: 'Fira Code', monospace;
  color: #d4d4d4;
  line-height: 1.6;
}

/* 技术栈卡片样式 */
.tech-stack-section {
  padding: 8rem 8%;
}

.tech-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.tech-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 15px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.tech-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #00ffff20, #ff00ff20);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card-active::before {
  opacity: 1;
}

.tech-card i {
  font-size: 2.5rem;
  color: #00ffff;
  margin-bottom: 1rem;
}

/* 项目卡片样式 */
.projects-preview {
  padding: 8rem 8%;
  background: rgba(0, 0, 0, 0.3);
}

.project-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.project-card {
  height: 300px;
  border-radius: 15px;
  position: relative;
  background-size: cover;
  background-position: center;
  overflow: hidden;
}

.project-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.project-card:hover .project-overlay {
  transform: translateY(0);
}

/* 统计数据样式 */
.stats-section {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 4rem 8%;
  gap: 2rem;
}

.stat-card {
  text-align: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-10px);
}

/* 动画关键帧 */
@keyframes glitch {
  0% { transform: skew(0deg); }
  20% { transform: skew(10deg); }
  21% { transform: skew(-10deg); }
  23% { transform: skew(0deg); }
  100% { transform: skew(0deg); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .hero-section {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .main-title {
    font-size: 3rem;
  }

  .stats-section {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .project-cards {
    grid-template-columns: 1fr;
  }

  .stats-section {
    grid-template-columns: 1fr;
  }
}

/* 添加新的样式 */
.dev-profile {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(10px);
}

.profile-cards {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.trait-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.trait-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 1.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.trait-card:hover {
  transform: translateY(-5px);
}

.trait-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 1rem;
  background: rgba(0, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.trait-icon i {
  font-size: 1.8rem;
  color: #00ffff;
}

.glow-effect {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, rgba(0, 255, 255, 0.2), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.trait-card:hover .glow-effect {
  opacity: 1;
}

.philosophy-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.philosophy-card {
  background: linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(255, 0, 255, 0.1));
  border-radius: 15px;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.philosophy-card:hover {
  transform: scale(1.02);
}

.card-content {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.card-icon {
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-icon i {
  font-size: 1.5rem;
  color: #00ffff;
}

.card-text h4 {
  margin: 0;
  color: #00ffff;
}

.card-text p {
  margin: 0.5rem 0 0;
  color: #888;
}

.card-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
    rgba(0, 255, 255, 0.05) 25%, 
    transparent 25%,
    transparent 50%, 
    rgba(0, 255, 255, 0.05) 50%, 
    rgba(0, 255, 255, 0.05) 75%,
    transparent 75%);
  background-size: 20px 20px;
  opacity: 0.1;
  transition: opacity 0.3s ease;
}

.philosophy-card:hover .card-bg {
  opacity: 0.2;
  animation: patternMove 20s linear infinite;
}

@keyframes patternMove {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 40px 40px;
  }
}

@media (max-width: 768px) {
  .trait-cards {
    grid-template-columns: 1fr;
  }
  
  .philosophy-cards {
    grid-template-columns: 1fr;
  }
}
</style> 