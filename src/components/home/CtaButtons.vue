<template>
  <div class="cta-buttons">
    <a href="#projects" class="cta-button primary">
      <span class="button-text">探索项目</span>
      <i class="fas fa-arrow-right"></i>
    </a>
    <a href="#about" class="cta-button secondary">了解更多</a>
  </div>
</template>

<style scoped>
.cta-buttons {
  display: flex;
  gap: var(--spacing-small);
}

.cta-button {
  padding: var(--spacing-small) var(--spacing-medium);
  border-radius: var(--border-radius-medium);
  text-decoration: none;
  transition: var(--transition-default);
}

.primary {
  background: var(--gradient-primary);
  color: var(--color-text);
}

.secondary {
  border: 2px solid var(--color-primary);
  color: var(--color-text);
}
</style> 