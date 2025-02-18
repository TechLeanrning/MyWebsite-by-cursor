<template>
  <div class="contact">
    <h2>联系方式</h2>
    <div class="contact-info">
      <div class="contact-item">
        <i class="fas fa-envelope"></i>
        <span>email@example.com</span>
      </div>
      <div class="contact-item">
        <i class="fas fa-phone"></i>
        <span>+86 123 4567 8900</span>
      </div>
      <div class="contact-item">
        <i class="fab fa-github"></i>
        <span>github.com/username</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      // 这里添加表单提交逻辑
      console.log('Form submitted:', this.form)
      alert('消息已发送！')
      this.form = {
        name: '',
        email: '',
        message: ''
      }
    }
  }
}
</script>

<style scoped>
.contact {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.contact-info {
  margin-top: 30px;
}

.contact-item {
  display: flex;
  align-items: center;
  margin: 20px 0;
  padding: 15px;
  background: #f5f5f5;
  border-radius: 8px;
}

.contact-item i {
  font-size: 24px;
  margin-right: 15px;
  color: #333;
}
</style> 