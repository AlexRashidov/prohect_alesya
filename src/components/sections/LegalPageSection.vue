<script setup lang="ts">
import type { LegalDocument } from '../../legal/documents'
import { seller } from '../../siteConfig'

defineProps<{ document: LegalDocument }>()
</script>

<template>
  <section class="legal section" :aria-labelledby="`legal-${document.slug}`">
    <article class="legal__card">
      <a class="legal__back" href="/">← На главную</a>

      <p class="eyebrow">Документы</p>
      <h1 :id="`legal-${document.slug}`">{{ document.title }}</h1>

      <template v-if="document.blocks.length">
        <template v-for="(block, index) in document.blocks" :key="index">
          <h2 v-if="block.kind === 'h'">{{ block.text }}</h2>
          <ul v-else-if="block.kind === 'list'">
            <li v-for="(item, i) in block.items" :key="i">{{ item }}</li>
          </ul>
          <p v-else>{{ block.text }}</p>
        </template>
      </template>

      <p v-else class="legal__fallback">
        Текст документа скоро появится на этой странице. Пока его можно открыть
        <a :href="document.sourceUrl" target="_blank" rel="noopener noreferrer">на Яндекс Диске</a>.
      </p>

      <p v-if="seller.name" class="legal__seller">
        {{ seller.name }}<template v-if="seller.inn">, ИНН {{ seller.inn }}</template><template
          v-if="seller.ogrn">, ОГРНИП {{ seller.ogrn }}</template><template
          v-if="seller.email"> · {{ seller.email }}</template>
      </p>
    </article>
  </section>
</template>

<style scoped>
.legal {
  background: var(--color-cream);
}

.legal__card {
  max-width: 780px;
  margin: 0 auto;
  padding: clamp(24px, 5vw, 56px);
  border: 1px solid var(--color-border);
  border-radius: 22px;
  background: var(--color-paper);
  color: var(--color-text);
}

.legal__back {
  display: inline-block;
  margin-bottom: 22px;
  color: var(--color-muted);
  font-size: 13px;
}

.legal .eyebrow {
  margin: 0;
  color: var(--color-green-light);
}

.legal h1 {
  margin: 12px 0 28px;
  font-family: var(--font-display);
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 400;
  line-height: 1.15;
  letter-spacing: -0.03em;
}

.legal h2 {
  margin: 32px 0 12px;
  font-size: 18px;
  line-height: 1.4;
}

.legal p,
.legal li {
  color: #45473e;
  font-size: 15px;
  line-height: 1.8;
}

.legal p {
  margin: 0 0 14px;
}

.legal ul {
  margin: 0 0 14px;
  padding-left: 22px;
}

.legal a {
  color: var(--color-green);
}

.legal__fallback {
  padding: 16px 18px;
  border-radius: 14px;
  background: #f1ebe0;
}

.legal .legal__seller {
  margin-top: 32px;
  padding-top: 18px;
  border-top: 1px solid var(--color-border);
  color: var(--color-muted);
  font-size: 13px;
}
</style>
