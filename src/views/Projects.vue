<template>
  <div class="projects">
    <h2>项目展示</h2>
    <div class="project-grid">
      <div class="project-card" v-for="project in projects" :key="project.id">
        <h3>{{ project.name }}</h3>
        <p>{{ project.description }}</p>
        <div class="tech-stack">
          <span v-for="tech in project.technologies" :key="tech">{{ tech }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          id: 1,
          name: '个人网站',
          description: '使用Vue.js开发的响应式个人网站',
          technologies: ['Vue.js', 'CSS3', 'JavaScript']
        },
        {
          id: 2,
          name: '在线商城',
          description: '完整的电商解决方案',
          technologies: ['Vue.js', 'Node.js', 'MongoDB']
        }
      ]
    }
  }
}
</script>

<style scoped>
.projects {
  padding: 20px;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.project-card {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: white;
}

.tech-stack {
  margin-top: 10px;
}

.tech-stack span {
  display: inline-block;
  padding: 4px 8px;
  margin: 4px;
  background: #f0f0f0;
  border-radius: 4px;
  font-size: 0.9em;
}
</style> 