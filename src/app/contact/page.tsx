"use client"

import { motion } from "framer-motion"
import { FiMail, FiGithub, FiLinkedin, FiMapPin } from "react-icons/fi"
import Navbar from "../components/Navbar"
import PageArrow from "../components/PageArrow"

export default function Contact() {
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
            Contact
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-2xl font-caveat text-gray-700 dark:text-gray-200 mb-8"
          >
            Let's connect and discuss opportunities
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center space-x-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <FiMail className="w-6 h-6" />
                <a href="mailto:ianhoangdev@gmail.com" className="text-lg font-caveat">
                  ianhoangdev@gmail.com
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex items-center space-x-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <FiGithub className="w-6 h-6" />
                <a href="https://github.com/ianhoangdev" target="_blank" rel="noopener noreferrer" className="text-lg font-caveat">
                  github.com/ianhoangdev
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex items-center space-x-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <FiLinkedin className="w-6 h-6" />
                <a href="https://linkedin.com/in/ianhoangdev" target="_blank" rel="noopener noreferrer" className="text-lg font-caveat">
                  linkedin.com/in/ianhoangdev
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex items-center space-x-4 text-gray-600 dark:text-gray-300"
              >
                <FiMapPin className="w-6 h-6" />
                <span className="text-lg font-caveat">Gainesville, Florida</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </main>
      <PageArrow nextPage="/" label="Back to Home" />
    </div>
  )
}

