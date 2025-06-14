"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Navbar from "../components/Navbar"
import Link from "next/link"
import { FiGithub, FiExternalLink } from "react-icons/fi"
import PageArrow from "../components/PageArrow"

interface Project {
  name: string
  description: string
  tags: string[]
  github: string
  website: string
  image: string
  category: string[]
}

// Custom category tags
const categoryTags = [
  { id: "all", name: "All" },
  { id: "web", name: "Web Development" },
  { id: "game", name: "Game Development" },
  { id: "ai", name: "AI/LLM" },
]

const projects: Project[] = [
  {
    name: "NeuroDB.ai",
    tags: ["SvelteKit", "Rust", "JavaScript", "SQLite", "WASM", "Hugging Face"],
    description: "An open-source local-first web app for fast semantic search over user-uploaded documents.",
    github: "https://github.com/ianhoangdev/neuroDB",
    website: "https://neurodbai.vercel.app/",
    image: "https://res.cloudinary.com/dcukdnnmj/image/upload/v1749932636/hkw2tahfh2rrzcry3aqp.png",
    category: ["web", "ai"]
  },
  {
    name: "resumezip.io",
    tags: ["Go", "Docker", "AWS", "PostgreSQL", "Supabase", "Next.js", "TypeScript"],
    description: "A LaTeX resume generator with LLM-powered bullet rewriting. 1000+ users.",
    github: "",
    website: "https://resumezip.io/",
    image: "https://res.cloudinary.com/dcukdnnmj/image/upload/v1749927099/nwnyrri41pgg28ifpws2.gif",
    category: ["web", "ai"]
  },
  {
    name: "Machine Learning Football Analyzer",
    tags: ["Python", "OpenCV", "YOLO", "NumPy", "Pandas", "Matplotlib", "Docker"],
    description: "A computer vision-based football analysis to track players, referees, and the ball in match footage.",
    github: "https://github.com/ianhoangdev/MLFootballAnalysis",
    website: "",
    image: "https://res.cloudinary.com/dcukdnnmj/image/upload/v1740095546/footballML.gif",
    category: ["ai"]
  },
  {
    name: "BlockRaise",
    tags: ["Next.js", "TailwindCSS", "TypeScript", "Node.js", "Solidity", "Docker", "AWS", "Netlify"],
    description: "A Web3 crowdfunding platform with Solidity smart contracts on Ethereum for secure, decentralized transactions.",
    github: "https://github.com/ianhoangdev/BlockRaise",
    website: "https://blockraise.netlify.app/",
    image: "https://res.cloudinary.com/dcukdnnmj/image/upload/v1740094617/BlockRaise_z8ekhy.png",
    category: ["web"]
  },
  {
    name: "Wordhunt Solver",
    tags: ["C++", "WebAssembly", "Next.js", "TypeScript", "TailwindCSS", "Redux", "TensorFlow"],
    description: "A high-speed C++ Word Hunt solver using optimized trie and backtracking algorithms.",
    github: "https://github.com/ianhoangdev/wordhuntsolver",
    website: "https://wordhuntsolver.vercel.app",
    image: "https://res.cloudinary.com/dcukdnnmj/image/upload/v1740107844/wordhunt.gif",
    category: ["web", "ai", "game"]
  },
  {
    name: "Bubli",
    tags: ["JavaScript", "React", "Three.js", "FastAPI", "MongoDB", "Firebase", "Vercel"],
    description: "Hackathon: An AI-powered emotional support platform for young adults.",
    github: "https://github.com/hwii-florescent/bubli",
    website: "https://enchanting-lebkuchen-026bd8.netlify.app/?fbclid=IwY2xjawIb8J1leHRuA2FlbQIxMAABHa54RThXW6i-HJCDXloPoE5a3RKbGmrLfv34TazeTvLbHRYU6BIMmjz4vw_aem_O-PzYaKrChYNb7kRwpI8uQ",
    image: "https://res.cloudinary.com/dcukdnnmj/image/upload/v1740096042/bubli_t6yyfa.png",
    category: ["web", "ai"]
  },
  {
    name: "Stroke Rehabilitation Game",
    tags: ["C#", "Unity", "Oculus SDK"],
    description: "A VR rehabilitation game for people with stroke.",
    github: "https://github.com/DanielJZambrano/StrokeGame.git",
    website: "",
    image: "https://res.cloudinary.com/dcukdnnmj/image/upload/v1740155327/IMG_6088_f1nhi1.jpg",
    category: ["game"]
  },
  {
    name: "Sudoku Solver",
    tags: ["Python", "Pygame", "Git"],
    description: "An interactive Sudoku Solver using Pygame.",
    github: "https://github.com/ianhoangdev/Sudoku-Project",
    website: "",
    image: "https://res.cloudinary.com/dcukdnnmj/image/upload/v1749933288/f6qustckv1hnkb96fcmd.png",
    category: ["game"]
  }
]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "all") return projects
    return projects.filter(project => project.category.includes(selectedCategory))
  }, [selectedCategory])

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
            Projects
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-2xl font-caveat text-gray-700 dark:text-gray-200 mb-8"
          >
            Here are some of my recent projects
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categoryTags.map((tag) => (
            <button
              key={tag.id}
              onClick={() => setSelectedCategory(tag.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === tag.id
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {tag.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {project.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                {project.github && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <FiGithub className="w-6 h-6" />
                    <span className="font-caveat text-lg">Code</span>
                  </motion.a>
                )}
                {project.website && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <FiExternalLink className="w-6 h-6" />
                    <span className="font-caveat text-lg">Live Demo</span>
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
      <PageArrow nextPage="/experience" label="View Experience" />
    </div>
  )
}