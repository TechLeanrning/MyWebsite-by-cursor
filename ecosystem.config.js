module.exports = {
  apps: [{
    name: 'yiming-tech-blog',  // 项目名称
    script: 'npm',
    args: 'run serve',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    instances: 1,
    autorestart: true,
    watch: [
      'config',  // 监视配置文件变化
      'posts'    // 监视文章文件变化
    ],
    watch_delay: 1000,
    ignore_watch: ['node_modules', 'logs'],
    max_memory_restart: '1G',
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true
  }]
} 