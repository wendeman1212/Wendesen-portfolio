import { useState } from 'react'

const Contact = ({ showToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwYx44NwEegy5bROlxvjyOp530FnqItTPBVYUKxderPMm-JtRWofVLjDhU5bjG2FX0/exec'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { name, email, message } = formData

    if (!name || !email || !message) {
      showToast('❌ Please fill in your name, email, and message.', true)
      return
    }

    if (!email.includes('@') || !email.includes('.')) {
      showToast('❌ Please enter a valid email address.', true)
      return
    }

    setIsSubmitting(true)

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      })

      showToast("✅ Message sent successfully! I'll reply within 24 hours.")
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      showToast('❌ Failed to send. Please email me directly at wendesenk5@gmail.com', true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-[1280px] mx-auto px-8">
        <h2 className="text-[2.2rem] font-extrabold mb-12 text-center tracking-tight text-white">
          Get In <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Touch</span>
        </h2>
        
        <div className="flex flex-wrap gap-12 bg-gray-800 rounded-[48px] p-12 shadow-[0_12px_30px_rgba(0,0,0,0.3)] border border-gray-700">
          <div className="flex-1 min-w-[300px]">
            <h3 className="font-bold text-xl mb-6 text-white">
              <i className="fas fa-address-card"></i> Contact Directly
            </h3>
            <p className="mb-5 text-[1.05rem]">
              <i className="fas fa-envelope w-8 text-blue-400"></i>{' '}
              <strong>wendesenk5@gmail.com</strong>
              <br />
              <br />
              <i className="fas fa-phone w-8 text-blue-400"></i>{' '}
              <strong>+251 96 6124 489</strong>
              <br />
              <br />
              <i className="fab fa-github w-8 text-blue-400"></i>{' '}
              <strong>GitHub:</strong>{' '}
              <a
                href="https://github.com/wendeman1212/Wendesen-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 no-underline hover:underline"
              >
                View My GitHub Portfolio
              </a>
              <br />
              <br />
              <strong>Telegram:</strong>{' '}
              <a
                href="https://t.me/westand266"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 no-underline hover:underline"
              >
                @westand266
              </a>
            </p>
          </div>

          <div className="flex-1 min-w-[300px]">
            <h3 className="font-bold text-xl mb-2 text-white">Send me a message</h3>
            <p className="text-gray-400 mb-4">
              Fill the form below and it will be sent directly to my email (
              <strong>wendesenk5@gmail.com</strong>)
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  placeholder="Your full name *"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4.5 py-3.5 rounded-[28px] border border-gray-600 bg-gray-700 text-white font-inherit focus:outline-none focus:border-blue-500 placeholder-gray-400"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  placeholder="Your email address *"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4.5 py-3.5 rounded-[28px] border border-gray-600 bg-gray-700 text-white font-inherit focus:outline-none focus:border-blue-500 placeholder-gray-400"
                />
              </div>
              <div className="mb-4">
                <textarea
                  rows="4"
                  id="message"
                  placeholder="Your message * (I'll reply within 24h)"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4.5 py-3.5 rounded-[28px] border border-gray-600 bg-gray-700 text-white font-inherit focus:outline-none focus:border-blue-500 placeholder-gray-400 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-3.5 rounded-full no-underline font-bold transition-all duration-200 inline-flex items-center justify-center gap-2.5 cursor-pointer border-none text-sm bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-[0_6px_14px_rgba(59,130,246,0.5)] hover:shadow-[0_8px_20px_rgba(59,130,246,0.7)] hover:-translate-y-1 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-pulse"></i> Sending to Gmail...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i> Send Message → Gmail
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
