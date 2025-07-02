import React from 'react';
import { HomeIcon, UserIcon, ChartPieIcon, AcademicCapIcon, DocumentTextIcon, BriefcaseIcon } from '@heroicons/react/24/solid';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', icon: <HomeIcon className="nav-icon" />, label: 'Home' },
  { to: '/about', icon: <UserIcon className="nav-icon" />, label: 'About' },
  { to: '/experience', icon: <ChartPieIcon className="nav-icon" />, label: 'Experience' },
  { to: '/skills', icon: <DocumentTextIcon className="nav-icon" />, label: 'Skills' },
  { to: '/education', icon: <AcademicCapIcon className="nav-icon" />, label: 'Education' },
  { to: '/blogs', icon: <DocumentTextIcon className="nav-icon" />, label: 'Blogs' },
  { to: '/projects', icon: <BriefcaseIcon className="nav-icon" />, label: 'Projects' },
  // { to: '/projects-page', icon: <BriefcaseIcon className="nav-icon" />, label: 'Projects Page' },
  { to: '/resume', icon: <DocumentTextIcon className="nav-icon" />, label: 'Resume' },
  { to: '/contact', icon: <UserIcon className="nav-icon" />, label: 'Contact' },
];

const Header = () => {
  const location = useLocation();

  return (
    <nav className="bottom-nav liquid-glass">
      <ul>
        {navLinks.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className={location.pathname === link.to ? 'active' : ''}
              aria-label={link.label}
            >
              {link.icon}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header; 