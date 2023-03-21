import React from 'react';
import { motion } from 'framer-motion'; // Library for animations
import { FaCheck } from 'react-icons/fa'; // Fontawesome icon

const Roadmap = ({ data }) => {
  return (
    <div className='max-w-screen-lg mx-auto px-4'>
      <div className='relative'>
        {data.map((item, index) => (
          <div key={index} className='flex items-center mb-8'>
            <div className='relative flex items-center'>
              <motion.div
                className='rounded-full bg-green-500 p-2'
                initial={{ scale: 0 }} // Start with a small size
                animate={{ scale: 1 }} // Animate to full size
                transition={{ duration: 0.5, delay: 0.2 * index }} // Delay the animation for each item
              >
                <FaCheck className='text-white' />
              </motion.div>
              <div className='absolute top-0 -mt-2 w-full h-2 bg-green-500'></div>
            </div>
            <div className='ml-4'>
              <motion.div
                className='text-lg font-medium text-gray-900'
                initial={{ opacity: 0, x: -10 }} // Start hidden and move from left
                animate={{ opacity: 1, x: 0 }} // Animate to visible and in place
                transition={{ duration: 0.5, delay: 0.2 * index }} // Delay the animation for each item
              >
                {item.title}
              </motion.div>
              <motion.div
                className='text-gray-500 mt-1'
                initial={{ opacity: 0, x: -10 }} // Start hidden and move from left
                animate={{ opacity: 1, x: 0 }} // Animate to visible and in place
                transition={{ duration: 0.5, delay: 0.2 * index }} // Delay the animation for each item
              >
                {item.description}
              </motion.div>
            </div>
          </div>
        ))}
        <div className='absolute top-0 -mt-2 w-full h-2 bg-green-500'></div>
      </div>
    </div>
  );
};

export default Roadmap;
