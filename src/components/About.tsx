import './About.css';
import GlassWrapper from './GlassWrapper';
// import myImage from '/images/gagan.png'; // Assuming gagan.png is in public/images

const About = () => {
  return (
    <div id="about" className="about-section">
      <GlassWrapper>
        <div className="about-container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-heading">Who I Am?</h2>
              <p>
                My name is GAGAN. I am a professional and enthusiastic programmer in my daily life. I am a quick learner with a self-learning attitude. I love to learn and explore new technologies and am passionate about problem-solving.
              </p>
              <p>
                I love to do most of the things using JavaScript. I am available for any kind of job opportunity that suits my skills and interests.
              </p>
            </div>
            <div className="about-image">
              <img src={'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'} alt="Gagan" />
            </div>
          </div>
          <div className="about-title-vertical">
            <span>ABOUT ME</span>
          </div>
        </div>
      </GlassWrapper>
    </div>
  );
};

export default About; 