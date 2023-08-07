import { render, screen } from '@testing-library/react'
import i18n from 'i18next'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import About from './index'

describe('About', () => {
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

  test('About renders correctly', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <About />
      </I18nextProvider>
    )

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toBeInTheDocument()

    const skillLists = screen.getAllByRole('list')
    expect(skillLists.length).toBeGreaterThan(0)
  })
})
