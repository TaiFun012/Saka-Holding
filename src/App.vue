<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue';
import { RouterView } from 'vue-router';
import Navigation from '@/components/ui/Navigation.vue';
import SpecialOffer from '@/components/ui/SpecialOffer.vue';
import AppSlider from '@/components/ui/AppSlider.vue'
import NewsCard from '@/components/ui/NewsCard.vue';
import AppFooter from '@/components/Footer/AppFooter.vue';
import { ref } from 'vue'

const imageUrl = new URL('@/assets/images/devochka.png', import.meta.url).href

const newsImage1 = new URL('@/assets/images/sakaoffice.png', import.meta.url).href
const newsImage2 = new URL('@/assets/images/sakasklad.png', import.meta.url).href
const newsImage3 = new URL('@/assets/images/sakazavod.png', import.meta.url).href
const newsImage4 = new URL('@/assets/images/sakamagaz.png', import.meta.url).href
const newsImage5 = new URL('@/assets/images/sakaflag.png', import.meta.url).href
const newsImage6 = new URL('@/assets/images/sakaoffice.png', import.meta.url).href

const sliderData = ref([
  {
    image: imageUrl, 
    title: 'Здесь будет слайдер с различными акциями или <span style="color: #ffd678;">специальными предложениями</span>',
  },
  {
    image: imageUrl, 
    title: 'Здесь будет слайдер с различными акциями или <span style="color: #ffd678;">специальными предложениями</span>',
  },
  {
    image: imageUrl, 
    title: 'Здесь будет слайдер с различными акциями или <span style="color: #ffd678;">специальными предложениями</span>',
  },
  {
    image: imageUrl, 
    title: 'Здесь будет слайдер с различными акциями или <span style="color: #ffd678;">специальными предложениями</span>',
  },
  {
    image: imageUrl, 
    title: 'Здесь будет слайдер с различными акциями или <span style="color: #ffd678;">специальными предложениями</span>',
  },
])

const newsList = ref([
  {
    image: newsImage1,
    title: 'Пример текста для заголовка новости',
    description: 'Здесь будет находиться небольшое триггерное описание или краткий дискриптор новости',
    date: '31.03.2022',
    to: '@/assets/images/sakaoffice.png'
  },
  {
    image: newsImage2,
    title: 'Пример текста для заголовка новости',
    description: 'Здесь будет находиться небольшое триггерное описание или краткий дискриптор новости',
    date: '31.03.2022',
    href: '@/assets/images/sakasklad.png'
  },
  {
    image: newsImage3,
    title: 'Пример текста для заголовка новости',
    description: 'Здесь будет находиться небольшое триггерное описание или краткий дискриптор новости',
    date: '31.03.2022',
    to: '@/assets/images/sakazavod.png'
  },
  {
    image: newsImage4,
    title: 'Пример текста для заголовка новости',
    description: 'Здесь будет находиться небольшое триггерное описание или краткий дискриптор новости',
    date: '31.03.2022',
    href: '@/assets/images/sakamagaz.png'
  },
  {
    image: newsImage5,
    title: 'Пример текста для заголовка новости',
    description: 'Здесь будет находиться небольшое триггерное описание или краткий дискриптор новости',
    date: '31.03.2022',
    href: '@/assets/images/sakaflag.png'
  },
  {
    image: newsImage6,
    title: 'Пример текста для заголовка новости',
    description: 'Здесь будет находиться небольшое триггерное описание или краткий дискриптор новости',
    date: '31.03.2022',
    href: '@/assets/images/sakaoffice.png'
  },
])

</script>

<template>
   
      <AppHeader />
      <Navigation /> 
        <main>
          <router-view />
        </main>
      <SpecialOffer />
  <main class="main-content">
    <AppSlider :slides="sliderData" />
  </main>
  
   <section class="news-section">
      <div class="news-grid">
        <NewsCard
          v-for="(item, index) in newsList"
          :key="index"
          :image-url="item.image"
          :title="item.title"
          :description="item.description"
          :date="item.date"
          :to="item.to"
          :href="item.href"
        />
      </div>
    </section>
  
  <AppFooter />
   
</template>

<style>

body {
  margin: 0;
  padding: 0;
}

.main-content {
  margin-top: 75px; 
  width: 100%;
  padding: 0 0px;
  box-sizing: border-box;
}

.news-section {
  margin-top: 48px;
  margin-bottom: 48px;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-nav-wrapper :deep(.app-navigation) {
  padding: 0 !important; 
  background: transparent !important;
  border-bottom: none !important;
}

.footer-nav-wrapper :deep(.nav-container) {
  flex-direction: column !important; 
  align-items: flex-start !important; 
  justify-content: flex-start !important;
  gap: 8px !important; 
  padding: 0 !important;
  overflow-x: visible !important;
}

.footer-nav-wrapper :deep(.nav-btn) {
  width: auto !important; 
  height: auto !important; 
  padding: 4px 0 !important; 
  background: transparent !important;
  border: none !important;
  border-radius: 0 !important;
  justify-content: flex-start !important;
  transform: none !important; 
}

.footer-nav-wrapper :deep(.nav-text) {
  font-size: 14px !important;
  font-weight: 400 !important;
  color: #A0A5B1 !important;
  white-space: nowrap !important;
}

.footer-nav-wrapper :deep(.nav-btn:hover .nav-text) {
  color: #FFFFFF !important; 
}

.footer-nav-wrapper :deep(.nav-btn.is-active .nav-text) {
  color: #FFFFFF !important;
  font-weight: 500 !important;
}


@media (max-width: 992px) {
  .footer-nav-wrapper :deep(.nav-container) {
    overflow-x: visible !important;
  }
  .footer-nav-wrapper :deep(.nav-btn) {
    flex-shrink: 1 !important;
  }
}

</style>