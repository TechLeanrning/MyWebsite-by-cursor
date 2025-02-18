<template>
  <div class="home">
    <tech-background />
    <hero-section />
    <tech-stack />
    <projects-preview />
    <stats-section />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import TechBackground from '../components/home/TechBackground.vue'
import HeroSection from '../components/home/HeroSection.vue'
import TechStack from '../components/home/TechStack.vue'
import ProjectsPreview from '../components/home/ProjectsPreview.vue'
import StatsSection from '../components/home/StatsSection.vue'

// 导入样式
import '../styles/animations.css'
import '../styles/variables.css'
import '../styles/common.css'

export default defineComponent({
  name: 'Home',
  components: {
    TechBackground,
    HeroSection,
    TechStack,
    ProjectsPreview,
    StatsSection
  }
})
</script>

<style>
.home {
  overflow-x: hidden;
}
</style> 