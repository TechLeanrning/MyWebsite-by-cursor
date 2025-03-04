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
          <img :src="project.image || defaultImage" :alt="project.name">
          <div class="project-links" :class="{ active: project.isHovered }">
            <a :href="project.link || '#'" 
               target="_blank" 
               class="project-link"
               :class="{ disabled: !project.link }">
              <i class="fas fa-external-link-alt"></i>
              查看项目
            </a>
            <a :href="project.blogPost || '#'" 
               target="_blank" 
               class="project-link blog"
               :class="{ disabled: !project.blogPost }">
              <i class="fas fa-book"></i>
              相关文章
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
      config: null,
      projects: [],
      defaultImage: '/images/projects/default.jpg'
    }
  },
  async created() {
    try {
      // 加载配置文件
      const response = await fetch('/config/site.json')
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      this.config = await response.json()
      
      // 确保项目数据格式正确
      if (Array.isArray(this.config.projects)) {
        this.projects = this.config.projects.map(project => ({
          ...project,
          image: project.image || this.defaultImage,
          isHovered: false
        }))
      } else {
        console.error('Projects data is not an array:', this.config.projects)
      }
    } catch (error) {
      console.error('Error loading site config:', error)
      // 使用默认项目数据
      this.projects = [
        {
          id: 1,
          name: "示例项目",
          description: "这是一个示例项目",
          image: this.defaultImage,
          technologies: ["Vue", "Node.js"],
          link: "#",
          blogPost: "#",
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

.project-link.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
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