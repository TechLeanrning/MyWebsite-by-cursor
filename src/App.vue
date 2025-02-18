<template>
  <div id="app">
    <!-- 导航栏 -->
    <nav class="navbar">
      <div class="nav-brand">我的个人网站</div>
      <div class="nav-links">
        <router-link to="/" class="nav-link">首页</router-link>
        <router-link to="/about" class="nav-link">关于我</router-link>
        <router-link to="/projects" class="nav-link">项目展示</router-link>
        <router-link to="/contact" class="nav-link">联系方式</router-link>
      </div>
    </nav>
    
    <!-- 路由视图 -->
    <router-view class="main-content"/>
    
    <!-- 页脚 -->
    <footer class="footer">
      <p>© 2024 我的个人网站. All rights reserved.</p>
    </footer>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  background: #1a1a1a;
  color: #fff;
}

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  background-color: rgba(26, 26, 26, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 255, 255, 0.1);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}

.nav-brand {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: #00ffff;
  transition: all 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
  left: 0;
}

.main-content {
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.footer {
  background-color: rgba(26, 26, 26, 0.9);
  border-top: 1px solid rgba(0, 255, 255, 0.1);
  color: white;
  text-align: center;
  padding: 1rem;
  margin-top: auto;
}
</style> 