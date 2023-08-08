import { render, screen } from '@testing-library/react'
import i18n from 'i18next'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import Form from './index'
import user from '@testing-library/user-event'

describe('Form', () => {
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

  test('Form submits correctly', async () => {
    user.setup()

    const mockSetFormData = jest.fn()
    const handleSubmit = jest.fn()

    const mockNewFormData = {
      name: 'Mock Name',
      email: 'mockemail@example.com',
      message: 'Mock message',
    }
    const formData = {}

    render(
      <I18nextProvider i18n={i18n}>
        <Form
          formData={formData}
          setFormData={mockSetFormData}
          onSubmit={handleSubmit}
          netlify="true"
        />
      </I18nextProvider>
    )

    const form = screen.getByRole('form')
    const nameInput = screen.getByLabelText(/name/i) as HTMLInputElement
    const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement
    const messageInput = screen.getByLabelText(
      /message/i
    ) as HTMLTextAreaElement
    const submitButton = screen.getByRole('button')

    await user.type(nameInput, mockNewFormData.name)
    await user.type(emailInput, mockNewFormData.email)
    await user.type(messageInput, mockNewFormData.message)
    await user.click(submitButton)

    expect(form).toHaveFormValues({
      name: mockNewFormData.name,
      email: mockNewFormData.email,
      message: mockNewFormData.message,
    })

    expect(handleSubmit).toBeCalled()
  })
})
