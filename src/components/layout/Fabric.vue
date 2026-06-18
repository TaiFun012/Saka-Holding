<template>
  <section class="fabrics-section">
    <div class="container">
      <h2 class="section-title" v-html="title"></h2>
      
      <div class="fabrics-grid">
        <div 
          v-for="(fabric, index) in items" 
          :key="index" 
          class="fabric-card"
          :style="{ backgroundImage: `url(${fabric.image})` }"
        >
          <span class="fabric-label">{{ fabric.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Выбирайте из множества<br />разновидностей тканей'
  },
  items: {
    type: Array,
    default: () => [
      { name: 'Футер 3-х Нитка', image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=600&auto=format&fit=crop' },
      { name: 'Френч Терри', image: 'https://images.unsplash.com/photo-1543342194-befc9c5a257b?q=80&w=600&auto=format&fit=crop' },
      { name: 'Вискоза', image: 'https://images.unsplash.com/photo-1521577352947-9ba6fb1d86cb?q=80&w=600&auto=format&fit=crop' },
      { name: 'Пике', image: 'https://images.unsplash.com/photo-1620799140188-3b2a5fd0a0d5?q=80&w=600&auto=format&fit=crop' },
      { name: 'Кулинарная гладь', image: 'https://images.unsplash.com/photo-1537832816519-689ad163238b?q=80&w=600&auto=format&fit=crop' },
      { name: 'Бифлекс', image: 'https://images.unsplash.com/photo-1550614000-4b9519e7514a?q=80&w=600&auto=format&fit=crop' }
    ]
  }
})
</script>

<style scoped>
.fabrics-section {
  background-color: #1a222c;
  padding: 60px 0;
  width: 100%;
}

.container {
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  color: #ffffff;
  font-size: 28px;
  font-weight: 600;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.3;
  margin: 0 0 40px 0;
}

.fabrics-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.fabric-card {
  position: relative;
  border-radius: 16px;
  background-color: #2e3949;
  background-size: cover;
  background-position: center;
  aspect-ratio: 3 / 2;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 16px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.fabric-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.5);
}

.fabric-label {
  background-color: #e8c98a;
  color: #1a222c;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 6px;
  letter-spacing: 0.3px;
  z-index: 2;
  text-align: center;
  white-space: nowrap;
}

@media (max-width: 1199px) and (min-width: 769px) {
  .fabrics-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .fabrics-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  
  .section-title {
    font-size: 24px;
    margin-bottom: 30px;
  }

  .fabric-card {
    padding: 12px;
  }
}
</style>