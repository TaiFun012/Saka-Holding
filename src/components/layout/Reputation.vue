<template>
  <section class="reputation-section">
    <h2 class="section-title">Saka Tekstil дорожит своей репутацией</h2>
    
    <div class="slider-container">
      <div class="carousel-wrapper">
        <div 
          class="carousel-track" 
          :style="{ transform: `translateX(-${currentIndex * (itemWidth + gap)}px)` }"
        >
          <div
            v-for="(item, index) in items"
            :key="index"
            class="carousel-item"
            :style="{ width: `${itemWidth}px`, marginRight: `${index !== items.length - 1 ? gap : 0}px` }"
          >
            <div class="certificate-frame">
              <img :src="item.image" :alt="item.title" class="certificate-img" />
            </div>
          </div>
        </div>
      </div>

      <button class="nav-btn prev" @click="prev" aria-label="Предыдущий слайд">
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <button class="nav-btn next" @click="next" aria-label="Следующий слайд">
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    required: true
  }
})

const itemWidth = 340 
const gap = 24
const currentIndex = ref(0)

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % props.items.length
}

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + props.items.length) % props.items.length
}
</script>

<style scoped>
.reputation-section {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  position: relative;
}

.section-title {
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  color: #111;
  margin-bottom: 48px;
  letter-spacing: 0.5px;
}

.slider-container {
  position: relative;
  padding: 0 40px;
  box-sizing: border-box;
}

.carousel-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  transition: transform 0.4s ease-in-out;
}

.carousel-item {
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.certificate-frame {
  background-color: #fff;
  border: 1px solid #ececec;
  border-radius: 8px;
  padding: 12px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}

.certificate-img {
  width: 100%;
  height: auto;
  max-height: 100%;
  display: block;
  object-fit: contain;
  aspect-ratio: 1 / 1.8;
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  margin: auto;
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: #ffffff;
  border: 1px solid #f0f0f0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  transition: all 0.25s ease;
  z-index: 10;
  outline: none;
}

.nav-btn:hover {
  background-color: #f8f9fa;
  color: #000;
  transform: translateY(-50%) scale(1.05);
}

.nav-btn:active {
  transform: translateY(-50%) scale(0.95);
}

.nav-btn.prev {
  left: 0;
}

.nav-btn.next {
  right: 0;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 24px;
  }
  .slider-container {
    padding: 0 20px;
  }
  .nav-btn {
    width: 40px;
    height: 40px;
  }
  .nav-btn svg {
    width: 20px;
    height: 20px;
  }
}
</style>