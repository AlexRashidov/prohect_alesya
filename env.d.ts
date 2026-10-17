/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Адрес сервера бота для оплаты, например https://bot.example.ru */
  readonly VITE_API_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
