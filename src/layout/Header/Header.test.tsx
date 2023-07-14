import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import i18n from 'i18next'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import { BrowserRouter as Router } from 'react-router-dom'
import { Header } from './index'

describe('Header', () => {
  beforeAll(() => {
    i18n.use(initReactI18next).init({
      resources: {
        en: {
          translation: {
            // Define your translations here
          },
        },
        es: {
          translation: {
            // Define your translations here
          },
        },
      },
      lng: 'en',
      fallbackLng: 'en',
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
    const headerElement = screen.getByTestId('site-header')
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
    await userEvent.selectOptions(selectLanguage, 'es')
    expect(selectLanguage).toHaveValue('es')
  })
})
