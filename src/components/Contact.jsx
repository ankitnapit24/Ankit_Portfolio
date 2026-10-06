import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi'
import { SiCodechef } from 'react-icons/si'
import FadeIn from './FadeIn'
import './Contact.css'

const contactInfo = [
  { icon: FiMail, label: 'Email', value: 'ankitnapit8@gmail.com', href: 'mailto:ankitnapit8@gmail.com' },
  { icon: FiPhone, label: 'Phone', value: '+91 8643016686', href: 'tel:+918643016686' },
]

const contactSocials = [
  { icon: FiGithub, label: 'GitHub', href: 'https://github.com/ankitnapit24' },
  { icon: FiLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/ankit-napit/' },
  { icon: SiCodechef, label: 'CodeChef', href: 'https://www.codechef.com/users/ankitnapit24' },
]

const Contact = () => {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  const handleChange = (e) => {
    if (status === 'error') setStatus('idle')
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Fallback: If in error state and user clicks "Failed — Try Email Directly", open email client
    if (status === 'error') {
      const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name || 'Visitor'}`)
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
      )
      window.location.href = `mailto:ankitnapit8@gmail.com?subject=${subject}&body=${body}`
      return
    }

    if (!form.name || !form.email || !form.message) return
    if (status === 'sending') return

    setStatus('sending')

    if (!serviceId || !templateId || !publicKey) {
      console.warn(
        'EmailJS credentials missing. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your .env or Vercel environment variables.'
      )
      setStatus('error')
      setTimeout(() => setStatus('idle'), 6000)
      return
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: form.name.trim(),
          from_name: form.name.trim(),
          email: form.email.trim(),
          from_email: form.email.trim(),
          reply_to: form.email.trim(),
          message: form.message.trim(),
          to_name: 'Ankit Napit',
        },
        publicKey
      )
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error('EmailJS sending error:', err?.text || err?.message || err)
      setStatus('error')
    }

    setTimeout(() => setStatus('idle'), 6000)
  }

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <FadeIn>
          <div className="section-header">
            <span className="section-label">06 / Contact</span>
            <h2 className="section-title">Let's Build <span>Together</span></h2>
            <p className="section-subtitle">
              Have a project in mind or just want to connect? I'm always open to interesting
              conversations and opportunities.
            </p>
          </div>
        </FadeIn>

        <div className="contact-grid">
          {/* Left info */}
          <FadeIn delay={0.1}>
            <div className="contact-info">
              <div className="contact-info-items">
                {contactInfo.map(item => (
                  <a key={item.label} href={item.href} className="contact-info-item glass-card">
                    <div className="ci-icon"><item.icon /></div>
                    <div className="ci-body">
                      <span className="ci-label">{item.label}</span>
                      <span className="ci-value">{item.value}</span>
                    </div>
                  </a>
                ))}
              </div>

              <div className="contact-socials">
                {contactSocials.map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social glass-card"
                    aria-label={s.label}
                  >
                    <s.icon />
                    <span>{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right — form */}
          <FadeIn delay={0.15}>
            <form
              ref={formRef}
              className="contact-form glass-card"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  className="form-input"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  autoComplete="name"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  className="form-input"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  autoComplete="email"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  className="form-input form-textarea"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or idea..."
                  required
                  rows={5}
                />
              </div>

              <motion.button
                type="submit"
                className={`form-submit ${status}`}
                disabled={status === 'sending' || status === 'success'}
                whileHover={status === 'idle' ? { scale: 1.02 } : {}}
                whileTap={status === 'idle' ? { scale: 0.98 } : {}}
              >
                {status === 'idle' && <><FiSend /> Send Message</>}
                {status === 'sending' && <><span className="spin-icon" aria-hidden="true">⏳</span> Sending...</>}
                {status === 'success' && <><FiCheck /> Message Sent!</>}
                {status === 'error' && <><FiAlertCircle /> Failed — Try Email Directly</>}
              </motion.button>

              {(!serviceId || !templateId || !publicKey) && (
                <p className="form-note">
                  * Configure EmailJS credentials in <code>.env</code> to enable form sending.
                </p>
              )}
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

export default Contact
