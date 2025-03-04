# 一鸣Tech Blog

一个基于 Vue3 和cursor开发的现代化个人技术博客网站，支持 Markdown 文章管理和实时预览。

## 特性

- 🎨 现代化 UI 设计，支持暗色主题
- 📝 Markdown 文章支持，无需重新构建即可更新内容
- 🚀 基于 Vue3 + Vue Router 构建
- 📧 集成 EmailJS 的联系表单功能
- 🖼️ 响应式布局，完美支持移动端
- ⚡️ 粒子动画背景效果
- 🔍 文章分类和标签系统
- 📊 个人经历展示模块

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发环境运行

```bash
npm run serve
```

### 生产环境构建

```bash
npm run build
```

## 项目结构

```
project/
├── public/
│   ├── config/         # 配置文件
│   ├── posts/          # Markdown 文章
│   └── images/         # 图片资源
├── src/
│   ├── components/     # Vue 组件
│   ├── views/          # 页面视图
│   ├── router/         # 路由配置
│   ├── utils/          # 工具函数
│   ├── App.vue         # 根组件
│   └── main.js         # 入口文件
└── vue.config.js       # Vue 配置文件
```

## 文章管理

文章以 Markdown 格式存储在 `public/posts` 目录下，通过 `index.json` 管理文章元数据。添加新文章只需：

1. 在 `public/posts` 添加 `.md` 文件
2. 更新 `index.json` 添加文章信息
3. 无需重新构建，刷新页面即可看到更新

## 部署

1. 构建项目：
```bash
npm run build
```

2. 配置 Nginx：
```nginx
server {
    listen 80;
    server_name your-domain;
    
    location / {
        root /path/to/dist;
        try_files $uri $uri/ /index.html;
    }
}
```

## 技术栈

- Vue 3
- Vue Router
- EmailJS
- Marked.js
- Font Awesome
- PM2

## 开发者

- 一鸣Tech
- GitHub: [TechLeanrning](https://github.com/TechLeanrning)

## License

MIT License
```
