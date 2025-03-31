import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "Project 1",
      description: "A MERN stack e-commerce app.",
      link: "#",
    },
    { name: "Project 2", description: "A WordPress blog site.", link: "#" },
    {
      name: "Project 3",
      description: "A Chrome extension for productivity.",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold">{project.name}</h3>
              <p className="text-gray-700 mt-2">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-600 mt-4 inline-block"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
