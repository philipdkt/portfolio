import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectDisplay from './ProjectDisplay'; // Assuming it's in the same folder

function Projects() {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = [
    { name: 'All', initial: { x: -100 } },
    { name: 'Mobile Apps', initial: { x: 100 } },
    { name: 'UX and Design', initial: { y: -100 } },
  ];

  return (
    <div className="py-14">
      <div className="flex justify-center items-center text-3xl grid-cols-3 divide-x-4 cursor-pointer">
        {tabs.map((tab) => (
          <motion.div
            key={tab.name}
            initial={tab.initial}
            whileInView={{
              x: 0,
              y: 0,
              transition: {
                duration: 0.5,
                type: 'easeInOut',
              },
            }}
            viewport={{ once: true }}
            onTap={() => setActiveTab(tab.name)}
            className={`px-3 mb-7 ${
              activeTab === tab.name
                ? 'text-purple-500 font-bold'
                : 'text-gray-400 hover:text-purple-500'
            }`}
          >
            <motion.p>{tab.name}</motion.p>
          </motion.div>
        ))}
      </div>
      
      {/* Pass the activeTab to ProjectDisplay to determine which boxes to show */}
      <ProjectDisplay activeTab={activeTab} />
    </div>
  );
}

export default Projects;
