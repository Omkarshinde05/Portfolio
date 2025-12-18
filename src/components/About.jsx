import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gray-50 flex justify-center"
    >
      <div className="max-w-4xl bg-white rounded-3xl shadow-xl p-8 md:p-12">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center 
        bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-6">
          About Me
        </h2>

        {/* Divider */}
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 
        mx-auto mb-8 rounded-full"></div>

        {/* Content */}
        <p className="text-gray-700 text-lg leading-relaxed text-center">
          I am a passionate{" "}
          <span className="font-semibold text-blue-600">
            Frontend Developer
          </span>{" "}
          focused on creating clean, responsive, and user-friendly web
          applications using{" "}
          <span className="font-semibold">
            React.js, JavaScript
          </span>{" "}
          and modern frontend technologies. Alongside frontend development, I am
          actively learning backend technologies such as{" "}
          <span className="font-semibold text-cyan-600">
            Python, Django, and SQL
          </span>{" "}
          to build scalable full-stack applications. I enjoy solving real-world
          problems and continuously improving my skills through hands-on
          projects.
        </p>

      </div>
    </section>
  );
}
