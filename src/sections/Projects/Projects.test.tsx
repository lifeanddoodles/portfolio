import { render, screen } from '@testing-library/react'
import i18n from 'i18next'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import Projects from './index'

describe('Projects', () => {
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

  test('Projects renders correctly', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Projects />
      </I18nextProvider>
    )

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toBeInTheDocument()
  })
})
