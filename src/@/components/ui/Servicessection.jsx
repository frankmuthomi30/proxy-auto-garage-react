import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { FaWrench, FaCar, FaOilCan, FaTools } from 'react-icons/fa';

const Services = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]); // Adjust the scale values

  const servicesData = [
    {
      icon: <FaWrench />,
      title: 'Mechanical Repairs',
      description: 'Expert mechanical repairs for all types of vehicles.',
    },
    {
      icon: <FaCar />,
      title: 'Bodywork & Painting',
      description: 'High-quality bodywork and painting services.',
    },
    {
      icon: <FaOilCan />,
      title: 'Oil Change Services',
      description: 'Regular and efficient oil change services for your vehicle.',
    },
    {
      icon: <FaTools />,
      title: 'Diagnostic Services',
      description: 'Advanced diagnostic services using state-of-the-art tools.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05 },
  };

  return (
    <motion.section
      id="services"
      className="bg-red-500 py-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto text-center">
        <motion.h2 className="text-3xl font-bold mb-8" variants={itemVariants}>
          Our Services
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={itemVariants}
          style={{ scale }} // Apply scale to the entire grid
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="p-4 bg-white rounded-lg shadow-md"
              variants={itemVariants}
              whileHover="hover"
            >
              <div className="text-2xl text-red-600 mb-4">{service.icon}</div>
              <motion.h3 className="text-xl font-semibold mb-2">{service.title}</motion.h3>
              <motion.p className="text-gray-700">{service.description}</motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
