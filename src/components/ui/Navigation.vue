<script setup lang="ts">
import { ref } from 'vue';

interface NavItem {
  id: string;
  name: string;
}

const navItems = ref<NavItem[]>([
  { id: 'about', name: 'Главная' },
  { id: 'catalog', name: 'Каталог' },
  { id: 'company', name: 'О компании' },
  { id: 'news', name: 'Новости' },
  { id: 'cooperation', name: 'Доставка и оплата' },
  { id: 'contacts', name: 'Контакты' }
]);

const activeItemId = ref<string>('');

const selectItem = (id: string) => {
  activeItemId.value = id;
};
</script>

<template>
  <nav class="app-navigation">
    <div class="nav-container">
      <button 
        v-for="item in navItems" 
        :key="item.id"
        class="nav-btn"
        :class="{ 'is-active': activeItemId === item.id }"
        @click="selectItem(item.id)"
      >
        <span class="nav-text">{{ item.name }}</span>
      </button>
    </div>
  </nav>
</template>

<style scoped>
.app-navigation {
  width: 100%;
  background-color: #2d3d4f;
  border-bottom: 1px solid #2d3d4f;
  padding: 0 100px;
  box-sizing: border-box;
}


.nav-container {
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center; 
  gap: 12px; 
}


.nav-btn {
  background: transparent;
  border-radius: 4px; 
  width: 160px; 
  height: 48px; 
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), border-color 0.3s ease;
  outline: none;
}


.nav-text {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #ffffff; 
  text-align: center;
  transition: color 0.3s ease;
  white-space: nowrap; 
}


.nav-btn:hover {
  background-color: #19242F;
}

.nav-btn:hover .nav-text {
  color: #ffffff; 
}


.nav-btn.is-active {
  background-color: #19242F !important;
  border-color: #19242F !important;
}

.nav-btn.is-active .nav-text {
  color: #ffffff !important;
  font-weight: 600;
}

.nav-btn:active {
  transform: scale(0.97);
}


@media (max-width: 1200px) {
  .app-navigation {
    padding: 0 40px;
  }
}

@media (max-width: 992px) {
  
  .nav-container {
    justify-content: flex-start; 
    overflow-x: auto;
    padding: 10px 0;
  }
  
  .nav-btn {
    flex-shrink: 0; 
  }
}

@media (max-width: 768px) {
  .app-navigation {
    padding: 0 20px;
  }
}
</style>
