import Image from 'next/image'
import { skillCategories } from '@/data/skills'
import { experience } from '@/data/experience'

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      {/* Section 1: Introduction */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <Image
              src="/images/profile.jpg" // Re-using your profile image
              alt="A photo of [Your Name]"
              width={400}
              height={400}
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Hello! I&apos;m Leila, a passionate software engineer and designer
              based in Cameroon. I love turning complex problems into simple, I
              love reading tech blogs, contributing to open-source, basketball,
              and building beautiful, and intuitive designs.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              My goal is to build software that is not only functional and
              performant but also provides a great user experience. When
              I&apos;m not coding, you can find me, &quot;contributing to
              open-source&quot;, &quot;Baskball&quot;, &quot;reading tech
              blogs&quot;.
            </p>
          </div>
        </div>
      </section>
      {/* Section 2: My Skills */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">My Technical Skills</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
              A look at the technologies, languages, and tools I use.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-gray-700 dark:text-gray-300"
                    >
                      &raquo; {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      ---
      {/* Section 3: My Journey (Experience & Volunteering) */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">My Journey</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
              My professional, volunteering, and collaboration history.
            </p>
          </div>

          <div className="space-y-12">
            {experience.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col md:flex-row"
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
                  <h3 className="text-2xl font-bold mb-2">{item.role}</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
