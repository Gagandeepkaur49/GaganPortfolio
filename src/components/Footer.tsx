// import React from 'react';
import { FaStar, FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaHome, FaBlog, FaProjectDiagram } from 'react-icons/fa';
// import './Footer.css'; // Styles will be in App.css

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-brand">
          <p className="footer-title">&copy; Developer Portfolio by Gagan</p>
          <a href="https://github.com/Gagandeepkaur49" target="_blank" rel="noopener noreferrer" className="footer-star-link">
            <FaStar /> Star
          </a>
        </div>
        <div className="footer-section footer-contact">
          <h4>Contact</h4>
          <p><FaEnvelope /> gagandeep492000@gmail.com</p>
          <p><FaPhone /> +91-8168732894</p>
        </div>
        <div className="footer-section footer-links">
          <h4>Links</h4>
          <a href="/" className="footer-link"><FaHome /> Home</a>
          <a href="/projects" className="footer-link"><FaProjectDiagram /> Projects</a>
          <a href="/blogs" className="footer-link"><FaBlog /> Blogs</a>
        </div>
        <div className="footer-section footer-social">
          <h4>Follow</h4>
          <div className='flex gap-4'>
            <a href="https://github.com/Gagandeepkaur49" target="_blank" rel="noopener noreferrer" className="footer-social-link"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/gagandeep-kaur-7587a1319/" target="_blank" rel="noopener noreferrer" className="footer-social-link"><FaLinkedin /></a>
            {/* <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer" className="footer-social-link"><FaTwitter /></a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 