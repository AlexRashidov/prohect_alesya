// Связь лендинга с сервером бота: создание заказа и проверка статуса оплаты.
// Адрес сервера задаётся в .env: VITE_API_URL=https://bot.example.ru
// Если адрес не задан, форма работает по старинке — открывает статичные ссылки на оплату.

export const API_URL = (import.meta.env.VITE_API_URL ?? '').replace(/\/+$/, '')

export type PaymentMethod = 'ru' | 'foreign'

// Telegram ID покупателя из ссылки «Купить» в боте (?tg=123). По нему бот после оплаты на сайте
// выдаёт материалы и перестаёт присылать продающие сообщения. Храним до конца сессии вкладки,
// чтобы ID не потерялся при перезагрузке страницы.
const TG_KEY = 'tg_id'

function readTelegramId(): string | null {
  const fromUrl = new URLSearchParams(window.location.search).get('tg')
  if (fromUrl && /^\d{1,15}$/.test(fromUrl)) {
    try {
      sessionStorage.setItem(TG_KEY, fromUrl)
    } catch {
      // хранилище недоступно (приватный режим) — ID всё равно есть в адресе
    }
    return fromUrl
  }
  try {
    return sessionStorage.getItem(TG_KEY)
  } catch {
    return null
  }
}

export const telegramId = readTelegramId()

export interface CheckoutRequest {
  method: PaymentMethod
  lastName: string
  firstName: string
  middleName: string
  email: string
  phone: string
  consents: boolean
  telegramId?: string | null
}

export interface CheckoutResponse {
  url: string
  orderId: string | null
  automatic: boolean
}

export interface AccessLinks {
  telegram?: string
  vk?: string
  max?: string
}

export interface OrderStatus {
  status: 'new' | 'paid'
  links?: AccessLinks
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_URL}${path}`, {
    ...init,
    headers: { 'Content-Type': 'application/json', ...init?.headers },
  })
  const body = await response.json().catch(() => ({}))
  if (!response.ok) {
    throw new Error(body.error ?? 'Не удалось связаться с сервером. Попробуйте ещё раз.')
  }
  return body as T
}

export function createCheckout(data: CheckoutRequest): Promise<CheckoutResponse> {
  return request<CheckoutResponse>('/api/checkout', { method: 'POST', body: JSON.stringify(data) })
}

export function getOrderStatus(orderId: string): Promise<OrderStatus> {
  return request<OrderStatus>(`/api/orders/${encodeURIComponent(orderId)}`)
}
