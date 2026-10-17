<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { getOrderStatus, type AccessLinks } from '../../api'

const props = defineProps<{ orderId: string }>()

type State = 'checking' | 'paid' | 'pending' | 'error'

// Уведомление от платёжной системы может прийти с задержкой — проверяем несколько минут.
const POLL_INTERVAL_MS = 3000
const POLL_ATTEMPTS = 60

const state = ref<State>('checking')
const links = ref<AccessLinks>({})
const errorMessage = ref('')
let attempts = 0
let timer: ReturnType<typeof setTimeout> | undefined

const groups = computed(() =>
    [
      { key: 'telegram', title: 'Telegram', url: links.value.telegram },
      { key: 'vk', title: 'ВКонтакте', url: links.value.vk },
      { key: 'max', title: 'Max', url: links.value.max },
    ].filter((group) => Boolean(group.url)),
)

const check = async () => {
  attempts += 1
  try {
    const order = await getOrderStatus(props.orderId)
    if (order.status === 'paid') {
      links.value = order.links ?? {}
      state.value = 'paid'
      return
    }
  } catch (error) {
    if (attempts >= 3) {
      errorMessage.value = error instanceof Error ? error.message : ''
      state.value = 'error'
      return
    }
  }

  if (attempts >= POLL_ATTEMPTS) {
    state.value = 'pending'
    return
  }
  timer = setTimeout(check, POLL_INTERVAL_MS)
}

const retry = () => {
  attempts = 0
  state.value = 'checking'
  check()
}

onMounted(check)
onBeforeUnmount(() => clearTimeout(timer))
</script>

<template>
  <section class="payment-result section">
    <div class="payment-result__card">
      <template v-if="state === 'checking'">
        <div class="payment-result__spinner" aria-hidden="true"></div>
        <p class="eyebrow">Проверяем оплату</p>
        <h1>Ещё несколько секунд…</h1>
        <p>Ждём подтверждения от платёжной системы. Не закрывай эту страницу.</p>
      </template>

      <template v-else-if="state === 'paid'">
        <p class="eyebrow">Оплата прошла</p>
        <h1>Спасибо за покупку <em>«Таблетки от прокрастинации»</em>!</h1>
        <p>
          Чек придёт на электронную почту. Уроки, рабочая тетрадь и методичка —
          в закрытой группе. Выбери удобную площадку:
        </p>

        <div v-if="groups.length" class="payment-result__links">
          <a
              v-for="group in groups"
              :key="group.key"
              class="payment-result__button"
              :href="group.url"
              target="_blank"
              rel="noopener noreferrer"
          >
            Перейти в {{ group.title }} <span aria-hidden="true">↗</span>
          </a>
        </div>
        <p v-else>Ссылку на группу автор пришлёт на почту в ближайшее время.</p>

        <p class="payment-result__hint">Сохрани эту страницу — по ней можно вернуться к ссылкам.</p>
      </template>

      <template v-else-if="state === 'pending'">
        <p class="eyebrow">Оплата ещё обрабатывается</p>
        <h1>Подтверждение пока не пришло</h1>
        <p>
          Если деньги уже списались, не переживай: заказ сохранён, и автор пришлёт доступ
          на почту. Можно также проверить ещё раз.
        </p>
        <button class="payment-result__button" type="button" @click="retry">Проверить ещё раз</button>
      </template>

      <template v-else>
        <p class="eyebrow">Не удалось проверить заказ</p>
        <h1>Что-то пошло не так</h1>
        <p>{{ errorMessage || 'Попробуй обновить страницу чуть позже.' }}</p>
        <button class="payment-result__button" type="button" @click="retry">Попробовать снова</button>
      </template>

      <a class="payment-result__home" href="/">← На главную</a>
    </div>
  </section>
</template>

<style scoped>
.payment-result {
  display: grid;
  min-height: 70vh;
  place-items: center;
  background: var(--color-cream);
}

.payment-result__card {
  width: 100%;
  max-width: 620px;
  padding: clamp(28px, 5vw, 48px);
  border: 1px solid var(--color-border);
  border-radius: 26px;
  background: var(--color-paper);
  text-align: center;
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.08);
}

.payment-result .eyebrow {
  margin: 0;
  color: var(--color-green-light);
}

.payment-result h1 {
  margin: 14px 0 0;
  font-family: var(--font-display);
  font-size: clamp(30px, 5vw, 44px);
  font-weight: 400;
  line-height: 1.12;
  letter-spacing: -0.04em;
}

.payment-result h1 em {
  color: var(--color-green-light);
}

.payment-result p {
  margin: 18px auto 0;
  max-width: 480px;
  color: var(--color-muted);
  font-size: 15px;
  line-height: 1.8;
}

.payment-result__links {
  display: grid;
  gap: 12px;
  margin-top: 26px;
}

.payment-result__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-top: 22px;
  padding: 16px 26px;
  border: 0;
  border-radius: var(--radius-button);
  background: var(--color-green);
  color: white;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  transition: background 160ms ease;
}

.payment-result__links .payment-result__button {
  margin-top: 0;
}

.payment-result__button:hover {
  background: #17644e;
}

.payment-result .payment-result__hint {
  font-size: 12px;
}

.payment-result__home {
  display: inline-block;
  margin-top: 28px;
  color: var(--color-muted);
  font-size: 13px;
}

.payment-result__spinner {
  width: 36px;
  height: 36px;
  margin: 0 auto 18px;
  border: 3px solid var(--color-border);
  border-top-color: var(--color-green);
  border-radius: 50%;
  animation: spin 900ms linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
