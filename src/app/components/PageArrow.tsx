"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { FiChevronRight } from "react-icons/fi"

interface PageArrowProps {
  nextPage: string
  label: string
}

export default function PageArrow({ nextPage, label }: PageArrowProps) {
  const router = useRouter()

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="fixed right-8 top-1/2 -translate-y-1/2 z-40"
    >
      <button
        onClick={() => router.push(nextPage)}
        className="group flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        <span className="text-sm font-caveat opacity-0 group-hover:opacity-100 transition-opacity">
          {label}
        </span>
        <div className="relative">
          <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-full transform rotate-45 scale-0 group-hover:scale-100 transition-transform duration-300" />
          <FiChevronRight className="w-8 h-8 relative z-10 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </button>
    </motion.div>
  )
} 