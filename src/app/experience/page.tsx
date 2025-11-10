import { experience } from '@/data/experience'

export default function ExperiencePage() {
  return (
    <section className="bg-white dark:bg-gray-950 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Journey
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            My professional, volunteering, and collaboration history. This is
            where I&apos;ve grown and learned.
          </p>
        </div>

        {/* Timeline-style list */}
        <div className="space-y-12">
          {experience.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg 
                         flex flex-col md:flex-row"
            >
              <div className="md:w-1/4 mb-4 md:mb-0">
                <h4 className="text-lg font-semibold text-gray-600 dark:text-gray-400">
                  {item.date}
                </h4>
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
                  {item.organization}
                </h3>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.role}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
