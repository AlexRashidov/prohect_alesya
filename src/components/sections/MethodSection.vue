

<script setup lang="ts">
const principles = [
  {
    number: '01',
    symbol: '◉',
    title: 'Замечать',
    text: 'Определить, в какой момент возникает желание отложить дело.',
  },
  {
    number: '02',
    symbol: '⌕',
    title: 'Исследовать',
    text: 'Понять, что именно затрудняет действие: объём задачи, неопределённость, переживания или внимание.',
  },
  {
    number: '03',
    symbol: '↗',
    title: 'Пробовать',
    text: 'Выбрать небольшой следующий шаг и проверить, помогает ли он продвинуться.',
  },
]
</script>

<template>
  <section id="method" class="method section">
    <div class="section-inner">
      <div class="method__heading">
        <p class="eyebrow">Авторский подход Алисии Боске</p>
        <h2 class="section-title">
          Не заставлять себя.<br />
          <em>Искать способ, который работает.</em>
        </h2>
        <p class="method__description">
          Вместо борьбы с собой — наблюдение, понимание и практические действия.
          Ты не обязан менять всё сразу.
        </p>
      </div>

      <div class="method__steps">
        <article
            v-for="item in principles"
            :key="item.number"
            class="method-step"
        >
          <span class="method-step__number">{{ item.number }}</span>
          <div class="method-step__symbol" aria-hidden="true">
            {{ item.symbol }}
          </div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>

      <blockquote class="method__quote">
        «Не обязательно знать весь путь. Иногда достаточно понять,
        что мешает сделать следующий шаг».
        <cite>— идея практического подхода</cite>
      </blockquote>
    </div>
  </section>
</template>

<style scoped>

.method {
  background: #0b4939;
  color: #fbf7ef;
}

/* Заголовок секции */

.method__heading {
  max-width: 780px;
  margin: 0 auto 44px;
  text-align: center;
}

.method .eyebrow {
  margin: 0 0 16px;
  color: #ddc49f;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.method .section-title {
  margin: 0;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(36px, 4.5vw, 58px);
  font-weight: 400;
  line-height: 1.08;
  letter-spacing: -0.045em;
}

.method .section-title em {
  color: #ddc49f;
  font-weight: 400;
}

.method__description {
  max-width: 590px;
  margin: 22px auto 0;
  color: #d9e4dc;
  font-size: 15px;
  line-height: 1.8;
}

/* Карточки принципов */

.method__steps {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  align-items: stretch;
}

.method-step {
  position: relative;
  display: flex;
  min-width: 0;
  flex-direction: column;
  padding: 28px;
  overflow: hidden;
  border: 1px solid rgba(221, 196, 159, 0.38);
  border-radius: 22px;
  background: linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.075),
      rgba(255, 255, 255, 0.025)
  );
  transition:
      transform 220ms ease,
      border-color 220ms ease,
      background 220ms ease;
}

.method-step:hover {
  transform: translateY(-4px);
  border-color: rgba(221, 196, 159, 0.8);
  background: linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.11),
      rgba(255, 255, 255, 0.04)
  );
}

.method-step__number {
  color: #ddc49f;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 24px;
  font-style: italic;
  line-height: 1.2;
}

.method-step__symbol {
  display: grid;
  width: 54px;
  height: 54px;
  flex: 0 0 auto;
  margin: 26px 0;
  place-items: center;
  border: 1px solid rgba(221, 196, 159, 0.75);
  border-radius: 50%;
  color: #ddc49f;
  font-size: 25px;
  transition:
      transform 220ms ease,
      background 220ms ease;
}

.method-step:hover .method-step__symbol {
  transform: rotate(-8deg);
  background: rgba(221, 196, 159, 0.1);
}

.method-step h3 {
  margin: 0 0 12px;
  color: #fbf7ef;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 25px;
  font-weight: 400;
  line-height: 1.3;
}

.method-step p {
  margin: 0;
  color: #d9e4dc;
  font-size: 14px;
  line-height: 1.8;
}

/* Цитата внизу секции */

.method__quote {
  max-width: 750px;
  margin: 52px auto 0;
  color: #f8eddb;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(23px, 3vw, 34px);
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
}

.method__quote cite {
  display: block;
  margin-top: 18px;
  color: #d9e4dc;
  font-family: Arial, sans-serif;
  font-size: 12px;
  font-style: normal;
  line-height: 1.6;
}

/* Планшеты */

@media (max-width: 900px) {
  .method__steps {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .method-step:last-child {
    grid-column: 1 / -1;
  }
}

/* Мобильные устройства */

@media (max-width: 600px) {
  .method__heading {
    margin-bottom: 30px;
  }

  .method .section-title {
    font-size: clamp(34px, 8vw, 46px);
  }

  .method__description {
    margin-top: 18px;
    font-size: 14px;
    line-height: 1.75;
  }

  .method__steps {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .method-step:last-child {
    grid-column: auto;
  }

  .method-step {
    padding: 22px;
    border-radius: 20px;
  }

  .method-step__symbol {
    width: 48px;
    height: 48px;
    margin: 18px 0;
    font-size: 23px;
  }

  .method-step h3 {
    font-size: 23px;
  }

  .method-step p {
    font-size: 14px;
    line-height: 1.75;
  }

  .method__quote {
    margin-top: 36px;
    font-size: clamp(23px, 6vw, 29px);
  }
}

/* Доступность: отключение анимаций */

@media (prefers-reduced-motion: reduce) {
  .method-step,
  .method-step__symbol {
    transition: none;
  }

  .method-step:hover,
  .method-step:hover .method-step__symbol {
    transform: none;
  }
}
</style>