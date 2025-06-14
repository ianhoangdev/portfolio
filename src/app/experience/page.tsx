"use client"

import { motion } from "framer-motion"
import Navbar from "../components/Navbar"
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi"
import PageArrow from "../components/PageArrow"

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "OneClick (Startup)",
    location: "Remote",
    period: "May 2025 - Aug 2025",
    description: [
      "Engineer a high-performance React Native fitness application, achieving a 40% reduction in mobile screen load times through strategic implementation of lazy loading and offline caching with AsyncStorage",
      "Integrate Apple HealthKit and Spoonacular API to aggregate and normalize user health/nutrition data in PostgreSQL with time-series indexing for 80% faster analytic queries"
    ]
  },
  {
    title: "Software Engineer Intern",
    company: "Ecosystem Services AI Lab",
    location: "Gainesville, FL",
    period: "Jan 2025 - Apr 2025",
    description: [
      "Conducted geo-spatial analysis by scraping 1,000+ Google reviews of urban green spaces using Python and BeautifulSoup, providing data for environmental research",
      "Annotated 200+ Street View images to train a greenery detection ML model, achieving 95% classification accuracy",
      "Redesigned lab's website with HTML/CSS/JS and Bootstrap, reducing load time by 30% and improving mobile UX"
    ]
  },
  {
    title: "Software Engineer Intern",
    company: "UF CSSALT",
    location: "Gainesville, FL",
    period: "Jan 2025 - May 2025",
    description: [
      "Built real-time defibrillator simulation software in Unity using C#, enhancing training accuracy for hospitals",
      "Optimized application performance by 30% through advanced physics calculations and state machine architecture",
      "Implemented robust CI/CD pipelines utilizing GitHub Actions, reducing deployment time by 40% and enabling test-driven development with automated unit tests"
    ]
  }
]

export default function Experience() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-6xl font-permanent-marker bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 leading-[1.2]"
          >
            Experience
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-2xl font-caveat text-gray-700 dark:text-gray-200 mb-8"
          >
            My professional journey so far
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="space-y-8"
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={`${experience.company}-${experience.period}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                    {experience.title}
                  </h3>
                  <p className="text-xl text-gray-700 dark:text-gray-300">
                    {experience.company}
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <FiCalendar className="w-5 h-5 mr-2" />
                    <span className="font-caveat text-lg">{experience.period}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <FiMapPin className="w-5 h-5 mr-2" />
                    <span className="font-caveat text-lg">{experience.location}</span>
                  </div>
                </div>
              </div>
              <ul className="space-y-3">
                {experience.description.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 + i * 0.1 }}
                    className="flex items-start text-gray-600 dark:text-gray-300"
                  >
                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                    <span className="text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </main>
      <PageArrow nextPage="/contact" label="Get in Touch" />
    </div>
  )
}
