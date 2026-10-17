// Данные продавца и ссылки на документы — в одном месте.
// Реквизиты обязательны для подключения эквайринга (Т-Банк, Prodamus):
// пока поле пустое, строка на сайте не показывается.

export const seller = {
  /** Например: «ИП Боске Алисия …» или «Самозанятая Боске Алисия …» */
  name: '',
  /** ИНН продавца */
  inn: '',
  /** ОГРНИП (для ИП) */
  ogrn: '',
  /** Почта для связи с покупателями */
  email: '',
  /** Телефон для связи (необязательно) */
  phone: '',
}

export const documents = {
  offer: 'https://disk.yandex.ru/i/jop5s3l2ET0fZA',
  privacy: 'https://disk.yandex.ru/i/Uh9dE3r1kTEW_w',
  consent: 'https://disk.yandex.ru/i/Nix9lBfg9JXptQ',
}
