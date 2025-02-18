<template>
  <div class="home">
    <!-- 动态背景 -->
    <div class="tech-background">
      <div class="grid"></div>
      <div class="circles">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="dots"></div>
    </div>

    <!-- 主页内容 -->
    <div class="hero">
      <div class="content-wrapper">
        <div class="avatar">
          <img src="https://via.placeholder.com/150" alt="头像">
        </div>
        <h1 class="glitch" data-text="Hello World">Hello World</h1>
        <p class="typing">我是一名全栈开发工程师</p>
        <div class="tech-stack">
          <span v-for="tech in technologies" :key="tech" class="tech-tag">
            {{ tech }}
          </span>
        </div>
      </div>
    </div>

    <div class="developer-card">
      <div class="card-header">
        <i class="fas fa-code"></i>
        <h3>Developer Profile</h3>
      </div>
      <div class="card-content">
        <div class="profile-section">
          <div class="dev-info">
            <h4>全栈开发工程师</h4>
            <p class="experience">{{ experience }}年经验</p>
          </div>
        </div>
        
        <div class="skills-section">
          <h4>核心特质</h4>
          <div class="skill-tags">
            <div v-for="skill in devSkills" :key="skill" class="skill-tag">
              <i :class="getSkillIcon(skill)"></i>
              {{ skill }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      technologies: ['Vue.js', 'React', 'Node.js', 'Python', 'Docker'],
      codeSnippet: `function Developer() {
  const skills = ['创新', '专注', '热情'];
  const experience = 5;
  
  return {
    code: () => '创造美好的数字世界',
    learn: () => '永不停止学习',
    create: () => '构建令人惊叹的应用'
  };
}`,
      skills: [
        {
          name: '前端开发',
          icon: 'fas fa-code',
          description: '构建响应式和交互性强的现代Web应用',
          level: 95
        },
        {
          name: '后端开发',
          icon: 'fas fa-server',
          description: '设计高性能和可扩展的服务器端应用',
          level: 90
        },
        {
          name: '云服务',
          icon: 'fas fa-cloud',
          description: '使用现代云平台部署和管理应用',
          level: 85
        },
        {
          name: 'DevOps',
          icon: 'fas fa-tools',
          description: '自动化部署和持续集成/持续部署',
          level: 80
        }
      ],
      stats: [
        { value: 5, suffix: '+', label: '年开发经验' },
        { value: 50, suffix: '+', label: '完成项目' },
        { value: 1000, suffix: '+', label: '代码提交' },
        { value: 20, suffix: '+', label: '技术文章' }
      ],
      experience: 5,
      devSkills: ['创新', '专注', '热情'],
      principles: {
        code: {
          title: '代码',
          desc: '创造美好的数字世界',
          icon: 'fas fa-laptop-code'
        },
        learn: {
          title: '学习',
          desc: '永不停止学习',
          icon: 'fas fa-graduation-cap'
        },
        create: {
          title: '创造',
          desc: '构建令人惊叹的应用',
          icon: 'fas fa-lightbulb'
        }
      }
    }
  },
  methods: {
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
    },
    getSkillIcon(skill) {
      const icons = {
        '创新': 'fas fa-rocket',
        '专注': 'fas fa-bullseye',
        '热情': 'fas fa-fire'
      }
      return icons[skill]
    }
  }
}
</script>

<style scoped>
.home {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

/* 动态背景样式 */
.tech-background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #0a1a2f 0%, #0d0d2b 100%);
  z-index: -1;
}

.grid {
  position: absolute;
  width: 200%;
  height: 200%;
  background-image: 
    linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  transform: rotate(-45deg);
  animation: gridMove 20s linear infinite;
}

.circles div {
  position: absolute;
  border: 2px solid rgba(0, 255, 255, 0.1);
  border-radius: 50%;
  animation: circleFloat 10s infinite;
}

.dots {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(rgba(0, 255, 255, 0.2) 1px, transparent 1px);
  background-size: 30px 30px;
  animation: dotsFloat 10s linear infinite;
}

/* 其他样式保持不变 */
.hero {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.content-wrapper {
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 15px;
  backdrop-filter: blur(5px);
}

/* 添加动画关键帧 */
@keyframes gridMove {
  0% { transform: rotate(-45deg) translateY(0); }
  100% { transform: rotate(-45deg) translateY(-50%); }
}

@keyframes circleFloat {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(0, 20px); }
}

@keyframes dotsFloat {
  0% { transform: translateY(0); }
  100% { transform: translateY(-30px); }
}

/* 其他样式保持原样 */
</style> 