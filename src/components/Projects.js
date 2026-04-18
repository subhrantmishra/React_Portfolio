import React, { useState } from 'react';

const Projects = () => {
  // separate state for each card
  const [showGalleryImages, setShowGalleryImages] = useState(false);
  const [showCalculatorImages, setShowCalculatorImages] = useState(false);
  const [showPortfolioimages, setShowPortfolioimages] = useState(false);
  const [showHotelimages, setShowHotelimages] = useState(false);
  const [showArmoryimages, setShowArmoryimages] = useState(false);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h1 className="section-heading">
          <span>Our </span>Projects
        </h1>
        <p>We provide high standard clean websites for your business solutions</p>

        {/* Image Gallery Card */}
        <div className="card">
          <div className="project-title">Image Gallery</div>
          <div className="project-description">
            Interactive image gallery website with responsive design and hover effects using HTML, CSS, and JS.
          </div>
          <button
            className="view-images-btn"
            onClick={() => setShowGalleryImages(!showGalleryImages)}
          >
            {showGalleryImages ? 'Hide Images' : 'View Images'}
          </button>
          {showGalleryImages && (
            <div className="project-images">
              <img src="/images/G1.png" alt="Gallery 1" />
              <img src="/images/G2.png" alt="Gallery 2" />
              <img src="/images/G3.png" alt="Gallery 3" />
              <img src="/images/G4.png" alt="Gallery 4" />
            </div>
          )}
        </div>

        {/* Calculator Card */}
        <div className="card">
          <div className="project-title">Calculator</div>
          <div className="project-description">
            The Simple Web Calculator is functional and responsive with hover effects, built using HTML, CSS, and JS.
          </div>
          <button
            className="view-images-btn"
            onClick={() => setShowCalculatorImages(!showCalculatorImages)}
          >
            {showCalculatorImages ? 'Hide Images' : 'View Images'}
          </button>
          {showCalculatorImages && (
            <div className="project-images">
              <img src="/images/C1.png" alt="Calculator 1" />
              <img src="/images/C2.png" alt="Calculator 2" />
              <img src="/images/C3.png" alt="Calculator 3" />
              <img src="/images/C4.png" alt="Calculator 4" />
            </div>
          )}
        </div>

        <div className="card">
          <div className="project-title">Portfolio Website</div>
          <div className="project-description">
            Responsive and hover effect personal website built with HTML, CSS, JS. Includes resume,
            projects, and contact form.
          </div>
          <button
            className="view-images-btn"
            onClick={() => setShowPortfolioimages(!showPortfolioimages)}
          >
            {showPortfolioimages ? 'Hide Images' : 'View Images'}
          </button>
          {showPortfolioimages && (
            <div className="project-images">
              <img src="/images/P1.png" alt="" />
              <img src="/images/P2.png" alt="" />
              <img src="/images/P3.png" alt="" />
              <img src="/images/P4.png" alt="" />
              <img src="/images/P5.png" alt="" />
              <img src="/images/P6.png" alt="" />
            </div>
          )}
        </div>

        <div className="card">
          <div className="project-title">Hotel Management System</div>
          <div className="project-description">
          The Hotel Management System is a web-based front-end project designed only using Java
          and MySql workbench  to manage hotel room bookings, guest information, and service records.
          </div>
          <button
            className="view-images-btn"
            onClick={() => setShowHotelimages(!showHotelimages)}
          >
            {showHotelimages ? 'Hide Images' : 'View Images'}
          </button>
          {showHotelimages && (
            <div className="project-images">
              <img src="/images/H1.png" alt="" />
              <img src="/images/H2.png" alt="" />
              <img src="/images/H3.png" alt="" />
              <img src="/images/H4.png" alt="" />
              <img src="/images/H5.png" alt="" />
              <img src="/images/H6.png" alt="" />
            </div>
          )}
        </div>

        <div className="card">
          <div className="project-title">Armory Management System</div>
          <div className="project-description">
          The hardware which secure weapon tracking using biometrics, ultrasonic sensors, 
          and database interface for defense armories.
          </div>
          <button
            className="view-images-btn"
            onClick={() => setShowArmoryimages(!showArmoryimages)}
          >
            {showArmoryimages ? 'Hide Images' : 'View Images'}
          </button>
          {showArmoryimages && (
            <div className="project-images">
              <img src="/images/A1.jpeg" alt="" />
              <img src="/images/A2.jpeg" alt="" />
              <img src="/images/A3.jpeg" alt="" />
              <img src="/images/A4.jpeg" alt="" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
