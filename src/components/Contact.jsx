import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Contact Me
        </h2>

        <p className="text-center text-gray-600 mb-10">
          Feel free to reach out for opportunities, collaborations, or questions.
        </p>

        {/* Contact Info */}
        <div className="space-y-6 text-center">

          {/* Email */}
          <p className="text-lg text-gray-700">
            📧{" "}
            <a
              href="mailto:ommkarshinde05@gmail.com"
              className="font-semibold text-blue-600 hover:text-blue-700 no-underline"
            >
              ommkarshinde05@gmail.com
            </a>
          </p>

          {/* LinkedIn */}
          <p className="text-lg text-gray-700">
            💼{" "}
            <a
              href="https://www.linkedin.com/in/omkar-shinde-0666b537b/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-blue-600 hover:text-blue-700 no-underline"
            >
              linkedin.com/in/OmkarShinde
            </a>
          </p>

          {/* GitHub */}
          <p className="text-lg text-gray-700">
            📁{" "}
            <a
              href="https://github.com/Omkarshinde05"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-blue-600 hover:text-blue-700 no-underline"
            >
              github.com/OmkarShinde05
            </a>
          </p>

        </div>
      </div>
    </section>
  );
}
