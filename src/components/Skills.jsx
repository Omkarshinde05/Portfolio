import React from "react";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14
        bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          Skills
        </h2>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">

          {/* Frontend */}
          <div className="bg-white rounded-2xl shadow-md p-6
          hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-4 text-center">
              Frontend
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Bootstrap"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-blue-100 text-blue-700
                    rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Backend */}
          <div className="bg-white rounded-2xl shadow-md p-6
          hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-cyan-600 mb-4 text-center">
              Backend
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {["Python", "Django", "SQL"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-cyan-100 text-cyan-700
                  rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-white rounded-2xl shadow-md p-6
          hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">
              Tools & Platforms
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {["Git", "GitHub", "Vercel"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-100 text-gray-700
                  rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
