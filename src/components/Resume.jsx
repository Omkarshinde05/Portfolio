import React, { useState } from "react";

export default function Resume() {
  const [showDetails, setShowDetails] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/OmkarShinde.pdf"; // place in public/
    link.download = "OmkarShinde.pdf";
    link.click();
  };

  return (
    <section id="resume" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Resume
        </h2>

        <p className="text-center text-gray-600 mb-10">
          View or download my resume to learn more about my skills and experience.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="px-6 py-3 rounded-xl border border-blue-600 text-blue-600
            font-semibold hover:bg-blue-600 hover:text-white transition"
          >
            {showDetails ? "Hide Details" : "Show Details"}
          </button>

          <a
            href="/OmkarShinde.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-xl bg-gray-900 text-white
            font-semibold text-center hover:bg-gray-800 transition no-underline"
          >
            View Resume
          </a>

          <button
            onClick={handleDownload}
            className="px-6 py-3 rounded-xl bg-blue-600 text-white
            font-semibold hover:bg-blue-700 transition"
          >
            Download Resume
          </button>
        </div>

        {/* Resume Details */}
        {showDetails && (
          <div className="space-y-10">

            {/* Summary */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Professional Summary
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Frontend Developer with hands-on experience in building responsive,
                user-friendly web applications using React, JavaScript, HTML5,
                CSS3, Tailwind CSS, and SQL. Strong foundation in component-based
                architecture, state management, and modern UI development. Eager
                to contribute to a growth-oriented frontend or React development team.
              </p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "HTML5",
                  "CSS3",
                  "JavaScript (ES6+)",
                  "React",
                  "Tailwind CSS",
                  "Bootstrap",
                  "SQL",
                  "Git",
                  "GitHub",
                  "Vercel",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-blue-100 text-blue-700
                    rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Key Projects
              </h3>
              <ul className="space-y-3 text-gray-700 list-disc list-inside">
                <li>
                  <strong>Airbnb Clone:</strong> Built a fully responsive Airbnb-like
                  web application using React and Tailwind CSS with reusable
                  components, routing, and dynamic listings.
                </li>
                <li>
                  <strong>Food Recipe App:</strong> Recipe search app using a
                  third-party API with Context API, favorites, and detailed views.
                </li>
                <li>
                  <strong>To-Do List App:</strong> Task management app with CRUD
                  operations, filtering, and real-time UI updates.
                </li>
              </ul>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Education
              </h3>
              <p className="text-gray-700">
                <strong>Bachelor of Commerce</strong> <br />
                Pune University (2022 – 2025)
              </p>
            </div>

          </div>
        )}
      </div>
    </section>
  );
}
