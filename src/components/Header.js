import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Header() {
  const [activeLink, setActiveLink] = useState('/'); // Track active link
  const [scrolledToFooter, setScrolledToFooter] = useState(false); // Track if scrolled to footer
  const [isTransparent, setIsTransparent] = useState(true); // Track header background transparency

  const isActive = (path) => activeLink === path;

  // Check if the page is at the footer section and adjust header transparency
  useEffect(() => {
    const onScroll = () => {
      const footer = document.getElementById('footer');
      if (footer) {
        const rect = footer.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setScrolledToFooter(true); // Set activeLink to Contact when at footer
        } else {
          setScrolledToFooter(false); // Reset active link when not at footer
        }
      }

      // Adjust header transparency based on scroll position
      if (window.scrollY > 50) {
        setIsTransparent(false);
      } else {
        setIsTransparent(true);
      }

      // Check which section is in view and update active link
      const sections = ['home', 'about', 'footer'];
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if the section is in the viewport or is very close to it
          if (
            rect.top <= window.innerHeight / 2 && 
            rect.bottom >= window.innerHeight / 2
          ) {
            setActiveLink(`/${section.charAt(0).toUpperCase() + section.slice(1)}`);
          }
        }
      });

      // Special handling for Home (Header) section since it's fixed
      const header = document.getElementById('header');
      if (header && window.scrollY <= 50) {
        setActiveLink('/'); // Home is active when the scroll is near the top
      }
    };

    window.addEventListener('scroll', onScroll);
    // Ensure to trigger it once on initial load in case the user is already scrolled
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const handleLinkClick = (path, scrollTarget) => {
    setActiveLink(path); // Set active link
    if (scrollTarget === null || scrollTarget === 'home') {
      // Scroll to the top of the page if it's the home link
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Scroll to a specific section
      const targetSection = document.getElementById(scrollTarget);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.div
      id="header" // Added id here for better scroll detection
      className={`fixed top-0 w-full h-20 py-4 flex items-center justify-between text-xl font z-50 transition-all duration-300 ${
        isTransparent
          ? 'bg-transparent text-white shadow-none'
          : 'bg-white text-black shadow-lg'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="px-3 font-bold text-2xl sm:text-3xl">PHILD</h3>

      <div className="flex flex-wrap items-center justify-center sm:space-x-6 space-x-4">
        {/* Home Link */}
        <motion.h2
          className={`cursor-pointer  transition-all ${
            isActive('/Home')
              ? 'text-red-500 font-bold'
              : isTransparent
              ? 'text-white'
              : 'text-black'
          } text-base sm:text-lg md:text-xl`}
          onClick={() => handleLinkClick('/Home', 'home')} // Pass `home` to scroll to Home section
        >
          Home
        </motion.h2>

        {/* About Link */}
        <motion.h3
          className={`cursor-pointer  transition-all ${
            isActive('/About')
              ? 'text-red-500 font-bold'
              : isTransparent
              ? 'text-white'
              : 'text-black'
          } text-base sm:text-lg md:text-xl`}
          onClick={() => handleLinkClick('/About', 'about')} // Pass `about` to scroll to About section
        >
          About
        </motion.h3>

        {/* Contact Link */}
        <motion.h3
          className={`cursor-pointer  transition-all ${
            isActive('/Contact') || scrolledToFooter
              ? 'text-red-500 font-bold'
              : isTransparent
              ? 'text-white'
              : 'text-black'
          } text-base sm:text-lg md:text-xl`}
          onClick={() => handleLinkClick('/Contact', 'footer')} // Pass `footer` to scroll to Footer section
        >
          Contact
        </motion.h3>
      </div>
    </motion.div>
  );
}

export default Header;
