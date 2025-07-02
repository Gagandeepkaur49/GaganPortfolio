import React from 'react';
import GlassWrapper from '../components/GlassWrapper';

const ResumePage = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
    <GlassWrapper>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Resume</h2>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <section style={{ marginBottom: '1.5rem' }}>
          <h3>Gagan</h3>
          <p>Email: gagan@email.com | Phone: +1 234 567 8901</p>
          <p>Location: Middle Badda, Dhaka, Bangladesh - 1212</p>
        </section>
        <section style={{ marginBottom: '1.5rem' }}>
          <h4>Summary</h4>
          <p>Professional and enthusiastic programmer with a passion for problem-solving and learning new technologies.</p>
        </section>
        <section style={{ marginBottom: '1.5rem' }}>
          <h4>Experience</h4>
          <ul>
            <li>Software Engineer I, Teton Private Ltd. (Jan 2022 - Present)</li>
            <li>Fullstack Developer, Fiverr (freelance) (Jan 2021 - Jan 2022)</li>
            <li>Self Employed, Code and build something every day. (Jan 2018 - Present)</li>
          </ul>
        </section>
        <section style={{ marginBottom: '1.5rem' }}>
          <h4>Education</h4>
          <ul>
            <li>Bachelor Degree, National University of Bangladesh (2020 - Present)</li>
            <li>Higher Secondary Certificate, Noakhali Islamia Kamil Madrasah (2018 - 2020)</li>
            <li>Secondary School Certificate, Baitus Saif Islamia Madrasah (2008 - 2018)</li>
          </ul>
        </section>
        <section>
          <h4>Skills</h4>
          <p>React, NextJS, Redux, Express, NestJS, MySQL, MongoDB, Docker, AWS, TypeScript, JavaScript</p>
        </section>
      </div>
    </GlassWrapper>
  </div>
);

export default ResumePage; 