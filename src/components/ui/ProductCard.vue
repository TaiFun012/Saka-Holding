<template>
  <div class="product-card">
    
    <div class="card-image-wrapper">
      <img :src="image" :alt="alt || title" />
    </div>

    
    <h3 class="product-title">{{ title }}</h3>

   
    <div class="product-meta">
      <span class="price">{{ price }}{{ priceSymbol }}</span>
      <span class="size">{{ size }} {{ sizeUnit }}</span>
    </div>

   
    <div class="card-action-wrapper">
      <ActionButton text="Подробнее" />
    </div>
  </div>
</template>

<script setup>
import ActionButton from './ActionButton.vue' 

defineProps({
  image: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: 'Кулинарная гладь'
  },
  price: {
    type: [String, Number],
    default: '11,4'
  },
  priceSymbol: {
    type: String,
    default: '$'
  },
  size: {
    type: [String, Number],
    default: '180'
  },
  sizeUnit: {
    type: String,
    default: 'см'
  }
})
</script>

<style scoped>
.product-card {
  width: 100%;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 12px 12px 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.card-image-wrapper {
  width: 100%;
  aspect-ratio: 1 / 1; 
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 12px;
}

.card-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-title {
  font-size: 16px;
  font-weight: 500;
  color: #1f2937;
  margin: 0 0 4px 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.product-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.price {
  font-size: 18px;
  font-weight: 700;
  color: #1e3a8a; 
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.size {
  font-size: 13px;
  color: #9ca3af;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.card-action-wrapper {
  width: 100%;
  margin-top: 4px;
}

@media (max-width: 768px) {
  .product-card {
    padding: 10px 10px 14px;
    border-radius: 10px;
  }
  .card-image-wrapper {
    border-radius: 6px;
    margin-bottom: 10px;
  }
  .product-title {
    font-size: 15px;
  }
  .price {
    font-size: 17px;
  }
}

@media (max-width: 480px) {
  .product-card {
    padding: 8px 8px 12px;
    border-radius: 8px;
  }
  .card-image-wrapper {
    border-radius: 6px;
    margin-bottom: 8px;
  }
  .product-title {
    font-size: 13px;
    margin-bottom: 2px;
  }
  .product-meta {
    gap: 8px;
    margin-bottom: 10px;
  }
  .price {
    font-size: 15px;
  }
  .size {
    font-size: 11px;
  }
  .card-action-wrapper {
    margin-top: 2px;
  }
}
</style>