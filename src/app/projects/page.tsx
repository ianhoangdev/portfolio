"use client"

import { motion } from "framer-motion"
import Navbar from "../components/Navbar"
import Image from "next/image"

const projects = [
  {
    name: "deguzman.cloud",
    tags: ["Go", "Kubernetes", "Docker", "Svelte", "Raspberry Pi 5"],
    description:
      "Developed a self-hosted cloud platform using Raspberry Pi 5s and Kubernetes, providing a cost-effective, bare-metal alternative to traditional cloud providers. Implemented several services, including cloud hosting, a personal blog, file sharing, and a QR code generator, with plans to expand functionality further.",
    github: "#",
    website: "#",
    date: "Present",
  },
  {
    name: "Computing Student Union",
    tags: ["Svelte", "Tailwind", "Prisma", "PostgreSQL"],
    description:
      "Developed the website for the Computing Student Union at the University of Florida. I created the data models, back-end, contributed to the design, and implemented the front-end for the teams, club, and home page.",
    website: "#",
    date: "Present",
  },
  {
    name: "HaXr",
    tags: ["NextJS", "Tailwind", "Prisma", "PostgreSQL"],
    description:
      "Working with a team of 3 to develop HaXr, the system that powers University of Florida's flagship hackathon, SwampHacks. I am working on the form creation, submission, and review process.",
    github: "#",
    website: "#",
    date: "Present",
  },
  {
    name: "ColorStack UF Website",
    tags: ["SvelteKit", "Tailwind"],
    description:
      "Led a team of 3 other developers and worked with Gator User Design to create a website for the ColorStack UF chapter.",
    github: "#",
    website: "#",
    date: "July 2024",
  },
  {
    name: "Registr",
    tags: ["Svelte", "Python", "FastAPI"],
    description: "A project utilizing Svelte and FastAPI for streamlined registration management.",
    date: "January 2024",
  },
]

export default function Projects() {
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
            My Projects
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2 sm:mb-0">{project.name}</h2>
                    <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {project.date}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex space-x-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
                      >
                        <Image src="/github.svg" alt="GitHub" width={20} height={20} />
                      </a>
                    )}
                    {project.website && (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
                      >
                        <Image src="/globe.svg" alt="Website" width={20} height={20} />
                      </a>
                    )}
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

