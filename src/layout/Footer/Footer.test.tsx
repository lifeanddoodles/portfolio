import { render, screen } from '@testing-library/react'
import i18n from 'i18next'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import { Footer } from './index'

describe('Footer', () => {
  beforeAll(() => {
    i18n.use(initReactI18next).init({
      resources: {
        en: {
          translation: {},
        },
        es: {
          translation: {},
        },
      },
      lng: 'en',
      fallbackLng: 'en',
    })
  })

  test('Footer renders correctly', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Footer />
      </I18nextProvider>
    )
    const componentElement = screen.getByTestId('site-footer')
    expect(componentElement).toBeInTheDocument()
  })
})
