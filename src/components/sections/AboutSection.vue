
<script setup lang="ts">
const observations = [
  {
    number: '01',
    title: 'Ты знаешь, что нужно делать',
    text: 'Но понимание задачи ещё не гарантирует, что получится перейти к действию. Иногда трудно определить самый первый шаг.',
  },
  {
    number: '02',
    title: 'Ты пытаешься заставить себя',
    text: 'Планируешь, составляешь списки, ждёшь мотивацию — и иногда снова откладываешь. Возможно, стоит попробовать другой подход.',
  },
  {
    number: '03',
    title: 'Самокритика мешает разобраться',
    text: 'Вместо того чтобы обвинять себя в лени, можно исследовать, где именно возникает затруднение и что поможет продвинуться.',
  },
]

const scrollToQuiz = () => {
  document.querySelector('#quiz')?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}
</script>

<template>
  <section id="about" class="about section">
    <div class="section-inner about__layout">
      <div class="about__intro">
        <p class="eyebrow">Дело не всегда в дисциплине</p>

        <h2 class="section-title">
          Почему так трудно <em>просто начать?</em>
        </h2>

        <p class="about__lead">
          Между намерением и действием есть несколько этапов.
          И иногда трудность возникает в одном конкретном месте.
        </p>

        <p class="about__note">
          Необязательно сильнее давить на себя. Сначала можно разобраться,
          что именно мешает тебе двигаться дальше.
        </p>

        <button
            class="about__button"
            type="button"
            @click="scrollToQuiz"
        >
          Пройти тест
          <span aria-hidden="true">↗</span>
        </button>

        <p class="about__disclaimer">
          Тест поможет исследовать привычные способы поведения.
          Это не психологическая диагностика.
        </p>
      </div>

      <div class="about__list">
        <article
            v-for="item in observations"
            :key="item.number"
            class="about-item"
        >
          <span class="about-item__number">
            {{ item.number }}
          </span>

          <div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  background: #f7f2e9;
  color: #292b24;
}

.about__layout {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: clamp(36px, 7vw, 100px);
  align-items: start;
}

.about__intro {
  position: sticky;
  top: 100px;
}

.eyebrow {
  margin: 0 0 16px;
  color: #42735e;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.section-title {
  margin: 0;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(36px, 4.5vw, 58px);
  font-weight: 400;
  line-height: 1.08;
  letter-spacing: -0.045em;
}

.section-title em {
  color: #49765e;
  font-weight: 400;
}

.about__lead {
  margin: 24px 0 0;
  font-size: 17px;
  line-height: 1.8;
}

.about__note {
  margin-top: 18px;
  color: #6c6a5f;
  font-size: 14px;
  line-height: 1.8;
}

.about__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 22px;
  margin-top: 24px;
  padding: 16px 24px;

  border: 1px solid #0b4939;
  border-radius: 40px;
  background: #0b4939;
  color: #fffdf8;

  font-size: 14px;
  font-weight: 700;
  cursor: pointer;

  transition:
      background 180ms ease,
      transform 180ms ease;
}

.about__button:hover {
  background: #17644e;
  transform: translateY(-2px);
}

.about__button:focus-visible {
  outline: 2px solid #49765e;
  outline-offset: 4px;
}

.about__disclaimer {
  max-width: 360px;
  margin: 14px 0 0;
  color: #777367;
  font-size: 12px;
  line-height: 1.7;
}

.about__list {
  display: grid;
  gap: 14px;
}

.about-item {
  display: flex;
  gap: 20px;
  padding: 26px;
  border: 1px solid #e1d8c9;
  border-radius: 20px;
  background: #fffdf8;
  transition:
      transform 180ms ease,
      box-shadow 180ms ease;
}

.about-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 26px rgba(41, 43, 36, 0.05);
}

.about-item__number {
  flex: 0 0 auto;
  color: #7b967b;
  font-family: Georgia, serif;
  font-size: 27px;
  font-style: italic;
}

.about-item h3 {
  margin: 0 0 10px;
  font-size: 17px;
  line-height: 1.5;
}

.about-item p {
  margin: 0;
  color: #6c6a5f;
  font-size: 14px;
  line-height: 1.8;
}

@media (max-width: 760px) {
  .about__layout {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .about__intro {
    position: static;
  }

  .about-item {
    gap: 14px;
    padding: 20px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .about__button,
  .about-item {
    transition: none;
  }
}
</style>