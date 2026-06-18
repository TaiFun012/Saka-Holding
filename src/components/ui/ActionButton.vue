<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    class="action-btn"
    v-bind="$attrs"
  >
    <span class="action-btn__text">
      <slot>{{ text }}</slot>
    </span>

    <span class="action-btn__icon">
      <slot name="icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </slot>
    </span>
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  text: {
    type: String,
    default: 'Подробнее'
  },
  href: {
    type: String,
    default: null
  },
  to: {
    type: [String, Object],
    default: null
  }
})

const tag = computed(() => {
  if (props.to) return 'router-link'
  if (props.href) return 'a'
  return 'button'
})
</script>

<style scoped>
.action-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 12px 28px;
  background-color: #E2C585;
  color: #1A1D1F;
  border: none;
  border-radius: 50px;
  font-family: system-ui, -apple-system, sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.2;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.25s ease;
}

.action-btn:hover {
  background-color: #CDAB64;
  transform: translateY(-2px);
}

.action-btn:active {
  transform: translateY(0px) scale(0.97);
}

.action-btn__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1px;
}

@media (max-width: 640px) {
  .action-btn {
    padding: 10px 20px;
    font-size: 14px;
  }
}
</style>