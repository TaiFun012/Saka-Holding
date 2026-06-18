<script setup lang="ts">
import Logo from '@/components/ui/Logo.vue';
import Emblem from '@/components/header/emblem.vue';



import HeaderCart from '@/components/header/HeaderCart.vue';
import HeaderAuth from '@/components/header/HeaderAuth.vue';
import HeaderPhone from '@/components/header/HeaderPhone.vue';
import HeaderSwitcher from '@/components/header/HeaderSwitcher.vue';
</script>

<template>
  <header class="app-header">
    <div class="header-container">
      
      <div class="header-brand">
        <Logo class="header-logo" />
        <Emblem class="header-emblem" />
      </div>

      
      <div class="header-info">
        <span class="header-slogan">
          Производитель турецкого трикотажного полотна
        </span>
      </div>

      
      <div class="header-right">
        <HeaderCart :count="5" />
        <HeaderAuth />
        <HeaderPhone />
        <HeaderSwitcher />
      </div>
    </div>
  </header>
</template>

<style scoped>



.app-header {
  width: 100%;
  background-color: #19242F;
  padding: 15px 100px;
  box-sizing: border-box;
}


.header-container {
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  gap: 30px;
}


.header-brand {
  display: flex;
  align-items: center;
  gap: 30px; 
  flex-shrink: 0;
}


.header-info {
  flex-grow: 1;
  max-width: 200px;
}


.header-slogan {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 14px;
  color: #aeaeae;
  line-height: 1.4;
  text-align: left;
  font-weight: 400;
}


.header-right {
  display: flex;
  align-items: center;
  gap: 24px; 
  flex-shrink: 0;
}


@media (max-width: 1200px) {
  .app-header {
    padding: 15px 40px; 
  }
}

@media (max-width: 992px) {
  .header-container {
    flex-direction: column;
    gap: 20px;
  }

  .header-info {
    max-width: 100%;
    text-align: center;
  }

  .header-slogan {
    text-align: center;
  }
}

@media (max-width: 768px) {
  .app-header {
    padding: 15px 20px;
  }

  .header-right {
    flex-wrap: wrap; 
    justify-content: center;
  }
}

</style>