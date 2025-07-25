import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
// import './ScrollToTop.css'; // Styles will be in App.css

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="scroll-to-top">
      {isVisible && 
        <button onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      }
    </div>
  );
};

export default ScrollToTop; 