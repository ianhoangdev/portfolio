"use client"

import { motion } from "framer-motion"
import Navbar from "./components/Navbar"
import Link from "next/link"
import Image from "next/image"
import { FaJs, FaReact, FaAngular, FaNodeJs, FaAws, FaDocker, FaGitAlt } from "react-icons/fa"
import { SiTypescript, SiSwift, SiPython, SiCplusplus, SiSolidity, SiSharp, SiR, SiFlask, SiNextdotjs, SiExpress, SiTensorflow, SiBootstrap, SiMongodb, SiPostgresql, SiGooglecloud, SiFirebase, SiHeroku } from "react-icons/si"

const techStacks = [
  { name: "JavaScript", icon: FaJs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Swift", icon: SiSwift },
  { name: "Python", icon: SiPython },
  { name: "C/C++", icon: SiCplusplus },
  { name: "Solidity", icon: SiSolidity },
  { name: "C#", icon: SiSharp },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "Node.js", icon: FaNodeJs },
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "AWS", icon: FaAws },
  { name: "Google Cloud", icon: SiGooglecloud },
  { name: "Docker", icon: FaDocker },
  { name: "Firebase", icon: SiFirebase },
  { name: "Heroku", icon: SiHeroku },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-xl mx-auto px-4">
        <Navbar />
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pt-16 pb-20"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl font-bold text-gray-800 mb-6"
          >
            Hello, I'm Ian Hoang
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-gray-600 mb-8"
          >
            I am a sophomore student at the University of Florida currently studying Computer Science and Mathematics. I have experience in building full-stack web applications and mobile applications.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link
              href="/projects"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              View My Projects
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Image
                src="/pfp.jpeg"
                alt="Ian Hoang"
                width={300}
                height={300}
                className="shadow-md m-8"
              />

          </motion.div>
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Tech Stack</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
              {techStacks.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 1 + index * 0.05 }}
                  className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                >
                  <tech.icon className="text-2xl mb-2 text-gray-700" />
                  <span className="text-xs text-gray-600 text-center">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </motion.main>
      </div>
    </div>
  )
}