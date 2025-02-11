"use client"

import Link from "next/link"

const Navbar = () => {
  return (
      <div className="flex justify-between items-center pt-8">
        <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300">
          Ian Hoang
        </Link>
        <div className="flex space-x-8">
          {["Projects", "Experience", "Contact"].map((item, index) => (
              <Link
                key = {index}
                href={item === "About" ? "/" : `/${item.toLowerCase()}`}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                {item}
              </Link>
          ))}
        </div>
      </div>
  )
}

export default Navbar

