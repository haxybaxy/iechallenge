'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const command = 'npx shadcn@latest add "https://v0.dev/chat/b/b_b89zaDkVBjK?token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..EQPX-RH7e3-KjMPg.OXOnTSiqxxmBkBnPvZfREUI1ec2i3yCjDdgS36SjyT6Hb8OUf5rjLlDMRt4.azN6b7ylGCmrIdPx2mwkpA"'

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command)
    alert('Command copied to clipboard!')
  }

  return (
    <main className="min-h-screen p-8 bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="max-w-4xl mx-auto mb-16 text-center flex flex-col items-center">
        <Image src="/techlogo.png" className="align-center" alt="Tech4All" width={400} height={400} />
        <h1 style={{ fontSize: '10rem' }}>👴🏻👵🏻</h1>
        <h1 className="text-4xl font-bold text-blue-700 mb-6">
          Senior-Friendly UI Components
        </h1>
        <p className="text-2xl text-gray-700 max-w-2xl mx-auto mb-12">
          Easy-to-use, accessible components crafted with clarity and simplicity in mind
        </p>

        {/* Demo Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-16">
          <Link
            href="/demos/login"
            className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl
                     transition-all border-2 border-transparent hover:border-blue-500
                     flex flex-col min-h-[280px]"
          >
            <div>
              <div className="text-4xl mb-4">🔐</div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Login Demo</h2>
              <p className="text-gray-600">Experience our senior-friendly authentication flow</p>
            </div>
            <span className="text-blue-600 group-hover:text-blue-700 font-semibold mt-auto pt-4">
              Try Demo →
            </span>
          </Link>

          <Link
            href="/demos/navigation"
            className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl
                     transition-all border-2 border-transparent hover:border-blue-500
                     flex flex-col min-h-[280px]"
          >
            <div>
              <div className="text-4xl mb-4">🧭</div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Navigation Demo</h2>
              <p className="text-gray-600">See our accessible navigation patterns in action</p>
            </div>
            <span className="text-blue-600 group-hover:text-blue-700 font-semibold mt-auto pt-4">
              Try Demo →
            </span>
          </Link>

          <Link
            href="/demos/form"
            className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl
                     transition-all border-2 border-transparent hover:border-blue-500
                     flex flex-col min-h-[280px]"
          >
            <div>
              <div className="text-4xl mb-4">📝</div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Form Demo</h2>
              <p className="text-gray-600">Explore our easy-to-use form components</p>
            </div>
            <span className="text-blue-600 group-hover:text-blue-700 font-semibold mt-auto pt-4">
              Try Demo →
            </span>
          </Link>
        </div>
      </header>

      {/* Component Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Large Button Example */}
        <section className="p-8 bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-shadow relative">
          <button
            onClick={() => setIsModalOpen(true)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="View code"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </button>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Large Buttons</h2>
          <button
            className="w-full py-4 px-6 text-xl bg-gradient-to-r from-blue-600 to-blue-700
                       text-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5
                       transition-all focus:ring-4 focus:ring-blue-300"
            aria-label="Example large button"
          >
            Click Me
          </button>
        </section>

        {/* High Contrast Text Example */}
        <section className="p-8 bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-shadow relative">
          <button
            onClick={() => setIsModalOpen(true)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="View code"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </button>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">High Contrast Text</h2>
          <div className="space-y-6">
            <p className="text-xl font-medium text-gray-900 leading-relaxed">
              Easy to read text with proper spacing
            </p>
            <Link
              href="#"
              className="inline-block text-xl text-blue-700 underline decoration-2
                         hover:text-blue-900 focus:outline-none focus:ring-2
                         focus:ring-blue-500 rounded-lg px-2 py-1"
            >
              Clear Link Example →
            </Link>
          </div>
        </section>

        {/* Form Controls Example */}
        <section className="p-8 bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-shadow relative">
          <button
            onClick={() => setIsModalOpen(true)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="View code"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </button>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Form Controls</h2>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="example-input"
                className="block text-xl font-medium text-gray-900 mb-3"
              >
                Large Input Field
              </label>
              <input
                id="example-input"
                type="text"
                className="w-full p-4 text-xl border-2 border-gray-300 rounded-xl
                          focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                          shadow-sm placeholder-gray-600 text-gray-900"
                placeholder="Type here..."
              />
            </div>
          </div>
        </section>

        {/* Toggle Switch Example */}
        <section className="p-8 bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-shadow relative">
          <button
            onClick={() => setIsModalOpen(true)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="View code"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </button>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Large Toggle</h2>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-24 h-12 bg-gray-200 rounded-full peer shadow-inner
                          peer-focus:ring-4 peer-focus:ring-blue-300
                          peer-checked:after:translate-x-12
                          after:content-[''] after:absolute after:top-1
                          after:left-1 after:bg-white after:rounded-full
                          after:h-10 after:w-10 after:transition-all
                          after:shadow-md peer-checked:bg-gradient-to-r
                          peer-checked:from-blue-600 peer-checked:to-blue-700">
            </div>
            <span className="ml-4 text-xl font-medium text-gray-900">
              OFF / ON
            </span>
          </label>
        </section>

        {/* Radio Buttons Example */}
        <section className="p-8 bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-shadow relative">
          <button
            onClick={() => setIsModalOpen(true)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="View code"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </button>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Large Radio Buttons</h2>
          <div className="space-y-5">
            <label className="flex items-center space-x-4 cursor-pointer hover:bg-gray-50 p-2 rounded-xl transition-colors">
              <input
                type="radio"
                name="radio-group"
                className="w-8 h-8 text-blue-600 focus:ring-blue-500 shadow-sm"
              />
              <span className="text-xl font-medium text-gray-900">Option 1</span>
            </label>
            <label className="flex items-center space-x-4 cursor-pointer hover:bg-gray-50 p-2 rounded-xl transition-colors">
              <input
                type="radio"
                name="radio-group"
                className="w-8 h-8 text-blue-600 focus:ring-blue-500 shadow-sm"
              />
              <span className="text-xl font-medium text-gray-900">Option 2</span>
            </label>
          </div>
        </section>

        {/* Dropdown Example */}
        <section className="p-8 bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-shadow relative">
          <button
            onClick={() => setIsModalOpen(true)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="View code"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </button>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Large Dropdown</h2>
          <select
            className="w-full p-4 text-xl border-2 border-gray-200 rounded-xl
                       focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                       shadow-sm bg-white text-gray-900"
          >
            <option className="text-gray-900">Select an option</option>
            <option className="text-gray-900">Option 1</option>
            <option className="text-gray-900">Option 2</option>
            <option className="text-gray-900">Option 3</option>
          </select>
        </section>
      </div>

      {/* Code Copy Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-lg max-w-2xl w-full">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Install Component</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700 p-2"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              <div className="bg-gray-100 p-4 rounded-xl mb-4 relative">
                <pre className="text-sm text-gray-800 whitespace-normal break-words">
                  {command}
                </pre>
                <button
                  onClick={copyToClipboard}
                  className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700"
                  aria-label="Copy to clipboard"
                >
                  📋
                </button>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Close
                </button>
                <button
                  onClick={copyToClipboard}
                  className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Copy Command
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
