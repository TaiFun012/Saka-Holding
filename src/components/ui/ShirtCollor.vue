<template>
  <div class="shirt-item">
    <div class="shirt-image-wrapper">
      <img :src="imageSrc" :alt="alt || label" />
    </div>
    <p class="shirt-label">{{ label }}</p>
  </div>
</template>

<script setup>
defineProps({
  imageSrc: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.shirt-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
  padding: 8px; 
}

.shirt-image-wrapper {
  width: 100%;
  max-width: 90px; 
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
}

.shirt-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: contain; 
}

.shirt-label {
  font-size: 15px;
  font-weight: 500;
  color: #1f2937;
  margin: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  letter-spacing: 0.3px;
}

@media (max-width: 600px) {
  .shirt-image-wrapper {
    max-width: 50px;
    margin-bottom: 6px;
  }
  .shirt-label {
    font-size: 12px;
  }
}
</style>