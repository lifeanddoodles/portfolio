import { Dispatch } from 'react'
import { useTranslation } from 'react-i18next'
import Input from '../../../components/Input'

interface FormProps {
  formData: { [key: string]: string }
  setFormData: Dispatch<React.SetStateAction<{ [key: string]: string }>>
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  netlify: string
}

const Form = ({ formData, setFormData, onSubmit, ...rest }: FormProps) => {
  const { t } = useTranslation('translation', { keyPrefix: 'contact.form' })
  const { name, email, message } = formData

  /*
   * TODO: Add validation to fields onChange and onSubmit
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(e)
  }

  return (
    <form
      {...rest}
      name="contact"
      onSubmit={handleSubmit}
      className="xl:w-2/4 lg:w-3/4 mx-auto"
    >
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm">
          {t('name')}
        </label>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm">
          {t('email')}
        </label>
        <Input
          type="email"
          name="email"
          value={email}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm">
          {t('message')}
        </label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => handleChange(e)}
          className="text-neutral-800 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700 w-full rounded border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
        />
      </div>
      <button
        type="submit"
        className="text-neutral-100 hover:text-white bg-primary hover:bg-primary-dark py-2 px-6 rounded text-lg"
      >
        {t('submit')}
      </button>
    </form>
  )
}

export default Form
