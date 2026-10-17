
<template>
  <footer class="site-footer">
    <div class="site-footer__top">
      <a class="site-footer__brand" href="#" aria-label="На главную">
        <span class="site-footer__monogram">АБ</span>
        <span>
          <strong>Алисия Боске</strong>
          <small>Таблетка от прокрастинации</small>
        </span>
      </a>

      <a class="site-footer__top-link" href="#top">
        Наверх ↑
      </a>
    </div>

    <div class="site-footer__bottom">
      <p>© {{ year }} Алисия Боске</p>

      <nav aria-label="Юридическая информация">
        <a :href="documents.privacy" target="_blank" rel="noopener noreferrer">Политика конфиденциальности</a>
        <a :href="documents.offer" target="_blank" rel="noopener noreferrer">Договор оферты</a>
        <a :href="documents.consent" target="_blank" rel="noopener noreferrer">Согласие на обработку данных</a>
      </nav>
    </div>

    <p v-if="requisites" class="site-footer__requisites">{{ requisites }}</p>

    <p class="site-footer__disclaimer">
      Материал носит информационно-практический характер и не является
      медицинской или психологической диагностикой.
    </p>
  </footer>
</template>

<script setup lang="ts">
import { documents, seller } from '../../siteConfig'

const year = new Date().getFullYear()

const requisites = [
  seller.name,
  seller.inn && `ИНН ${seller.inn}`,
  seller.ogrn && `ОГРНИП ${seller.ogrn}`,
  seller.email,
  seller.phone,
]
    .filter(Boolean)
    .join(' · ')
</script>

<style scoped>
.site-footer {
  padding: 32px clamp(20px, 5vw, 64px) 24px;
  background: #082f26;
  color: #f8f4eb;
}

.site-footer__top,
.site-footer__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.site-footer__top {
  padding-bottom: 28px;
  border-bottom: 1px solid #ffffff26;
}

.site-footer__brand {
  display: flex;
  align-items: center;
  gap: 12px;
  color: inherit;
  text-decoration: none;
}

.site-footer__monogram {
  display: grid;
  width: 44px;
  height: 44px;
  place-items: center;
  border: 1px solid #ddc49f;
  border-radius: 50%;
  color: #ddc49f;
  font-family: Georgia, serif;
}

.site-footer__brand strong,
.site-footer__brand small {
  display: block;
}

.site-footer__brand strong {
  font-size: 13px;
}

.site-footer__brand small {
  margin-top: 5px;
  color: #d1d9d0;
  font-size: 11px;
}

.site-footer__top-link {
  color: #ddc49f;
  font-size: 13px;
  text-decoration: none;
}

.site-footer__bottom {
  align-items: flex-start;
  padding-top: 24px;
}

.site-footer__bottom p {
  margin: 0;
  color: #d1d9d0;
  font-size: 12px;
}

.site-footer__bottom nav {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 22px;
  justify-content: flex-end;
}

.site-footer__bottom nav a {
  color: #d1d9d0;
  font-size: 11px;
  text-decoration: none;
}

.site-footer__bottom nav a:hover,
.site-footer__top-link:hover {
  text-decoration: underline;
}

.site-footer__requisites {
  margin: 20px 0 0;
  color: #d9e4dc;
  font-size: 12px;
  line-height: 1.7;
}

.site-footer__disclaimer {
  max-width: 750px;
  margin: 24px 0 0;
  color: #aebfb3;
  font-size: 11px;
  line-height: 1.8;
}

@media (max-width: 680px) {
  .site-footer__top,
  .site-footer__bottom {
    align-items: flex-start;
    flex-direction: column;
  }

  .site-footer__bottom nav {
    flex-direction: column;
    justify-content: flex-start;
  }
}
</style>