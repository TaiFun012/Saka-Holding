<template>
   <div class="app-slider">
    <div class="slider-wrapper">
      <transition-group name="fade" tag="div" class="slider-inner">
        <div 
          v-for="(slide, index) in slides" 
          v-show="currentIndex === index" 
          :key="index"
          class="slide"
        >
          <img 
            v-if="slide.image" 
            :src="slide.image" 
            :alt="slide.title" 
            class="slide-image" 
          />

          <div class="slide-content">
            <span v-if="slide.subtitle" class="slide-subtitle">{{ slide.subtitle }}</span>
            <h2 v-if="slide.title" class="slide-title" v-html="slide.title"></h2>
            <p v-if="slide.description" class="slide-description">{{ slide.description }}</p>

          <div class="button-wrapper">
      <ActionButton 
        href="/catalog" 
        text="Подробнее" />
    </div>
            
            <div class="slide-actions">
              <slot name="button" :slide="slide">
                <button 
                  v-if="slide.buttonText" 
                  class="default-slider-btn" 
                  @click="slide.buttonAction ? slide.buttonAction() : null">
                  {{ slide.buttonText }}
                </button>
              </slot>
            </div>
          </div>
        </div>
      </transition-group>
    </div>

    <div class="slider-controls">
      <div class="slider-strips">
        <button
          v-for="(_, index) in slides"
          :key="index"
          :class="['strip', { active: currentIndex === index }]"
          @click="goToSlide(index)"
          :aria-label="`Go to slide ${index + 1}`"
        ></button>
      </div>
      <span class="slider-counter">{{ formattedCounter }}</span>
    </div>
  </div>
</template>

<script setup>

import ActionButton from '@/components/ui/ActionButton.vue'

import { ref, computed } from 'vue'

const props = defineProps({
  slides: {
    type: Array,
    required: true,
    default: () => []
  }
})

const currentIndex = ref(0)

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.slides.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + props.slides.length) % props.slides.length
}

const goToSlide = (index) => {
  currentIndex.value = index
}

const formattedCounter = computed(() => {
  const current = String(currentIndex.value + 1).padStart(2, '0')
  const total = String(props.slides.length).padStart(2, '0')
  return `${current} / ${total}`
})
</script>

<style scoped>
.app-slider {
  position: relative;
  width: 100%;
  max-width: 1250px;  
  height: 450px;
  margin:  0 auto;
  border-radius: 24px;
  background: linear-gradient(135deg, #19242F 0%, #24313f 100%);
  box-shadow: 0 12px 40px rgba(2, 12, 27, 0.3);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.slider-wrapper, .slide {
  width: 100%;
  height: 100%;
}

.slider-inner {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 100px;
  box-sizing: border-box;
  background: transparent; 
}


.slide-image {
  position: absolute;
  top: -76px;           
  right: 60px;
  width: auto;
  max-width: 55%;       
  object-fit: cover;
  object-position: right top;
  z-index: 2;           
  opacity: 1;         
  pointer-events: none; 
}


.slide-content {
  position: relative;
  z-index: 2;           
  max-width: 550px;
  text-align: left;
  text-shadow: 0 2px 10px rgba(0,0,0,0.5);
}


.slide-subtitle {
  display: inline-block;
  color: #ffd678;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 12px;
}

.slide-title {
  color: #e2e8f0;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 16px 0;
}

.slide-description {
  color: #8892b0;
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0 0 28px 0;
}

.default-slider-btn {
  background: #ffd678;
  color: #0a192f;
  border: none;
  padding: 12px 28px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s, background 0.2s;
}

.default-slider-btn:hover {
  transform: translateY(-2px);
  background: #ffd678;
}


.slider-controls {
  position: absolute;
  bottom: 28px;
  left: 100px;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 16px;
}

.slider-strips {
  display: flex;
  gap: 6px;
}

.strip {
  width: 28px;
  height: 3px;
  border: none;
  border-radius: 2px;
  background: #19242F;
  cursor: pointer;
  padding: 0;
  transition: all 0.3s ease;
}

.strip.active {
  background: #ffd678;
  width: 40px;          
  box-shadow: 0 0 8px rgba(255, 214, 120, 0.4);
}

.strip:hover {
  background: rgba(255, 214, 120, 0.6);
}

.slider-counter {
  color: rgba(226, 232, 240, 0.7);
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 1px;
  font-variant-numeric: tabular-nums;
  user-select: none;
}

.fade-enter-active,
.fade-leave-active {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.6s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 1024px) {
  .slide {
    padding: 0 60px;
  }
  .slide-content {
    max-width: 450px;
  }
  .slide-title {
    font-size: 2rem;
  }
  .slide-image {
    max-width: 45%;
    right: 30px;
    top: -60px;
    height: calc(100% + 80px);
  }
}


@media (max-width: 768px) {
  .app-slider {
    height: auto;
    min-height: 380px;
    border-radius: 16px;
  }

  .slide {
    flex-direction: column;          
    align-items: flex-start;
    padding: 40px 30px 30px;
  }

  .slide-content {
    max-width: 100%;
    margin-bottom: 20px;           
  }

  .slide-title {
    font-size: 1.6rem;
  }
  .slide-subtitle {
    font-size: 0.75rem;
  }
  .slide-description {
    font-size: 0.95rem;
    margin-bottom: 20px;
  }
  .default-slider-btn {
    padding: 10px 24px;
    font-size: 0.9rem;
  }

 
  .slide-image {
    position: relative;            
    width: 50%;                   
    max-width: none;
    height: auto;
    top: auto;
    right: auto;
    bottom: auto;
    left: auto;
    object-fit: contain;
    opacity: 1;                   
    z-index: auto;
    margin-left: auto;           
    display: block;
    pointer-events: none;         
  }

  .slider-controls {
    bottom: 20px;
    left: 30px;
    gap: 12px;
  }

  .strip {
    width: 24px;
    height: 3px;
  }
  .strip.active {
    width: 32px;
  }
  .slider-counter {
    font-size: 0.8rem;
  }
}


@media (max-width: 480px) {
  .slide {
    padding: 30px 20px 20px;
  }
  .slide-title {
    font-size: 1.3rem;
  }
  .slide-description {
    font-size: 0.85rem;
  }
  .slide-subtitle {
    font-size: 0.7rem;
    margin-bottom: 8px;
  }
  .default-slider-btn {
    padding: 8px 18px;
    font-size: 0.8rem;
  }
  .slide-image {
    width: 40%;                   
  }
  .slider-controls {
    left: 20px;
    bottom: 16px;
  }
  .strip {
    width: 20px;
    height: 2px;
  }
  .strip.active {
    width: 28px;
  }
}
</style>