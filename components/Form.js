import Button from './Button'
import { useState } from 'react'

/**
 * Form page.
 *
 * @returns {HTMLElement} - Form page.
 */
const Form = () => {
  const [sucessMessage, setSucessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const form = e.target

    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value
    }

    // use the fetch API from "pages/api/contact.js" to send the data to the API route.
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    if (res.ok) {
      form.reset()
      // hide the error message
      setErrorMessage('')
      // show the success message
      setSucessMessage('Tack för ditt meddelande!')
    }
    if (!res.ok) {
      form.reset()
      // hide the success message
      setSucessMessage('')
      // show the error message
      setErrorMessage('Något gick fel, försök igen!')
    }
  }
  return (
    <div className="flex mb-14 mt-20">
      <div className=" md:w-4/5 flex flex-col justify-center">
        <h1 className="text-mediumH">Kontaktformulär</h1>
        <form
          onSubmit={handleSubmit}>
          {/* Name */}
          <div className="w-full flex flex-col my-4">
            <label htmlFor="name" className="font-bold">Namn</label>
            <input
              type="text"
              id="name"
              name="name"
              minLength={2}
              maxLength={50}
              autoComplete="off"
              required
              className="input" />
          </div>
          {/* Email */}
          <div className="w-full flex flex-col my-4">
            <label htmlFor="email" className="font-bold">E-post</label>
            <input
              type="email"
              id="email"
              minLength={5}
              maxLength={50}
              name="email"
              required
              autoComplete="off" className="input" />
          </div>
          {/* Message */}
          <label htmlFor="message" className="font-bold">Meddelande</label>
          <textarea
            rows={4}
            id="message"
            required
            minLength={10}
            maxLength={500}
            className="w-full input" />
          <Button buttonText={'skicka'} />
        </form>
      {errorMessage && <p className="text-accent">{errorMessage}</p>}
      {sucessMessage && <p className="font-bold">{sucessMessage}</p>}
      </div>
    </div>
  )
}

export default Form
