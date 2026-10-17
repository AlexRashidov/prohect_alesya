<script setup lang="ts">
import mainPhoto from '../../assets/photos/alisia-window.jpg'
import secondPhoto from '../../assets/photos/alisia-chair.jpg'
</script>

<template>
  <section id="author" class="author section" aria-labelledby="author-title">
    <div class="section-inner author__layout">
      <div class="author__photos">
        <img
            class="author__photo author__photo--main"
            :src="mainPhoto"
            alt="Алисия Боске у окна"
            width="960"
            height="1280"
            loading="lazy"
        />
        <img
            class="author__photo author__photo--second"
            :src="secondPhoto"
            alt="Алисия Боске"
            width="960"
            height="1280"
            loading="lazy"
        />
        <span class="author__badge">
          <strong>Алисия Боске</strong>
          <small>Автор подхода</small>
        </span>
      </div>

      <div class="author__text">
        <p class="eyebrow">Об авторе</p>

        <h2 id="author-title" class="section-title">
          Я тоже откладывала <em>важное</em>
        </h2>

        <p class="author__lead">
          Несколько недель я откладывала подготовку к экзамену по ПДД.
          Казалось, что материала очень много, непонятно, с чего начинать,
          а на подготовку уйдёт слишком много времени.
        </p>

        <p>
          Объяснять это ленью было легко, но это не помогало продвинуться.
          Изменение началось, когда я перестала воспринимать подготовку как одну
          огромную задачу: разбила материал на блоки, отдельно повторяла темы
          с ошибками и возвращалась к пройденному.
        </p>

        <blockquote class="author__quote">
          Я не стала другим человеком за один день.
          Я изменила способ взаимодействия с задачей.
        </blockquote>

        <p>
          Этот принцип лёг в основу «Таблетки от прокрастинации»: не только
          заставлять себя действовать, но и исследовать, из какой позиции
          ты подходишь к делу и какой способ поможет тебе продвинуться.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.author {
  background: #efe7da;
  color: #292b24;
}

.author__layout {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: clamp(40px, 7vw, 96px);
  align-items: center;
}

.author__photos {
  position: relative;
  padding: 0 12% 14% 0;
}

.author__photo {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
}

.author__photo--main {
  aspect-ratio: 4 / 5;
  border-radius: 48% 48% 10px 10px;
  object-position: center 25%;
  box-shadow: 0 24px 60px rgba(41, 43, 36, 0.14);
}

.author__photo--second {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 42%;
  aspect-ratio: 3 / 4;
  border: 6px solid #efe7da;
  border-radius: 18px;
  object-position: center 20%;
  box-shadow: 0 16px 40px rgba(41, 43, 36, 0.16);
}

.author__badge {
  position: absolute;
  left: -12px;
  bottom: 22%;
  display: grid;
  gap: 2px;
  padding: 12px 18px;
  border: 1px solid #e2d8c8;
  border-radius: 14px;
  background: #fffdf8;
  box-shadow: 0 12px 30px rgba(41, 43, 36, 0.08);
}

.author__badge strong {
  font-family: var(--font-display);
  font-size: 17px;
  font-weight: 400;
}

.author__badge small {
  color: #6c6a5f;
  font-size: 11px;
}

.author__text .eyebrow {
  margin: 0 0 16px;
  color: #42735e;
}

.author__text .section-title {
  margin: 0;
  font-size: clamp(36px, 4.5vw, 56px);
}

.author__text .section-title em {
  color: #49765e;
}

.author__text p {
  margin: 18px 0 0;
  color: #5e5b51;
  font-size: 15px;
  line-height: 1.85;
}

.author__text .author__lead {
  margin-top: 26px;
  color: #292b24;
  font-size: 17px;
}

.author__quote {
  margin: 26px 0 0;
  padding: 4px 0 4px 22px;
  border-left: 3px solid #c9a46e;
  color: #0b4939;
  font-family: var(--font-display);
  font-size: clamp(20px, 2.2vw, 26px);
  font-style: italic;
  line-height: 1.4;
}

@media (max-width: 820px) {
  .author__layout {
    grid-template-columns: 1fr;
  }

  .author__photos {
    width: min(100%, 440px);
    margin: 0 auto;
  }

  .author__badge {
    left: 0;
  }
}
</style>
