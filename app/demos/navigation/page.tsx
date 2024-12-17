'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function NavigationDemo() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('home')
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [feedback, setFeedback] = useState('')

  const menuItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'profile', label: 'My Profile', icon: '👤' },
    { id: 'messages', label: 'Messages', icon: '✉️' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
    { id: 'help', label: 'Help & Support', icon: '❓' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white relative">
      {/* Top Navigation Bar */}
      <nav className="bg-white shadow-lg p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Navigation Demo</h1>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-4 text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                className={`text-xl px-4 py-2 rounded-xl transition-colors
                          ${activeTab === item.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'}`}
                onClick={() => setActiveTab(item.id)}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b shadow-lg">
          <div className="max-w-7xl mx-auto py-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                className={`w-full text-left text-xl px-6 py-4 rounded-xl transition-colors
                          ${activeTab === item.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'}`}
                onClick={() => {
                  setActiveTab(item.id)
                  setIsMobileMenuOpen(false)
                }}
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main Content Area with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 py-8 flex">
        {/* Sidebar Toggle Button */}
        <button
          className="fixed bottom-8 right-8 lg:hidden bg-blue-600 text-white p-4 rounded-full shadow-lg
                     hover:bg-blue-700 focus:ring-4 focus:ring-blue-300
                     sm:right-8 right-4 sm:bottom-8 bottom-4 z-40"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          aria-label={isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}
        >
          {isSidebarOpen ? '←' : '→'}
        </button>

        {/* Sidebar */}
        <aside
          className={`${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 transition-transform duration-300 fixed lg:static
          left-0 top-0 h-full lg:h-auto w-64 bg-white shadow-lg lg:mr-8 z-30
          lg:block ${isSidebarOpen ? 'block' : 'hidden'}`}
        >
          <div className="p-6 space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">Quick Links</h2>
            {menuItems.map((item) => (
              <button
                key={item.id}
                className={`w-full text-left text-xl px-4 py-3 rounded-xl transition-colors
                          ${activeTab === item.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'}`}
                onClick={() => {
                  setActiveTab(item.id)
                  if (window.innerWidth < 1024) { // Close sidebar on mobile after selection
                    setIsSidebarOpen(false)
                  }
                }}
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>
        </aside>

        {/* Overlay for mobile when sidebar is open */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-20"
            onClick={() => setIsSidebarOpen(false)}
            aria-label="Close sidebar"
          />
        )}

        {/* Main Content */}
        <main className="flex-1 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {menuItems.find(item => item.id === activeTab)?.label}
          </h2>

          {/* Breadcrumb Navigation */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-4 text-xl">
              <li>
                <button
                  onClick={() => setActiveTab('home')}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Home
                </button>
              </li>
              <li className="text-gray-500">→</li>
              <li className="text-gray-700">
                {menuItems.find(item => item.id === activeTab)?.label}
              </li>
            </ol>
          </nav>

          <p className="text-xl text-gray-700 leading-relaxed">
            This is an example of senior-friendly navigation with multiple patterns:
          </p>
          <ul className="mt-4 space-y-4 text-xl text-gray-700 list-disc pl-8">
            <li>Top navigation bar with large, clear buttons</li>
            <li>Responsive mobile menu with easy-to-tap buttons</li>
            <li>Sidebar navigation with quick access links</li>
            <li>Breadcrumb trail for easy backtracking</li>
            <li>Clear visual feedback for active sections</li>
          </ul>

          <div className="mt-12 p-6 bg-blue-50 rounded-xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Currently Viewing: {menuItems.find(item => item.id === activeTab)?.label}
            </h3>
            <p className="text-xl text-gray-700">
              This demo shows how different navigation patterns can work together
              to create an accessible and easy-to-use interface.
            </p>
          </div>
        </main>
      </div>

      {/* Floating Contact Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-8 left-8 bg-blue-600 text-white text-xl px-6 py-4 rounded-xl shadow-lg
                   hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all
                   sm:left-8 left-4 sm:bottom-8 bottom-4 z-40
                   sm:text-xl text-lg sm:px-6 px-4 sm:py-4 py-3"
      >
        Contact Us 📧
      </button>

      {/* Feedback Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-lg w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-8 sm:p-8 p-4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-3xl text-2xl">Contact Us</h2>
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
                  setFeedback('')
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
                    className="w-full p-4 sm:p-4 p-3 text-xl sm:text-xl text-lg border-2 border-gray-300 rounded-xl
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
                    className="w-full p-4 sm:p-4 p-3 text-xl sm:text-xl text-lg border-2 border-gray-300 rounded-xl
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
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    className="w-full p-4 sm:p-4 p-3 text-xl sm:text-xl text-lg border-2 border-gray-300 rounded-xl
                              focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                              shadow-sm text-gray-900"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 sm:py-4 py-3 px-6 text-xl sm:text-xl text-lg
                           bg-gradient-to-r from-blue-600 to-blue-700
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
