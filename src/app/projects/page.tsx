"use client"

import { motion } from "framer-motion"
import Navbar from "../components/Navbar"
import Image from "next/image"

const projects = [
  {
    name: "resumebuild.io",
    tags: ["Next.js", "TailwindCSS", "TypeScript", "PostgreSQL", "OpenAI API", "GraphQL", "Firebase", "WebSockets"],
    description:
      "Developed an AI-powered resume builder using Next.js and TailwindCSS, leveraging OpenAI API for intelligent feedback and ATS optimization. The tool streamlines the resume creation process, providing users with personalized suggestions and templates.",
    github: "",
    website: "",
    date: "Present",
  },
  {
    name: "Portfolio Website",
    tags: ["Next.js", "TailwindCSS", "TypeScript", "Framer Motion"],
    description:
      "Designed and developed a personal portfolio website using Next.js and TailwindCSS, showcasing my projects and skills. Implemented Framer Motion for smooth animations, enhancing user experience and engagement.",
    github: "https://github.com/ianhoangdev/portfolio.git",
    website: "https://ianhoang.netlify.app/",
    date: "Feb 2025",
  },
  {
    name: "Wordhunt Solver",
    tags: ["C++", "WebAssembly", "Next.js", "TypeScript", "TailwindCSS", "Redux", "TensorFlow"],
    description:
      "Engineered a high-performance C++ wordhunt solver with a trie-based algorithm and WebAssembly, improving search speed by 50%. Integrated Redux for memory optimization and currently building a TensorFlow-based ML model for advanced pattern recognition.",
    github: "https://github.com/ianhoangdev/wordhuntsolver",
    website: "https://youtu.be/J2-TIB7u0yI?si=lbcbjJp1nUmkp3Jb",
    date: "Jan 2025",
  },
  {
    name: "BlockRaise",
    tags: ["Next.js", "TailwindCSS", "TypeScript", "Node.js", "Solidity", "Docker", "AWS", "Netlify"],
    description:
      "Built a Web3 crowdfunding platform with Solidity smart contracts on Ethereum for secure, decentralized transactions. Developed a responsive Next.js UI with TailwindCSS and optimized deployment using Docker on EC2 and S3 storage, cutting hosting costs by 20%.",
    github: "https://github.com/ianhoangdev/BlockRaise",
    website: "https://blockraise.netlify.app/",
    date: "Dec 2024",
  },
  {
    name: "Bubli",
    tags: ["JavaScript", "React", "Three.js", "FastAPI", "MongoDB", "Firebase", "Vercel"],
    description:
      "Worked with a team of 3 to develop an AI-powered emotional support platform using React and Three.js for a 3D interactive experience. Integrated FastAPI and MongoDB for backend services, Firebase for user authentication, and deployed on Vercel.",
    github: "https://github.com/hwii-florescent/bubli",
    website: "https://enchanting-lebkuchen-026bd8.netlify.app/?fbclid=IwY2xjawIb8J1leHRuA2FlbQIxMAABHa54RThXW6i-HJCDXloPoE5a3RKbGmrLfv34TazeTvLbHRYU6BIMmjz4vw_aem_O-PzYaKrChYNb7kRwpI8uQ",
    date: "Aug 2024",
  },
  {
    name: "Stroke Rehabilitation Game",
    tags: ["C#", "Unity", "Oculus SDK"],
    description:
      "Created a VR rehabilitation game for stroke patients using Unity and C#, incorporating Oculus SDK and Unity XR Interaction Toolkit to create interactive exercises. The game features customizable scenarios to enhance motor skills and cognitive function.",
    github: "https://github.com/DanielJZambrano/StrokeGame.git",
    date: "Aug 2023",
  }
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
                    <span className="text-sm font-medium text-black px-2.5 py-0.5 rounded-full border border-black shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                      {project.date}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium text-black border border-black px-2.5 py-0.5 rounded-full shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 hover:bg-gray-100"
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

