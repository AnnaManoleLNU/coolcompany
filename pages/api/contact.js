// use nodemailer to send email
import nodemailer from 'nodemailer'
import validate from 'deep-email-validator'

/**
 * A function to validate email.
 *
 * @param {string} email - The email to validate.
 * @returns {boolean} - true if email is valid, false if not.
 */
// const validateEmail = async (email) => {
//   const res = await validate({
//     email,
//     validateRegex: true,
//     validateMx: true,
//     validateTypo: true,
//     validateDisposable: true,
//     validateSMTP: true
//   })
//   return res
// }

/**
 * The API route for the contact form.
 *
 * @param {*} req - The request.
 * @param {*} res - The response.
 */
export default async function ContactAPI (req, res) {
  const { name, email, message } = req.body

  // validate email
  // const validEmail = await validateEmail(email)
  // if (!validEmail.valid) {
  //   return res.status(400).json({ message: 'Invalid email' })
  // }

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false, // true for the port chosen, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    tls: {
      rejectUnauthorized: false
    }
  })

  transporter.verify((error, success) => {
    if (error) {
      console.log(error)
    } else {
      console.log('Server is ready to take messages')
    }
  })

  try {
    // send mail with defined transport object
    await transporter.sendMail({
      from: process.env.EMAIL_USER, // sender address
      to: process.env.EMAIL_USER, // WHERE YOU WANT TO RECEIVE THE EMAIL
      replyTo: email,
      subject: `Message from ${name}`,
      html:
        `
        <h1>Message from: ${name}</h1>
        <p>Message: ${message}</p>
        <p>Reply to: ${email}</p>
      `
    })

    return res.status(200).json({ name, email, message })
  } catch (error) {
    res.status(500).json({ message: 'Message not sent' })
  }
}
