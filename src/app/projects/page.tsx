import Navbar from "../components/Navbar";
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
];
export default function Projects() {
  return (
    <div className="bg-white">
      <main className="max-w-2xl mx-auto">
        <Navbar />
        <div className="space-y-3 pt-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white pt-4 pb-4 border-b">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">{project.name}</h2>
                <span className="text-gray-500">{project.date}</span>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="border border-gray-400 text-black text-[10px] px-2 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-700 mt-4">{project.description}</p>
              <div className="mt-4 flex space-x-4 items-end">
                {project.github && (
                  <a href={project.github} target="_blank" className="text-black hover:underline">
                    <img
                      src="/github.svg"
                      alt="GitHub"
                      className="w-5 h-5"
                    />
                  </a>
                )}
                {project.website && (
                  <a href={project.website} target="_blank" className="text-black hover:underline">
                    <img
                      src="/globe.svg"
                      alt="Globe"
                      className="w-5 h-5"
                    />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}