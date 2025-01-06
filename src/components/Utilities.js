import React from 'react';
import { motion } from 'framer-motion';
import worker from '../images/worker.jpg'; // Ensure this image exists
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faHeadphones, faCloud } from '@fortawesome/free-solid-svg-icons';

function Utilities() {
  const tabs = [
    {
      name: 'Call Center Solutions',
      initial: { x: 100, opacity: 0 },
      icon: faHeadphones,
      text: 'Our experts provide products of any complexity for call centers.',
    },
    {
      name: 'Cloud Solutions',
      initial: { x: 100, opacity: 0 },
      icon: faCloud,
      text: 'We can also offer you reliable cloud development solutions.',
    }
  ];

  return (
    <div>
      <div className="flex flex-wrap py-28">
        {/* Image section hidden on small screens */}
        <div className="w-full md:w-[30%] px-10 box-border hidden md:block">
          <img src={worker} alt="worker" className="w-full h-full object-cover" />
        </div>

        {/* Right section (Grid Layout) */}
        <div className="w-full md:w-[70%] px-6 md:px-36 ml-auto py-4">
          {/* Grid for displaying 2 boxes per row on larger screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              whileHover={{ scale: 1.05 }}
              className="flex shadow-lg w-full h-[400px] items-center justify-center group"
            >
              <div className="flex flex-col space-y-8 items-center">
                <h1 className="text-2xl md:text-3xl font-bold">See all Services</h1>
                {/* Responsive HR */}
                <motion.hr
                  className="border-t border-gray-400 w-28 group-hover:w-40 group-hover:border-purple-600"
                  transition={{ duration: 0.3 }}
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-purple-400 hover:bg-purple-700 p-4 font-bold text-white rounded"
                >
                  All Services
                </motion.button>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              whileHover={{ scale: 1.05 }}
              className="flex shadow-lg w-full h-[400px] items-center justify-center group"
            >
              <div className="flex flex-col space-y-8 items-center">
                <FontAwesomeIcon icon={faPhoneAlt} className="text-3xl" />
                <p className="text-4xl">Corporate Solutions</p>
                <motion.hr
                  className="border-t border-gray-400 w-28 group-hover:w-40 group-hover:border-purple-600"
                  transition={{ duration: 0.3 }}
                />
                <p className="text-center text-xl px-4">
                  Need Specific Software for your company? We are ready to develop it.
                </p>
              </div>
            </motion.div>

            {/* Card 3 (Tabs) */}
            {tabs.map((tab) => {
              return (
                <motion.div
                  key={tab.name}
                  initial={tab.initial}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex shadow-lg w-full h-[400px] items-center justify-center group"
                >
                  <div className="flex flex-col space-y-8 items-center">
                    <FontAwesomeIcon icon={tab.icon} className="text-4xl" />
                    <p className="text-2xl md:text-4xl">{tab.name}</p>
                    <motion.hr
                      className="border-t border-gray-400 w-28 group-hover:w-40 group-hover:border-purple-600"
                      transition={{ duration: 0.3 }}
                    />
                    <p className="text-center text-lg md:text-xl px-4">{tab.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Section for Latest Projects */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="flex flex-col justify-center items-center text-center space-y-6"
        >
          <p className="text-4xl md:text-6xl font-bold mb-6">Latest projects</p>
          <p className="max-w-2xl text-xl md:text-2xl">
            In our portfolio, you can browse the latest products developed for our clients for different corporate purposes. Our qualified team of interface designers and software developers is always ready to create something unique for you.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Utilities;
