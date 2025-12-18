import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Food Recipe App",
      desc: "A React application to search and view food recipes using an external API with a clean and responsive UI.",
      link: "https://github.com/Omkarshinde05/Recipe-app",
    },
    {
      title: "Airbnb Clone",
      desc: "A modern Airbnb clone frontend built with React featuring property listings, responsive layout, and clean UI design.",
      link: "https://github.com/yourusername/airbnb-clone",
    },
    {
      title: "To-Do List App",
      desc: "A simple and efficient to-do list application to manage daily tasks with add, delete, and complete functionality.",
      link: "https://github.com/yourusername/todo-list",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-14">
          Projects
        </h2>

        {/* Project Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-md
              hover:shadow-xl hover:-translate-y-1
              transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {p.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {p.desc}
              </p>

              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-blue-600 font-semibold
                hover:text-blue-700 no-underline"
              >
                View Code →
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
