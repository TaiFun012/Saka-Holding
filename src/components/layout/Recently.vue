<template>
  <section class="recent-viewed-section">
    <div class="section-header">
      <h2 class="section-title">Недавно просмотренные</h2>
    </div>

    <div class="slider-container">
      <button class="nav-btn prev" @click="prev" aria-label="Предыдущий">
        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      <div class="carousel-wrapper" ref="containerRef">
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
            <ProductCard
              :image="item.image"
              :title="item.title"
              :price="item.price"
              :size="item.size"
              :alt="item.title"
            />
          </div>
        </div>
      </div>

      <button class="nav-btn next" @click="next" aria-label="Следующий">
        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  </section>
</template>

<script setup>
import ProductCard from '../ui/ProductCard.vue' 
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => []
  }
})

const gap = 24 
const currentIndex = ref(0)
const itemWidth = ref(275) 
const containerRef = ref(null) 

const updateDimensions = () => {
  if (!containerRef.value) return
  const containerWidth = containerRef.value.clientWidth
  let itemsPerPage = 4

  if (containerWidth < 480) itemsPerPage = 1.5 
  else if (containerWidth < 768) itemsPerPage = 2 
  else if (containerWidth < 1024) itemsPerPage = 3 
  else itemsPerPage = 4 

  itemWidth.value = (containerWidth - (itemsPerPage - 1) * gap) / itemsPerPage
}

onMounted(() => {
  updateDimensions()
  window.addEventListener('resize', updateDimensions)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateDimensions)
})

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % props.items.length
}

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + props.items.length) % props.items.length
}
</script>

<style scoped>
.recent-viewed-section {
  width: 100%;
  max-width: 100%; 
  padding: 40px 20px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  /* 🟢 Заменили жесткий цвет фона секции */
  background-color: var(--bg-page); 
  box-sizing: border-box;
}

.section-header {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 32px;
}

.section-title {
  font-size: 28px;
  font-weight: 600;
  /* 🟢 Заменили жесткий черный цвет */
  color: var(--text-main);
  margin: 0;
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
  transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
}

.carousel-item {
  flex-shrink: 0;
  box-sizing: border-box;
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  /* 🟢 Заменили на переменные: фон, границу и цвет текста */
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  color: var(--text-main);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;
  z-index: 10;
  outline: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
}

.nav-btn:hover {
  background-color: var(--bg-card-hover, #f8f9fa);
  border-color: var(--border-color-hover, #d1d5db);
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

.nav-btn svg {
  stroke-width: 2;
}

@media (max-width: 768px) {
  .recent-viewed-section {
    padding: 24px 16px;
  }
  .section-title {
    font-size: 22px;
  }
  .slider-container {
    padding: 0 8px; 
  }
  .nav-btn {
    width: 36px;
    height: 36px;
  }
  .nav-btn svg {
    width: 16px;
    height: 16px;
  }
}
</style>