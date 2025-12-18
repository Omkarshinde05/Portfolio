import React from "react";

export default function PortfolioHome() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-28">
      <div className="max-w-4xl text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-gray-900">
          Hi, I'm{" "}
          <span className="text-blue-600">
            Omkar Shinde
          </span>{" "}
          👋
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600 mb-10">
          Frontend Developer specializing in{" "}
          <span className="font-semibold text-gray-800">
            React.js, JavaScript, HTML5, CSS3
          </span>{" "}
          — with growing experience in{" "}
          <span className="font-semibold text-blue-600">
            Python, Django, and SQL
          </span>.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="bg-blue-600 text-white px-8 py-3 rounded-xl
            font-semibold shadow-md hover:bg-blue-700
            transition no-underline"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="border border-blue-600 text-blue-600 px-8 py-3 rounded-xl
            font-semibold hover:bg-blue-600 hover:text-white
            transition no-underline"
          >
            Contact Me
          </a>
        </div>

      </div>
    </section>
  );
}
