import i18next from 'i18next'
import ChainedBackend from 'i18next-chained-backend'
import HttpBackend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

const NAMESPACE = 'translation'

export const resources = {
  en: `/assets/locales/en/${NAMESPACE}.json`,
  es: `/assets/locales/es/${NAMESPACE}.json`,
}

export const defaultNS = `/assets/locales/en/${NAMESPACE}.json`

i18next.on('languageChanged', function (lng) {
  localStorage.setItem('lng', lng)
})

i18next
  .use(ChainedBackend)
  .use(initReactI18next)
  .init({
    debug: process.env.NODE_ENV === 'production' ? false : true,
    fallbackLng: 'en',
    // whitelist: ['en', 'es'],
    interpolation: {
      escapeValue: false,
    },
    ns: [NAMESPACE],
    backend: {
      backends: [HttpBackend],
      backendOptions: [
        {
          loadPath: '/assets/locales/{{lng}}/{{ns}}.json',
          addPath: '/assets/locales/add/{{lng}}/{{ns}}',
        },
      ],
    },
    detection: {
      order: ['localStorage'],
      lookupLocalStorage: 'lng',
      checkWhitelist: true,
    },
  })

export default i18next
