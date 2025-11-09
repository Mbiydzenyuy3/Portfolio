import { ContactForm } from '../components/ContactForm'
import { HiEnvelope, HiMapPin } from 'react-icons/hi2'

export default function ContactPage() {
  return (
    <section className="bg-white dark:bg-gray-950 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, collaborations, or
            opportunities. Let&apos;s build something amazing together.
          </p>
        </div>

        {/* Main Content: Form + Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Column 1: Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Send Me a Message
            </h2>
            <ContactForm />
          </div>

          {/* Column 2: Contact Info */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Contact Details
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              You can also reach me via these channels. I&apos;ll do my best to
              respond promptly!
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <HiEnvelope className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Email
                  </h3>
                  <a
                    href="mailto:your-email@example.com"
                    className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    mbiydzenyuy3@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <HiMapPin className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Location
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    Yaounde, Cameroon
                  </p>
                </div>
              </div>

              {/* Add your socials here later, e.g., LinkedIn */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
