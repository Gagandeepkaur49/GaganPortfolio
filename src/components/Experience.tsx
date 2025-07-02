import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/lotties/looty1.json';
import { FaUserTie } from 'react-icons/fa';
// import './Experience.css';

const experiences = [
  {
    date: '(Jan 2022 - Present)',
    title: 'SOFTWARE ENGINEER I',
    company: 'Teton Private Ltd.',
  },
  {
    date: '(Jan 2021 - Jan 2022)',
    title: 'FULLSTACK DEVELOPER',
    company: 'Fiverr (freelance)',
  },
  {
    date: '(Jan 2018 - Present)',
    title: 'SELF EMPLOYED',
    company: 'Code and build something in everyday.',
  },
];

const Experience = () => {
  return (
    <div id="experience" className="experience-section">
      <div className="section-title-container">
        <h2 className="section-title">Experiences</h2>
      </div>
      <div className="experience-container">
        <div className="experience-lottie">
          <Lottie animationData={animationData} loop={true} />
        </div>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div className="experience-card" key={index}>
              <div className="experience-date">{exp.date}</div>
              <div className="experience-content">
                <div className="experience-icon"><FaUserTie /></div>
                <div className="experience-details">
                  <h3>{exp.title}</h3>
                  <p>{exp.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience; 