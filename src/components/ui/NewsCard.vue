<template>
  <div class="news-card" :style="{ '--image-url': `url(${imageUrl})` }">
    <div class="news-card__image"></div>
    <div class="news-card__overlay"></div>

    <div class="news-card__button">
      <CircleButton :to="to" :href="href" size="44px" />
    </div>

    <div class="news-card__content">
      <h3 class="news-card__title">{{ title }}</h3>
      <p v-if="description" class="news-card__desc">{{ description }}</p>
      <div class="news-card__date">{{ date }}</div>
    </div>
  </div>
</template>

<script setup>

import CircleButton from '@/components/ui/CircleButton.vue'

const props = defineProps({
  imageUrl: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  date: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.news-card {
  position: relative;
  width: 100%;
  max-width: 380px;
  aspect-ratio: 4 / 5;
  border-radius: 16px;
  overflow: hidden;
  background-color: #1A1D1F; 
  font-family: system-ui, -apple-system, sans-serif;
}

.news-card__image {
  position: absolute;
  inset: 0;
  background-image: var(--image-url);
  background-color: #19242F;
  background-size: contain;    
  background-repeat: no-repeat; 
  background-position: top center; 
  z-index: 0;
  
  
  -webkit-mask-image: linear-gradient(to bottom, #19242F 25%, transparent 100%);
  mask-image: linear-gradient(to bottom, #19242F 25%, transparent 100%);
}

.news-card__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(20, 52, 73, 0) 0%, #19242F 100%);
  z-index: 1;
}

.news-card__button {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 2;
}

.news-card__content {
  position: absolute;
  bottom: 28px;
  left: 24px;
  right: 24px;
  z-index: 2;
  color: #FFFFFF;
}

.news-card__title {
  font-size: 20px;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 12px;
}

.news-card__desc {
  font-size: 14px;
  line-height: 1.5;
  opacity: 0.8;
  margin-bottom: 24px;
}

.news-card__date {
  font-size: 14px;
  font-weight: 600;
  color: #e2e2e2;
}
</style>