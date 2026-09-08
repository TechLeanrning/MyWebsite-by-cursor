# 一鸣Tech

AI 知识库实战者 / 安卓系统集成工程师的个人网站。基于 Vue3 的单页应用：AI 服务介绍、技术博客、项目展示与联系方式。

服务介绍见站内 `/services` 页面：微信问答实测首字响应 0.7 秒，数据全程留在客户自己的服务器。

## 特性

- 🤖 **AI 服务页**：WeKnora 私有部署、年度维护订阅、Lite 单机版（价格位预留，数据驱动）
- 📝 **Markdown 博客**：文章运行时加载，无需重新构建即可更新内容
- 🎨 现代化 UI：粒子动画、背景轮播、毛玻璃卡片、打字机效果
- 📱 响应式布局，适配移动端
- 📧 EmailJS 联系表单（未配置密钥时自动降级为微信二维码引导）
- 🔍 SEO 基础配置（meta / og / robots.txt）

## 快速开始

```bash
npm install
npm run serve    # 开发环境 http://localhost:8080
npm run build    # 生产构建，产物在 dist/
```

## 目录结构

```
├── public/                  # 运行时静态资源（不参与编译）
│   ├── config/site.json     # 社交链接 + 项目数据
│   ├── config/email.json    # EmailJS 配置
│   ├── posts/index.json     # 博客文章元数据
│   ├── posts/*.md           # 博客文章
│   └── images/              # 图片资源
├── src/
│   ├── data/services.js     # AI 服务数据（含价格预留字段）
│   ├── views/               # 页面（Home/Services/Contact/PostDetail）
│   ├── components/home/     # 首页区块组件
│   ├── router/              # 路由配置
│   ├── styles/              # 全局样式与设计变量
│   └── utils/postLoader.js  # 文章加载器
└── vue.config.js
```

## 发布新文章

1. 在 `public/posts/` 添加 `.md` 文件（frontmatter 含 title/date/category/tags/excerpt/coverImage/readTime）
2. 在 `public/posts/index.json` 登记文章元数据
3. 刷新页面即可看到，无需重新构建

## 修改 AI 服务信息

服务数据集中在 `src/data/services.js`。每项服务的 `price` 字段为预留位：

- 留空 → 页面统一显示「价格详询」并引导微信咨询
- 填入（如 `'¥500 起'`）→ 直接上线定价，无需改组件

## 部署

```bash
npm run build
```

Nginx 托管 `dist/`（SPA 需要 fallback 到 index.html）：

```nginx
server {
    listen 443 ssl;
    server_name your-domain;

    location / {
        root /path/to/dist;
        try_files $uri $uri/ /index.html;
    }
}
```

## 技术栈

Vue 3 · Vue Router · Typed.js · Marked + gray-matter · EmailJS · Font Awesome

## 作者

一鸣 ｜ GitHub: [TechLeanrning](https://github.com/TechLeanrning)

## License

MIT
