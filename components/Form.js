import Button from './Button'

/**
 * Handle the submit event.
 *
 * @param {*} e  - The event.
 */
async function handleSubmit (e) {
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
    // TODO: show a success message
    
  }
  if (!res.ok) {
    // TODO: show an error message
  }
}

/**
 * Form page.
 *
 * @returns {HTMLElement} - Form page.
 */
const Form = () => {
  return (
    <div className="flex justify-center mb-20 mt-20">
      <div className="w-5/5 md:w-3/5 flex flex-col justify-center">
        <h1 className="text-mediumH">Kontakta oss genom formulär</h1>
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
              className="border-2 border-dark bg-light font-mono focus:border-accent focus:outline-none px-4 py-2" />
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
              autoComplete="off" className="border-2 border-dark bg-light font-mono focus:border-accent focus:outline-none px-4 py-2" />
          </div>
          {/* Message */}
          <label htmlFor="message" className="font-bold">Meddelande</label>
          <textarea
            rows={4}
            id="message"
            required
            minLength={10}
            maxLength={500}
            className="w-full border-2 border-dark bg-light font-mono focus:border-accent focus:outline-none px-4 py-2" />
          <Button buttonText={'skicka'} />
        </form>
      </div>
    </div>
  )
}

export default Form
