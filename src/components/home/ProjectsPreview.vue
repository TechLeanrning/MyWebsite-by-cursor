<template>
  <section class="projects-section" id="projects">
    <div class="section-header">
      <h2 class="section-title">
        <gradient-text>项目作品</gradient-text>
      </h2>
      <p class="section-desc">我的一些开源项目和作品</p>
    </div>

    <div class="projects-grid">
      <div v-for="project in projects" 
           :key="project.id" 
           class="project-card"
           @mouseenter="project.isHovered = true"
           @mouseleave="project.isHovered = false">
        <div class="project-preview">
          <img :src="project.image" :alt="project.name">
          <div class="project-links" :class="{ active: project.isHovered }">
            <a :href="project.demo" target="_blank" class="project-link">
              <i class="fas fa-external-link-alt"></i>
              预览
            </a>
            <a :href="project.github" target="_blank" class="project-link">
              <i class="fab fa-github"></i>
              源码
            </a>
          </div>
        </div>
        
        <div class="project-info">
          <h3>{{ project.name }}</h3>
          <p>{{ project.description }}</p>
          <div class="project-tech">
            <span v-for="tech in project.technologies" 
                  :key="tech"
                  class="tech-tag">
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="more-projects">
      <a href="https://github.com/yourusername" target="_blank" class="github-link">
        <i class="fab fa-github"></i>
        在 GitHub 上查看更多项目
      </a>
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
          name: '个人博客系统',
          description: '基于 Vue3 + TypeScript 开发的现代化博客系统，支持 Markdown 编辑和实时预览',
          image: 'https://via.placeholder.com/600x340',
          technologies: ['Vue3', 'TypeScript', 'Vite', 'TailwindCSS'],
          demo: 'https://demo.example.com',
          github: 'https://github.com/example/blog',
          isHovered: false
        },
        {
          id: 2,
          name: '在线代码编辑器',
          description: '支持多种编程语言的在线 IDE，集成代码高亮和实时运行功能',
          image: 'https://via.placeholder.com/600x340',
          technologies: ['React', 'Monaco Editor', 'WebAssembly', 'Node.js'],
          demo: 'https://demo.example.com',
          github: 'https://github.com/example/code-editor',
          isHovered: false
        },
        {
          id: 3,
          name: '智能聊天机器人',
          description: '基于 GPT-3 API 开发的智能对话系统，支持多轮对话和上下文理解',
          image: 'https://via.placeholder.com/600x340',
          technologies: ['Vue.js', 'OpenAI API', 'Express', 'Socket.io'],
          demo: 'https://demo.example.com',
          github: 'https://github.com/example/chatbot',
          isHovered: false
        }
      ]
    }
  }
}
</script>

<style scoped>
.projects-section {
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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.project-card {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
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
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-preview img {
  transform: scale(1.05);
}

.project-links {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-links.active {
  opacity: 1;
}

.project-link {
  padding: 0.5rem 1rem;
  border-radius: 6px;
  background: var(--color-primary);
  color: var(--color-background);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.project-link:hover {
  transform: translateY(-2px);
}

.project-info {
  padding: 1.5rem;
}

.project-info h3 {
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.project-info p {
  color: var(--color-text-secondary);
  font-size: 0.95rem;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  padding: 0.25rem 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  font-size: 0.85rem;
  color: var(--color-primary);
}

.more-projects {
  text-align: center;
}

.github-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  border: 1px solid var(--color-primary);
  border-radius: 6px;
  color: var(--color-primary);
  transition: all 0.3s ease;
}

.github-link:hover {
  background: rgba(0, 255, 255, 0.1);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .projects-section {
    padding: 3rem 5%;
  }

  .section-title {
    font-size: 2rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style> 