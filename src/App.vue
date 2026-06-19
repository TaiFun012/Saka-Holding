<script setup lang="ts">
import { onMounted } from 'vue';
import { useTheme } from '@/composables/useTheme.ts';
import AppHeader from '@/components/layout/AppHeader.vue';
import { RouterView } from 'vue-router';
import Navigation from '@/components/ui/Navigation.vue';
import SpecialOffer from '@/components/ui/SpecialOffer.vue';
import AppSlider from '@/components/ui/AppSlider.vue'
import NewsCard from '@/components/ui/NewsCard.vue';
import AppFooter from '@/components/Footer/AppFooter.vue';
import Fabric from '@/components/layout/Fabric.vue'
import Information from '@/components/layout/Information.vue';
import Reputation from './components/layout/Reputation.vue';
import CollorBanner from './components/layout/CollorBanner.vue';
import ShirtCollor from './components/ui/ShirtCollor.vue';
import SectionTitle from '@/components/ui/SectionTitle.vue'
import Form from './components/ui/Form.vue';
import Recently from './components/layout/Recently.vue';
import { ref } from 'vue'

const { initTheme } = useTheme();

onMounted(() => {
  initTheme();
});

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

const customFabrics = [
  { name: 'Футер 3-х Нитка', image: '@/assets/images/footer3nits.png' },
  { name: 'Френч Терри', image: '@/assets/images/frenchterri.png' },
  { name: 'Вискоза', image: '@/assets/images/viskoza.png' },
  { name: 'Пике', image: '@/assets/images/pike.png' },
  { name: 'Кулинарная гладь', image: '@/assets/images/kulinarglad.png' },
  { name: 'Бифлекс', image: '@/assets/images/biflex.png' },
]

import factoryImg from '@/assets/images/information.png'

import cert1 from '@/assets/images/kachestvo.svg'
import cert2 from '@/assets/images/svodetelstvo.svg'
import cert3 from '@/assets/images/kachestvo2.svg'

const items = ref([
  { image: cert1, title: 'Certificate 1' },
  { image: cert2, title: 'Certificate 2' },
  { image: cert3, title: 'Certificate 3' },
])

const colors = [
  { id: 1, src: new URL('@/assets/icons/Shrit.svg', import.meta.url).href, label: 'A-104 Dark Grey' },
  { id: 2, src: new URL('@/assets/icons/shirt2.svg', import.meta.url).href, label: 'A-101 Grey' },
  { id: 3, src: new URL('@/assets/icons/shirt3.svg', import.meta.url).href, label: 'A-115 White' },
  { id: 4, src: new URL('@/assets/icons/shirt4.svg', import.meta.url).href, label: 'A-123 Black' },
  { id: 5, src: new URL('@/assets/icons/shirt5.svg', import.meta.url).href, label: 'A-106 Dark Blue' },
  { id: 6, src: new URL('@/assets/icons/shirt6.svg', import.meta.url).href, label: 'A-107 Blue' },
  { id: 7, src: new URL('@/assets/icons/shirt7.svg', import.meta.url).href, label: 'A-118 Light Blue' },
  { id: 8, src: new URL('@/assets/icons/shirt8.svg', import.meta.url).href, label: 'A-135 Orange' },
  { id: 9, src: new URL('@/assets/icons/shirt9.svg', import.meta.url).href, label: 'A-136 Green' },
  { id: 10, src: new URL('@/assets/icons/shirt10.svg', import.meta.url).href, label: 'A-125 Yellow' },
  { id: 11, src: new URL('@/assets/icons/shirt11.svg', import.meta.url).href, label: 'A-201 Purple' },
  { id: 12, src: new URL('@/assets/icons/shirt12.svg', import.meta.url).href, label: 'A-100 Red' },
]

import fabric1 from '@/assets/images/kulinarglad.png'
import fabric2 from '@/assets/images/footer3nits.png'
import fabric3 from '@/assets/images/frenchterri.png'
import fabric4 from '@/assets/images/viskoza.png'
import fabric5 from '@/assets/images/pike.png'
import fabric6 from '@/assets/images/biflex.png'

const recentlyItems = ref([
  { image: fabric1, title: 'Кулинарная гладь', price: '11,4', size: '180' },
  { image: fabric2, title: 'Футер 3-х Нитка', price: '13', size: '180' },
  { image: fabric3, title: 'Френч Терри', price: '122,4', size: '180' },
  { image: fabric4, title: 'Вискоза', price: '13,84', size: '180' },
  { image: fabric5, title: 'Пике', price: '11,4', size: '180' },
  { image: fabric6, title: 'Бифлекс', price: '13,84', size: '180' },
])
</script>

<template>
   
      <AppHeader />
      <ThemeSwitcher /> 
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
     <div>
   
    <Fabric :items="customFabrics" />

  </div>
  <div>
  <Information 
    :image-url="factoryImg" 
    titlePrefix="Saka Tekstil – для тех, кто хочет быстро и комфортно получать текстильную продукцию высокого качества по адекватной стоимости"
    :highlights="['высокого качества по адекватной стоимости']"
    :items="['Предоставляем возможность закупки широкого ассортимента: футер, кулирка, джакарт, флис, рибана и многое другое…', 'Наша компания является надежным поставщиком и производителем турецкого трикотажного полотна по всему миру']"
    highlightColor="#E4B97C"
    bgColor="#f9f9f9"/>
  </div>
  <div>
    <Reputation :items="items" />
  </div>
  <div>
    <CollorBanner />
  </div>
  <div class="swatch-container">
  <ShirtCollor 
    v-for="item in colors" 
    :key="item.id"
    :image-src="item.src"
    :label="item.label" />
  </div>
  <SectionTitle title="Сезонная палитра" />
  <div class="swatch-container">
  <ShirtCollor 
    v-for="item in colors" 
    :key="item.id"
    :image-src="item.src"
    :label="item.label" />
  </div>
  <Form /> 
  <div>
    <Recently :items="recentlyItems" />
  </div>

  
  <AppFooter />
   
</template>

<style>
:root {
  --bg-color: #f6f7f8;
  --text-color: #1f2937;
  --card-bg: #ffffff;
  --border-color: #e5e7eb;
  --bg-information: #ffffff;
  --bg-page: #f6f7f8;
  --bg-card: #ffffff;
  --bg-card-hover: #f8f9fa; 
  --border-color: #e5e7eb;
  --border-color-hover: #d1d5db;
  --text-main: #1f2937;
}


html.dark {
  --bg-color: #1a1a1a;
  --text-color: #f0f0f0;
  --card-bg: #2d2d2d;
  --border-color: #404040;
  --bg-information: #1c2128;
  --bg-page: #1a1a1a;
  --bg-card: #2d2d2d;
  --bg-card-hover: #383838; 
  --border-color: #404040;
  --border-color-hover: #555555;
  --text-main: #f0f0f0;
}


body {
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: background-color 0.3s ease, color 0.3s ease;
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

.swatch-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr); 
  gap: 32px 24px; 
  max-width: 1200px;
  margin: 60px auto; 
  padding: 0 20px;
  box-sizing: border-box;
}

html.dark h1, html.dark h2, html.dark h3, html.dark h4, html.dark p, html.dark span, html.dark div, html.dark li {
  color: #f0f0f0 !important; 
}

html.dark .section-title, 
html.dark .product-title, 
html.dark .shirt-label,
html.dark .news-card__title,
html.dark .news-card__description,
html.dark .form-subtitle,
html.dark .agreement-text {
  color: #f0f0f0 !important;
}

html.dark .action-btn, 
html.dark .fabric-card__badge,
html.dark .submit-btn {
  background-color: #c9ae70 !important; 
  color: #1a1d1f !important;
}

html.dark .product-card,
html.dark .news-card,
html.dark .shirt-item,
html.dark .certificate-frame {
  background-color: #2d2d2d !important;
  border-color: #404040 !important;
}

@media (max-width: 992px) {
  .footer-nav-wrapper :deep(.nav-container) {
    overflow-x: visible !important;
  }
  .footer-nav-wrapper :deep(.nav-btn) {
    flex-shrink: 1 !important;
  }
}

@media (max-width: 992px) {
  .swatch-container {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px 16px;
  }
}

@media (max-width: 600px) {
  .swatch-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px 12px;
  }
}

</style>