import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Senior-Friendly UI Components
        </h1>
        <p className="text-2xl text-gray-700 max-w-2xl mx-auto">
          Easy-to-use, accessible components crafted with clarity and simplicity in mind
        </p>
      </header>

      {/* Component Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Large Button Example */}
        <section className="p-8 bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
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
        <section className="p-8 bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
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
        <section className="p-8 bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
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
        <section className="p-8 bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
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
        <section className="p-8 bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
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
        <section className="p-8 bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
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

        {/* Login Demo Link */}
        <section className="p-8 bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Login Demo</h2>
          <Link
            href="/demos/login"
            className="block w-full py-4 px-6 text-xl bg-gradient-to-r from-blue-600 to-blue-700
                      text-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5
                      transition-all focus:ring-4 focus:ring-blue-300 text-center"
          >
            View Login Demo
          </Link>
        </section>

        {/* Navigation Demo Link */}
        <section className="p-8 bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Navigation Demo</h2>
          <Link
            href="/demos/navigation"
            className="block w-full py-4 px-6 text-xl bg-gradient-to-r from-blue-600 to-blue-700
                      text-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5
                      transition-all focus:ring-4 focus:ring-blue-300 text-center"
          >
            View Navigation Demo
          </Link>
        </section>

        {/* Form Demo Link */}
        <section className="p-8 bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Form Demo</h2>
          <Link
            href="/demos/form"
            className="block w-full py-4 px-6 text-xl bg-gradient-to-r from-blue-600 to-blue-700
                      text-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5
                      transition-all focus:ring-4 focus:ring-blue-300 text-center"
          >
            View Form Demo
          </Link>
        </section>
      </div>
    </main>
  )
}
