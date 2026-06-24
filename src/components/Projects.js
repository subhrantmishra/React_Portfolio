import React, { useState } from 'react';
import TextPressure from "./TextPressure";
const Projects = () => {
  // separate state for each card
  const [showPathology, setPathology] = useState(false);
  const [showSmartClassroom, setSmartClassroom] = useState(false);
  const [showPortfolioimages, setShowPortfolioimages] = useState(false);
  const [showHotelimages, setShowHotelimages] = useState(false);
  const [showArmoryimages, setShowArmoryimages] = useState(false);
  const [showHandWritten, setHandWritten] = useState(false);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h1 className="section-heading">
        <span>
          <TextPressure text="Our " textColor="#000000" />
        </span>
          <TextPressure text="Projects" textColor="#00d9ff" />
        </h1>
        <p>We provide high standard clean websites for your business solutions</p>



        <div className="projects-grid">
        {/* Pathology Card */}
        <div className="card">
          <div className="project-title">Pathology Management System</div>
          <div className="project-description">
            Developed a full-stack Pathology Management System using TypeScript and Supabase 
            with secure admin authentication, patient record management, automated test 
            pricing, result processing, and printable diagnostic report generation.
          </div>
          <button
            className="view-images-btn"
            onClick={() => setPathology(!showPathology)}
          >
            {showPathology ? 'Hide Images' : 'View Images'}
          </button>
          {showPathology && (
            <div className="project-images">
              <img src="/images/AP1.png" alt="" />
              <img src="/images/AP2.png" alt="" />
              <img src="/images/AP3.png" alt="" />
              <img src="/images/AP4.png" alt="" />
              <img src="/images/AP5.png" alt="" />
              <img src="/images/AP6.png" alt="" />
            </div>
          )}
        </div>


        <div className="card">
          <div className="project-title">Smart Classroom Help System</div>
          <div className="project-description">
            Built a full-stack student–teacher doubt-solving platform using React, 
            Node.js, and MongoDB, allowing real-time doubt submission, response management, 
            and seamless interaction between students and teachers.
          </div>
          <button
            className="view-images-btn"
            onClick={() => setSmartClassroom(!showSmartClassroom )}
          >
            {showSmartClassroom ? 'Hide Images' : 'View Images'}
          </button>
          {showSmartClassroom && (
            <div className="project-images">
              <img src="/images/S1.png" alt="" />
              <img src="/images/S2.png" alt="" />
              <img src="/images/S3.png" alt="" />
              <img src="/images/S4.png" alt="" />
              
            </div>
          )}
        </div>

        <div className="card">
          <div className="project-title">Armory Management System</div>
          <div className="project-description">
          Engineered a Defense Armory Security Management System with biometric 
          authentication, ultrasonic sensors, and database integration for secure 
          weapon tracking and access management.
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
          <div className="project-title">Portfolio Website</div>
          <div className="project-description">
            Created a responsive portfolio website using React with project 
          showcases, resume details, interactive hover effects, and a contact form.
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
          <div className="project-title">Hand-Written Digit Recognition</div>
          <div className="project-description">
            Designed a Handwritten Digit Recognition System using Python 
            and Machine Learning to recognize handwritten digits and report 
            prediction accuracy as confidence percentages.
          </div>
          <button
            className="view-images-btn"
            onClick={() => setHandWritten(!showHandWritten )}
          >
            {showHandWritten ? 'Hide Images' : 'View Images'}
          </button>
          {showHandWritten && (
            <div className="project-images">
              <img src="/images/HW1.png" alt="" />
              <img src="/images/HW2.png" alt="" />
              
            </div>
          )}
        </div>
        </div>{/* end projects-grid */}


      </div>
    </section>
  );
};

export default Projects;
