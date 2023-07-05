import { render, screen } from '@testing-library/react'
import i18n from 'i18next'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import Skills, { SkillsList } from './index'

describe('Skills', () => {
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

  test('Skills renders correctly', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Skills />
      </I18nextProvider>
    )
    const heading = screen.getByRole('heading', { level: 3 })
    expect(heading).toBeInTheDocument()
  })
})

describe('SkillsList', () => {
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

  test('SkillsList renders correctly', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <SkillsList proficiencyLevel={'medium'} />
      </I18nextProvider>
    )

    const skillLists = screen.getAllByRole('list')
    expect(skillLists.length).toBeGreaterThan(0)

    const skillListItems = screen.getAllByRole('listitem')
    skillListItems.forEach((skillListItem) => {
      expect(skillListItem.getAttribute('class')).toBe(
        'p-2 w-full sm:w-1/2 md:w-1/3'
      )

      for (const skillNode of skillListItem.childNodes) {
        expect(skillNode.nodeName).toBe('H4')
      }
    })
  })
})
