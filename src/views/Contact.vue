<template>
  <div class="contact-container">
    <div id="contact" class="contact-header">
      <h1 class="title">
        <gradient-text>联系我</gradient-text>
      </h1>
      <p class="subtitle">如果您有任何问题或合作意向，欢迎随时联系我</p>
    </div>

    <div class="contact-content">
      <div class="contact-info">
        <div class="info-card">
          <i class="fas fa-envelope"></i>
          <h3>邮箱</h3>
          <p>2027671609@qq.com</p>
          <button class="copy-btn" @click="copyToClipboard('2027671609@qq.com')">
            复制邮箱
          </button>
        </div>

        <div class="info-card">
          <i class="fab fa-weixin"></i>
          <h3>微信</h3>
          <p>In Blue $$ Sky</p>
          <img 
            src="/images/qrcode.jpg"
            alt="WeChat QR Code" 
            class="qr-code">
        </div>

        <div class="info-card">
          <i class="fab fa-github"></i>
          <h3>GitHub</h3>
          <p>github.com/TechLeanrning</p>
          <a href="https://github.com/TechLeanrning" target="_blank" class="link-btn">
            访问主页
          </a>
        </div>
      </div>

      <form class="contact-form" @submit.prevent="submitForm">
        <h2>发送消息</h2>
        
        <div class="form-group">
          <label for="name">姓名</label>
          <input 
            type="text" 
            id="name" 
            v-model="form.name"
            required
            placeholder="请输入您的姓名">
        </div>

        <div class="form-group">
          <label for="email">邮箱</label>
          <input 
            type="email" 
            id="email" 
            v-model="form.email"
            required
            placeholder="请输入您的邮箱">
        </div>

        <div class="form-group">
          <label for="subject">主题</label>
          <input 
            type="text" 
            id="subject" 
            v-model="form.subject"
            required
            placeholder="请输入消息主题">
        </div>

        <div class="form-group">
          <label for="message">消息内容</label>
          <textarea 
            id="message" 
            v-model="form.message"
            required
            rows="6"
            placeholder="请输入您的消息内容"></textarea>
        </div>

        <button type="submit" class="submit-btn" :disabled="submitting">
          <i class="fas fa-paper-plane"></i>
          {{ submitting ? '发送中...' : '发送消息' }}
        </button>
      </form>
    </div>

    <!-- 提示消息 -->
    <div v-if="notification.show" 
         :class="['notification', notification.type]"
         @click="notification.show = false">
      {{ notification.message }}
    </div>
  </div>
</template>

<script>
import GradientText from '@/components/common/GradientText.vue'

export default {
  name: 'Contact',
  components: {
    GradientText
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      submitting: false,
      notification: {
        show: false,
        message: '',
        type: 'success'
      }
    }
  },
  methods: {
    async submitForm() {
      this.submitting = true
      
      try {
        // 这里添加发送表单的逻辑
        await new Promise(resolve => setTimeout(resolve, 1000)) // 模拟API调用
        
        this.showNotification('消息发送成功！', 'success')
        this.resetForm()
      } catch (error) {
        this.showNotification('发送失败，请稍后重试', 'error')
      } finally {
        this.submitting = false
      }
    },
    
    resetForm() {
      this.form = {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    },
    
    showNotification(message, type = 'success') {
      this.notification = {
        show: true,
        message,
        type
      }
      
      setTimeout(() => {
        this.notification.show = false
      }, 3000)
    },
    
    async copyToClipboard(text) {
      try {
        await navigator.clipboard.writeText(text)
        this.showNotification('复制成功！')
      } catch (err) {
        this.showNotification('复制失败，请手动复制', 'error')
      }
    }
  }
}
</script>

<style scoped>
.contact-container {
  min-height: 100vh;
  padding: 4rem 8%;
  background: linear-gradient(to bottom,
    var(--color-background),
    var(--color-background-light));
}

.contact-header {
  text-align: center;
  margin-bottom: 4rem;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.subtitle {
  color: var(--color-text-secondary);
  font-size: 1.1rem;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-card {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.info-card:hover {
  transform: translateY(-5px);
  border-color: var(--color-primary);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

.info-card i {
  font-size: 2rem;
  color: var(--color-primary);
  margin-bottom: 1rem;
}

.info-card h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.info-card p {
  color: var(--color-text-secondary);
  margin-bottom: 1rem;
}

.qr-code {
  width: 150px;
  height: 150px;
  border-radius: 8px;
  margin-top: 1rem;
}

.copy-btn,
.link-btn {
  padding: 0.5rem 1.5rem;
  border: 1px solid var(--color-primary);
  border-radius: 20px;
  background: transparent;
  color: var(--color-primary);
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  font-size: 0.9rem;
}

.copy-btn:hover,
.link-btn:hover {
  background: var(--color-primary);
  color: var(--color-background);
}

.contact-form {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.contact-form h2 {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--color-text-secondary);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: var(--color-text);
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  background: rgba(255, 255, 255, 0.08);
}

.submit-btn {
  width: 100%;
  padding: 1rem;
  background: var(--color-primary);
  color: var(--color-background);
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(var(--color-primary-rgb), 0.3);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.notification {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding: 1rem 2rem;
  border-radius: 8px;
  background: var(--color-success);
  color: white;
  cursor: pointer;
  animation: slideIn 0.3s ease;
}

.notification.error {
  background: var(--color-error);
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .contact-container {
    padding: 3rem 5%;
  }

  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .title {
    font-size: 2rem;
  }

  .info-card {
    padding: 1.5rem;
  }
}
</style> 