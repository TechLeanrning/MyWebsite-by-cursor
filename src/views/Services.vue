<template>
  <div class="services-container">
    <div class="services-header">
      <h1 class="title">
        <gradient-text>AI 服务</gradient-text>
      </h1>
      <p class="subtitle">把 AI 知识库变成你团队的生产力 —— 从部署到长期维护，一站式落地</p>
    </div>

    <!-- 主推服务：WeKnora 私有部署 -->
    <div
      v-for="service in featuredServices"
      :key="service.id"
      class="service-card featured">
      <div class="featured-main">
        <div class="service-icon">
          <i :class="service.icon"></i>
        </div>
        <div class="featured-info">
          <div class="featured-badges">
            <span class="badge featured-badge">
              <i class="fas fa-star"></i>
              主推服务
            </span>
            <span v-if="service.delivery" class="badge delivery-badge">
              <i class="far fa-clock"></i>
              {{ service.delivery }}
            </span>
          </div>
          <h2 class="service-name">{{ service.name }}</h2>
          <p class="service-tagline">{{ service.tagline }}</p>
          <p class="service-desc">{{ service.description }}</p>
          <ul class="service-highlights">
            <li v-for="item in service.highlights" :key="item">
              <i class="fas fa-check-circle"></i>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>

      <!-- 服务分档 -->
      <div v-if="service.tiers && service.tiers.length" class="tier-table">
        <div v-for="tier in service.tiers" :key="tier.name" class="tier-item">
          <div class="tier-name">{{ tier.name }}</div>
          <div class="tier-desc">{{ tier.desc }}</div>
        </div>
      </div>

      <div class="service-footer">
        <div class="price-slot">
          <i class="fas fa-tag"></i>
          {{ priceLabel(service) }}
        </div>
        <router-link to="/contact" class="cta-button">
          <i class="fab fa-weixin"></i>
          加微信聊需求
        </router-link>
      </div>
    </div>

    <!-- 其他服务 -->
    <div class="services-grid">
      <div
        v-for="service in regularServices"
        :key="service.id"
        class="service-card">
        <div class="service-icon">
          <i :class="service.icon"></i>
        </div>
        <div class="featured-badges">
          <span v-if="service.badge" class="badge preview-badge">
            <i class="fas fa-flask"></i>
            {{ service.badge }}
          </span>
        </div>
        <h2 class="service-name">{{ service.name }}</h2>
        <p class="service-tagline">{{ service.tagline }}</p>
        <p class="service-desc">{{ service.description }}</p>
        <ul class="service-highlights">
          <li v-for="item in service.highlights" :key="item">
            <i class="fas fa-check-circle"></i>
            {{ item }}
          </li>
        </ul>
        <div class="service-footer">
          <div class="price-slot">
            <i class="fas fa-tag"></i>
            {{ priceLabel(service) }}
          </div>
          <router-link to="/contact" class="cta-button">
            <i class="fab fa-weixin"></i>
            加微信咨询
          </router-link>
        </div>
      </div>
    </div>

    <!-- 统一转化区 -->
    <div class="convert-box">
      <div class="convert-info">
        <h3>所有服务，先聊需求</h3>
        <p>
          不确定哪档适合你？先加微信描述你的场景，我会给出方案建议 ——
          不合适不收钱。部署前明确交付清单，部署后提供使用与备份文档。
        </p>
      </div>
      <div class="convert-qr">
        <img src="/images/qrcode.jpg" alt="微信二维码">
        <span>微信扫码，备注「AI 服务」</span>
      </div>
    </div>
  </div>
</template>

<script>
import GradientText from '@/components/common/GradientText.vue'
import { services, priceLabel } from '@/data/services.js'

export default {
  name: 'Services',
  components: {
    GradientText
  },
  data() {
    return {
      services
    }
  },
  computed: {
    featuredServices() {
      return this.services.filter(s => s.featured)
    },
    regularServices() {
      return this.services.filter(s => !s.featured)
    }
  },
  methods: {
    priceLabel
  }
}
</script>

<style scoped>
.services-container {
  min-height: 100vh;
  padding: 4rem 8%;
  background: linear-gradient(to bottom,
    var(--color-background),
    var(--color-background-light));
}

.services-header {
  text-align: center;
  margin-bottom: 3rem;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.subtitle {
  color: var(--color-text-secondary);
  font-size: 1.1rem;
}

/* 服务卡片通用 */
.service-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-4px);
  border-color: var(--color-primary);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
}

.service-card.featured {
  margin-bottom: 2rem;
  border-color: rgba(var(--color-primary-rgb), 0.5);
  background: linear-gradient(135deg,
    rgba(var(--color-primary-rgb), 0.08) 0%,
    rgba(255, 255, 255, 0.03) 60%);
}

.featured-main {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
}

.service-icon {
  flex-shrink: 0;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background: rgba(var(--color-primary-rgb), 0.12);
  border: 1px solid rgba(var(--color-primary-rgb), 0.3);
}

.service-icon i {
  font-size: 1.75rem;
  color: var(--color-primary);
}

.featured-info {
  flex: 1;
}

.featured-badges {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 0.75rem;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.3rem 0.85rem;
  border-radius: 20px;
  font-size: 0.85rem;
}

.featured-badge {
  background: rgba(var(--color-primary-rgb), 0.15);
  color: var(--color-primary);
  border: 1px solid rgba(var(--color-primary-rgb), 0.4);
}

.delivery-badge {
  background: rgba(16, 185, 129, 0.12);
  color: #10b981;
  border: 1px solid rgba(16, 185, 129, 0.35);
}

.preview-badge {
  background: rgba(245, 158, 11, 0.12);
  color: #f59e0b;
  border: 1px solid rgba(245, 158, 11, 0.35);
}

.service-name {
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
  color: var(--color-text);
}

.service-tagline {
  color: var(--color-primary);
  font-size: 1.05rem;
  margin-bottom: 1rem;
  font-weight: 500;
}

.service-desc {
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: 1.25rem;
}

.service-highlights {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
  display: grid;
  gap: 0.6rem;
}

.service-highlights li {
  color: var(--color-text-secondary);
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
  line-height: 1.6;
}

.service-highlights i {
  color: #10b981;
  font-size: 0.9rem;
  transform: translateY(1px);
}

/* 分档表 */
.tier-table {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 1.5rem;
}

.tier-item {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1.25rem;
}

.tier-name {
  color: var(--color-primary);
  font-weight: 600;
  margin-bottom: 0.6rem;
  font-size: 1.05rem;
}

.tier-desc {
  color: var(--color-text-secondary);
  font-size: 0.92rem;
  line-height: 1.7;
}

/* 卡片底部：价格 + CTA */
.service-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1.5rem;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.featured .service-footer {
  margin-top: 1.5rem;
}

.price-slot {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--color-text);
}

.price-slot i {
  color: var(--color-primary);
  font-size: 0.95rem;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.5rem;
  border-radius: 8px;
  background: var(--color-primary);
  color: var(--color-background);
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(var(--color-primary-rgb), 0.35);
}

/* 其他服务网格 */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

/* 统一转化区 */
.convert-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  background: linear-gradient(135deg,
    rgba(var(--color-primary-rgb), 0.1) 0%,
    rgba(255, 255, 255, 0.03) 100%);
  border: 1px solid rgba(var(--color-primary-rgb), 0.3);
  border-radius: 16px;
  padding: 2rem;
}

.convert-info {
  flex: 1;
  min-width: 260px;
}

.convert-info h3 {
  font-size: 1.4rem;
  margin-bottom: 0.75rem;
  color: var(--color-text);
}

.convert-info p {
  color: var(--color-text-secondary);
  line-height: 1.8;
}

.convert-qr {
  text-align: center;
}

.convert-qr img {
  width: 150px;
  height: 150px;
  border-radius: 12px;
  display: block;
  margin: 0 auto 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.convert-qr span {
  color: var(--color-text-secondary);
  font-size: 0.9rem;
}

/* 响应式 */
@media (max-width: 768px) {
  .services-container {
    padding: 3rem 5%;
  }

  .title {
    font-size: 2rem;
  }

  .featured-main {
    flex-direction: column;
  }

  .tier-table {
    grid-template-columns: 1fr;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .convert-box {
    flex-direction: column;
    text-align: center;
  }
}
</style>
