<template>
  <div class="color-card">
    <div class="color-card__image-wrap">
      
      <img 
        :src="imageSrc" 
        :alt="label || 'Цвет футболки'" 
        class="color-card__image"
      />
    </div>
    <div class="color-card__label">
      {{ label }}
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({

  imageSrc: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.color-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  width: 100%;
  text-align: center;
}

.color-card__image-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90px; 
}

.color-card__image {
  max-width: 80px;
  max-height: 90px;
  object-fit: contain;
  transition: transform 0.2s ease;
}


.color-card:hover .color-card__image {
  transform: scale(1.05);
}

.color-card__label {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #1e1e1e;
  line-height: 1.2;
  letter-spacing: 0.2px;
}

@media (max-width: 480px) {
  .color-card__image {
    max-width: 60px;
    max-height: 70px;
  }
  .color-card__label {
    font-size: 12px;
  }
}
</style>