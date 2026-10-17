// Связь лендинга с сервером бота: создание заказа и проверка статуса оплаты.
// Адрес сервера задаётся в .env: VITE_API_URL=https://bot.example.ru
// Если адрес не задан, форма работает по старинке — открывает статичные ссылки на оплату.

export const API_URL = (import.meta.env.VITE_API_URL ?? '').replace(/\/+$/, '')

export type PaymentMethod = 'ru' | 'foreign'

export interface CheckoutRequest {
  method: PaymentMethod
  lastName: string
  firstName: string
  middleName: string
  email: string
  phone: string
  consents: boolean
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
