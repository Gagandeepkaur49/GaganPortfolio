import { TypeAnimation } from 'react-type-animation';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <div id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <h1>Hello,</h1>
          <h1>This is <span className="name">Gagan</span>, I'm a</h1>
          <h1>Professional Software Developer.</h1>

          <div className="social-media">
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaGithub /></a>
          </div>

          <div className="hero-buttons">
            <button className="btn btn-primary">Contact Me</button>
            <button className="btn btn-secondary">Get Resume</button>
          </div>
        </div>
        <div className="hero-code">
          <div className="code-editor">
            <div className="editor-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="editor-body">
              <TypeAnimation
                sequence={[
                  `const coder = {
  name: 'Gagan',
  skills: ['React', 'NextJS', 'Redux', 'Express', 'NestJS', 'MySQL', 'MongoDB', 'Docker', 'AWS'],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5
    );
  }
};`,
                  2000,
                  '',
                ]}
                wrapper="pre"
                speed={50}
                style={{ fontSize: '0.85em', display: 'inline-block', whiteSpace: 'pre-wrap' }}
                repeat={Infinity}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 