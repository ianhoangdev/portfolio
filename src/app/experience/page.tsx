"use client"

import { motion } from "framer-motion"
import Navbar from "../components/Navbar"

const experiences = [
  {
    role: "Software Engineer Intern @ OneClick",
    tags: ["Go", "Kubernetes", "Docker", "Svelte", "Raspberry Pi 5"],
    location: "Remote",
    description:
      "Developed a self-hosted cloud platform using Raspberry Pi 5s and Kubernetes, providing a cost-effective, bare-metal alternative to traditional cloud providers. Implemented several services, including cloud hosting, a personal blog, file sharing, and a QR code generator, with plans to expand functionality further.",
    date: "Present",
  },
  {
    role: "Software Engineer Intern @ UF Ecosystem Services AI Lab",
    tags: ["Svelte", "Tailwind", "Prisma", "PostgreSQL"],
    location: "Gainesville, FL",
    description:
      "Developed the website for the Computing Student Union at the University of Florida. I created the data models, back-end, contributed to the design, and implemented the front-end for the teams, club, and home page.",
    date: "Present",
  },
]

export default function Experiences() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4">
        <Navbar />
        <main className="py-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-800 mb-8"
          >
            My Experiences
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2 sm:mb-0">{experience.role}</h2>
                    <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {experience.date}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm mb-4">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                    {experience.location}
                  </div>
                  <p className="text-gray-600 mb-4">{experience.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {experience.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </main>
      </div>
    </div>
  )
}

