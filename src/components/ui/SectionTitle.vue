<template>
  <div class="section-header">
    <h2 class="section-title">{{ title }}</h2>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Сезонная палитра'
  }
})
</script>

<style scoped>
.section-header {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px 20px 20px; 
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start; 
}

.section-title {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 28px;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
  letter-spacing: 0.3px;
}


@media (max-width: 768px) {
  .section-header {
    padding: 30px 16px 16px 16px;
  }
  .section-title {
    font-size: 24px;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 20px;
  }
}
</style>