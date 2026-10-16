<script setup lang="ts">
import SiteHeader from './components/layout/SiteHeader.vue'
import SiteFooter from './components/layout/SiteFooter.vue'

import HeroSection from './components/sections/HeroSection.vue'
import RecognitionSection from './components/sections/RecognitionSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import MethodSection from './components/sections/MethodSection.vue'
import ProgramSection from './components/sections/ProgramSection.vue'
import QuizSection from './components/sections/QuizSection.vue'
import PricingSection from './components/sections/PricingSection.vue'
import FAQSection from './components/sections/FAQSection.vue'
import FinalCTASection from './components/sections/FinalCTASection.vue'
</script>

<template>
  <div id="top" class="site">
    <SiteHeader />

    <main>
      <!-- Первый экран -->
      <HeroSection />

      <!-- Узнавание проблемы -->
      <RecognitionSection />

      <!-- Почему трудно действовать -->
      <AboutSection />

      <!-- Метод работы -->
      <MethodSection />

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

