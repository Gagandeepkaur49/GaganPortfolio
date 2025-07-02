import { FaGithub, FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
// The CSS will be in App.css
// import './Contact.css';

const Contact = () => {
  return (
    <div id="contact" className="contact-section">
      <div className="section-title-container">
        <h2 className="section-title">Contact Me</h2>
      </div>
      <div className="contact-container glassy-bg p-10">
        <div className="contact-form-container">
          <p>If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests.</p>
          <form className="contact-form">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows={5} required></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
        <div className="contact-details-container">
          <div className="contact-details-list">
            <div className="contact-detail-item">
              <MdEmail /> <span>gagan@example.com</span>
            </div>
            <div className="contact-detail-item">
              <MdPhone /> <span>+8801608797655</span>
            </div>
            <div className="contact-detail-item">
              <MdLocationOn /> <span>Middle Badda, Dhaka, Bangladesh - 1212</span>
            </div>
          </div>
          <div className="contact-social-media">
            <a href="#"><FaGithub /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaFacebookF /></a>
          </div>
        </div>
        <div className="contact-title-vertical">
          <span>CONTACT</span>
        </div>
      </div>
    </div>
  );
};

export default Contact; 