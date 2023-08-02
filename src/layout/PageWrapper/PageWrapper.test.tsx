import { render, screen } from '@testing-library/react'
import i18n from 'i18next'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import { BrowserRouter as Router } from 'react-router-dom'
import PageWrapper from '.'

describe('PageWrapper', () => {
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

  test('PageWrapper renders correctly', () => {
    render(
      <Router>
        <I18nextProvider i18n={i18n}>
          <PageWrapper />
        </I18nextProvider>
      </Router>
    )
    const componentElement = screen.getByTestId('page-wrapper')
    expect(componentElement).toBeInTheDocument()
  })
})
