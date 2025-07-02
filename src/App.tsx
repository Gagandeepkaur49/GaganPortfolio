import './App.css'
import Header from './components/Header'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Blogs from './components/Blogs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import ProjectsPage from './pages/ProjectsPage'
import ResumePage from './pages/ResumePage'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/proj`ects-page" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </BrowserRouter>
  )
}

export default App
