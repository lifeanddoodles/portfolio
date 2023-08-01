import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import i18n from 'i18next'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import { BrowserRouter as Router } from 'react-router-dom'
import { Header } from './index'

describe('Header', () => {
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
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    })
  })

  test('Header renders correctly', () => {
    render(
      <Router>
        <I18nextProvider i18n={i18n}>
          <Header />
        </I18nextProvider>
      </Router>
    )
    const headerElement = screen.getByRole('banner')
    expect(headerElement).toBeInTheDocument()
  })

  test('Value changes when user chooses a new language', async () => {
    render(
      <Router>
        <I18nextProvider i18n={i18n}>
          <Header />
        </I18nextProvider>
      </Router>
    )
    const selectLanguage: HTMLSelectElement = screen.getByRole('combobox')
    expect(selectLanguage).toHaveValue('en')
    await user.selectOptions(selectLanguage, 'es')
    expect(selectLanguage).toHaveValue('es')
  })
})
