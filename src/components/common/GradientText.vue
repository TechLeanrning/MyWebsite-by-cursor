<template>
  <span class="gradient-text">
    <slot></slot>
  </span>
</template>

<style scoped>
.gradient-text {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style> 