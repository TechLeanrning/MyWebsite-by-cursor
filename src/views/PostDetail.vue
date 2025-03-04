<template>
  <div class="post-container">
    <article class="post-detail" v-if="post">
      <!-- 面包屑导航 -->
      <div class="breadcrumb">
        <router-link to="/">
          <i class="fas fa-home"></i>
          首页
        </router-link>
        <i class="fas fa-chevron-right"></i>
        <span>{{ post.title }}</span>
      </div>

      <div class="post-header">
        <div class="post-cover" :style="{ backgroundImage: `url(${post.coverImage})` }">
          <div class="post-cover-overlay">
            <h1 class="post-title">{{ post.title }}</h1>
            <div class="post-meta">
              <span class="post-date">
                <i class="far fa-calendar-alt"></i>
                {{ formatDate(post.date) }}
              </span>
              <span class="post-category">
                <i class="far fa-folder"></i>
                {{ post.category }}
              </span>
              <span class="post-read-time">
                <i class="far fa-clock"></i>
                {{ post.readTime }} 分钟阅读
              </span>
            </div>
            <div class="post-tags">
              <span v-for="tag in post.tags" 
                    :key="tag" 
                    class="post-tag">
                <i class="fas fa-tag"></i>
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="post-content markdown-body" v-html="renderedContent"></div>

      <div class="post-footer">
        <div class="post-navigation">
          <button class="nav-button prev" @click="$router.push('/')">
            <i class="fas fa-arrow-left"></i>
            返回文章列表
          </button>
          <div class="share-buttons">
            <button class="share-button">
              <i class="fab fa-weixin"></i>
            </button>
            <button class="share-button">
              <i class="fab fa-weibo"></i>
            </button>
          </div>
        </div>
      </div>
    </article>
    <div v-else class="error-message">
      <i class="fas fa-exclamation-circle"></i>
      文章不存在
    </div>
  </div>
</template>

<script>
import { marked } from 'marked'
import { loadPosts } from '@/utils/postLoader'

export default {
  name: 'PostDetail',
  data() {
    return {
      post: null
    }
  },
  computed: {
    renderedContent() {
      return this.post ? marked(this.post.content) : ''
    }
  },
  async created() {
    try {
      console.log('PostDetail created, id:', this.$route.params.id)
      const posts = await loadPosts()
      console.log('Loaded posts:', posts)
      
      // 确保 ID 匹配
      const postId = this.$route.params.id
      this.post = posts.find(p => p.id === postId)
      
      if (!this.post) {
        console.error('Post not found:', postId)
        // 可以添加错误处理，比如显示404页面
        this.$router.push('/404')
      }
    } catch (error) {
      console.error('Error loading post:', error)
    }
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  }
}
</script>

<style scoped>
.post-container {
  min-height: 100vh;
  background: var(--color-background);
  padding: 2rem 0;
}

.post-detail {
  max-width: 900px;
  margin: 0 auto;
  background: var(--color-background-light);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

.breadcrumb {
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.breadcrumb a {
  color: var(--color-primary);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.breadcrumb a:hover {
  text-decoration: underline;
}

.breadcrumb i {
  font-size: 0.85rem;
}

.post-header {
  width: 100%;
}

.post-cover {
  height: 400px;
  background-size: cover;
  background-position: center;
  position: relative;
}

.post-cover-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 3rem 2rem;
  background: linear-gradient(to top,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.4) 50%,
    transparent 100%);
  color: white;
}

.post-title {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.3;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.post-meta {
  display: flex;
  gap: 2rem;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.post-meta i {
  margin-right: 0.5rem;
  color: var(--color-primary);
}

.post-tags {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.post-tag {
  padding: 0.35rem 1rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  backdrop-filter: blur(5px);
}

.post-tag i {
  font-size: 0.8rem;
}

.post-content {
  padding: 2.5rem;
  line-height: 1.8;
  color: var(--color-text);
  background: var(--color-background-light);
}

.post-content :deep(h1),
.post-content :deep(h2),
.post-content :deep(h3) {
  margin: 2.5rem 0 1.5rem;
  color: var(--color-text);
  border-bottom: 2px solid rgba(var(--color-primary-rgb), 0.2);
  padding-bottom: 0.75rem;
}

.post-content :deep(h1) {
  font-size: 2rem;
}

.post-content :deep(h2) {
  font-size: 1.75rem;
}

.post-content :deep(h3) {
  font-size: 1.5rem;
}

.post-content :deep(p) {
  margin: 1.5rem 0;
  font-size: 1.1rem;
}

.post-content :deep(code) {
  background: rgba(255, 255, 255, 0.1);
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-family: 'Fira Code', monospace;
  font-size: 0.9em;
}

.post-content :deep(pre) {
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 8px;
  overflow-x: auto;
  margin: 1.5rem 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.post-content :deep(pre code) {
  background: none;
  padding: 0;
}

.post-content :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 1.5rem 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.post-content :deep(blockquote) {
  margin: 2rem 0;
  padding: 1.5rem;
  border-left: 4px solid var(--color-primary);
  background: rgba(var(--color-primary-rgb), 0.1);
  border-radius: 4px;
  font-style: italic;
}

.post-content :deep(ul),
.post-content :deep(ol) {
  margin: 1.5rem 0;
  padding-left: 1.5rem;
}

.post-content :deep(li) {
  margin: 0.75rem 0;
}

.post-footer {
  padding: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.post-navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-button {
  padding: 0.75rem 2rem;
  background: transparent;
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1rem;
}

.nav-button:hover {
  background: var(--color-primary);
  color: var(--color-background);
  transform: translateX(-5px);
}

.share-buttons {
  display: flex;
  gap: 1rem;
}

.share-button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: transparent;
  color: var(--color-text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.share-button:hover {
  background: var(--color-primary);
  color: var(--color-background);
  border-color: var(--color-primary);
  transform: translateY(-2px);
}

.error-message {
  text-align: center;
  color: var(--color-error);
  margin: 4rem auto;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}

.error-message i {
  font-size: 1.5rem;
}

@media (max-width: 768px) {
  .post-container {
    padding: 1rem 0;
  }

  .post-cover {
    height: 300px;
  }

  .post-title {
    font-size: 2rem;
  }

  .post-meta {
    flex-direction: column;
    gap: 0.75rem;
  }

  .post-content {
    padding: 1.5rem;
  }

  .post-navigation {
    flex-direction: column;
    gap: 1rem;
  }

  .nav-button {
    width: 100%;
    justify-content: center;
  }

  .share-buttons {
    justify-content: center;
    margin-top: 1rem;
  }
}
</style> 