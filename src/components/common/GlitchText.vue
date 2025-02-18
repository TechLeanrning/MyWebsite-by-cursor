<template>
  <span class="glitch-text" :data-text="text">{{ text }}</span>
</template>

<script>
export default {
  name: 'GlitchText',
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.glitch-text {
  position: relative;
  animation: glitch 3s infinite;
}
</style> 