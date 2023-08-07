import { render, screen } from '@testing-library/react'
import i18n from 'i18next'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import Skills, { SkillsList } from './index'
import { skills } from '../../../data'

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
    const filteredSkills = skills.filter(
      (skill) => skill.proficiencyLevel === 'medium'
    )

    render(
      <I18nextProvider i18n={i18n}>
        <SkillsList proficiencyLevel={'medium'} />
      </I18nextProvider>
    )

    const skillsList = screen.getByRole('list')
    expect(skillsList).toBeInTheDocument()

    const skillListItems = screen.getAllByRole('listitem')
    expect(skillListItems).toHaveLength(filteredSkills.length)
  })
})
