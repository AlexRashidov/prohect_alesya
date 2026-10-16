
<script setup lang="ts">
const scrollToPricing = () => {
  document.querySelector('#pricing')?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}
</script>

<template>
  <header class="site-header">
    <a class="brand" href="#top" aria-label="На главную">
      <span class="brand__mark">АБ</span>

      <span class="brand__text">
        <strong class="brand__author">Алисия Боске</strong>
        <span class="brand__product">
          Таблетка от прокрастинации
        </span>
      </span>
    </a>

    <button
        class="header-button"
        type="button"
        @click="scrollToPricing"
    >
      Купить за 2 500 ₽
      <span aria-hidden="true">↗</span>
    </button>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 8px;
  z-index: 20;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  max-width: 1424px;
  margin: 8px auto 0;
  padding: 10px 12px 10px 16px;

  border: 1px solid #e7ddce;
  border-radius: 40px;
  background: rgba(255, 253, 248, 0.96);
  box-shadow: 0 4px 20px rgba(41, 43, 36, 0.035);

  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;

  color: #292b24;
  text-decoration: none;
}

.brand__mark {
  display: grid;
  flex: 0 0 40px;
  width: 40px;
  height: 40px;
  place-items: center;

  border: 1px solid #c9ad8a;
  border-radius: 50%;
  color: #0b4939;

  font-family: var(--font-display, Georgia, serif);
  font-size: 15px;
}

.brand__text {
  display: grid;
  gap: 4px;
  min-width: 0;
}

.brand__author {
  font-family: var(--font-display, Georgia, serif);
  font-size: 15px;
  font-weight: 500;
}

.brand__product {
  color: #777367;
  font-size: 10px;
  line-height: 1.4;
}

.header-button {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  gap: 14px;

  min-height: 42px;
  padding: 12px 20px;

  border: 1px solid #0b4939;
  border-radius: 30px;
  background: #0b4939;
  color: #fffdf8;

  font-size: 12px;
  font-weight: 700;
  cursor: pointer;

  transition:
      background 180ms ease,
      transform 180ms ease;
}

.header-button:hover {
  background: #17644e;
  transform: translateY(-1px);
}

.header-button:focus-visible {
  outline: 2px solid #477b61;
  outline-offset: 4px;
}

@media (max-width: 480px) {
  .site-header {
    top: 6px;
    gap: 10px;
    margin: 6px 8px 0;
    padding: 8px;
  }

  .brand {
    gap: 8px;
  }

  .brand__mark {
    flex-basis: 34px;
    width: 34px;
    height: 34px;
    font-size: 12px;
  }

  .brand__author {
    font-size: 12px;
  }

  .brand__product {
    max-width: 145px;
    font-size: 9px;
  }

  .header-button {
    gap: 6px;
    min-height: 38px;
    padding: 10px 12px;
    font-size: 10px;
  }
}

@media (max-width: 360px) {
  .brand__product {
    max-width: 112px;
  }

  .header-button {
    padding-inline: 9px;
    font-size: 9px;
  }
}
</style>