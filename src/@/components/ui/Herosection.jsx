import React from 'react';
import { useViewportScroll, useTransform, motion } from 'framer-motion';
import { FaWrench } from 'react-icons/fa';

const Hero = () => {
  // Get scroll y position
  const { scrollY } = useViewportScroll();

  // Create y animation for parallax effect
  const y = useTransform(scrollY, [0, 500], [0, -100]);

  // Define the animation variants for the hero section
  const variants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="hero bg-slate-50 h-screen flex items-center justify-center text-slate-800">
      <motion.div
        className="container mx-auto px-4 flex flex-col md:flex-row items-center"
        initial="hidden"
        animate="visible"
        variants={variants}
      >
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 flex flex-col items-start">
          <h1 className="text-4xl md:text-6xl font-bold flex items-center justify-center md:justify-start">
            <FaWrench className="mr-4 text-gray-900" />
            PROXY AUTO GARAGE
          </h1>
          <p className="mt-4 md:mt-8 text-lg md:text-xl">
            We are a modern center of automobile auto-mechanics that is
            specialized in repairing all types of cars. We have expert
            technicians, timely service delivery, and state-of-the-art
            equipment. We ensure commitment to quality and customer
            satisfaction.
          </p>
          <motion.a
            href="tel:0704 222 666"
            className="bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-lg font-medium mt-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Call Us
          </motion.a>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <motion.img
            src={process.env.PUBLIC_URL + "/images/hero1.jpg"}
            alt="Garage image"
            className="rounded-lg w-full h-full object-cover"
            style={{ y }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
