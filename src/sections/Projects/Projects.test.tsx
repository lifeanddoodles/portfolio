import { render, screen } from '@testing-library/react'
import i18n from 'i18next'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import Projects, { ProjectItem } from './index'
import { projects } from '../../data'

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

  test('List of projects renders correctly', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Projects />
      </I18nextProvider>
    )

    const projectListItems = screen.getAllByRole('article')
    expect(projectListItems).toHaveLength(projects.length)
  })

  test('Project item renders correctly', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <ProjectItem project={projects[0]} />
      </I18nextProvider>
    )

    const projectTitle = screen.getByRole('heading', { level: 3 })
    expect(projectTitle).toBeInTheDocument()
  })
})
