// use nodemailer to send email
import nodemailer from 'nodemailer'

/**
 * The API route for the contact form.
 *
 * @param {*} req - The request.
 * @param {*} res - The response.
 */
export default async function ContactAPI (req, res) {
  const { name, email, message } = req.body

  // TO DO: add validation for email

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false, // true for the port chosen, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
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
    console.log(error)
    res.status(500).json({ message: 'Message not sent' })
  }
}
