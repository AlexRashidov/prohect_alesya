<script setup lang="ts">
import SiteHeader from './components/layout/SiteHeader.vue'
import SiteFooter from './components/layout/SiteFooter.vue'

import HeroSection from './components/sections/HeroSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import MethodSection from './components/sections/MethodSection.vue'
import AuthorSection from './components/sections/AuthorSection.vue'
import ProgramSection from './components/sections/ProgramSection.vue'
import QuizSection from './components/sections/QuizSection.vue'
import PricingSection from './components/sections/PricingSection.vue'
import FAQSection from './components/sections/FAQSection.vue'
import FinalCTASection from './components/sections/FinalCTASection.vue'
import PaymentResultSection from './components/sections/PaymentResultSection.vue'

// После оплаты платёжная система возвращает покупателя на сайт с параметром ?order=<номер заказа>.
const orderId = new URLSearchParams(window.location.search).get('order')
</script>

<template>
  <div id="top" class="site">
    <SiteHeader />

    <main v-if="orderId">
      <!-- Страница после оплаты: статус и ссылки на закрытые группы -->
      <PaymentResultSection :order-id="orderId" />
    </main>

    <main v-else>
      <!-- Первый экран -->
      <HeroSection />

      <!-- Почему трудно действовать -->
      <AboutSection />

      <!-- Метод работы -->
      <MethodSection />

      <!-- Об авторе -->
      <AuthorSection />

      <!-- Состав продукта -->
      <ProgramSection />

      <!-- Квиз и переход в Telegram-бот -->
      <QuizSection />

      <!-- Стоимость и оплата -->
      <PricingSection />

      <!-- Ответы на вопросы -->
      <FAQSection />

      <!-- Финальный призыв к действию -->
      <FinalCTASection />
    </main>

    <SiteFooter />
  </div>
</template>

