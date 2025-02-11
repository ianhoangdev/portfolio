import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-transparent max-w-2xl mx-auto mt-10">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Ian Hoang
        </Link>
        <div className="flex space-x-6">
          <Link href="/projects" className="hover:text-gray-500">Projects</Link>
          <Link href="/" className="hover:text-blue-500">About</Link>
          <Link href="/experience" className="hover:text-gray-500">Experience</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
