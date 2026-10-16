
<script setup lang="ts">
import { ref } from 'vue'

type PaymentMethod = 'ru' | 'foreign'

const selectedMethod = ref<PaymentMethod>('ru')

const paymentUrls: Record<PaymentMethod, string> = {
  ru: 'https://paylink.tbank.ru/5251f857-b16e-4920-b890-e7e877766032',
  foreign: '', // Добавим ссылку Prodamus после проверки
}

const openPayment = () => {
  const url = paymentUrls[selectedMethod.value]

  if (!url) {
    window.alert('Ссылка на оплату пока не подключена. Пожалуйста, попробуйте позже.')
    return
  }

  window.open(url, '_blank', 'noopener,noreferrer')
}
</script>

<template>
  <section id="pricing" class="pricing section">
    <div class="section-inner pricing__layout">
      <div class="pricing__intro">
        <p class="eyebrow">Таблетка от прокрастинации</p>
        <h2 class="section-title">
          Твой следующий шаг<br />
          <em>начинается здесь</em>
        </h2>
        <p>
          Два практических урока, рабочая тетрадь и методичка —
          чтобы исследовать собственные трудности и попробовать другой
          способ действовать.
        </p>

        <ul class="pricing__included">
          <li>2 практических урока</li>
          <li>Рабочая тетрадь</li>
          <li>Методичка</li>
          <li>Самостоятельная работа в своём темпе</li>
        </ul>
      </div>

      <div class="pricing-card">
        <p class="pricing-card__eyebrow">Стоимость продукта</p>
        <div class="pricing-card__price">
          2 500 <span>₽</span>
        </div>
        <p class="pricing-card__description">
          Однократная оплата за доступ к материалам.
        </p>

        <div class="pricing-card__divider"></div>

        <p class="pricing-card__label">Выбери способ оплаты</p>

        <label
            class="payment-option"
            :class="{ 'payment-option--selected': selectedMethod === 'ru' }"
        >
          <input v-model="selectedMethod" type="radio" value="ru" />
          <span class="payment-option__icon">₽</span>
          <span class="payment-option__text">
            <strong>Карта РФ</strong>
            <small>Оплата российской картой</small>
          </span>
          <span class="payment-option__check"></span>
        </label>

        <label
            class="payment-option"
            :class="{ 'payment-option--selected': selectedMethod === 'foreign' }"
        >
          <input v-model="selectedMethod" type="radio" value="foreign" />
          <span class="payment-option__icon">€</span>
          <span class="payment-option__text">
            <strong>Иностранная карта</strong>
            <small>Через платёжную страницу</small>
          </span>
          <span class="payment-option__check"></span>
        </label>

        <button class="pricing-card__button" @click="openPayment">
          Перейти к оплате <span aria-hidden="true">↗</span>
        </button>

        <p class="pricing-card__legal">
          Перед оплатой ознакомься с условиями покупки и политикой
          обработки персональных данных.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pricing {
  background: #0b4939;
  color: #fbf7ef;
}

.pricing__layout {
  display: grid;
  grid-template-columns: 1fr minmax(300px, 440px);
  gap: clamp(36px, 8vw, 110px);
  align-items: center;
}

.pricing__intro .eyebrow {
  color: #ddc49f;
}

.pricing__intro .section-title em {
  color: #ddc49f;
}

.pricing__intro > p:not(.eyebrow) {
  max-width: 520px;
  margin: 24px 0;
  color: #d9e4dc;
  font-size: 15px;
  line-height: 1.9;
}

.pricing__included {
  display: grid;
  gap: 14px;
  padding: 0;
  margin: 26px 0 0;
  list-style: none;
}

.pricing__included li {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  color: #f2ebde;
  font-size: 14px;
  line-height: 1.6;
}

.pricing__included li::before {
  content: '✓';
  color: #ddc49f;
}

.pricing-card {
  padding: 30px;
  border: 1px solid #e2d0b4;
  border-radius: 26px;
  background: #fffdf8;
  color: #292b24;
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.14);
}

.pricing-card__eyebrow {
  margin: 0;
  color: #6c6a5f;
  font-size: 12px;
}

.pricing-card__price {
  margin-top: 12px;
  font-family: Georgia, serif;
  font-size: 56px;
  letter-spacing: -0.06em;
}

.pricing-card__price span {
  font-size: 30px;
}

.pricing-card__description {
  margin: 8px 0 0;
  color: #6c6a5f;
  font-size: 13px;
  line-height: 1.7;
}

.pricing-card__divider {
  height: 1px;
  margin: 24px 0;
  background: #e5ddcf;
}

.pricing-card__label {
  margin: 0 0 14px;
  font-size: 13px;
  font-weight: 700;
}

.payment-option {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px;
  margin-top: 10px;
  border: 1px solid #e5ddcf;
  border-radius: 15px;
  cursor: pointer;
  transition: border-color 160ms ease;
}

.payment-option--selected {
  border-color: #477b61;
  background: #f1f5ed;
}

.payment-option input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.payment-option__icon {
  display: grid;
  width: 40px;
  height: 40px;
  flex: 0 0 auto;
  place-items: center;
  border-radius: 12px;
  background: #e7eee3;
  color: #315b46;
  font-family: Georgia, serif;
  font-size: 20px;
}

.payment-option__text {
  display: grid;
  flex: 1;
  gap: 5px;
}

.payment-option__text strong {
  font-size: 13px;
}

.payment-option__text small {
  color: #777267;
  font-size: 11px;
}

.payment-option__check {
  width: 17px;
  height: 17px;
  border: 1px solid #b7b5a9;
  border-radius: 50%;
}

.payment-option--selected .payment-option__check {
  border: 5px solid #477b61;
}

.payment-option:focus-within {
  outline: 2px solid #477b61;
  outline-offset: 3px;
}

.pricing-card__button {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 22px;
  padding: 18px 20px;
  border: 0;
  border-radius: 40px;
  background: #0b4939;
  color: white;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
}

.pricing-card__button:hover {
  background: #17644e;
}

.pricing-card__legal {
  margin: 16px 0 0;
  color: #777267;
  font-size: 11px;
  line-height: 1.7;
}

@media (max-width: 760px) {
  .pricing__layout {
    grid-template-columns: 1fr;
  }

  .pricing-card {
    padding: 24px 20px;
  }

  .pricing-card__price {
    font-size: 48px;
  }
}
</style>