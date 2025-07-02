import React from 'react';
import { FaHeart, FaComment } from 'react-icons/fa';
// import './Blogs.css'; // This was causing an error, styles are in App.css

const blogData = [
  {
    image: 'https://picsum.photos/seed/1/400/200',
    time: '1 year ago',
    likes: 22,
    comments: 2,
    title: 'How to create a Popover using React and Tailwind CSS',
    duration: '2 Min Read',
    description: 'Popover is a common UI element in web applications...'
  },
  {
    image: 'https://picsum.photos/seed/2/400/200',
    time: '2 years ago',
    likes: 18,
    comments: 5,
    title: 'Highly Effective 7 Habits for Developers',
    duration: '3 Min Read',
    description: 'As a software developer, success doesnt just come from luck or chance...'
  },
  {
    image: 'https://picsum.photos/seed/3/400/200',
    time: '2 years ago',
    likes: 60,
    comments: 1,
    title: 'Top 10 React JS interview questions.',
    duration: '5 Min Read',
    description: 'Most asked React JS interview questions & answers...'
  },
  {
    image: 'https://picsum.photos/seed/4/400/200',
    time: '1 year ago',
    likes: 8,
    comments: 1,
    title: 'Asynchronous programming in JavaScript',
    duration: '2 Min Read',
    description: 'JavaScript is a single-threaded language...'
  },
  {
    image: 'https://picsum.photos/seed/5/400/200',
    time: '1 year ago',
    likes: 19,
    comments: 2,
    title: 'Manual deployment Using GITHUB & EC2 for quick setup',
    duration: '2 Min Read',
    description: 'GitHub and EC2 manual deployment...'
  },
  {
    image: 'https://picsum.photos/seed/6/400/200',
    time: '1 year ago',
    likes: 8,
    comments: 1,
    title: 'Scope in JavaScript',
    duration: '2 Min Read',
    description: 'For those looking to quickly deploy a project...'
  },
  // Additional dummy blogs
  {
    image: 'https://picsum.photos/seed/7/400/200',
    time: '3 months ago',
    likes: 34,
    comments: 4,
    title: 'React Performance Optimization Tips',
    duration: '4 Min Read',
    description: 'Learn how to optimize your React apps for speed and efficiency.'
  },
  {
    image: 'https://picsum.photos/seed/8/400/200',
    time: '6 months ago',
    likes: 12,
    comments: 0,
    title: 'Understanding TypeScript Generics',
    duration: '6 Min Read',
    description: 'A deep dive into generics in TypeScript and how to use them.'
  },
  {
    image: 'https://picsum.photos/seed/9/400/200',
    time: '1 month ago',
    likes: 27,
    comments: 3,
    title: 'Deploying with Vercel vs Netlify',
    duration: '3 Min Read',
    description: 'A comparison of two popular deployment platforms for frontend projects.'
  },
  {
    image: 'https://picsum.photos/seed/10/400/200',
    time: '2 weeks ago',
    likes: 15,
    comments: 2,
    title: 'CSS Grid vs Flexbox: When to Use Which?',
    duration: '5 Min Read',
    description: 'A practical guide to choosing between CSS Grid and Flexbox.'
  },
  {
    image: 'https://picsum.photos/seed/11/400/200',
    time: '5 days ago',
    likes: 40,
    comments: 7,
    title: 'Building Accessible Web Apps',
    duration: '7 Min Read',
    description: 'Best practices for making your web applications accessible to everyone.'
  },
];

const Blogs = () => {
  return (
    <div id="blogs" className="blogs-section">
      <div className="section-title-container">
        <h2 className="section-title">Blogs</h2>
      </div>
      <div className="blogs-container">
        {blogData.map((blog, index) => (
          <div className="blog-card" key={index}>
            <div className="blog-image">
              <img src={blog.image} alt={blog.title} />
            </div>
            <div className="blog-content">
              <div className="blog-meta">
                <span>{blog.time}</span>
                <div className="meta-stats">
                  <span><FaHeart /> {blog.likes}</span>
                  <span><FaComment /> {blog.comments}</span>
                </div>
              </div>
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-duration">{blog.duration}</p>
              <p className="blog-description">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs; 