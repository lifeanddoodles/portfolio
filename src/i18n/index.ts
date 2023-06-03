import i18next from 'i18next'
import Backend from 'i18next-xhr-backend'
import { initReactI18next } from 'react-i18next'

console.log(process.env)

const NAMESPACE = 'translation'
export const resources = {
  en: `${process.env.PUBLIC_URL || ''}/locales/en/${NAMESPACE}.json`,
  es: `${process.env.PUBLIC_URL || ''}/locales/es/${NAMESPACE}.json`,
}

i18next.on('languageChanged', function (lng) {
  localStorage.setItem('lng', lng)
})

i18next
  .use(Backend)
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
      loadPath: `${process.env.PUBLIC_URL || ''}/locales/{{lng}}/{{ns}}.json`, //Path to the translation files
      addPath: `${process.env.PUBLIC_URL || ''}/locales/add/{{lng}}/{{ns}}`,
    },
    detection: {
      order: ['localStorage'],
      lookupLocalStorage: 'lng',
      checkWhitelist: true,
    },
  })

export default i18next
