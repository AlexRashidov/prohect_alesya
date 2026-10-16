<script setup lang="ts">
const botUrl = 'https://t.me/boske_tablet_prokrastination_bot?start=website'</script>

<template>
  <section id="quiz" class="quiz section">
    <div class="quiz__inner">
      <div class="quiz__content">
        <p class="quiz__eyebrow">
          Начни с понимания себя
        </p>

        <h2 class="quiz__title">
          Где именно ты
          <em>застреваешь</em>
          перед задачей?
        </h2>

        <p class="quiz__description">
          Иногда мы откладываем дела не потому, что нам не хватает
          дисциплины. Трудность может возникать на определённом этапе:
          от понимания первого шага до завершения начатого.
        </p>

        <div class="quiz__features">
          <div class="quiz__feature">
            <span class="quiz__feature-number">01</span>
            <p>4 вопроса о твоём привычном поведении</p>
          </div>

          <div class="quiz__feature">
            <span class="quiz__feature-number">02</span>
            <p>Персональный результат по твоим ответам</p>
          </div>

          <div class="quiz__feature">
            <span class="quiz__feature-number">03</span>
            <p>Практическая рекомендация, с чего начать</p>
          </div>
        </div>

        <a
            class="quiz__button"
            :href="botUrl"
            target="_blank"
            rel="noopener noreferrer"
        >
          Пройти тест в Telegram
          <span aria-hidden="true">↗</span>
        </a>

        <p class="quiz__note">
          Бесплатно · Несколько минут · Без оценки и самокритики
        </p>
      </div>

      <div class="quiz__visual">
        <div class="quiz__visual-decoration" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div class="quiz__card">
          <span class="quiz__card-label">
            НЕБОЛЬШОЕ ИССЛЕДОВАНИЕ СЕБЯ
          </span>

          <div class="quiz__card-icon" aria-hidden="true">
            ✳
          </div>

          <h3>
            Что мешает тебе
            перейти от намерения
            к действию?
          </h3>

          <div class="quiz__card-divider"></div>

          <p>
            Не нужно менять себя целиком.
            Начни с понимания того, что происходит.
          </p>

          <div class="quiz__card-bottom">
            <span>ТВОЯ ТОЧКА ОТСЧЁТА</span>
            <span>→</span>
          </div>
        </div>

        <span class="quiz__decoration quiz__decoration--top">
          01 / 04
        </span>

        <span class="quiz__decoration quiz__decoration--bottom">
          Путь к действию начинается с понимания
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.quiz {
  overflow: hidden;
  background: #f7f2e9;
  color: #292b24;
}

.quiz__inner {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  align-items: center;
  gap: clamp(40px, 7vw, 100px);
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
}

.quiz__content {
  max-width: 570px;
}

.quiz__eyebrow {
  margin: 0 0 18px;
  color: #42735e;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.quiz__title {
  margin: 0;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(40px, 5vw, 66px);
  font-weight: 400;
  line-height: 1.04;
  letter-spacing: -0.05em;
}

.quiz__title em {
  color: #49765e;
  font-weight: 400;
}

.quiz__description {
  max-width: 520px;
  margin: 24px 0;
  color: #625f55;
  font-size: 15px;
  line-height: 1.85;
}

.quiz__features {
  display: grid;
  gap: 0;
  margin-top: 28px;
}

.quiz__feature {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 16px 0;
  border-bottom: 1px solid #ded6c8;
}

.quiz__feature:first-child {
  border-top: 1px solid #ded6c8;
}

.quiz__feature-number {
  flex: 0 0 auto;
  color: #66846c;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 23px;
  font-style: italic;
}

.quiz__feature p {
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
}

.quiz__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-top: 30px;
  padding: 18px 26px;
  border-radius: 40px;
  background: #063e31;
  color: #fffaf2;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  transition:
      background 180ms ease,
      transform 180ms ease;
}

.quiz__button:hover {
  transform: translateY(-2px);
  background: #145a46;
}

.quiz__note {
  margin: 14px 0 0;
  color: #777267;
  font-size: 11px;
  line-height: 1.7;
}

.quiz__visual {
  position: relative;
  display: grid;
  min-height: 550px;
  place-items: center;
  isolation: isolate;
}

.quiz__visual-decoration {
  position: absolute;
  z-index: -1;
  width: min(100%, 450px);
  aspect-ratio: 1;
  border: 1px solid #c8bba5;
  border-radius: 50%;
}

.quiz__visual-decoration span {
  position: absolute;
  border: 1px solid #d9cdbb;
  border-radius: 50%;
}

.quiz__visual-decoration span:nth-child(1) {
  inset: 8%;
}

.quiz__visual-decoration span:nth-child(2) {
  inset: 17%;
}

.quiz__visual-decoration span:nth-child(3) {
  inset: 26%;
}

.quiz__card {
  width: min(100%, 360px);
  padding: 34px;
  border: 1px solid #e0d4c2;
  border-radius: 190px 190px 24px 24px;
  background: #fffdf8;
  box-shadow: 0 24px 60px #292b2410;
}

.quiz__card-label {
  display: block;
  color: #777267;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.13em;
  text-align: center;
}

.quiz__card-icon {
  display: grid;
  width: 66px;
  height: 66px;
  margin: 28px auto 24px;
  place-items: center;
  border: 1px solid #c6d2c0;
  border-radius: 50%;
  color: #49765e;
  font-size: 34px;
}

.quiz__card h3 {
  margin: 0;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 29px;
  font-weight: 400;
  line-height: 1.2;
  text-align: center;
}

.quiz__card-divider {
  width: 42px;
  height: 1px;
  margin: 24px auto;
  background: #a8b89f;
}

.quiz__card > p {
  margin: 0;
  color: #6c6a5f;
  font-size: 13px;
  line-height: 1.8;
  text-align: center;
}

.quiz__card-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  padding-top: 18px;
  border-top: 1px solid #e5ddcf;
  color: #49765e;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.quiz__card-bottom span:last-child {
  font-size: 18px;
}

.quiz__decoration {
  position: absolute;
  color: #777267;
  font-size: 10px;
  letter-spacing: 0.12em;
}

.quiz__decoration--top {
  top: 8%;
  right: 0;
}

.quiz__decoration--bottom {
  bottom: 5%;
  left: 0;
  max-width: 220px;
  line-height: 1.7;
}

@media (max-width: 760px) {
  .quiz__inner {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .quiz__title {
    font-size: clamp(42px, 10vw, 58px);
  }

  .quiz__visual {
    min-height: 460px;
  }

  .quiz__card {
    width: min(100%, 330px);
    padding: 30px;
  }

  .quiz__decoration--top {
    right: 4%;
  }

  .quiz__decoration--bottom {
    bottom: 0;
    left: 4%;
  }
}

@media (max-width: 420px) {
  .quiz__visual {
    min-height: 420px;
  }

  .quiz__card {
    width: min(100%, 300px);
    padding: 28px 24px;
  }

  .quiz__card h3 {
    font-size: 26px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .quiz__button {
    transition: none;
  }
}
</style>

