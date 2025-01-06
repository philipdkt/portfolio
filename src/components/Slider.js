import React from 'react';
import pic1 from '../images/pic1.jpeg';  // Ensure this image is present
// import { motion } from 'framer-motion';

function Slider() {
  return (
    <div>
      <div className="relative w-full h-screen">
        {/* Image with fallback */}
        <img
          src={pic1}
          alt="Award-winning software background"
          className="w-full h-full object-cover"
          onError={(e) => e.target.src = 'fallback-image.jpg'} // Fallback image if pic1 doesn't load
        />
        
        
      </div>
    </div>
  );
}

export default Slider;
