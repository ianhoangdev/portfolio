"use client"

import { motion } from "framer-motion"
import Navbar from "../components/Navbar"

const experiences = [
  {
    role: "Software Engineering Intern",
    tags: ["SwiftUI", "PostgreSQL", "Firebase", "AWS S3"],
    company: "OneClick",
    location: "Remote",
    description:
      "Developed an iOS fitness tracking app using SwiftUI. Optimized PostgreSQL queries for improved database performance and integrated Firebase for real-time data synchronization. Utilized AWS S3 for efficient media storage and retrieval.",
    date: "Present",
  },
  {
    role: "Software Engineering Intern",
    tags: ["Python", "R", "HTML/CSS", "JavaScript", "Bootstrap", "WebSockets"],
    company: "UF Ecosystem Services AI Lab",
    location: "Gainesville, FL",
    description:
      "Developed Python & R scripts for automated GIS data processing. Enhanced AI model training by creating high-quality annotations using QGIS and ArcGIS Pro. Maintained the lab’s website using HTML, CSS, JavaScript, and Bootstrap.",
    date: "Present",
  },
]

// Motion variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1, 
    transition: { staggerChildren: 0.2 } 
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } }
}

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
            className="text-3xl font-bold text-gray-800 mb-8 text-center"
          >
            My Experiences
          </motion.h1>

          <motion.div 
            variants={containerVariants} 
            initial="hidden" 
            animate="show" 
            className="space-y-8"
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  {/* Role and Date */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">{experience.role}</h2>
                    <span className="text-sm font-medium text-black px-2.5 py-0.5 rounded-full border border-black shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                      {experience.date}
                    </span>
                  </div>

                  {/* Company UI */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="mr-4 text-md font-bold text-black">{experience.company}</span>
                    <div className="flex items-center text-black text-sm font-medium px-3 py-1 rounded-full">
                      <svg 
                        className="w-4 h-4 mr-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                        aria-label="Company location icon"
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
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-4">{experience.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {experience.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium text-black border border-black px-2.5 py-0.5 rounded-full shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 hover:bg-gray-100"
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
