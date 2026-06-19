<script setup>
import { useTheme } from '@/composables/useTheme'

const { isDark, setLight, setDark } = useTheme()
</script>

<template>
  <div class="theme-switcher">
    <button :class="{ active: !isDark }" @click="setLight">
      <span class="icon">☀️</span> Светлая
    </button>
    <span class="separator">/</span>
    <button :class="{ active: isDark }" @click="setDark">
      <span class="icon">🌙</span> Темная
    </button>
  </div>
</template>

<style scoped>
.theme-switcher {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 500;
}

button {
  background: none;
  border: none;
  padding: 6px 10px;
  border-radius: 6px;
  color: #838383;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;
}

button.active {
  color: #1f2937;
  font-weight: 600;
}


:global(.dark) button.active {
  color: #ffffff; 
}

button:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

:global(.dark) button:hover {
  background-color: rgba(255, 255, 255, 0.05);
}

.separator {
  color: #838383;
}

.icon {
  font-size: 16px;
}


@media (max-width: 600px) {
  button {
    font-size: 12px;
    padding: 4px 6px;
  }
  .icon {
    font-size: 14px;
  }
}
</style>