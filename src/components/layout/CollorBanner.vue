<template>
  <div class="color-palette-banner">
    <div class="banner__text">
      Актуальная палитра “Saka Tekstil”<br />
      из 45+ цветов – поможет решить<br />
      любые задачи, стоящие перед вами
    </div>

    <div class="banner__warning">
      <svg
        class="warning-icon"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L1 21H23L12 2ZM12 18C11.45 18 11 17.55 11 17C11 16.45 11.45 16 12 16C12.55 16 13 16.45 13 17C13 17.55 12.55 18 12 18ZM13 14H11V9H13V14Z"
          fill="#D7C093"
        />
      </svg>
      <div class="warning-text">
        ВНИМАНИЕ! Цветопередача на вашем<br />
        мониторе может значительно отличаться<br />
        от оригинального цвета
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.color-palette-banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  padding: 30px;
  background-color: #ffffff;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
}

.banner__text {
  font-size: 26px;
  font-weight: 600;
  line-height: 1.3;
  color: #1e1e1e;
  flex: 1;
}

.banner__warning {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 18px 22px;
  border: 2px dashed #dac095;
  border-radius: 12px;
  background-color: transparent;
  flex: 1;
}

.warning-icon {
  flex-shrink: 0;
  width: 42px;
  height: 42px;
}

.warning-text {
  font-size: 13px;
  line-height: 1.6;
  font-weight: 400;
  color: #1e1e1e;
  letter-spacing: 0.2px;
}

@media (max-width: 1024px) {
  .color-palette-banner {
    padding: 24px;
    gap: 15px;
  }
  
  .banner__text {
    font-size: 22px;
    flex: 1;
  }
  
  .banner__warning {
    padding: 14px 18px;
    flex: 1;
  }
  
  .warning-icon {
    width: 36px;
    height: 36px;
  }
}

@media (max-width: 820px) {
  .color-palette-banner {
    flex-direction: column;
    align-items: stretch;
    padding: 20px;
    gap: 24px;
  }

  .banner__text {
    max-width: 100%;
    font-size: 20px;
    flex: none;
  }
  
  .banner__text br {
    display: none;
  }

  .banner__warning {
    max-width: 100%;
    width: 100%;
    box-sizing: border-box;
    flex: none;
  }
  
  .warning-text br {
    display: none;
  }
}

@media (max-width: 600px) {
  .banner__text {
    font-size: 18px;
    line-height: 1.4;
  }
  
  .banner__warning {
    padding: 14px 16px;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
  }
  
  .warning-text {
    font-size: 12px;
    line-height: 1.5;
  }
  
  .warning-icon {
    width: 30px;
    height: 30px;
  }
}

@media (max-width: 400px) {
  .banner__text {
    font-size: 16px;
    padding: 16px;
  }
  
  .warning-text {
    font-size: 11px;
  }
}
</style>