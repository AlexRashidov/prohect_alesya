
<script setup lang="ts">
interface RecognitionCard {
  number: string
  title: string
  description: string
  highlight: string
  image: string
  imageAlt: string
}


const cards: RecognitionCard[] = [
  {
    number: '01',
    title: 'Ты не понимаешь, с чего начать.',
    description: 'Ты собираешь информацию, планируешь и готовишься, но',
    highlight: 'не переходишь к действиям.',
    image:
        'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Блокнот с записями на рабочем столе',
  },
  {
    number: '02',
    title: 'Задача кажется огромной.',
    description: 'Ты смотришь на весь объём работы и думаешь:',
    highlight: 'это слишком сложно.',
    image:
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Рабочее место',
  },
  {
    number: '03',
    title: 'Ты боишься сделать недостаточно хорошо.',
    description: 'Хочется сначала всё продумать, но',
    highlight: 'идеальный момент не наступает.',
    image:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Женский портрет',
  },
  {
    number: '04',
    title: 'Перед задачей становится тяжело.',
    description: 'Появляются тревога, раздражение или усталость, и',
    highlight: 'хочется отложить дело.',
    image:
        'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Спокойный пейзаж на рассвете',
  },
  {
    number: '05',
    title: 'Ты постоянно отвлекаешься.',
    description: 'Начинаешь одно, переключаешься на другое и',
    highlight: 'теряешь нить работы.',
    image:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Рабочий стол с компьютером',
  },
  {
    number: '06',
    title: 'Ты откладываешь, даже когда дело важно.',
    description: 'Планы есть, желание что-то изменить тоже, но',
    highlight: 'перейти к действию трудно.',
    image:
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Светлое рабочее пространство',
  },
]
</script>

<template>
  <section id="recognition" class="recognition">
    <div class="recognition__inner">

      <p class="recognition__eyebrow">
        Без самокритики. С интересом к себе.
      </p>

      <h2 class="recognition__title">
        Где ты <em>застреваешь?</em>
      </h2>

      <p class="recognition__subtitle">
        Прокрастинация может начинаться в разных местах:
        когда непонятно, с чего начать, когда пугает объём,
        когда мешают сомнения или трудно сохранять внимание.
      </p>

      <div class="recognition__grid">
        <article
            v-for="card in cards"
            :key="card.number"
            class="recognition-card"
        >
          <div class="recognition-card__top">
            <span class="recognition-card__line" aria-hidden="true"></span>

            <span class="recognition-card__number">
              {{ card.number }}
            </span>

            <img
                class="recognition-card__image"
                :src="card.image"
                :alt="card.imageAlt"
                loading="lazy"
            />
          </div>

          <div class="recognition-card__body">
            <h3>{{ card.title }}</h3>

            <p>
              {{ card.description }}
              <strong>{{ card.highlight }}</strong>
            </p>
          </div>
        </article>
      </div>


      <div class="recognition__bottom">
        <p>Дело не обязательно в лени.</p>

        <p>
          Иногда полезнее понять, что именно мешает тебе
          действовать, чем снова пытаться заставить себя.
        </p>

        <a class="recognition__button" href="#about">
          Познакомиться с подходом
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.recognition {
  overflow: hidden;
  padding: 66px 24px 80px;
  background:
      radial-gradient(
          ellipse at 50% 0%,
          rgba(36, 111, 88, 0.38),
          transparent 55%
      ),
      #063e31;
  color: #f9f5ee;
}

.recognition__inner {
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
}

.recognition__eyebrow {
  margin: 0 0 12px;
  color: #d9c19f;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-align: center;
  text-transform: uppercase;
}

.recognition__title {
  margin: 0;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(42px, 5vw, 64px);
  font-weight: 400;
  letter-spacing: -0.045em;
  text-align: center;
}

.recognition__title em {
  color: #ddc49f;
  font-weight: 400;
}

.recognition__subtitle {
  max-width: 560px;
  margin: 16px auto 42px;
  color: #d6e2dc;
  font-size: 15px;
  line-height: 1.7;
  text-align: center;
}

.recognition__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.recognition-card {
  min-width: 0;
  min-height: 255px;
  padding: 26px;
  overflow: hidden;
  border: 1px solid rgba(231, 215, 196, 0.6);
  border-radius: 24px;
  background: #fffdfb;
  color: #292421;
  transition:
      transform 220ms ease,
      box-shadow 220ms ease;
}

.recognition-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 34px rgba(0, 0, 0, 0.13);
}

.recognition-card__top {
  position: relative;
  min-height: 128px;
}

.recognition-card__line {
  display: block;
  width: 36px;
  height: 3px;
  background: #0c5947;
}

.recognition-card__number {
  display: block;
  margin-top: 24px;
  color: #0c5947;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 28px;
  font-style: italic;
}

.recognition-card__image {
  position: absolute;
  top: 0;
  right: 0;
  width: 104px;
  height: 130px;
  border-radius: 55px 55px 16px 16px;
  object-fit: cover;
  box-shadow: 0 8px 18px rgba(36, 28, 17, 0.12);
}

.recognition-card__body h3 {
  margin: 10px 0 8px;
  font-size: clamp(16px, 1.6vw, 19px);
  font-weight: 750;
  line-height: 1.4;
  letter-spacing: -0.025em;
}

.recognition-card__body p {
  margin: 0;
  color: #625a54;
  font-size: 14px;
  line-height: 1.7;
}

.recognition-card__body strong {
  color: #0c5947;
  font-weight: 750;
}

.recognition__bottom {
  max-width: 620px;
  margin: 54px auto 0;
  text-align: center;
}

.recognition__bottom p {
  margin: 8px 0;
  color: #e9e2d7;
  font-size: 15px;
  line-height: 1.6;
}

.recognition__bottom p:first-child {
  color: #ddc49f;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 28px;
}

.recognition__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 24px;
  padding: 16px 24px;
  border: 1px solid #d9c19f;
  border-radius: 40px;
  color: #fffaf2;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  transition:
      background 180ms ease,
      color 180ms ease;
}

.recognition__button:hover {
  background: #ddc49f;
  color: #063e31;
}

@media (max-width: 700px) {
  .recognition {
    padding: 52px 16px 60px;
  }

  .recognition__subtitle {
    margin-bottom: 30px;
  }

  .recognition__grid {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .recognition-card {
    min-height: 230px;
    padding: 22px;
    border-radius: 20px;
  }

  .recognition-card__top {
    min-height: 112px;
  }

  .recognition-card__image {
    width: 88px;
    height: 112px;
  }

  .recognition-card__number {
    margin-top: 20px;
  }

  .recognition-card__body h3 {
    font-size: 17px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .recognition-card,
  .recognition__button {
    transition: none;
  }
}
</style>