// SkillsSection.js
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SkillsSection() {
  return (
    <section className="skills-section" id="skills">
    <div className="container my-5">
      <h2 className="text-center mb-4">💻 Skills</h2>
      <div className="row g-4">
        {/* Frontend */}
        <div className="col-12 col-md-4">
          <div className="card text-center h-100">
            <div className="card-body">
              <h5 className="card-title text-primary">Frontend</h5>
              <ul className="list-group list-group-flush mt-3">
                <li className="list-group-item">HTML</li>
                <li className="list-group-item">CSS</li>
                <li className="list-group-item">JavaScript</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Frameworks */}
        <div className="col-12 col-md-4">
          <div className="card text-center h-100">
            <div className="card-body">
              <h5 className="card-title text-primary">Frameworks</h5>
              <ul className="list-group list-group-flush mt-3">
                <li className="list-group-item">React</li>
                <li className="list-group-item">Bootstrap</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tools & APIs */}
        <div className="col-12 col-md-4">
          <div className="card text-center h-100">
            <div className="card-body">
              <h5 className="card-title text-primary">Tools & APIs</h5>
              <ul className="list-group list-group-flush mt-3">
                <li className="list-group-item">Git</li>
                <li className="list-group-item">GitHub</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
