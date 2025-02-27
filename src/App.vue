<template>
  <div id="app">
    <nav class="navbar" :class="{ 'nav-scrolled': isScrolled }">
      <div class="nav-content">
        <div class="nav-brand">
          <router-link to="/" class="nav-link" @click.native="scrollToTop">
            <gradient-text>一鸣Tech</gradient-text>
          </router-link>
        </div>
        <div class="nav-links" :class="{ 'nav-active': isMenuOpen }">
          <router-link to="/" class="nav-link" exact @click.native="scrollToTop">首页</router-link>
          <a @click.prevent="scrollToSection('#projects')" class="nav-link" href="#projects">项目</a>
          <a @click.prevent="scrollToSection('#blog')" class="nav-link" href="#blog">文章</a>
          <a @click.prevent="scrollToSection('#stats')" class="nav-link" href="#stats">经验</a>
          <router-link to="/contact" class="nav-link contact-link">
            <i class="fas fa-paper-plane"></i>
            联系我
          </router-link>
        </div>
        <button class="menu-toggle" @click="toggleMenu">
          <i class="fas fa-bars"></i>
        </button>
      </div>
    </nav>
    
    <router-view class="main-content"/>
    
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-info">
          <gradient-text>© 2025 一鸣</gradient-text>
          <span class="separator">|</span>
          <a href="https://beian.miit.gov.cn/" target="_blank" class="beian">
            浙ICP备xxxxxxxx号-1
          </a>
        </div>
        <div class="social-links">
          <a href="https://github.com/TechLeanrning" target="_blank" class="social-link">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://juejin.cn/user/497439491241166" target="_blank" class="social-link">
            掘
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import GradientText from '@/components/common/GradientText.vue'

export default {
  name: 'App',
  components: {
    GradientText
  },
  data() {
    return {
      isScrolled: false,
      isMenuOpen: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    scrollToSection(selector) {
      const element = document.querySelector(selector)
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
  }
}
</script>

<style>
/* 全局样式 */
body {
  margin: 0;
  padding: 0;
  background: var(--color-background);
  color: var(--color-text);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

/* 导航栏 */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: var(--spacing-sm) var(--container-padding);
  transition: var(--transition-normal);
}

.nav-scrolled {
  background: var(--blur-background);
  backdrop-filter: var(--blur-amount);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-content {
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.nav-link {
  color: var(--color-text);
  text-decoration: none;
  font-size: var(--font-size-sm);
  transition: var(--transition-normal);
}

.nav-link:hover {
  color: var(--color-primary);
}

.contact-link {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) var(--spacing-sm);
  background: var(--bg-card);
  border-radius: var(--border-radius-sm);
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  color: var(--color-text);
  font-size: var(--font-size-lg);
  cursor: pointer;
}

/* 主内容区 */
.main-content {
  margin-top: var(--header-height);
  min-height: calc(100vh - var(--header-height) - 60px);
}

/* 页脚 */
.footer {
  padding: var(--spacing-md) var(--container-padding);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-content {
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-info {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.separator {
  color: var(--color-text-secondary);
}

.beian {
  color: var(--color-text-secondary);
  text-decoration: none;
  font-size: var(--font-size-xs);
}

.social-links {
  display: flex;
  gap: var(--spacing-sm);
}

.social-link {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius-sm);
  background: var(--bg-card);
  color: var(--color-text);
  transition: var(--transition-normal);
}

.social-link:hover {
  transform: translateY(-2px);
  background: var(--bg-card-hover);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .navbar {
    padding: 1rem 5%;
  }

  .menu-toggle {
    display: block;
  }

  .nav-links {
    position: fixed;
    top: var(--header-height);
    left: 0;
    right: 0;
    background: var(--blur-background);
    backdrop-filter: var(--blur-amount);
    flex-direction: column;
    padding: var(--spacing-md);
    gap: var(--spacing-md);
    transform: translateY(-100%);
    opacity: 0;
    transition: var(--transition-normal);
  }

  .nav-links.nav-active {
    transform: translateY(0);
    opacity: 1;
  }

  .footer {
    padding: 2rem 5%;
  }

  .footer-content {
    flex-direction: column;
    gap: var(--spacing-md);
    text-align: center;
  }

  .footer-info {
    flex-direction: column;
    gap: var(--spacing-xs);
  }

  .separator {
    display: none;
  }
}
</style> 