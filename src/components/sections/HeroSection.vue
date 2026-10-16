
<script setup lang="ts">
const scrollToPricing = () => {
  document.querySelector('#pricing')?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

const scrollToProgram = () => {
  document.querySelector('#program')?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}
</script>

<template>
  <section class="hero" aria-labelledby="hero-title">
    <div class="hero__content">
      <p class="hero__eyebrow">
        Практический материал · Алисия Боске
      </p>

      <span class="hero__label">
        Для тех, кто откладывает важное
      </span>

      <h1 id="hero-title" class="hero__title">
        <span class="hero__highlight">Таблетка</span>
        от прокрастинации
        <em>Начни действовать по-другому</em>
      </h1>

      <p class="hero__description">
        Ты знаешь, что нужно делать, но снова откладываешь?
        Разберись, где именно ты застреваешь перед задачей,
        и попробуй изменить способ взаимодействия с ней.
      </p>

      <div class="hero__benefits">
        <div class="hero__benefit">
          <span class="hero__check" aria-hidden="true">✓</span>
          <p>2 практических урока</p>
        </div>

        <div class="hero__benefit">
          <span class="hero__check" aria-hidden="true">✓</span>
          <p>Рабочая тетрадь для самостоятельной работы</p>
        </div>

        <div class="hero__benefit">
          <span class="hero__check" aria-hidden="true">✓</span>
          <p>Методичка с основными идеями подхода</p>
        </div>
      </div>

      <div class="hero__actions">
        <button class="hero__cta" @click="scrollToPricing">
          Купить за 2 500 ₽
          <span aria-hidden="true">↗</span>
        </button>

        <button
            class="hero__secondary"
            @click="scrollToProgram"
        >
          Что внутри?
        </button>
      </div>

      <p class="hero__note">
        Самостоятельный формат · Без обещаний мгновенного результата
      </p>
    </div>

    <div class="hero__visual">
      <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85"
          alt="Портрет женщины"
          fetchpriority="high"
      />

      <div class="hero__image-caption">
        <span class="hero__caption-mark" aria-hidden="true">✳</span>
        <div>
          <strong>Не заставлять себя сильнее</strong>
          <p>А искать подходящий способ действовать</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
  align-items: center;
  gap: clamp(32px, 5vw, 72px);
  max-width: 1440px;
  margin: 0 auto;
  padding: 48px clamp(20px, 5vw, 72px) 72px;
  color: #292b24;
}

.hero__content {
  max-width: 540px;
}

.hero__eyebrow {
  margin: 0 0 20px;
  color: #477b61;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  line-height: 1.7;
  text-transform: uppercase;
}

.hero__label {
  display: inline-block;
  margin-bottom: 20px;
  padding: 9px 14px;
  border: 1px solid #d8cdbb;
  border-radius: 30px;
  background: #fffdf8;
  color: #477b61;
  font-size: 12px;
  font-weight: 600;
}

.hero__title {
  margin: 0;
  font-family: var(--font-display, Georgia, serif);
  font-size: clamp(44px, 5.1vw, 72px);
  font-weight: 400;
  line-height: 1.04;
  letter-spacing: -0.055em;
}

.hero__highlight {
  color: #0b4939;
}

.hero__title em {
  display: block;
  margin-top: 16px;
  color: #477b61;
  font-size: 0.68em;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.035em;
}

.hero__description {
  max-width: 490px;
  margin: 26px 0;
  color: #625e53;
  font-size: 15px;
  line-height: 1.85;
}

.hero__benefits {
  display: grid;
  gap: 10px;
}

.hero__benefit {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.hero__check {
  display: grid;
  flex: 0 0 23px;
  width: 23px;
  height: 23px;
  place-items: center;
  border-radius: 50%;
  background: #e5ecdf;
  color: #0b4939;
  font-size: 12px;
  font-weight: 700;
}

.hero__benefit p {
  margin: 2px 0 0;
  color: #45473e;
  font-size: 14px;
  line-height: 1.65;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin-top: 30px;
}

.hero__cta,
.hero__secondary {
  min-height: 54px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  padding: 16px 23px;
  border-radius: 40px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition:
      background 180ms ease,
      color 180ms ease,
      transform 180ms ease;
}

.hero__cta {
  border: 1px solid #0b4939;
  background: #0b4939;
  color: #fffdf8;
}

.hero__cta:hover {
  background: #17644e;
  transform: translateY(-2px);
}

.hero__secondary {
  border: 1px solid #d8cdbb;
  background: transparent;
  color: #292b24;
}

.hero__secondary:hover {
  background: #e9dfce;
}

.hero__note {
  margin: 16px 0 0;
  color: #777367;
  font-size: 11px;
  line-height: 1.7;
}

.hero__visual {
  position: relative;
  height: clamp(440px, 53vw, 680px);
  min-width: 0;
  padding: 10px;
  border: 1px solid #c9ad8a;
  border-radius: 48% 48% 8px 8px;
  background: #e9dfce;
}

.hero__visual img {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 48% 48% 4px 4px;
  object-fit: cover;
  object-position: center 35%;
}

.hero__image-caption {
  position: absolute;
  right: -16px;
  bottom: 32px;
  display: flex;
  align-items: center;
  gap: 12px;
  max-width: 290px;
  padding: 17px 20px;
  border: 1px solid #e7ddce;
  border-radius: 14px;
  background: #fffdf8;
  box-shadow: 0 12px 35px #292b2412;
}

.hero__caption-mark {
  color: #477b61;
  font-size: 25px;
}

.hero__image-caption strong {
  display: block;
  font-size: 12px;
  line-height: 1.5;
}

.hero__image-caption p {
  margin: 4px 0 0;
  color: #777367;
  font-size: 11px;
  line-height: 1.5;
}

@media (max-width: 900px) {
  .hero {
    grid-template-columns: minmax(0, 1fr) minmax(0, 0.85fr);
    gap: 28px;
  }

  .hero__title {
    font-size: clamp(42px, 5.5vw, 56px);
  }

  .hero__visual {
    height: 500px;
  }

  .hero__image-caption {
    right: -8px;
    max-width: 250px;
  }
}

@media (max-width: 680px) {
  .hero {
    grid-template-columns: 1fr;
    gap: 32px;
    padding-top: 28px;
    padding-bottom: 48px;
  }

  .hero__content {
    max-width: none;
  }

  .hero__title {
    font-size: clamp(44px, 10vw, 62px);
  }

  .hero__description {
    margin: 22px 0;
  }

  .hero__visual {
    width: min(100% - 8px, 440px);
    height: 480px;
    margin: 0 auto;
  }

  .hero__image-caption {
    right: -8px;
    bottom: 24px;
  }
}

@media (max-width: 420px) {
  .hero__actions {
    align-items: stretch;
    flex-direction: column;
  }

  .hero__cta,
  .hero__secondary {
    width: 100%;
  }

  .hero__visual {
    height: 410px;
  }

  .hero__image-caption {
    right: -4px;
    max-width: 235px;
    padding: 13px;
  }
}
</style>