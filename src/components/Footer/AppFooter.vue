<template>
  <footer class="app-footer">
    <div class="footer-container">
      <div class="footer-top">
        <div class="footer-col col-logo">
          <img src="@/assets/images/logo.svg" alt="SAKA HOLDING" class="footer-logo" />
          <div class="social-wrapper">
            <p class="social-text">Напишите нам,<br />мы онлайн:</p>
            <div class="social-icons">
              <img src="@/assets/icons/VK.svg" alt="VK" class="social-icon" />
              <img src="@/assets/icons/WhatsApp.svg" alt="WhatsApp" class="social-icon" />
              <img src="@/assets/icons/Telegram.svg" alt="Telegram" class="social-icon" />
              <img src="@/assets/icons/Instagram.svg" alt="Instagram" class="social-icon" />
            </div>
          </div>
        </div>

        <div class="footer-col col-nav">
          <h3 class="footer-title">Навигация</h3>
          <ul class="footer-links">
            <li><a href="#">Каталог</a></li>
            <li><a href="#">О компании</a></li>
            <li><a href="#">Новости</a></li>
            <li><a href="#">Доставка и оплата</a></li>
            <li><a href="#">Контакты</a></li>
            <li><a href="#">Корзина</a></li>
          </ul>
        </div>

        <div class="footer-col col-info">
          <h3 class="footer-title">Информация</h3>
          <ul class="footer-links">
            <li><a href="#">Помощь</a></li>
            <li><a href="#">Блог</a></li>
            <li><a href="#">Вопрос-ответ</a></li>
            <li><a href="#">Политика конфиденциальности</a></li>
            <li><a href="#">Карта сайта</a></li>
          </ul>
        </div>

        <div class="footer-col col-newsletter">
          <div class="newsletter-top">
            <h3 class="footer-title">Следите за новостями</h3>
            <div class="newsletter-form">
              <input type="email" placeholder="Ваш E-mail" class="newsletter-input" />
              <button class="newsletter-btn">Отправить</button>
            </div>
          </div>

          <div class="newsletter-bottom-area">
            <div class="footer-phone">
              <span class="phone-icon">
                <img src="@/assets/icons/phone.svg" alt="Телефон" class="phone-icon-img" />
              </span>
              <span class="phone-number">+90 212 547 08 26</span>
            </div>

            <div class="footer-copyright">
              Copyright © 2023 Сака Текстиль. Все права защищены.
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.app-footer {
  background-color: #1a222c;
  color: #ffffff;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  padding: 60px 0 30px;
  width: 100%;
}

.footer-container {
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-top {
  display: grid;
  grid-template-columns: 200px 1fr 1fr 340px;
  gap: 40px 30px;
  align-items: start;
}

.footer-title {
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 22px 0;
  letter-spacing: 0.3px;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.footer-links a {
  color: #e8e8e8;
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
  transition: color 0.2s ease;
}

.footer-links a:hover {
  color: #e8c98a;
}

.col-logo {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 320px;
}

.footer-logo {
  max-width: 140px;
  height: auto;
  display: block;
  margin-top: 4px;
}

.social-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 50px;
  margin-top: auto;
  padding-bottom: 2px;
}

.social-text {
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  line-height: 1.5;
  margin: 0;
  white-space: nowrap;
}

.social-icons {
  display: flex;
  gap: 12px;
}

.social-icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: contain;
  display: block;
  transition: opacity 0.2s;
  background: #2c3645;
}

.social-icon:hover {
  opacity: 0.8;
}

.col-newsletter {
  display: flex;
  flex-direction: column;
}

.newsletter-form {
  display: flex;
  align-items: center;
  background: #2c3645;
  border-radius: 30px;
  padding: 4px 4px 4px 24px;
  margin-bottom: 30px;
  overflow: hidden;
  max-width: 100%;
}

.newsletter-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 14px;
  padding: 12px 0;
  min-width: 0;
  width: 100%;
}

.newsletter-input::placeholder {
  color: #7f8a9b;
  font-weight: 400;
}

.newsletter-btn {
  background: #e8c98a;
  color: #1a222c;
  border: none;
  border-radius: 30px;
  padding: 12px 32px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;
  white-space: nowrap;
  flex-shrink: 0;
}

.newsletter-btn:hover {
  background: #dbb978;
}

.newsletter-bottom-area {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 45px;
}

.footer-phone {
  display: flex;
  align-items: center;
  gap: 10px;
}

.phone-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.phone-icon-img {
  display: block;
  width: 18px;
  height: 18px;
  object-fit: contain;
  margin-top: 50px;
}

.phone-number {
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  letter-spacing: 0.5px;
  margin-top: 50px;
}

.footer-copyright {
  font-size: 12px;
  color: #5f6a7a;
  font-weight: 400;
  line-height: 1.5;
  text-align: right;
  margin-top: 50px;
}

@media (max-width: 1200px) {
  .footer-top {
    grid-template-columns: 180px 1fr 1fr 300px;
    gap: 30px 24px;
  }
}

@media (max-width: 992px) {
  .footer-top {
    grid-template-columns: 1fr 1fr;
    gap: 40px 30px;
  }

  .col-logo {
    min-height: auto;
    gap: 30px;
  }

  .col-newsletter {
    grid-column: span 2;
  }

  .newsletter-form {
    max-width: 480px;
  }
}

@media (max-width: 576px) {
  .footer-top {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .col-newsletter {
    grid-column: span 1;
  }

  .newsletter-form {
    max-width: 100%;
    padding: 4px 4px 4px 16px;
  }

  .newsletter-btn {
    padding: 10px 20px;
    font-size: 13px;
  }

  .footer-phone {
    margin-bottom: 0;
    justify-content: flex-end;
  }

  .phone-number {
    font-size: 16px;
  }

  .footer-logo {
    max-width: 120px;
  }

  .col-logo {
    min-height: auto;
  }

  .social-wrapper {
    margin-top: 0;
  }

  .app-footer {
    padding: 40px 0 24px;
  }
}
</style>