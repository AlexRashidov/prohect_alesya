
<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { API_URL, createCheckout, type PaymentMethod } from '../../api'

const selectedMethod = ref<PaymentMethod>('ru')

const lastName = ref('')
const firstName = ref('')
const middleName = ref('')
const email = ref('')
const phone = ref('')

const offerAccepted = ref(false)
const privacyAcknowledged = ref(false)
const personalDataConsent = ref(false)

// Запасной вариант, если сервер бота не подключён (VITE_API_URL пустой):
// статичные ссылки без автоматической выдачи доступа.
const paymentUrls: Record<PaymentMethod, string> = {
  ru: 'https://paylink.tbank.ru/5251f857-b16e-4920-b890-e7e877766032',
  foreign: '', // Добавим ссылку Prodamus позже
}

const isSubmitting = ref(false)
const errorMessage = ref('')

// Если покупатель вернулся со страницы оплаты кнопкой «Назад», снова разблокируем форму.
const onPageShow = (event: PageTransitionEvent) => {
  if (event.persisted) isSubmitting.value = false
}
onMounted(() => window.addEventListener('pageshow', onPageShow))
onBeforeUnmount(() => window.removeEventListener('pageshow', onPageShow))

const canPay = computed(() => {
  return (
      !isSubmitting.value &&
      lastName.value.trim().length > 0 &&
      firstName.value.trim().length > 0 &&
      middleName.value.trim().length > 0 &&
      email.value.trim().length > 0 &&
      phone.value.trim().length > 0 &&
      offerAccepted.value &&
      privacyAcknowledged.value &&
      personalDataConsent.value
  )
})

const openStaticPayment = () => {
  const url = paymentUrls[selectedMethod.value]

  if (!url) {
    errorMessage.value =
        'Оплата иностранной картой пока не подключена. Пожалуйста, выберите другой способ оплаты.'
    return
  }

  window.open(url, '_blank', 'noopener,noreferrer')
}

const openPayment = async () => {
  if (!canPay.value) return
  errorMessage.value = ''

  if (!API_URL) {
    openStaticPayment()
    return
  }

  isSubmitting.value = true
  try {
    const { url } = await createCheckout({
      method: selectedMethod.value,
      lastName: lastName.value.trim(),
      firstName: firstName.value.trim(),
      middleName: middleName.value.trim(),
      email: email.value.trim(),
      phone: phone.value.trim(),
      consents: offerAccepted.value && privacyAcknowledged.value && personalDataConsent.value,
    })
    // Переходим на страницу оплаты в этой же вкладке: после оплаты
    // платёжная система вернёт покупателя на сайт со ссылками на группы.
    window.location.href = url
  } catch (error) {
    errorMessage.value =
        error instanceof Error ? error.message : 'Что-то пошло не так. Попробуйте ещё раз.'
    isSubmitting.value = false
  }
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

      <form class="pricing-card" @submit.prevent="openPayment">
        <p class="pricing-card__eyebrow">Стоимость продукта</p>

        <div class="pricing-card__price">
          2 500 <span>₽</span>
        </div>

        <p class="pricing-card__description">
          Однократная оплата за доступ к материалам.
        </p>

        <div class="pricing-card__divider"></div>

        <p class="pricing-card__label">Данные покупателя</p>

        <div class="buyer-fields">
          <label class="field">
            <span>Фамилия *</span>
            <input
                v-model="lastName"
                type="text"
                autocomplete="family-name"
                placeholder="Иванов"
                required
            />
          </label>

          <label class="field">
            <span>Имя *</span>
            <input
                v-model="firstName"
                type="text"
                autocomplete="given-name"
                placeholder="Иван"
                required
            />
          </label>

          <label class="field">
            <span>Отчество *</span>
            <input
                v-model="middleName"
                type="text"
                autocomplete="additional-name"
                placeholder="Иванович"
                required
            />
          </label>

          <label class="field">
            <span>Электронная почта *</span>
            <input
                v-model="email"
                type="email"
                autocomplete="email"
                placeholder="name@example.com"
                required
            />
          </label>

          <label class="field">
            <span>Телефон *</span>
            <input
                v-model="phone"
                type="tel"
                autocomplete="tel"
                placeholder="+7 900 000-00-00"
                required
            />
          </label>
        </div>

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

        <div class="pricing-card__divider"></div>

        <p class="pricing-card__label">Документы и согласия</p>

        <div class="pricing-consents">
          <label class="consent-option">
            <input v-model="offerAccepted" type="checkbox" required />
            <span>
              Я принимаю условия
              <a
                  href="https://disk.yandex.ru/i/jop5s3l2ET0fZA"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                договора оферты
              </a>.
            </span>
          </label>

          <label class="consent-option">
            <input
                v-model="privacyAcknowledged"
                type="checkbox"
                required
            />
            <span>
              Я ознакомился(-ась) с
              <a
                  href="https://disk.yandex.ru/i/Uh9dE3r1kTEW_w"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                политикой конфиденциальности
              </a>.
            </span>
          </label>

          <label class="consent-option">
            <input
                v-model="personalDataConsent"
                type="checkbox"
                required
            />
            <span>
              Я даю согласие на обработку персональных данных в соответствии с
              <a
                  href="https://disk.yandex.ru/i/Nix9lBfg9JXptQ"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                документом о согласии
              </a>.
            </span>
          </label>
        </div>

        <button
            class="pricing-card__button"
            type="submit"
            :disabled="!canPay"
        >
          {{ isSubmitting ? 'Создаём заказ…' : 'Перейти к оплате' }}
          <span aria-hidden="true">↗</span>
        </button>

        <p v-if="errorMessage" class="pricing-card__error" role="alert">
          {{ errorMessage }}
        </p>

        <p class="pricing-card__legal">
          Поля со звёздочкой обязательны для заполнения.
          Перед оплатой ознакомься с документами по ссылкам выше.
        </p>
      </form>
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
  min-width: 0;
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

.buyer-fields {
  display: grid;
  gap: 14px;
}

.field {
  display: grid;
  gap: 7px;
  color: #45453c;
  font-size: 12px;
  font-weight: 600;
}

.field input {
  box-sizing: border-box;
  width: 100%;
  min-height: 44px;
  padding: 12px 13px;
  border: 1px solid #e5ddcf;
  border-radius: 10px;
  background: #fff;
  color: #292b24;
  font: inherit;
  font-weight: 400;
}

.field input::placeholder {
  color: #a29e93;
}

.field input:focus {
  outline: 2px solid #477b61;
  outline-offset: 2px;
  border-color: #477b61;
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

.pricing-consents {
  display: grid;
  gap: 14px;
}

.consent-option {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: #5e5b51;
  font-size: 12px;
  line-height: 1.7;
  cursor: pointer;
}

.consent-option input {
  width: 16px;
  height: 16px;
  flex: 0 0 auto;
  margin-top: 3px;
  accent-color: #0b4939;
}

.consent-option a {
  color: #0b4939;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.consent-option a:hover {
  color: #17644e;
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
  transition: background 160ms ease, opacity 160ms ease;
}

.pricing-card__button:hover:not(:disabled) {
  background: #17644e;
}

.pricing-card__button:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.pricing-card__error {
  margin: 14px 0 0;
  padding: 12px 14px;
  border-radius: 12px;
  background: #fbeae5;
  color: #8a2f1d;
  font-size: 12px;
  line-height: 1.6;
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
