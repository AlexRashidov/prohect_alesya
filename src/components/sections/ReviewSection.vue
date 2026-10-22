<template>
  <section id="review" class="review section" aria-labelledby="review-title">
    <div class="section-inner review__inner">
      <p class="eyebrow">Отзыв</p>

      <h2 id="review-title" class="section-title">
        Реальный отзыв <em>участницы</em>
      </h2>

      <figure class="review-card">
        <span class="review-card__mark" aria-hidden="true">“</span>

        <h3>Больше года не могла открыть банковскую карту</h3>

        <blockquote>
          <p>
            Больше года не могла открыть банковскую карту. Были проблемы с кредитами,
            всё казалось сложным. Из-за отсутствия карты я не могла принимать платежи
            от клиентов и постоянно жила в мелком стрессе.
          </p>
          <p>
            Но я не решалась заняться этим, потому что каждый раз сталкивалась
            с ощущением, что я ничтожная и глупая.
          </p>
          <p>
            После прохождения уроков я всё-таки смогла это сделать.
          </p>
        </blockquote>
      </figure>

      <p class="review__after">
        Иногда мы знаем, что делать, но сталкиваемся с переживаниями, которые мешают
        сделать даже необходимый шаг.
      </p>
      <p class="review__after">
        Важно не просто ещё раз сказать себе «надо», а найти способ пройти через сопротивление.
      </p>
    </div>
  </section>
</template>

<style scoped>
.review {
  background: #f7f2e9;
  color: #292b24;
}

.review__inner {
  max-width: 820px;
  text-align: center;
}

.review .eyebrow {
  margin: 0 0 14px;
  color: #42735e;
}

.review .section-title {
  margin: 0;
  font-size: clamp(34px, 4.5vw, 52px);
}

.review .section-title em {
  color: #49765e;
}

.review-card {
  position: relative;
  margin: 36px 0 0;
  padding: clamp(28px, 5vw, 48px);
  border: 1px solid #e2d8c8;
  border-radius: 24px;
  background: #fffdf8;
  text-align: left;
  box-shadow: 0 18px 50px rgba(41, 43, 36, 0.06);
}

.review-card__mark {
  position: absolute;
  top: 6px;
  right: 28px;
  color: #ddc49f;
  font-family: Georgia, serif;
  font-size: 110px;
  line-height: 1;
}

.review-card h3 {
  margin: 0 0 18px;
  padding-right: 48px;
  font-family: var(--font-display);
  font-size: clamp(22px, 2.6vw, 28px);
  font-weight: 400;
  line-height: 1.25;
}

.review-card blockquote {
  margin: 0;
  padding-left: 20px;
  border-left: 3px solid #c9a46e;
}

.review-card blockquote p {
  margin: 0 0 12px;
  color: #45473e;
  font-size: 16px;
  font-style: italic;
  line-height: 1.8;
}

.review-card blockquote p:last-child {
  margin-bottom: 0;
  color: #0b4939;
  font-weight: 600;
}

.review__after {
  max-width: 620px;
  margin: 22px auto 0;
  color: #5e5b51;
  font-size: 15px;
  line-height: 1.8;
}

.review__after + .review__after {
  margin-top: 8px;
}
</style>
