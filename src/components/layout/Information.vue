<template>
  <section class="information-section">
    <div class="information-wrapper">
      
      <div class="image-column">
        <img 
          :src="imageUrl" 
          :alt="imageAlt" 
        />
      </div>

      <div class="content-column">
        <div class="content-inner">
          <h2 class="title">
            {{ titlePrefix }}
            <template v-for="(hl, index) in highlights" :key="index">
              <br />
              <span class="highlight" :style="{ color: highlightColor }">{{ hl }}</span>
            </template>
          </h2>

          <ul class="features-list">
            <li v-for="(item, index) in items" :key="index">
              <span class="bullet-line" :style="{ backgroundColor: highlightColor }"></span>
              <p>{{ item }}</p>
            </li>
          </ul>

          <div class="button-wrapper">
            <ActionButton text="Смотреть каталог" />
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue'
import ActionButton from '@/components/ui/ActionButton.vue'

const props = defineProps({
  imageUrl: {
    type: String,
    default: '@/assets/images/information.png'
  },
  imageAlt: {
    type: String,
    default: 'Saka Tekstil building facade'
  },
  titlePrefix: {
    type: String,
    required: true,
    default: 'Saka Tekstil – для тех, кто хочет быстро и комфортно получать текстильную продукцию'
  },
  highlights: {
    type: Array,
    default: () => ['высокого качества', 'по адекватной стоимости']
  },
  items: {
    type: Array,
    required: true,
    default: () => [
      'Предоставляем возможность закупки широкого ассортимента: футер, кулирка, джакарт, флис, рибана и многое другое...',
      'Наша компания является надежным поставщиком и производителем турецкого трикотажного полотна по всему миру'
    ]
  },
  highlightColor: {
    type: String,
    default: '#D4B06A'
  }

})
</script>

<style scoped>
.information-section {
  width: 100%;
  padding: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  overflow: hidden;
  background-color: var(--bg-information);
}

:global(.dark) .information-section {
  background-color: var(--bg-information) !important; 
}


.information-wrapper {
  display: flex;
  align-items: stretch;
  width: 100%;
  gap: 0;
}

.image-column {
  flex: 0 0 48%;
  max-width: 48%;
}

.image-column img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 0 16px 16px 0;
}

.content-column {
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 40px 20px 60px;
}

.content-inner {
  max-width: 620px;
  width: 100%;
  margin: 0;
}

.title {
  font-size: 32px;
  font-weight: 500;
  line-height: 1.3;
  color: var(--text-main);
  margin: 0 0 32px 0;
}

.highlight {
  display: block;
  margin-top: 4px;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0 0 40px 0;
}

.features-list li {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 20px;
}

.features-list li:last-child {
  margin-bottom: 0;
}

.bullet-line {
  display: inline-block;
  width: 28px;
  height: 2px;
  margin-top: 12px;
  flex-shrink: 0;
}

.features-list p {
  font-size: 16px;
  line-height: 1.6;
  color: var(--text-main);
  margin: 0;
}

.button-wrapper {
  margin-top: 8px;
}

@media (max-width: 1200px) {
  .content-column {
    padding: 20px 30px 20px 40px;
  }
  .title {
    font-size: 28px;
  }
}

@media (max-width: 992px) {
  .image-column {
    flex: 0 0 40%;
    max-width: 40%;
  }
  .content-column {
    padding: 20px 20px 20px 30px;
  }
  .title {
    font-size: 24px;
  }
}

@media (max-width: 768px) {
  .information-wrapper {
    flex-direction: column;
    gap: 0;
  }

  .image-column {
    flex: 0 0 auto;
    max-width: 100%;
    height: 280px;
    width: 100%;
  }

  .image-column img {
    border-radius: 16px 16px 0 0;
  }

  .content-column {
    padding: 30px 20px;
    justify-content: center;
  }

  .content-inner {
    max-width: 100%;
  }

  .title {
    font-size: 22px;
  }
}
</style>