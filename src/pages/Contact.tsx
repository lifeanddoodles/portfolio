import { useState } from 'react'
import { useTranslation } from 'react-i18next'
// import { ContactBody, Map } from '../types/Model'
import { EnvelopeIcon } from '@heroicons/react/24/solid'

interface FormProps {
  name: string
  setName: React.Dispatch<React.SetStateAction<string>>
  email: string
  setEmail: React.Dispatch<React.SetStateAction<string>>
  message: string
  setMessage: React.Dispatch<React.SetStateAction<string>>
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  netlify: string
}

const Form = ({
  name,
  setName,
  email,
  setEmail,
  message,
  setMessage,
  onSubmit,
  ...rest
}: FormProps) => {
  const { t } = useTranslation()

  return (
    <form
      {...rest}
      name="contact"
      onSubmit={onSubmit}
      className="xl:w-2/4 lg:w-3/4 mx-auto"
    >
      <h2 className="text-white sm:text-4xl text-3xl mb-4 font-medium title-font">
        {t('contact.title')}
      </h2>
      <p className="leading-relaxed mb-5">{t('contact.description')}</p>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-400">
          {t('contact.form.name')}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-400">
          {t('contact.form.email')}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-400">
          {t('contact.form.message')}
        </label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
        />
      </div>
      <button
        type="submit"
        className="text-white bg-green-700 border-0 py-2 px-6 hover:bg-green-600 rounded text-lg"
      >
        {t('contact.form.submit')}
      </button>
    </form>
  )
}

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  interface dataProps {
    [key: string]: string
  }
  const encode = (data: dataProps): string => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&')
  }
  const test = (data: {
    'form-name': string
    name: string
    email: string
    message: string
  }): void => {
    return console.log(data)
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', name, email, message }),
    })
      .then(() => alert('Message sent!'))
      .then(() => {
        process.env.NODE_ENV === 'development' &&
          test({
            'form-name': 'contact',
            name: name,
            email: email,
            message: message,
          })
      })
      .catch((error) => alert(error))
  }

  return (
    <section
      id="contact"
      className="text-gray-400 bg-gray-900 body-font container px-5 py-10 mx-auto text-center lg:px-40"
    >
      <EnvelopeIcon className="mx-auto inline-block w-10 mb-4" />
      <Form
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        message={message}
        setMessage={setMessage}
        onSubmit={handleSubmit}
        netlify="true"
      />
    </section>
  )
}

export default Contact
