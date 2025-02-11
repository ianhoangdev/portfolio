import Navbar from "../components/Navbar";  

const experiences = [
    {
      role: "Corporate VC Analytics Extern",
      company: "HP Tech Ventures",
      date: "Remote · Spring 2024",
      description:
        "Analyzed market trends and startup investments to generate insights for venture capital strategy. Leveraged data analytics to assist in evaluating new technologies and business opportunities.",
    },
    {
      role: "Undergraduate Student Assistant",
      company: "University of Florida CWC | Collegiate Recovery Program",
      date: "Ongoing",
      description:
        "Supported the university’s recovery program through event planning, community engagement, and administrative assistance.",
    },
  ];
  
  const Experience = () => {
    return (
      <section className="max-w-2xl mx-auto">
        <Navbar/>
        <div className="space-y-6 pt-8">
          {experiences.map((exp, index) => (
            <div key={index} className="border-b pb-4">
              <h3 className="text-lg font-semibold">{exp.role}</h3>
              <p className="text-gray-600">{exp.company} • {exp.date}</p>
              <p className="text-gray-700 mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Experience;
  