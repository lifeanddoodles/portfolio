import { defaultNS } from '../i18n'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS
  }
}

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false
  }
}
