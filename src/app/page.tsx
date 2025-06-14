"use client"

import { motion } from "framer-motion"
import Navbar from "./components/Navbar"
import Link from "next/link"
import Image from "next/image"
import { FiGithub, FiLinkedin, FiMail, FiCode, FiServer, FiCpu } from "react-icons/fi"
import PageArrow from "./components/PageArrow"

const skills = [
  {
    icon: <FiCode className="w-8 h-8" />,
    title: "Full Stack",
    description: "Building modern web applications with React, Next.js, and Node.js"
  },
  {
    icon: <FiServer className="w-8 h-8" />,
    title: "Backend",
    description: "Developing robust APIs and services with Go, Python, and PostgreSQL"
  },
  {
    icon: <FiCpu className="w-8 h-8" />,
    title: "AI/ML",
    description: "Creating intelligent solutions with TensorFlow, PyTorch, and OpenCV"
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-[450px] h-[300px] mx-auto mb-12 overflow-hidden shadow-2xl rounded-2xl transform hover:scale-[1.02] transition-transform duration-300"
          >
            <Image
              src="/pfp.png"
              alt="Ian Hoang"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-6xl font-permanent-marker bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 leading-[1.2]"
          >
            Ian Hoang
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-2xl font-caveat text-gray-700 dark:text-gray-200 mb-8"
          >
            I'm Ian, currently a junior at UF studying CS.🐊
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                {skill.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="space-y-10"
        >
          <div className="flex justify-center space-x-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/projects"
                className="px-10 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 transition-all duration-300 font-caveat text-2xl shadow-lg hover:shadow-xl"
              >
                Projects
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/experience"
                className="px-10 py-4 rounded-xl bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-200 hover:from-gray-200 hover:via-gray-300 hover:to-gray-400 dark:hover:from-gray-700 dark:hover:via-gray-600 dark:hover:to-gray-500 transition-all duration-300 font-caveat text-2xl shadow-lg hover:shadow-xl"
              >
                Experience
              </Link>
            </motion.div>
          </div>

          <div className="flex justify-center space-x-10 pt-6">
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              whileHover={{ scale: 1.3, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/ianhoangdev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <FiGithub className="w-8 h-8" />
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              whileHover={{ scale: 1.3, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              href="https://linkedin.com/in/ianhoangdev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <FiLinkedin className="w-8 h-8" />
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              whileHover={{ scale: 1.3, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:ianhoangdev@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <FiMail className="w-8 h-8" />
            </motion.a>
          </div>
        </motion.div>
      </main>
      <PageArrow nextPage="/projects" label="View Projects" />
    </div>
  )
}