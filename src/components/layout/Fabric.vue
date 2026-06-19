<template>
  <section class="fabric">
    <div class="fabric__container">
      <h2 class="fabric__title">
        Выбирайте из множества<br />
        разновидностей тканей
      </h2>

      <div class="fabric__grid">

        <div class="fabric-card fabric-card--wide">
          <img
            src="@/assets/images/footer3nits.png"
            alt="Футер 3-х Нитка"
          />
          <button class="fabric-card__badge">
            Футер 3-х Нитка
          </button>
        </div>

        <div class="fabric-card fabric-card--small">
          <img
            src="@/assets/images/frenchterri.png"
            alt="Френч Терри"
          />
          <button class="fabric-card__badge">
            Френч Терри
          </button>
        </div>

        <div class="fabric-card fabric-card--wide">
          <img
            src="@/assets/images/viskoza.png"
            alt="Вискоза"
          />
          <button class="fabric-card__badge">
            Вискоза
          </button>
        </div>

        <div class="fabric-card fabric-card--small">
          <img
            src="@/assets/images/pike.png"
            alt="Пике"
          />
          <button class="fabric-card__badge">
            Пике
          </button>
        </div>

        <div class="fabric-card fabric-card--wide">
          <img
            src="@/assets/images/kulinarglad.png"
            alt="Кулинарная гладь"
          />
          <button class="fabric-card__badge">
            Кулинарная гладь
          </button>
        </div>

        <div class="fabric-card fabric-card--wide">
          <img
            src="@/assets/images/biflex.png"
            alt="Бифлекс"
          />
          <button class="fabric-card__badge">
            Бифлекс
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Выбирайте из множества<br />разновидностей тканей'
  },
  items: {
    type: Array,
    default: () => [
      { name: 'Футер 3-х Нитка', image: '/src/assets/images/footer3nits.png', class: 'fabric-card--wide' },
      { name: 'Френч Терри', image: '/src/assets/images/frenchterri.png', class: 'fabric-card--small' },
      { name: 'Вискоза', image: '/src/assets/images/viskoza.png', class: 'fabric-card--wide' },
      { name: 'Пике', image: '/src/assets/images/pike.png', class: 'fabric-card--small' },
      { name: 'Кулинарная гладь', image: '/src/assets/images/kulinarglad.png', class: 'fabric-card--wide' },
      { name: 'Бифлекс', image: '/src/assets/images/biflex.png', class: 'fabric-card--wide' }
    ]
  }
})

const emit = defineEmits(['card-click'])

const handleCardClick = (fabric) => {
  emit('card-click', fabric)
}
</script>

<style scoped>
.fabric {
  background: #19242F;
  padding: 80px 0;
}

.fabric__container {
  width: 100%;
  max-width: 1078px;
  margin: 0 auto;
}

.fabric__title {
  margin: 0 0 34px;
  color: #fff;
  font-size: 30px;
  font-weight: 600;
  line-height: 1.15;
}

.fabric__grid {
  display: grid;
  grid-template-columns: 402px 228px 402px;
  grid-template-rows: 211px 211px;
  gap: 28px 34px;
}

.fabric-card {
  position: relative;
  overflow: hidden;
  border-radius: 18px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.fabric-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
}

.fabric-card img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.fabric-card--wide {
  width: 402px;
  height: 211px;
}

.fabric-card--small {
  width: 228px;
  height: 211px;
}


.fabric-card:nth-child(1) { grid-column: 1; grid-row: 1; width: 450px; left: 0; }
.fabric-card:nth-child(2) { grid-column: 2; grid-row: 1; width: 240px;  left: 40px;}
.fabric-card:nth-child(3) { grid-column: 3; grid-row: 1; width: 360px; left: 45px; }

.fabric-card:nth-child(4) { grid-column: 1; grid-row: 2; width: 240px; left: 0; }
.fabric-card:nth-child(5) { grid-column: 2; grid-row: 2; width: 360px;  left: -170px;}
.fabric-card:nth-child(6) { grid-column: 3; grid-row: 2; width: 450px; left: -45px; }

.fabric-card__badge {
  position: absolute;
  left: 18px;
  bottom: 22px;
  padding: 8px 14px;
  border-radius: 6px;
  background: #d8bf82;
  color: #232323;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  cursor: pointer;
  border: none;
  font-family: inherit;
  transition: background 0.2s ease;
}

.fabric-card__badge:hover {
  background: #c9ae70;
}

@media (max-width: 1100px) {
  .fabric__container {
    padding: 0 20px;
  }

  .fabric__grid {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: 20px;
  }

  .fabric-card--wide {
    grid-column: span 2;
  }

  .fabric-card--small {
    grid-column: span 1;
  }

  
  .fabric-card:nth-child(n) {
    grid-column: auto !important;
    grid-row: auto !important;
    width: 100% !important;
    height: auto !important;
    left: 0 !important;
    aspect-ratio: 402 / 211;
    border-radius: 14px;
  }
  .fabric-card--small {
    aspect-ratio: 228 / 211;
  }
}


@media (max-width: 768px) {
  .fabric {
    padding: 40px 0;
  }
  
  .fabric__title {
    font-size: 24px;
  }

  .fabric__grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  
  .fabric-card:nth-child(n) {
    grid-column: auto !important;
    grid-row: auto !important;
    width: 100% !important;
    height: auto !important;
    aspect-ratio: 402 / 211 !important;
    left: 0 !important;
    border-radius: 12px;
  }

  .fabric-card__badge {
    left: 12px;
    bottom: 14px;
    padding: 6px 12px;
    font-size: 13px;
  }
}
</style>