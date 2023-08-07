import { render, screen } from '@testing-library/react'
import i18n from 'i18next'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import SoftSkills from './index'
import { knownLanguages } from '../../../data'

jest.mock('react-i18next', () => ({
  ...jest.requireActual('react-i18next'),
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}))

describe('SoftSkills', () => {
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

  test('SoftSkills renders correctly', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <SoftSkills />
      </I18nextProvider>
    )
    const heading = screen.getByRole('heading', { level: 4 })
    expect(heading).toBeInTheDocument()

    const softSkillsList = screen.getByRole('list')
    expect(softSkillsList).toBeInTheDocument()

    const softSkillListItems = screen.getAllByRole('listitem')
    expect(softSkillListItems).toHaveLength(knownLanguages.length)
  })
})
