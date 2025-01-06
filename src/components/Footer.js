import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

function Footer() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  // Hwlonbsbcub

  const validateForm = () => {
    const errors = {};
    if (!name.trim()) errors.name = 'Name is required';
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Invalid email address';
    }
    if (!message.trim()) errors.message = 'Message is required';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      emailjs
        .send(
          'phildagt', //  service ID
          'template_po9wfda', // template ID
          {
            name,
            email,
            message,
          },
          '3frLnWx8elcofTFRW' // user key
        )
        .then(
          (response) => {
            console.log('SUCCESS!', response);
            alert('Form submitted successfully!');
            setName('');
            setEmail('');
            setMessage('');
          },
          (error) => {
            console.error('FAILED...', error);
            alert('Failed to send message. Please try again later.');
          }
        );
    }
  };

  return (
    <footer id="footer" className="p-10 sm:p-20 bg-[#0B192C] w-full h-full">
      <div className="p-10 sm:p-20 grid grid-cols-1 md:grid-cols-3 gap-10 bg-[#0B192C] w-full h-full">
        {/* Contact and Socials */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <p className="text-4xl text-white mb-8">PHILD</p>
          <p className="text-2xl text-gray-400 mb-8">
            Our company has been developing high-quality and reliable software for corporate needs since 2008. We are renowned professionals of software development.
          </p>
          <div className="mb-6">
            <p className="text-3xl text-purple-300">Address</p>
            <p className="text-xl font-bold text-white">4730 Crystal Springs Dr, Los Angeles, CA 90027</p>
          </div>
          <div className="mb-6">
            <p className="text-3xl text-purple-300">Phone</p>
            <p className="text-xl font-bold text-white">+1 323-913-4688, +1 323-888-4554</p>
          </div>
          <div className="mb-6">
            <p className="text-3xl text-purple-300">E-mail</p>
            <p className="text-xl font-bold text-white">philipdagt@gmail.com</p>
          </div>
          <div className="flex space-x-7 text-gray-500 text-5xl">
            <FontAwesomeIcon icon={faFacebook} aria-label="Facebook" className="hover:text-purple-500 transition" />
            <FontAwesomeIcon icon={faInstagram} aria-label="Instagram" className="hover:text-purple-500 transition" />
            <FontAwesomeIcon icon={faTwitter} aria-label="Twitter" className="hover:text-purple-500 transition" />
            <FontAwesomeIcon icon={faGoogle} aria-label="Google" className="hover:text-purple-500 transition" />
          </div>
        </motion.div>

        {/* Questions Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <h2 className="text-4xl text-gray-400 mb-6">Questions? Contact Us</h2>
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-4">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                type="text"
                className={`bg-gray-300 bg-opacity-20 w-full h-14 text-2xl placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 text-center ${errors.name ? 'ring-2 ring-red-500' : ''}`}
                aria-label="Name"
                aria-invalid={!!errors.name}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div className="mb-4">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                type="email"
                className={`bg-gray-300 bg-opacity-20 w-full h-14 text-2xl placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 text-center ${errors.email ? 'ring-2 ring-red-500' : ''}`}
                aria-label="Email"
                aria-invalid={!!errors.email}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div className="mb-6">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                className={`bg-gray-300 bg-opacity-20 w-full h-32 text-2xl placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 text-center resize-none ${errors.message ? 'ring-2 ring-red-500' : ''}`}
                aria-label="Message"
                aria-invalid={!!errors.message}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="bg-purple-500 text-white text-2xl py-2 px-4 rounded hover:bg-purple-600 transition"
              aria-label="Submit Form"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* What We Offer */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1}}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <h2 className="text-4xl text-gray-400 mb-6">What We Offer</h2>
          <div className="space-y-6">
            {['Db Management', 'Android Apps', 'Windows App'].map((offer, index) => (
              <div key={index} className="flex justify-between items-center group text-2xl text-white">
                <p>{offer}</p>
                <div className="relative flex items-center">
                  <FontAwesomeIcon
                    icon={faCaretLeft}
                    className="text-white transition-transform duration-300 group-hover:-translate-x-8 group-hover:text-purple-500"
                    aria-hidden="true"
                  />
                  <div className="absolute top-1/2 -translate-y-1/2 left-0 w-1 h-8 bg-purple-500 transition-all group-hover:h-full"></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
