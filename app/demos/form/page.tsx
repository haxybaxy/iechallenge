'use client'
import { useState } from 'react'

export default function FormDemo() {
  const [submitted, setSubmitted] = useState(false)
  const [feedback, setFeedback] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalFeedback, setModalFeedback] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen p-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Thank You!
          </h1>
          <p className="text-2xl text-gray-700 mb-8 text-center">
            We appreciate you taking the time to try our demo.
          </p>
          <div className="space-y-6">
            <label className="block text-xl font-medium text-gray-900">
              How was your experience? We'd love your feedback:
              <textarea
                className="mt-4 w-full p-4 text-xl border-2 border-gray-300 rounded-xl
                          focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                          shadow-sm text-gray-900"
                rows={4}
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
            </label>
            <button
              className="w-full py-4 px-6 text-xl bg-gradient-to-r from-blue-600 to-blue-700
                       text-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5
                       transition-all focus:ring-4 focus:ring-blue-300"
              onClick={() => alert('Thank you for your feedback!')}
            >
              Submit Feedback
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Personal Information Form
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900 border-b-2 pb-2">
              Personal Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-xl font-medium text-gray-900 mb-3">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  required
                  className="w-full p-4 text-xl border-2 border-gray-300 rounded-xl
                            focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                            shadow-sm text-gray-900"
                  placeholder="Enter first name"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-xl font-medium text-gray-900 mb-3">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  required
                  className="w-full p-4 text-xl border-2 border-gray-300 rounded-xl
                            focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                            shadow-sm text-gray-900"
                  placeholder="Enter last name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="birthdate" className="block text-xl font-medium text-gray-900 mb-3">
                Date of Birth
              </label>
              <input
                id="birthdate"
                type="date"
                required
                className="w-full p-4 text-xl border-2 border-gray-300 rounded-xl
                          focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                          shadow-sm text-gray-900"
              />
            </div>
          </section>

          {/* Contact Information Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900 border-b-2 pb-2">
              Contact Information
            </h2>

            <div>
              <label htmlFor="email" className="block text-xl font-medium text-gray-900 mb-3">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full p-4 text-xl border-2 border-gray-300 rounded-xl
                          focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                          shadow-sm text-gray-900"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-xl font-medium text-gray-900 mb-3">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                required
                className="w-full p-4 text-xl border-2 border-gray-300 rounded-xl
                          focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                          shadow-sm text-gray-900"
                placeholder="Enter phone number"
              />
            </div>
          </section>

          {/* Preferences Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900 border-b-2 pb-2">
              Preferences
            </h2>

            <div>
              <label htmlFor="contactMethod" className="block text-xl font-medium text-gray-900 mb-3">
                Preferred Contact Method
              </label>
              <select
                id="contactMethod"
                required
                className="w-full p-4 text-xl border-2 border-gray-300 rounded-xl
                          focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                          shadow-sm text-gray-900"
              >
                <option value="">Select an option</option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="text">Text Message</option>
              </select>
            </div>

            <div className="space-y-4">
              <p className="text-xl font-medium text-gray-900">
                Interests (Select all that apply)
              </p>
              <div className="space-y-4">
                {['Reading', 'Gardening', 'Cooking', 'Travel'].map((interest) => (
                  <label key={interest} className="flex items-center space-x-4 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-6 h-6 text-blue-600 rounded-lg shadow-sm
                               focus:ring-blue-500 focus:ring-2"
                    />
                    <span className="text-xl text-gray-900">{interest}</span>
                  </label>
                ))}
              </div>
            </div>
          </section>

          {/* Additional Information */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900 border-b-2 pb-2">
              Additional Information
            </h2>

            <div>
              <label htmlFor="comments" className="block text-xl font-medium text-gray-900 mb-3">
                Comments or Special Requirements
              </label>
              <textarea
                id="comments"
                rows={4}
                className="w-full p-4 text-xl border-2 border-gray-300 rounded-xl
                          focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                          shadow-sm text-gray-900"
                placeholder="Enter any additional information..."
              />
            </div>
          </section>

          <button
            type="submit"
            className="w-full py-4 px-6 text-xl bg-gradient-to-r from-blue-600 to-blue-700
                     text-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5
                     transition-all focus:ring-4 focus:ring-blue-300 mt-8"
          >
            Submit Form
          </button>
        </form>
      </div>

      {/* Floating Contact Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-8 left-8 bg-blue-600 text-white text-xl px-6 py-4 rounded-xl shadow-lg
                   hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all"
      >
        Contact Us 📧
      </button>

      {/* Feedback Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-2xl text-gray-500 hover:text-gray-700 p-2"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  alert('Thank you for your feedback!')
                  setIsModalOpen(false)
                  setModalFeedback('')
                }}
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-xl font-medium text-gray-900 mb-3">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full p-4 text-xl border-2 border-gray-300 rounded-xl
                              focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                              shadow-sm text-gray-900"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xl font-medium text-gray-900 mb-3">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full p-4 text-xl border-2 border-gray-300 rounded-xl
                              focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                              shadow-sm text-gray-900"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xl font-medium text-gray-900 mb-3">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={modalFeedback}
                    onChange={(e) => setModalFeedback(e.target.value)}
                    className="w-full p-4 text-xl border-2 border-gray-300 rounded-xl
                              focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                              shadow-sm text-gray-900"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 text-xl bg-gradient-to-r from-blue-600 to-blue-700
                           text-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5
                           transition-all focus:ring-4 focus:ring-blue-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
