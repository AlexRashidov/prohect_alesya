
<script setup lang="ts">
const questions = [
  {
    question: 'Что входит в «Таблетку от прокрастинации»?',
    answer:
        'Два практических урока, рабочая тетрадь и методичка для самостоятельной работы.',
  },
  {
    question: 'Подойдёт ли мне продукт, если я постоянно откладываю дела?',
    answer:
        'Материал поможет исследовать привычные затруднения и попробовать другие способы действий. Результат зависит от ситуации и индивидуальных обстоятельств.',
  },
  {
    question: 'Это индивидуальная консультация?',
    answer:
        'Нет. Это самостоятельный практический материал. Индивидуальные консультации в стоимость не входят.',
  },
  {
    question: 'Как я получу материалы после оплаты?',
    answer:
        'После подтверждения оплаты ты получишь сообщение со ссылкой на материалы.',
  },
  {
    question: 'Можно ли вернуть оплату?',
    answer:
        'Условия возврата будут указаны в документах продавца. Они должны соответствовать применимому законодательству и фактическим условиям предоставления цифрового продукта.',
  },
]
</script>

<template>
  <section id="faq" class="faq section">
    <div class="section-inner faq__layout">
      <div class="faq__intro">
        <p class="eyebrow">FAQ</p>
        <h2 class="section-title">
          Остались <em>вопросы?</em>
        </h2>
        <p>
          Собрали основные ответы, чтобы тебе было проще принять решение.
        </p>
      </div>

      <div class="faq__list">
        <details
            v-for="(item, index) in questions"
            :key="item.question"
            class="faq-item"
        >
          <summary>
            <span class="faq-item__number">
              {{ String(index + 1).padStart(2, '0') }}
            </span>
            <span class="faq-item__question">{{ item.question }}</span>
            <span class="faq-item__toggle" aria-hidden="true">+</span>
          </summary>

          <div class="faq-item__answer">
            {{ item.answer }}
          </div>
        </details>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq {
  background: #f7f2e9;
  color: #292b24;
}

.faq__layout {
  display: grid;
  grid-template-columns: 0.7fr 1.3fr;
  gap: clamp(32px, 7vw, 90px);
  align-items: start;
}

.faq__intro {
  position: sticky;
  top: 40px;
}

.faq__intro > p:last-child {
  margin-top: 20px;
  color: #6c6a5f;
  font-size: 14px;
  line-height: 1.8;
}

.faq__list {
  border-top: 1px solid #d8cdbb;
}

.faq-item {
  border-bottom: 1px solid #d8cdbb;
}

.faq-item summary {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 22px 0;
  cursor: pointer;
  list-style: none;
}

.faq-item summary::-webkit-details-marker {
  display: none;
}

.faq-item__number {
  color: #63866c;
  font-family: Georgia, serif;
  font-size: 14px;
}

.faq-item__question {
  flex: 1;
  font-size: 15px;
  font-weight: 650;
  line-height: 1.6;
}

.faq-item__toggle {
  color: #477b61;
  font-size: 24px;
  transition: transform 160ms ease;
}

.faq-item[open] .faq-item__toggle {
  transform: rotate(45deg);
}

.faq-item__answer {
  padding: 0 32px 24px;
  color: #6c6a5f;
  font-size: 14px;
  line-height: 1.9;
}

.faq-item summary:focus-visible {
  outline: 2px solid #477b61;
  outline-offset: 4px;
}

@media (max-width: 760px) {
  .faq__layout {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .faq__intro {
    position: static;
  }

  .faq-item summary {
    gap: 12px;
    padding: 18px 0;
  }

  .faq-item__answer {
    padding-left: 26px;
  }
}
</style>