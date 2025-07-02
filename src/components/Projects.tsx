import React from 'react';
// import './Projects.css';

const projectData = [
  {
    name: 'AI Powered Financial App',
    details: {
      name: 'AI Powered Financial App',
      tools: ['Express', 'MongoDB', 'OpenAI API', 'AWS SES', 'S3', 'Node Mailer', 'Joi', 'Puppeteer', 'EC2', 'PM2', 'Nginx'],
      myRole: 'Backend Developer',
      description: 'Me and my team built an AI-powered financial mobile application...'
    }
  },
  {
    name: 'Travel Agency App',
    details: {
        name: 'Travel Agency App',
        tools: ['NextJS', 'Tailwind CSS', 'Google Maps', 'NestJS'],
        myRole: 'Full Stack Developer',
        description: 'A comprehensive travel agency application with booking and mapping features...'
    }
  },
    {
    name: 'AI Powered Real Estate',
    details: {
        name: 'AI Powered Real Estate',
        tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'CronJob', 'JWT'],
        myRole: 'Full Stack Developer',
        description: 'An AI-driven platform for real estate with payment integration...'
    }
  },
  {
    name: 'Newsroom Management',
    details: {
        name: 'Newsroom Management',
        tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', 'Calendar'],
        myRole: 'Full Stack Developer',
        description: 'A newspaper management dashboard application...'
    }
  }
];

const Projects = () => {
  return (
    <div id="projects" className="projects-section">
      <div className="section-title-container">
        <h2 className="section-title">Projects</h2>
      </div>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <div className="project-code-editor" key={index}>
            <div className="editor-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="editor-title">{project.name}</span>
            </div>
            <div className="editor-body">
              <pre>
                <code>
                  <span className="code-keyword">const</span> project = {'{\n'}
                  {'  '}<span className="code-property">name</span>: <span className="code-string">'{project.details.name}'</span>,
                  {'\n  '}<span className="code-property">tools</span>: [<span className="code-string">'{project.details.tools.join("', '")}'</span>],
                  {'\n  '}<span className="code-property">myRole</span>: <span className="code-string">'{project.details.myRole}'</span>,
                  {'\n  '}<span className="code-property">description</span>: <span className="code-string">'{project.details.description}'</span>
                  {'\n}'};
                </code>
              </pre>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 