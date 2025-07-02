import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaDocker, FaAws
} from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiMongodb, SiPostgresql, SiGraphql, SiNginx, SiStrapi } from 'react-icons/si';
// import './Skills.css';

const skills = [
  { icon: <FaHtml5 />, name: 'HTML5' },
  { icon: <FaCss3Alt />, name: 'CSS3' },
  { icon: <FaJsSquare />, name: 'JavaScript' },
  { icon: <SiTypescript />, name: 'TypeScript' },
  { icon: <FaReact />, name: 'React' },
  { icon: <SiNextdotjs />, name: 'Next.js' },
  { icon: <FaNodeJs />, name: 'Node.js' },
  { icon: <SiMongodb />, name: 'MongoDB' },
  { icon: <SiPostgresql />, name: 'PostgreSQL' },
  { icon: <SiGraphql />, name: 'GraphQL' },
  { icon: <FaDocker />, name: 'Docker' },
  { icon: <FaAws />, name: 'AWS' },
  { icon: <SiNginx />, name: 'Nginx' },
  { icon: <SiStrapi />, name: 'Strapi' },
];

const Skills = () => {
  return (
    <div id="skills" className="skills-section">
      <div className="section-title-container">
        <h2 className="section-title">My Skills</h2>
      </div>
      <div className="skills-slider-container">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={'auto'}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={5000}
          grabCursor={true}
          className="skills-swiper"
        >
          {skills.map((skill, index) => (
            <SwiperSlide key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <p className="skill-name">{skill.name}</p>
            </SwiperSlide>
          ))}
           {skills.map((skill, index) => (
            <SwiperSlide key={`duplicate-${index}`} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <p className="skill-name">{skill.name}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Skills; 