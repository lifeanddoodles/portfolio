import { render, screen } from '@testing-library/react'
import i18n from 'i18next'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import SoftSkills from './index'

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

    const softSkillLists = screen.getAllByRole('list')
    expect(softSkillLists.length).toBeGreaterThan(0)

    const softSkillListItems = screen.getAllByRole('listitem')
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    softSkillListItems.forEach((softSkillListItem) => {
      // TODO: test that each soft skill is rendered
    })
  })
})
