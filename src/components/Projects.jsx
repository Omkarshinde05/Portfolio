import React from "react";


export default function Projects() {
  const projects = [
    {
      title: "Food Recipe App",
      desc: "A React app to search and view Food Recipe details using an external API.",
      link: "https://github.com/Omkarshinde05/Recipe-app"
    },
    {
      title: "E-Commerce UI",
      desc: "Frontend for an online store with product listing and cart.",
      link: "https://github.com/yourusername/ecommerce-ui"
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-cards">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <a href={p.link} target="_blank" rel="noreferrer">View Code</a>
          </div>
        ))}
      </div>
    </section>
  );
}
