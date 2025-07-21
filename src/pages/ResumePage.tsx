import GlassWrapper from '../components/GlassWrapper';

const ResumePage = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
    <GlassWrapper>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', letterSpacing: '2px', fontWeight: 700 }}>GAGANDEEP KAUR</h2>
        <p style={{ textAlign: 'center', marginBottom: '1rem', fontWeight: 500 }}>
          AMBALA CITY | +91 81687 32894 | <a href="mailto:sainigagans534@gmail.com">sainigagans534@gmail.com</a>
        </p>
        <section style={{ marginBottom: '1.5rem' }}>
          <h3>OBJECTIVE</h3>
          <p>
            A highly motivated and results-driven web development professional with expertise in front-end and back-end technologies, seeking a challenging role in a dynamic and reputed organization. Offering strong problem-solving skills, a solid foundation in modern web development frameworks, and a passion for continuous learning.
          </p>
        </section>
        <section style={{ marginBottom: '1.5rem' }}>
          <h3>SKILLS</h3>
          <p>Wordpress | HTML | CSS | Javascript | Git | Github | Vercel | React.js</p>
        </section>
        <section style={{ marginBottom: '1.5rem' }}>
          <h3>EXPERIENCE</h3>
          <div style={{ marginBottom: '1rem' }}>
            <strong>Web Developer & Digital Marketing Executive</strong> <span style={{ float: 'right' }}>(Duration: 6 Months)</span><br />
            <span>Alphanumeric Ideas Pvt Ltd | Mohali</span>
            <ul style={{ marginTop: '0.5rem', marginBottom: 0 }}>
              <li>Led team task division and managed web development projects.</li>
              <li>Converted clients through online platforms and offline meetings.</li>
              <li>Created and presented reports to management.</li>
              <li>Managed client relationships and provided ongoing support.</li>
              <li>Learned and applied digital marketing strategies.</li>
              <li>Monitored and improved online brand presence, engaging with users to strengthen customer relationships.</li>
            </ul>
          </div>
        </section>
        <section style={{ marginBottom: '1.5rem' }}>
          <h3>PROJECT</h3>
          <div style={{ marginBottom: '0.5rem' }}>
            <strong>Ecommerce</strong> &nbsp;
            <a href="https://newecommercewebsite.onrender.com" target="_blank" rel="noopener noreferrer">https://newecommercewebsite.onrender.com</a>
            <ul style={{ marginTop: '0.5rem', marginBottom: 0 }}>
              <li>Built a responsive and modern UI for a fully functional e-commerce platform using React.js.</li>
              <li>Integrated dynamic product listings, search/filter functionality, and interactive cart features.</li>
              <li>Collaborated with backend APIs to display product data and manage user interactions.</li>
            </ul>
          </div>
        </section>
        <section style={{ marginBottom: '1.5rem' }}>
          <h3>EDUCATION</h3>
          <ul style={{ marginBottom: 0 }}>
            <li><strong>MBA (Master of Business Administration)</strong>, Kurukshetra University | Kurukshetra &mdash; CGP: 7.8</li>
            <li><strong>BBA (Bachelor of Business Administration)</strong>, Kurukshetra University | Kurukshetra &mdash; CGP: 7.4</li>
          </ul>
        </section>
        <section style={{ marginBottom: '1.5rem' }}>
          <h3>CERTIFICATIONS</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>Responsive Web Design, Freecodecamp</li>
            <li>Javascript Algorithms and Data Structure, Freecodecamp</li>
          </ul>
        </section>
      </div>
    </GlassWrapper>
  </div>
);

export default ResumePage; 