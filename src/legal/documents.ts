// Юридические документы — отдельные страницы сайта (/offer, /privacy, /consent, /marketing-consent).
// Текст документа — массив блоков: обычный абзац, подзаголовок или список.
// Пока текста нет (blocks пустой), страница показывает ссылку на файл на Яндекс Диске.

export type LegalBlock =
  | { kind: 'p'; text: string }
  | { kind: 'h'; text: string }
  | { kind: 'list'; items: string[] }

export interface LegalDocument {
  slug: string
  title: string
  /** Исходный файл на Яндекс Диске (запасной вариант, пока нет текста на сайте). */
  sourceUrl: string
  blocks: LegalBlock[]
}

export const legalDocuments: LegalDocument[] = [
  {
    slug: 'offer',
    title: 'Договор оферты',
    sourceUrl: 'https://disk.yandex.ru/i/jop5s3l2ET0fZA',
    blocks: [],
  },
  {
    slug: 'privacy',
    title: 'Политика в отношении обработки персональных данных',
    sourceUrl: 'https://disk.yandex.ru/i/Uh9dE3r1kTEW_w',
    blocks: [],
  },
  {
    slug: 'consent',
    title: 'Согласие на обработку персональных данных',
    sourceUrl: 'https://disk.yandex.ru/i/Nix9lBfg9JXptQ',
    blocks: [],
  },
  {
    slug: 'marketing-consent',
    title: 'Согласие на рекламную и информационную рассылку',
    sourceUrl: 'https://disk.yandex.ru/i/Ah007NR6vaxaTg',
    blocks: [
      {
        kind: 'p',
        text:
          'Проставляя «галочку», настоящим даю согласие ИП Боске Алисии Анатольевне ИНН: 220503079573 ' +
          'ОГРН: 326220200052696 на получение различного рода анонсов, информационных сообщений, гайдов, ' +
          'памяток, чек-листов, а также иных материалов информационного и рекламного характера, в том числе ' +
          'содержащих гиперссылки для перехода на сайты для осуществления покупок.',
      },
      {
        kind: 'p',
        text: 'Отправка может осуществляться на электронную почту и/или при помощи sms-сообщений.',
      },
      {
        kind: 'p',
        text:
          'Настоящее согласие может быть отозвано в любой момент в письменной форме путём отправки на адрес ' +
          'Самозанятой Боске Алисии Анатольевне по почте заказным письмом либо по электронной почте ' +
          'alisiabosque@gmail.com.',
      },
      {
        kind: 'p',
        text:
          'В случае получения письменного заявления об отзыве настоящего согласия Самозанятая Боске Алисия ' +
          'Анатольевна обязана прекратить рекламную и информационную рассылку по истечении времени, ' +
          'необходимого для осуществления организационных мер (не более 30 дней).',
      },
    ],
  },
]

export function findLegalDocument(path: string): LegalDocument | undefined {
  const slug = path.replace(/^\/+|\/+$/g, '')
  return legalDocuments.find((doc) => doc.slug === slug)
}
