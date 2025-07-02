import { FaUserGraduate } from 'react-icons/fa';
import Lottie from 'lottie-react';
import animationData from '../assets/lotties/looty2.json';

const educationHistory = [
  {
    date: '2020 - Present',
    degree: 'BACHELOR DEGREE',
    institution: 'National University of Bangladesh',
  },
  {
    date: '2018 - 2020',
    degree: 'HIGHER SECONDARY CERTIFICATE',
    institution: 'Noakhali Islamia Kamil Madrasah',
  },
  {
    date: '2008 - 2018',
    degree: 'SECONDARY SCHOOL CERTIFICATE',
    institution: 'Baitus Saif Islamia Madrasah',
  },
];

const Education = () => {
  return (
    <div id="education" className="education-section">
      <div className="section-title-container">
        <h2 className="section-title">Education</h2>
      </div>
      <div className="education-container">
        <div className="education-timeline">
          {educationHistory.map((edu, index) => (
            <div className="education-card" key={index}>
              <div className="education-date">{edu.date}</div>
              <div className="education-content">
                <div className="education-icon"><FaUserGraduate /></div>
                <div className="education-details">
                  <h3>{edu.degree}</h3>
                  <p>{edu.institution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="education-lottie">
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Education; 