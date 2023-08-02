import { render, screen } from '@testing-library/react'
import i18n from 'i18next'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import Navbar from './index'
import { menuItems } from '../../data'

describe('Navbar', () => {
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

  test('Navbar renders correctly', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Navbar />
      </I18nextProvider>
    )
    const componentElement = screen.getByRole('navigation')
    expect(componentElement).toBeInTheDocument()
  })

  test('Navbar has correct amount of menu items', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Navbar />
      </I18nextProvider>
    )
    const navListItems = screen.getAllByRole('listitem')
    expect(navListItems).toHaveLength(menuItems.length)
  })
})
