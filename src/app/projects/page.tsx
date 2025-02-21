"use client"

import { motion } from "framer-motion"
import Navbar from "../components/Navbar"
import Image from "next/image"

const projects = [
  {
    name: "Machine Learning Football Analyzer",
    tags: ["Python", "OpenCV", "YOLO", "NumPy", "Pandas", "Matplotlib", "Docker"],
    description:
      `a computer vision-based football analysis to track players, referees, and the ball in match footage. Implemented K-means 
      clustering for team classification and integrated optical flow for camera movement tracking.`,
    github: "https://github.com/ianhoangdev/MLFootballAnalysis",
    website: "",
    image: "https://res.cloudinary.com/dcukdnnmj/image/upload/v1740095546/footballML.gif",
  },
  {
    name: "BlockRaise",
    tags: ["Next.js", "TailwindCSS", "TypeScript", "Node.js", "Solidity", "Docker", "AWS", "Netlify"],
    description:
      "Built a Web3 crowdfunding platform with Solidity smart contracts on Ethereum for secure, decentralized transactions. Developed a responsive Next.js UI with TailwindCSS and optimized deployment using Docker on EC2 and S3 storage, cutting hosting costs by 20%.",
    github: "https://github.com/ianhoangdev/BlockRaise",
    website: "https://blockraise.netlify.app/",
    image: "https://res.cloudinary.com/dcukdnnmj/image/upload/v1740094617/BlockRaise_z8ekhy.png",
  },
  {
    name: "Wordhunt Solver",
    tags: ["C++", "WebAssembly", "Next.js", "TypeScript", "TailwindCSS", "Redux", "TensorFlow"],
    description:
      "Engineered a high-performance C++ wordhunt solver with a trie-based algorithm and WebAssembly, improving search speed by 50%. Integrated Redux for memory optimization and currently building a TensorFlow-based ML model for advanced pattern recognition.",
    github: "https://github.com/ianhoangdev/wordhuntsolver",
    website: "https://wordhuntsolver.vercel.app",
    image: "https://res.cloudinary.com/dcukdnnmj/image/upload/v1740107844/wordhunt.gif",
  },
  {
    name: "Bubli",
    tags: ["JavaScript", "React", "Three.js", "FastAPI", "MongoDB", "Firebase", "Vercel"],
    description:
      "Worked with a team of 3 to develop an AI-powered emotional support platform using React and Three.js for a 3D interactive experience. Integrated FastAPI and MongoDB for backend services, Firebase for user authentication, and deployed on Vercel.",
    github: "https://github.com/hwii-florescent/bubli",
    website: "https://enchanting-lebkuchen-026bd8.netlify.app/?fbclid=IwY2xjawIb8J1leHRuA2FlbQIxMAABHa54RThXW6i-HJCDXloPoE5a3RKbGmrLfv34TazeTvLbHRYU6BIMmjz4vw_aem_O-PzYaKrChYNb7kRwpI8uQ",
    image: "https://res.cloudinary.com/dcukdnnmj/image/upload/v1740096042/bubli_t6yyfa.png",
  },
  {
    name: "Stroke Rehabilitation Game",
    tags: ["C#", "Unity", "Oculus SDK"],
    description:
      "Created a VR rehabilitation game for stroke patients using Unity and C#, incorporating Oculus SDK and Unity XR Interaction Toolkit to create interactive exercises. The game features customizable scenarios to enhance motor skills and cognitive function.",
    github: "https://github.com/DanielJZambrano/StrokeGame.git",
    image: "https://res.cloudinary.com/dcukdnnmj/image/upload/v1740155327/IMG_6088_f1nhi1.jpg",
  }
]

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-xl mx-auto px-4">
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
                <div className="w-full overflow-hidden relative">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="block">
                    <Image 
                      src={project.image} 
                      alt={project.name} 
                      width={600} 
                      height={300} 
                      className="w-full h-[200px] object-cover transition-all duration-500 ease-in-out hover:h-[300px]" 
                    />
                  </a>
                </div>
                <div className="p-5">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">{project.name}</h2>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium text-black border border-black bg-gray-100 px-2.5 py-0.5 rounded-full shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 hover:bg-gray-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-2">{project.description}</p>
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