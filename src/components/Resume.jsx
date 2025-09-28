import React, { useState } from "react";

export default function Resume() {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    setShowDetails((prev) => !prev);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/OmkarShinde.pdf"; // Make sure this is in public/
    link.download = "OmkarShinde.pdf";
    link.click();
  };

  return (
    <section id="resume" className="resume-section">
      <h2>📄 Resume</h2>
      <p>Click below to view more details or download my resume.</p>

      {/* Show Details Button */}
      <button onClick={handleShowDetails} className="toggle-details-btn">
        {showDetails ? "Hide Details" : "Show Details"}
      </button>

      {/* Conditional Resume Details */}
      {showDetails && (
        <div className="resume-details">
          <h3>Resume Summary</h3>
          <ul>
            <li>👨‍💻 Frontend Developer</li>
            <li>⚛️ Skilled in React.js, JavaScript, and UI Design</li>
            <li>🚀 Built multiple web apps and personal projects</li>
            <li>📱 Focused on responsive & accessible design</li>
          </ul>
        </div>
      )}

      {/* View Resume Button */}
      <a
        href="/OmkarShinde.pdf"
        target="_blank"
      >
        <button className="view-resume-btn">👁️ View Resume</button>
      </a>

      {/* Download Button */}
      <button  onClick={handleDownload} className="download-resume-btn">
        📥 Download Resume
      </button>
    </section>
  );
}
