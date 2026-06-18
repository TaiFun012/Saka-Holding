<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    class="circle-btn"
    :style="{ 
      '--btn-size': size, 
      '--btn-bg': bgColor, 
      '--btn-color': arrowColor 
    }"
    v-bind="$attrs"
  >
    <span class="circle-btn__icon">
      <slot name="icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </slot>
    </span>
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  href: {
    type: String,
    default: null
  },
  to: {
    type: [String, Object],
    default: null
  },
  size: {
    type: String,
    default: '56px'
  },
  bgColor: {
    type: String,
    default: '#E2C585'
  },
  arrowColor: {
    type: String,
    default: '#1A1D1F'
  }
})

const tag = computed(() => {
  if (props.to) return 'router-link'
  if (props.href) return 'a'
  return 'button'
})
</script>

<style scoped>
.circle-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--btn-size);
  height: var(--btn-size);
  background-color: var(--btn-bg);
  color: var(--btn-color);
  border: none;
  border-radius: 50%;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.25s ease, background-color 0.25s ease;
}

.circle-btn:hover {
  transform: scale(1.1);
}

.circle-btn:active {
  transform: scale(0.95);
}

.circle-btn__icon {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>