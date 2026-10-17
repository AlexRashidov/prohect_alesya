
<script setup lang="ts">
import portrait from '../../assets/photos/alisia-thoughtful.jpg'

const telegramUrl =
    'https://t.me/boske_tablet_prokrastination_bot?start=website'
</script>

<template>
  <section class="final-cta section">
    <div class="final-cta__inner">
      <img
          class="final-cta__portrait"
          :src="portrait"
          alt="Алисия Боске"
          width="960"
          height="1280"
          loading="lazy"
      />

      <p class="eyebrow">Можно начать с малого</p>

      <h2>
        Не нужно ждать<br />
        <em>идеального момента.</em>
      </h2>

      <p class="final-cta__description">
        Выбери задачу, с которой хочешь разобраться, и познакомься
        с практическим подходом к работе с прокрастинацией.
      </p>

      <a
          v-if="telegramUrl"
          class="final-cta__button"
          :href="telegramUrl"
          target="_blank"
          rel="noopener noreferrer"
      >
        Пройти тест в Telegram
        <span aria-hidden="true">↗</span>
      </a>

      <span
          v-else
          class="final-cta__button final-cta__button--disabled"
          aria-disabled="true"
      >
        Ссылка на бота появится здесь
      </span>

      <p class="final-cta__price">
        «Таблетка от прокрастинации» · 2 500 ₽
      </p>
    </div>
  </section>
</template>

<style scoped>
.final-cta {
  background: #e9dfce;
  color: #292b24;
}

.final-cta__inner {
  max-width: 850px;
  margin: 0 auto;
  text-align: center;
}

.final-cta__portrait {
  display: block;
  width: 112px;
  height: 112px;
  margin: 0 auto 22px;
  border: 4px solid #fffdf8;
  border-radius: 50%;
  object-fit: cover;
  object-position: center 22%;
  box-shadow: 0 12px 30px rgba(41, 43, 36, 0.14);
}

.final-cta .eyebrow {
  color: #477b61;
}

.final-cta h2 {
  margin: 0;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(42px, 6vw, 72px);
  font-weight: 400;
  line-height: 1.06;
  letter-spacing: -0.05em;
}

.final-cta h2 em {
  color: #477b61;
  font-weight: 400;
}

.final-cta__description {
  max-width: 570px;
  margin: 24px auto;
  color: #625e53;
  font-size: 15px;
  line-height: 1.9;
}

.final-cta__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 22px;
  padding: 18px 28px;
  border: 0;
  border-radius: 40px;
  background: #0b4939;
  color: white;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  transition: background 180ms ease;
}

a.final-cta__button:hover {
  background: #17644e;
}

.final-cta__button--disabled {
  background: #d5d0c3;
  color: #625e53;
  cursor: not-allowed;
}

.final-cta__price {
  margin: 18px 0 0;
  color: #6c6a5f;
  font-size: 12px;
}

@media (max-width: 480px) {
  .final-cta h2 {
    font-size: clamp(36px, 9vw, 48px);
  }

  .final-cta__button {
    width: 100%;
    max-width: 320px;
    box-sizing: border-box;
  }
}

@media (prefers-reduced-motion: reduce) {
  .final-cta__button {
    transition: none;
  }
}
</style>

