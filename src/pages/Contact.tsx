import { useState } from 'react'
// import { ContactBody, Map } from '../types/Model'
import { MailIcon } from '@heroicons/react/solid'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const encode = (data: {
    'form-name': string
    name: string
    email: string
    message: string
  }): string => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&')
  }
  // const test = (data: {
  //   'form-name': string
  //   name: string
  //   email: string
  //   message: string
  // }): string => {
  //   // return Object.keys(data).map((key) => (`${key, data[key]}`))
  //   return JSON.stringify(Object.keys(data))
  // }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', name, email, message }),
    })
      .then(() => alert('Message sent!'))
      // .then(() =>
      //   alert(
      //     test({
      //       'form-name': 'contact',
      //       name: name,
      //       email: email,
      //       message: message,
      //     })
      //   )
      // )
      .catch((error) => alert(error))
  }

  return (
    <section
      id="contact"
      className="text-gray-400 bg-gray-900 body-font container px-5 py-10 mx-auto text-center lg:px-40"
    >
      <MailIcon className="mx-auto inline-block w-10 mb-4" />
      <form
        netlify="true"
        name="contact"
        onSubmit={handleSubmit}
        className="xl:w-2/4 lg:w-3/4 mx-auto"
      >
        <h2 className="text-white sm:text-4xl text-3xl mb-4 font-medium title-font">
          Contact Me
        </h2>
        <p className="leading-relaxed mb-5">
          Want to work together on a project? Have a question about my{' '}
          experience? Fill out the contact form and I’ll get back to you within{' '}
          24 business hours.
        </p>
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-gray-400">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-400">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="message" className="leading-7 text-sm text-gray-400">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-green-500 border-0 py-2 px-6 hover:bg-indigo-600 rounded text-lg"
        >
          Submit
        </button>
      </form>
    </section>
  )
}

export default Contact
