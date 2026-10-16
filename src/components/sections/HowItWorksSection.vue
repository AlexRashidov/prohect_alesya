<script setup lang="ts">
const steps = [
  {
    number: '01',
    title: 'Переходишь в Telegram',
    text: 'Открываешь бота и начинаешь знакомство с тестом.',
    label: 'Старт',
  },
  {
    number: '02',
    title: 'Проходишь тест',
    text: 'Отвечаешь на вопросы и исследуешь, что именно мешает тебе действовать.',
    label: 'Диагностика',
  },
  {
    number: '03',
    title: 'Получаешь результат',
    text: 'Знакомишься со своим результатом и подходом к работе с трудностями.',
    label: 'Результат',
  },
  {
    number: '04',
    title: 'Выбираешь следующий шаг',
    text: 'Изучаешь предложение, оплачиваешь продукт и после подтверждения получаешь материалы.',
    label: 'Материалы',
  },
]

const telegramUrl = 'https://t.me/boske_tablet_prokrastination_bot?start=website'</script>

<template>
  <section id="how-it-works" class="how-it-works section">
    <div class="section-inner">
      <div class="how-it-works__heading">
        <p class="eyebrow">Понятный путь без лишних сложностей</p>

        <h2 class="section-title">
          От первого вопроса<br />
          <em>к следующему шагу</em>
        </h2>

        <p class="how-it-works__description">
          Весь путь проходит в Telegram: от знакомства с собой
          до получения практических материалов.
        </p>
      </div>

      <div class="how-it-works__steps">
        <article
            v-for="step in steps"
            :key="step.number"
            class="how-step"
        >
          <div class="how-step__top">
            <span class="how-step__number">
              {{ step.number }}
            </span>

            <span class="how-step__label">
              {{ step.label }}
            </span>
          </div>

          <div class="how-step__connector" aria-hidden="true">
            <span></span>
          </div>

          <h3>{{ step.title }}</h3>
          <p>{{ step.text }}</p>
        </article>
      </div>

      <div class="how-it-works__bottom">
        <div>
          <p class="how-it-works__bottom-title">
            Начни с небольшого шага
          </p>

          <p class="how-it-works__bottom-text">
            Пройди тест в Telegram и узнай, с чего можно начать.
          </p>
        </div>

        <a
            v-if="telegramUrl"
            class="how-it-works__button"
            :href="telegramUrl"
            target="_blank"
            rel="noopener noreferrer"
        >
          Перейти в Telegram
          <span aria-hidden="true">↗</span>
        </a>

        <span v-else class="how-it-works__button how-it-works__button--disabled">
          Ссылка на бота появится здесь
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.how-it-works {
  background: #fffdf8;
  color: #292b24;
}

.how-it-works__heading {
  max-width: 720px;
  margin: 0 auto 48px;
  text-align: center;
}

.how-it-works .section-title em {
  color: #49765e;
}

.how-it-works__description {
  max-width: 560px;
  margin: 22px auto 0;
  color: #6c6a5f;
  font-size: 15px;
  line-height: 1.8;
}

.how-it-works__steps {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}

.how-step {
  min-width: 0;
  padding: 24px 20px;
  border: 1px solid #e5ddcf;
  border-radius: 22px;
  background: #f7f2e9;
  transition:
      transform 200ms ease,
      border-color 200ms ease;
}

.how-step:hover {
  transform: translateY(-4px);
  border-color: #9cb49b;
}

.how-step__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.how-step__number {
  color: #35634d;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 28px;
  font-style: italic;
}

.how-step__label {
  padding: 7px 10px;
  border: 1px solid #d9e0d4;
  border-radius: 30px;
  color: #35634d;
  font-size: 10px;
  font-weight: 700;
}

.how-step__connector {
  display: flex;
  align-items: center;
  height: 34px;
  margin: 12px 0 16px;
}

.how-step__connector::before {
  width: 34px;
  height: 1px;
  background: #a7b9a0;
  content: '';
}

.how-step__connector span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #49765e;
}

.how-step h3 {
  margin: 0 0 12px;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 22px;
  font-weight: 400;
  line-height: 1.3;
}

.how-step p {
  margin: 0;
  color: #6c6a5f;
  font-size: 13px;
  line-height: 1.8;
}

.how-it-works__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  margin-top: 30px;
  padding: 26px 30px;
  border: 1px solid #d9e0d4;
  border-radius: 22px;
  background: #edf0e7;
}

.how-it-works__bottom-title {
  margin: 0;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 24px;
}

.how-it-works__bottom-text {
  margin: 8px 0 0;
  color: #6c6a5f;
  font-size: 13px;
  line-height: 1.7;
}

.how-it-works__button {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  gap: 18px;
  padding: 16px 22px;
  border: 0;
  border-radius: 40px;
  background: #0b4939;
  color: #fffdf8;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
}

a.how-it-works__button:hover {
  background: #17644e;
}

.how-it-works__button--disabled {
  background: #d8d8ce;
  color: #68685e;
  cursor: not-allowed;
}

@media (max-width: 900px) {
  .how-it-works__steps {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 560px) {
  .how-it-works__heading {
    margin-bottom: 30px;
  }

  .how-it-works__steps {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .how-step {
    padding: 22px;
  }

  .how-it-works__bottom {
    align-items: stretch;
    flex-direction: column;
    padding: 24px 20px;
  }

  .how-it-works__bottom-title {
    font-size: 22px;
  }

  .how-it-works__button {
    width: 100%;
    box-sizing: border-box;
  }
}

@media (prefers-reduced-motion: reduce) {
  .how-step {
    transition: none;
  }

  .how-step:hover {
    transform: none;
  }
}
</style>

