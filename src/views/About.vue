<template>
  <div class="about">
    <h2>关于我</h2>
    <div class="content">
      <p>我是一名热爱技术的开发者，专注于Web开发和用户体验设计。</p>
      <div class="skills">
        <h3>技能专长</h3>
        <ul>
          <li>前端开发 (Vue.js, React, JavaScript)</li>
          <li>后端开发 (Node.js, Python)</li>
          <li>数据库设计 (MySQL, MongoDB)</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.content {
  margin-top: 20px;
  line-height: 1.6;
}

.skills {
  margin-top: 30px;
}

.skills ul {
  list-style-type: none;
  padding: 0;
}

.skills li {
  margin: 10px 0;
  padding: 10px;
  background: #f5f5f5;
  border-radius: 4px;
}
</style> 