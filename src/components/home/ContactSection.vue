<template>
  <section class="contact-section" id="contact">
    <div class="contact-container">
      <!-- 左侧信息 -->
      <div class="contact-info">
        <h2 class="section-title">
          <gradient-text>Let's</gradient-text> Connect
        </h2>
        <p class="contact-description">
          I'm always interested in hearing about new projects and opportunities.
        </p>
        
        <!-- 联系方式卡片 -->
        <div class="contact-cards">
          <div v-for="method in contactMethods" 
               :key="method.type"
               class="contact-card"
               :class="{ 'card-active': method.isActive }"
               @mouseenter="method.isActive = true"
               @mouseleave="method.isActive = false">
            <div class="card-icon">
              <i :class="method.icon"></i>
            </div>
            <div class="card-content">
              <h3>{{ method.title }}</h3>
              <p>{{ method.value }}</p>
            </div>
            <div class="card-action">
              <a :href="method.action.link" 
                 :title="method.action.text"
                 target="_blank">
                <i class="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- 社交媒体链接 -->
        <div class="social-links">
          <h3>Follow Me</h3>
          <div class="social-grid">
            <a v-for="social in socialLinks" 
               :key="social.platform"
               :href="social.url"
               :class="['social-link', social.platform]"
               target="_blank"
               :title="social.platform">
              <i :class="social.icon"></i>
              <span class="platform-name">{{ social.platform }}</span>
            </a>
          </div>
        </div>
      </div>

      <!-- 右侧联系表单 -->
      <div class="contact-form-container">
        <div class="form-wrapper">
          <div class="form-header">
            <div class="status-indicator" :class="{ 'online': isOnline }">
              <span class="status-dot"></span>
              {{ isOnline ? 'Available for Work' : 'Currently Busy' }}
            </div>
          </div>

          <form class="contact-form" @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="name">Your Name</label>
              <div class="input-wrapper">
                <i class="fas fa-user"></i>
                <input type="text" 
                       id="name" 
                       v-model="form.name" 
                       required
                       :class="{ 'input-active': form.name }">
              </div>
            </div>

            <div class="form-group">
              <label for="email">Email Address</label>
              <div class="input-wrapper">
                <i class="fas fa-envelope"></i>
                <input type="email" 
                       id="email" 
                       v-model="form.email" 
                       required
                       :class="{ 'input-active': form.email }">
              </div>
            </div>

            <div class="form-group">
              <label for="subject">Subject</label>
              <div class="input-wrapper">
                <i class="fas fa-bookmark"></i>
                <input type="text" 
                       id="subject" 
                       v-model="form.subject"
                       required
                       :class="{ 'input-active': form.subject }">
              </div>
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <div class="input-wrapper">
                <i class="fas fa-comment-alt"></i>
                <textarea id="message" 
                         v-model="form.message" 
                         required
                         :class="{ 'input-active': form.message }"></textarea>
              </div>
            </div>

            <button type="submit" class="submit-button" :disabled="isSubmitting">
              <span class="button-text">{{ submitButtonText }}</span>
              <i class="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>

        <!-- 地理位置信息 -->
        <div class="location-info">
          <div class="location-icon">
            <i class="fas fa-map-marker-alt"></i>
          </div>
          <div class="location-text">
            <h4>Location</h4>
            <p>Beijing, China</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue'
import GradientText from '@/components/common/GradientText.vue'

export default defineComponent({
  name: 'ContactSection',
  components: {
    GradientText
  },
  data() {
    return {
      isOnline: true,
      isSubmitting: false,
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      contactMethods: [
        {
          type: 'email',
          title: 'Email',
          value: 'contact@example.com',
          icon: 'fas fa-envelope',
          isActive: false,
          action: {
            text: 'Send Email',
            link: 'mailto:contact@example.com'
          }
        },
        {
          type: 'phone',
          title: 'Phone',
          value: '+86 123 4567 8900',
          icon: 'fas fa-phone-alt',
          isActive: false,
          action: {
            text: 'Call Now',
            link: 'tel:+8612345678900'
          }
        }
      ],
      socialLinks: [
        {
          platform: 'GitHub',
          url: 'https://github.com',
          icon: 'fab fa-github'
        },
        {
          platform: 'LinkedIn',
          url: 'https://linkedin.com',
          icon: 'fab fa-linkedin'
        },
        {
          platform: 'Twitter',
          url: 'https://twitter.com',
          icon: 'fab fa-twitter'
        }
      ]
    }
  },
  computed: {
    submitButtonText() {
      return this.isSubmitting ? 'Sending...' : 'Send Message'
    }
  },
  methods: {
    async handleSubmit() {
      this.isSubmitting = true
      // 模拟API调用
      await new Promise(resolve => setTimeout(resolve, 2000))
      // 重置表单
      this.form = {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
      this.isSubmitting = false
      // 显示成功消息
      alert('Message sent successfully!')
    }
  }
})
</script>

<style scoped>
.contact-section {
  padding: var(--spacing-large) 8%;
  background: rgba(0, 0, 0, 0.3);
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  max-width: 1400px;
  margin: 0 auto;
}

.section-title {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.contact-description {
  color: var(--color-text-secondary);
  font-size: 1.2rem;
  margin-bottom: 3rem;
  max-width: 500px;
}

.contact-cards {
  display: grid;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.contact-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: var(--border-radius-medium);
  padding: 1.5rem;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1.5rem;
  align-items: center;
  transition: all 0.3s ease;
}

.card-active {
  transform: translateX(10px);
  background: rgba(0, 255, 255, 0.1);
}

.card-icon {
  width: 50px;
  height: 50px;
  background: rgba(0, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: var(--color-primary);
}

.card-action a {
  width: 40px;
  height: 40px;
  background: rgba(0, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  transition: all 0.3s ease;
}

.card-action a:hover {
  transform: rotate(45deg);
  background: var(--color-primary);
  color: var(--color-text);
}

.social-links {
  margin-top: 3rem;
}

.social-grid {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-link {
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: var(--border-radius-small);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.social-link:hover {
  transform: translateY(-5px);
  background: rgba(0, 255, 255, 0.1);
}

.platform-name {
  display: none;
}

.social-link:hover .platform-name {
  display: inline;
}

.contact-form-container {
  background: rgba(255, 255, 255, 0.02);
  border-radius: var(--border-radius-large);
  padding: 2rem;
  backdrop-filter: blur(10px);
}

.form-header {
  margin-bottom: 2rem;
}

.status-indicator {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 0, 0, 0.1);
  border-radius: 20px;
  font-size: 0.9rem;
}

.status-indicator.online {
  background: rgba(0, 255, 0, 0.1);
}

.status-dot {
  width: 8px;
  height: 8px;
  background: red;
  border-radius: 50%;
}

.online .status-dot {
  background: #00ff00;
  box-shadow: 0 0 10px #00ff00;
}

.form-group {
  margin-bottom: 1.5rem;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-wrapper i {
  position: absolute;
  left: 1rem;
  color: var(--color-text-secondary);
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--border-radius-small);
  color: var(--color-text);
  transition: all 0.3s ease;
}

.contact-form textarea {
  height: 150px;
  resize: vertical;
}

.input-active {
  border-color: var(--color-primary) !important;
  background: rgba(0, 255, 255, 0.05) !important;
}

.submit-button {
  width: 100%;
  padding: 1rem;
  background: var(--gradient-primary);
  border: none;
  border-radius: var(--border-radius-small);
  color: var(--color-text);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 255, 255, 0.2);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.location-info {
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: var(--border-radius-small);
}

.location-icon {
  width: 40px;
  height: 40px;
  background: rgba(0, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
}

@media (max-width: 1024px) {
  .contact-container {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .social-grid {
    flex-wrap: wrap;
  }

  .social-link {
    width: 100%;
  }

  .platform-name {
    display: inline;
  }
}
</style> 