<template>
  <div class="form-container">
    <div class="form-content">
      <h2 class="form-title">{{ title }}</h2>
      <p class="form-subtitle">{{ subtitle }}</p>

     
      <form @submit.prevent="handleSubmit" class="form-fields">
        <div class="input-group">
          <input 
            type="text" 
            v-model="formData.name" 
            placeholder="Ваше имя"
            class="form-input"
          />
        </div>
        
        <div class="input-group">
          <input 
            type="tel" 
            v-model="formData.phone" 
            placeholder="+7 (__) ___-__-__"
            class="form-input"
            @input="applyPhoneMask"
          />
        </div>
        
        <div class="input-group">
          <input 
            type="email" 
            v-model="formData.email" 
            placeholder="Ваш E-mail"
            class="form-input"
          />
        </div>

        <button type="submit" class="submit-btn">
          <span class="submit-btn__text">{{ buttonText }}</span>
          <span class="submit-btn__icon">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </span>
        </button>
      </form>

      <p class="agreement-text">{{ agreementText }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Фабрика «Saka Tekstil» осуществляет прокрас текстиля на заказ на самых выгодных условиях'
  },
  subtitle: {
    type: String,
    default: 'Просто оставьте заявку на сайте и мы свяжемся с вами в ближайшее время'
  },
  buttonText: {
    type: String,
    default: 'Отправить'
  },
  agreementText: {
    type: String,
    default: 'Нажимая на кнопку вы даете свое согласие на обработку персональных данных. Гарантируем! Спама не будет!'
  }
})

const formData = reactive({
  name: '',
  phone: '',
  email: ''
})

const applyPhoneMask = (event) => {
  let value = event.target.value.replace(/\D/g, '')
  if (!value.startsWith('7')) value = '7' + value
  
  let formatted = '+7 '
  if (value.length > 1) {
    formatted += '(' + value.substring(1, 4)
  }
  if (value.length >= 4) {
    formatted += ') ' + value.substring(4, 7)
  }
  if (value.length >= 7) {
    formatted += '-' + value.substring(7, 9)
  }
  if (value.length >= 9) {
    formatted += '-' + value.substring(9, 11)
  }
  
  event.target.value = formatted
  formData.phone = formatted
}

const handleSubmit = () => {
  console.log('Форма отправлена:', formData)
}
</script>

<style scoped>
.form-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 40px;
  box-sizing: border-box;
}

.form-content {
  background-color: #1c2128; 
  border-radius: 24px;
  padding: 48px 60px;
  position: relative;
  overflow: hidden;
  background-size: 100% 100%, 100px 100px;
}

.form-title {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 28px;
  font-weight: 600;
  color: #ffffff;
  text-align: center;
  margin: 0 0 16px 0;
  line-height: 1.3;
}

.form-subtitle {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #e5e7eb;
  text-align: center;
  margin: 0 0 32px 0;
}

.form-fields {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 24px;
}

.input-group {
  width: 100%;
}

.form-input {
  width: 100%;
  padding: 16px 20px;
  background-color: #2b313d; 
  border: 1px solid transparent;
  border-radius: 12px;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 15px;
  color: #ffffff;
  transition: border-color 0.2s ease;
  box-sizing: border-box;
  outline: none;
}

.form-input::placeholder {
  color: #9ca3af;
}

.form-input:focus {
  border-color: #e2c585;
}

.submit-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  background-color: #e2c585;
  border: none;
  border-radius: 50px;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #1a1d1f;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
}

.submit-btn:hover {
  background-color: #d1b67e;
  transform: translateY(-2px);
}

.submit-btn:active {
  transform: scale(0.97);
}

.submit-btn__icon {
  display: flex;
  align-items: center;
}

.agreement-text {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 13px;
  font-weight: 400;
  color: #6b7280;
  text-align: center;
  margin: 0;
}


@media (max-width: 1024px) {
  .form-content {
    padding: 32px 24px;
  }
  .form-fields {
    grid-template-columns: 1fr 1fr;
  }
  .submit-btn {
    grid-column: span 2;
  }
}

@media (max-width: 768px) {
  .form-title {
    font-size: 24px;
  }
  .form-subtitle {
    font-size: 15px;
    margin-bottom: 24px;
  }
}

@media (max-width: 480px) {
  .form-content {
    padding: 24px 16px;
    border-radius: 16px;
  }
  .form-title {
    font-size: 20px;
  }
  .form-subtitle {
    font-size: 14px;
  }
  .form-fields {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  .submit-btn {
    grid-column: span 1;
    padding: 14px 20px;
    font-size: 15px;
  }
  .form-input {
    padding: 14px 16px;
  }
}
</style>