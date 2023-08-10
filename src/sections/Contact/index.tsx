import { EnvelopeIcon } from '@heroicons/react/24/solid'
import { FormEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Heading from '../../components/Heading'
import SectionParagraph from '../../components/Paragraph/SectionParagraph'
import SectionHeader from '../../layout/SectionHeader'
import Form from './Form'

const Contact = () => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({
    name: '',
    email: '',
    message: '',
  })
  const { t } = useTranslation('translation', { keyPrefix: 'contact' })

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { name, email, message } = formData

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', name, email, message }),
    })
      .then(() => {
        process.env.NODE_ENV === 'development' &&
          test({
            'form-name': 'contact',
            name,
            email,
            message,
          })
      })
      .then(() => alert('Message sent!'))
      .catch((error) => alert(error))
  }

  return (
    <section
      id="contact-section"
      className="body-font container px-5 py-10 mx-auto lg:px-40"
    >
      <SectionHeader>
        <EnvelopeIcon className="mx-auto inline-block w-10 mb-4" />
        <Heading text={t('title')} />
        <SectionParagraph text={t('description')} />
      </SectionHeader>
      <Form
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
        netlify="true"
      />
    </section>
  )
}

export default Contact
