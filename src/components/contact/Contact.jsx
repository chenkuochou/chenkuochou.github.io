import { useState } from 'react'
import './contact.scss'

export default function Contact() {
  const [message, setMessage] = useState(false)

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   setMessage(true)
  // }

  const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : ''
    if (subject) params += `subject=${encodeURIComponent(subject)}`
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`

    return <a href={`mailto:${email}${params}`}>{children}</a>
  }

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        {/* <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form> */}
        <Mailto
          email="contact@chenkuochou.com"
          subject="Hello from chenkuochou.github.io"
          body=""
        >
          contact@chenkuochou.com
        </Mailto>{' '}
        <a href="https://medium.com/@chenkuochou/chen-chou-project-details-4accf92803fc" target="_blank">Project details</a>
      </div>
    </div>
  )
}
