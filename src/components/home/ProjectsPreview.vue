<template>
  <section class="projects-section" id="projects">
    <div class="section-header">
      <h2 class="section-title">
        <gradient-text>项目作品</gradient-text>
      </h2>
      <p class="section-desc">我的一些开源项目和作品</p>
    </div>

    <div class="projects-container">
      <!-- 项目列表 -->
      <div class="projects-grid">
        <div v-for="project in displayedProjects" 
             :key="project.id" 
             class="project-card"
             :style="project.style">
          <div class="project-content">
            <!-- 左侧项目信息 -->
            <div class="project-info">
              <div class="project-type">
                <i class="fas fa-code-branch"></i>
                开源项目
              </div>
              <h3>{{ project.name }}</h3>
              <p>{{ project.description }}</p>
              <div class="project-tech">
                <span v-for="tech in project.technologies" 
                      :key="tech"
                      class="tech-tag">
                  <i class="fas fa-code"></i>
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>

          <!-- 项目链接 -->
          <div class="project-actions">
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
      </div>

      <!-- 分页控件 -->
      <div class="pagination" v-if="totalPages > 1">
        <button 
          class="page-btn prev" 
          :disabled="currentPage === 1"
          @click="changePage(currentPage - 1)">
          <span class="btn-content">
            <i class="fas fa-chevron-left"></i>
            上一页
          </span>
        </button>
        
        <div class="page-numbers">
          <button 
            v-for="page in totalPages" 
            :key="page"
            :class="['page-number', { active: page === currentPage }]"
            @click="changePage(page)">
            <span class="number-content">
              {{ page }}
            </span>
          </button>
        </div>
        
        <button 
          class="page-btn next"
          :disabled="currentPage === totalPages"
          @click="changePage(currentPage + 1)">
          <span class="btn-content">
            下一页
            <i class="fas fa-chevron-right"></i>
          </span>
        </button>
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
      defaultImage: '/images/projects/default.jpg',
      currentPage: 1,
      projectsPerPage: 4
    }
  },
  computed: {
    displayedProjects() {
      const start = (this.currentPage - 1) * this.projectsPerPage
      const end = start + this.projectsPerPage
      return this.projects.slice(start, end)
    },
    totalPages() {
      return Math.ceil(this.projects.length / this.projectsPerPage)
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
          isHovered: false,
          style: project.image ? {
            backgroundImage: `url(${project.image})`
          } : null
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
          technologies: ["Vue", "Node.js"],
          link: "#",
          blogPost: "#",
          isHovered: false,
          style: null
        }
      ]
    }
  },
  methods: {
    changePage(page) {
      this.currentPage = page
      // 滚动到项目区域顶部
      const projectsSection = document.getElementById('projects')
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' })
      }
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

.projects-container {
  position: relative;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.project-card {
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.project-content {
  padding: 1.5rem;
  flex: 1;
  position: relative;
  z-index: 1;
}

.project-info {
  flex: 1;
}

.project-type {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: var(--color-primary);
  margin-bottom: 1rem;
  padding: 0.25rem 0.75rem;
  border: 1px solid var(--color-primary);
  border-radius: 20px;
}

.project-info h3 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: var(--color-text);
}

.project-info p {
  color: var(--color-text-secondary);
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
  color: var(--color-primary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid var(--color-primary);
}

.tech-tag i {
  font-size: 0.8em;
}

.project-actions {
  display: flex;
  gap: 0.5rem;
  padding: 1.5rem;
  position: relative;
  z-index: 1;
}

.project-link {
  flex: 1;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  background: var(--color-primary);
  color: var(--color-background);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  text-decoration: none;
}

.project-link.blog {
  background: transparent;
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
}

.project-link:hover {
  transform: translateY(-2px);
}

.project-link.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
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

/* 分页样式 */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 3rem;
}

.page-btn {
  padding: 0.5rem 1rem;
  border: 1px solid var(--color-primary);
  border-radius: 6px;
  background: transparent;
  color: var(--color-primary);
  transition: all 0.3s ease;
}

.page-btn:hover {
  background: var(--color-primary);
  color: var(--color-background);
}

.page-btn.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

.page-numbers {
  display: flex;
  gap: 0.5rem;
}

.page-number {
  padding: 0.5rem 1rem;
  border: 1px solid var(--color-primary);
  border-radius: 6px;
  background: transparent;
  color: var(--color-primary);
  transition: all 0.3s ease;
}

.page-number:hover {
  background: var(--color-primary);
  color: var(--color-background);
}

.page-number.active {
  background: var(--color-primary);
  color: var(--color-background);
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
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }

  .project-content {
    padding: 1.5rem;
  }

  .project-actions {
    padding: 1.5rem;
  }
}
</style> 