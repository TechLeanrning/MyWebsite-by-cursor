<template>
  <section class="services-section" id="services">
    <div class="section-header">
      <h2 class="section-title">
        <gradient-text>AI 服务</gradient-text>
      </h2>
      <p class="section-desc">把 AI 知识库部署到你自己的机器上 —— 部署、维护、单机版，一站式落地</p>
    </div>

    <div class="services-grid">
      <div
        v-for="service in services"
        :key="service.id"
        :class="['service-card', { featured: service.featured }]">
        <div class="card-top">
          <div class="service-icon">
            <i :class="service.icon"></i>
          </div>
          <span v-if="service.badge" class="badge">
            <i class="fas fa-flask"></i>
            {{ service.badge }}
          </span>
          <span v-else-if="service.featured" class="badge featured">
            <i class="fas fa-star"></i>
            主推
          </span>
        </div>

        <h3 class="service-name">{{ service.name }}</h3>
        <p class="service-tagline">{{ service.tagline }}</p>

        <ul class="service-highlights">
          <li v-for="item in service.highlights.slice(0, 3)" :key="item">
            <i class="fas fa-check-circle"></i>
            {{ item }}
          </li>
        </ul>

        <div class="card-footer">
          <span class="price-slot">
            <i class="fas fa-tag"></i>
            {{ priceLabel(service) }}
          </span>
          <router-link to="/services" class="detail-link">
            了解详情
            <i class="fas fa-arrow-right"></i>
          </router-link>
        </div>
      </div>
    </div>

    <div class="more-services">
      <router-link to="/services" class="all-services-link">
        <i class="fas fa-th-large"></i>
        查看全部服务
      </router-link>
    </div>
  </section>
</template>

<script>
import GradientText from '@/components/common/GradientText.vue'
import { services, priceLabel } from '@/data/services.js'

export default {
  name: 'ServicesPreview',
  components: {
    GradientText
  },
  data() {
    return {
      services
    }
  },
  methods: {
    priceLabel
  }
}
</script>

<style scoped>
.services-section {
  padding: 4rem 8%;
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

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
  max-width: var(--max-width);
  margin-left: auto;
  margin-right: auto;
}

.service-card {
  background: var(--bg-card);
  backdrop-filter: var(--blur-amount);
  border: var(--border-card);
  border-radius: 16px;
  padding: 1.75rem;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.service-card:hover {
  background: var(--bg-card-hover);
  box-shadow: var(--shadow-md);
  transform: translateY(-4px);
}

.service-card.featured {
  border: 2px solid var(--accent-services);
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
}

.service-icon {
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: rgba(245, 158, 11, 0.12);
  border: 1px solid rgba(245, 158, 11, 0.3);
}

.service-icon i {
  font-size: 1.4rem;
  color: var(--accent-services);
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  background: rgba(245, 158, 11, 0.12);
  color: #b45309;
  border: 1px solid rgba(245, 158, 11, 0.35);
}

.badge.featured {
  background: rgba(59, 130, 246, 0.1);
  color: #1d4ed8;
  border-color: rgba(59, 130, 246, 0.35);
}

.service-name {
  font-size: 1.3rem;
  color: var(--color-text);
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.service-tagline {
  color: var(--color-text-secondary);
  font-size: 0.95rem;
  margin-bottom: 1.25rem;
  line-height: 1.6;
}

.service-highlights {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
  display: grid;
  gap: 0.55rem;
  flex: 1;
}

.service-highlights li {
  color: var(--color-text-secondary);
  font-size: 0.92rem;
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  line-height: 1.6;
}

.service-highlights i {
  color: var(--accent-services);
  font-size: 0.8rem;
  transform: translateY(1px);
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
}

.price-slot {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-weight: 700;
  color: var(--color-text);
  font-size: 1rem;
}

.price-slot i {
  color: var(--accent-services);
  font-size: 0.85rem;
}

.detail-link {
  color: var(--accent-services);
  text-decoration: none;
  font-size: 0.92rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: var(--transition-normal);
}

.detail-link:hover {
  transform: translateX(3px);
}

.more-services {
  text-align: center;
}

.all-services-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  border: 1px solid var(--accent-services);
  border-radius: 8px;
  color: var(--accent-services);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.all-services-link:hover {
  background: rgba(245, 158, 11, 0.1);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .services-section {
    padding: 3rem 5%;
  }

  .section-title {
    font-size: 2rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>
