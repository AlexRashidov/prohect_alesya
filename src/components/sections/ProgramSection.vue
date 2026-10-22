
<script setup lang="ts">
const materials = [
  {
    number: '01',
    label: 'Урок 1',
    title: 'Знакомство с подходом',
    text: 'Разберись в основных идеях и посмотри на прокрастинацию с другой стороны.',
    icon: '01',
  },
  {
    number: '02',
    label: 'Урок 2',
    title: 'Применение на практике',
    text: 'Перенеси подход на собственную задачу и определи, что можно изменить.',
    icon: '02',
  },
  {
    number: '03',
    label: 'Рабочая тетрадь',
    title: 'Работа с собственной задачей',
    text: 'Записывай наблюдения, разбирай трудности и фиксируй следующие действия.',
    icon: '✳',
  },
  {
    number: '04',
    label: 'Методичка',
    title: 'Основные идеи под рукой',
    text: 'Возвращайся к ключевым принципам, когда захочется применить их снова.',
    icon: '✎',
  },
]
</script>

<template>
  <section id="program" class="program section">
    <div class="section-inner">
      <div class="program__heading">
        <p class="eyebrow">Что внутри</p>
        <h2 class="section-title">
          Всё необходимое<br />
          <em>для самостоятельной работы</em>
        </h2>
        <p class="program__description">
          Не просто информация, а материалы, с которыми можно работать
          в собственном темпе.
        </p>
      </div>

      <div class="program__grid">
        <article
            v-for="item in materials"
            :key="item.number"
            class="program-card"
        >
          <div class="program-card__top">
            <span class="program-card__label">{{ item.label }}</span>
            <span class="program-card__icon">{{ item.icon }}</span>
          </div>

          <div>
            <span class="program-card__number">{{ item.number }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </div>
        </article>
      </div>

      <p class="program__footnote">
        Формат: самостоятельное изучение материалов. Индивидуальные консультации
        в продукт не входят.
      </p>
    </div>
  </section>
</template>

<style scoped>

.program {
  background: #f7f2e9;
  color: #292b24;
}

/* Заголовок секции */

.program__heading {
  max-width: 720px;
  margin: 0 auto 42px;
  text-align: center;
}

.program .eyebrow {
  margin: 0 0 16px;
  color: #42735e;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.program .section-title {
  margin: 0;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(36px, 4.5vw, 58px);
  font-weight: 400;
  line-height: 1.08;
  letter-spacing: -0.045em;
}

.program .section-title em {
  color: #49765e;
  font-weight: 400;
}

.program__description {
  max-width: 550px;
  margin: 20px auto 0;
  color: #6c6a5f;
  font-size: 15px;
  line-height: 1.8;
}

/* Сетка материалов */

.program__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
  align-items: stretch;
}

.program-card {
  display: flex;
  min-width: 0;
  min-height: 260px;
  flex-direction: column;
  justify-content: space-between;
  gap: 28px;
  padding: 28px;
  border: 1px solid #e2d8c8;
  border-radius: 22px;
  background: #fffdf8;
  box-shadow: 0 4px 14px rgba(41, 43, 36, 0.025);
  transition:
      transform 220ms ease,
      border-color 220ms ease,
      box-shadow 220ms ease;
}

.program-card:hover {
  transform: translateY(-4px);
  border-color: #b7c7b1;
  box-shadow: 0 16px 32px rgba(41, 43, 36, 0.08);
}

/* Верх карточки */

.program-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.program-card__label {
  display: inline-flex;
  align-items: center;
  min-height: 32px;
  padding: 8px 12px;
  border: 1px solid #d9e0d4;
  border-radius: 30px;
  background: #f7f8f2;
  color: #35634d;
  font-size: 11px;
  font-weight: 700;
  line-height: 1.3;
}

.program-card__icon {
  display: grid;
  width: 46px;
  height: 46px;
  flex: 0 0 auto;
  place-items: center;
  border: 1px solid #dfe7d8;
  border-radius: 50%;
  background: linear-gradient(145deg, #f1f4e9, #e4ebdf);
  color: #35634d;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 20px;
  transition:
      transform 220ms ease,
      background 220ms ease;
}

.program-card:hover .program-card__icon {
  transform: rotate(-8deg);
  background: #e0e9d9;
}

/* Содержимое карточки */

.program-card__number {
  color: #879c83;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 14px;
  letter-spacing: 0.04em;
}

.program-card h3 {
  margin: 10px 0;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(22px, 2.2vw, 25px);
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: -0.02em;
}

.program-card p {
  max-width: 440px;
  margin: 0;
  color: #6c6a5f;
  font-size: 14px;
  line-height: 1.8;
}

/* Примечание под карточками */

.program__footnote {
  max-width: 650px;
  margin: 24px auto 0;
  color: #777267;
  font-size: 12px;
  line-height: 1.7;
  text-align: center;
}

/* Планшеты */

@media (max-width: 900px) {
  .program__grid {
    gap: 14px;
  }

  .program-card {
    padding: 24px;
  }
}

/* Телефоны */

@media (max-width: 650px) {
  .program__heading {
    margin-bottom: 30px;
  }

  .program .section-title {
    font-size: clamp(32px, 8vw, 44px);
  }

  .program__description {
    margin-top: 16px;
    font-size: 14px;
    line-height: 1.75;
  }

  .program__grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .program-card {
    min-height: 220px;
    gap: 24px;
    padding: 22px;
    border-radius: 20px;
  }

  .program-card__icon {
    width: 42px;
    height: 42px;
    font-size: 18px;
  }

  .program-card h3 {
    font-size: 23px;
  }

  .program-card p {
    font-size: 14px;
    line-height: 1.75;
  }

  .program__footnote {
    margin-top: 20px;
    font-size: 12px;
  }
}

/* Доступность */

@media (prefers-reduced-motion: reduce) {
  .program-card,
  .program-card__icon {
    transition: none;
  }

  .program-card:hover,
  .program-card:hover .program-card__icon {
    transform: none;
  }
}
</style>