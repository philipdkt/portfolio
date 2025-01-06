import React, { useState } from 'react';
import laptop from '../images/laptop.png';
import stats from '../images/stats.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import calander from '../images/calander.png';
import storm from '../images/storm.png';
import handshake from '../images/handshake.jpg';
import money from '../images/money.png';

function ProjectDisplay({ activeTab }) {
  const [hovered, setHovered] = useState(null); // Track hovered index

  // Define the sets of boxes for each tab
  const allBoxes = [
    { img: laptop, alt: 'Laptop', title: 'Innovations', description: 'We work hard on every app to deliver top-notch features with great UI that you won\'t find anywhere else.' },
    { img: stats, alt: 'Stats', title: 'Statistically Accurate', description: 'We work hard on every app to deliver top-notch features with great UI that you won\'t find anywhere else.' },
    { img: calander, alt: 'Calendar', title: 'Timely', description: 'We work hard on every app to deliver top-notch features with great UI that you won\'t find anywhere else.' },
    { img: storm, alt: 'Storm', title: 'Protection', description: 'We work hard on every app to deliver top-notch features with great UI that you won\'t find anywhere else.' },
    { img: handshake, alt: 'Handshake', title: 'Trust', description: 'We work hard on every app to deliver top-notch features with great UI that you won\'t find anywhere else.' },
    { img: money, alt: 'Money', title: 'Affordability', description: 'We work hard on every app to deliver top-notch features with great UI that you won\'t find anywhere else.' }
  ];

  // Split the boxes based on the selected tab
  const displayBoxes = () => {
    if (activeTab === 'All') {
      return allBoxes;
    } else if (activeTab === 'Mobile Apps') {
      return allBoxes.slice(0, 3); // Show first 3 boxes
    } else if (activeTab === 'UX and Design') {
      return allBoxes.slice(3); // Show last 3 boxes
    } else {
      return []; // Return an empty array if no tab matches
    }
  };

  const boxesToDisplay = displayBoxes(); // Get the boxes based on activeTab

  return (
    <div className='flex flex-col'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center'>
        {boxesToDisplay.length > 0 ? (
          boxesToDisplay.map((box, index) => (
            <motion.div
              key={index}
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1, transition: { duration: 1.5 } }}
              viewport={{ once: true }}
              onMouseEnter={() => setHovered(index)}  // Set hovered box index
              onMouseLeave={() => setHovered(null)}    // Reset on mouse leave
              className='relative flex justify-center items-center bg-gray-100 w-full h-[400px]'>
              <AnimatePresence>
                {hovered !== index ? (
                  <div className=' items-center h-full'>
                    <img src={box.img} alt={box.alt} className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <motion.div
                    key="hovered"
                    initial={{ x: -50, y: -30, opacity: 0 }}
                    animate={{ x: 0, y: 0, opacity: 1 }}
                    exit={{
                      x: -50,
                      y: -30,
                      opacity: 0,
                      transition: { duration: 0.5, type: 'easeInOut' },
                    }}
                    transition={{
                      duration: 0.2,
                      delay: 0.2,
                      type: 'easeInOut',
                    }}
                    className='absolute w-full h-full bg-white'>
                    <div className='flex flex-col absolute inset-0 items-center justify-center'>
                      <div className='flex items-center'>
                        <FontAwesomeIcon icon={faSearch} className="text-4xl mr-2" />
                        <span className='hover:text-gray-500 cursor-pointer text-4xl text-purple-500'>
                          {box.title}
                        </span>
                      </div>
                      <div className='px-8 mt-4 text-2xl'>
                        {box.description}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))
        ) : (
          null
        )}
      </div>
    </div>
  );
}

export default ProjectDisplay;
