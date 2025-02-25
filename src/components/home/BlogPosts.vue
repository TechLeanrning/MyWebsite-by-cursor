<template>
  <section class="blog-section" id="blog">
    <div class="section-header">
      <h2 class="section-title">
        <gradient-text>技术博客</gradient-text>
      </h2>
      <p class="section-desc">分享学习心得与技术见解</p>
    </div>

    <div class="blog-grid">
      <!-- 文章分类标签 -->
      <div class="category-tags">
        <button 
          v-for="category in categories" 
          :key="category"
          :class="['category-tag', { active: currentCategory === category }]"
          @click="filterByCategory(category)">
          <i class="fas fa-hashtag"></i>
          {{ category }}
        </button>
      </div>

      <!-- 文章列表 -->
      <div class="posts-grid">
        <article 
          v-for="post in filteredPosts" 
          :key="post.id"
          class="post-card"
          @click="openPost(post)">
          <div class="post-image">
            <img :src="post.coverImage" :alt="post.title">
            <div class="post-overlay">
              <div class="post-category">{{ post.category }}</div>
              <span class="read-more">
                <i class="fas fa-book-reader"></i>
                阅读全文
              </span>
            </div>
          </div>
          
          <div class="post-content">
            <h3 class="post-title">{{ post.title }}</h3>
            <p class="post-excerpt">{{ post.excerpt }}</p>
            
            <div class="post-meta">
              <span class="post-date">
                <i class="far fa-calendar-alt"></i>
                {{ formatDate(post.date) }}
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
        </article>
      </div>

      <!-- 加载更多按钮 -->
      <div class="load-more" v-if="hasMorePosts">
        <button class="load-more-btn" @click="loadMorePosts">
          加载更多
          <i class="fas fa-chevron-down"></i>
        </button>
      </div>
    </div>

    <!-- 添加错误提示 -->
    <div v-if="error" class="error-message">
      {{ error }}
    </div>

    <!-- 添加文章内容显示区域 -->
    <div v-if="selectedPost" class="post-detail-overlay">
      <div class="post-detail-content">
        <div class="post-header">
          <h2 class="post-title">{{ selectedPost.title }}</h2>
          <button class="close-button" @click="selectedPost = null">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="post-meta">
          <span class="post-date">
            <i class="far fa-calendar-alt"></i>
            {{ formatDate(selectedPost.date) }}
          </span>
          <span class="post-category">
            <i class="far fa-folder"></i>
            {{ selectedPost.category }}
          </span>
          <span class="post-read-time">
            <i class="far fa-clock"></i>
            {{ selectedPost.readTime }} 分钟阅读
          </span>
        </div>
        <div class="post-content" v-html="renderedContent"></div>
      </div>
    </div>
  </section>
</template>

<script>
import GradientText from '@/components/common/GradientText.vue'
import { loadPosts } from '@/utils/postLoader' // 我们稍后创建这个工具函数
import { marked } from 'marked'

export default {
  name: 'BlogPosts',
  components: {
    GradientText
  },
  data() {
    return {
      posts: [],
      error: null,
      currentCategory: '全部',
      categories: ['全部', 'Android', '图像处理', 'C++', 'AI', '其他'],
      currentPage: 1,
      postsPerPage: 6,
      selectedPost: null
    }
  },
  computed: {
    filteredPosts() {
      if (this.currentCategory === '全部') {
        return this.posts.slice(0, this.currentPage * this.postsPerPage)
      }
      return this.posts
        .filter(post => post.category === this.currentCategory)
        .slice(0, this.currentPage * this.postsPerPage)
    },
    hasMorePosts() {
      const filteredLength = this.currentCategory === '全部' 
        ? this.posts.length 
        : this.posts.filter(post => post.category === this.currentCategory).length
      return filteredLength > this.currentPage * this.postsPerPage
    },
    renderedContent() {
      return this.selectedPost ? marked(this.selectedPost.content) : ''
    }
  },
  async created() {
    try {
      this.posts = await loadPosts()
    } catch (err) {
      console.error('Failed to load posts:', err)
      this.error = '加载文章失败'
    }
  },
  methods: {
    filterByCategory(category) {
      this.currentCategory = category
      this.currentPage = 1
    },
    loadMorePosts() {
      this.currentPage++
    },
    formatDate(date) {
      return new Date(date).toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    },
    openPost(post) {
      // 先滚动到博客区域
      const blogSection = document.getElementById('blog')
      if (blogSection) {
        blogSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }

      // 然后使用路由导航到文章详情页
      setTimeout(() => {
        this.$router.push(`/post/${post.id}`)
      }, 500)  // 等待滚动完成后再跳转
    }
  }
}
</script>

<style scoped>
.blog-section {
  padding: 4rem 8%;
  background: linear-gradient(180deg, 
    var(--color-background) 0%,
    var(--color-background-light) 100%);
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

/* 分类标签样式 */
.category-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  justify-content: center;
}

.category-tag {
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.05);
  color: var(--color-text);
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
}

.category-tag i {
  font-size: 0.8rem;
  opacity: 0.7;
}

.category-tag:hover {
  background: rgba(var(--color-primary-rgb), 0.1);
  border-color: var(--color-primary);
}

.category-tag.active {
  background: var(--color-primary);
  color: var(--color-background);
  border-color: var(--color-primary);
}

/* 文章卡片网格 */
.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.post-card {
  background: rgba(255, 255, 255, 0.02);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.post-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  border-color: rgba(var(--color-primary-rgb), 0.3);
  background: rgba(255, 255, 255, 0.03);
}

.post-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.post-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.post-card:hover .post-image img {
  transform: scale(1.05);
}

.post-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.7));
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.post-card:hover .post-overlay {
  opacity: 1;
}

.post-category {
  padding: 0.5rem 1rem;
  background: var(--color-primary);
  color: var(--color-background);
  border-radius: 20px;
  font-size: 0.85rem;
  align-self: flex-start;
}

.read-more {
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  transform: translateY(20px);
  transition: transform 0.3s ease;
}

.post-card:hover .read-more {
  transform: translateY(0);
}

.post-content {
  padding: 1.5rem;
}

.post-title {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  line-height: 1.4;
  color: var(--color-text);
  font-weight: 600;
}

.post-excerpt {
  color: var(--color-text-secondary);
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.post-meta {
  display: flex;
  gap: 1.5rem;
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  margin-bottom: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.post-meta i {
  margin-right: 0.5rem;
  color: var(--color-primary);
}

.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.post-tag {
  padding: 0.25rem 0.75rem;
  background: rgba(var(--color-primary-rgb), 0.1);
  border-radius: 20px;
  font-size: 0.85rem;
  color: var(--color-primary);
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

.post-tag i {
  font-size: 0.75rem;
}

/* 加载更多按钮 */
.load-more {
  text-align: center;
  margin-top: 2rem;
}

.load-more-btn {
  padding: 0.75rem 2rem;
  background: transparent;
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1rem;
}

.load-more-btn:hover {
  background: var(--color-primary);
  color: var(--color-background);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .blog-section {
    padding: 3rem 5%;
  }

  .section-title {
    font-size: 2rem;
  }

  .posts-grid {
    grid-template-columns: 1fr;
  }

  .post-meta {
    flex-direction: column;
    gap: 0.75rem;
  }
}

.error-message {
  color: #ff4444;
  text-align: center;
  padding: 1rem;
  margin: 1rem 0;
  background: rgba(255, 68, 68, 0.1);
  border-radius: 8px;
}

.post-detail-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.post-detail-content {
  background: var(--color-background-light);
  border-radius: 16px;
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 2rem;
  position: relative;
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.close-button {
  background: transparent;
  border: none;
  color: var(--color-text-secondary);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: all 0.3s ease;
}

.close-button:hover {
  color: var(--color-primary);
  transform: rotate(90deg);
}

.post-content {
  line-height: 1.8;
  color: var(--color-text);
}

.post-content :deep(h1),
.post-content :deep(h2),
.post-content :deep(h3) {
  margin: 2rem 0 1rem;
  color: var(--color-text);
  border-bottom: 2px solid rgba(var(--color-primary-rgb), 0.2);
  padding-bottom: 0.5rem;
}

.post-content :deep(p) {
  margin: 1rem 0;
}

.post-content :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 1rem 0;
}

@media (max-width: 768px) {
  .post-detail-overlay {
    padding: 1rem;
  }
  
  .post-detail-content {
    padding: 1.5rem;
  }
}
</style> 