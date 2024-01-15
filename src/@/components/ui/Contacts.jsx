import React from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiUser } from 'react-icons/fi';

const Contacts = () => {
  const contactVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2 } },
  };

  return (
    <motion.section
      id="contacts"
      className="bg-red-500 py-16"
      variants={contactVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto text-center" >
        <motion.h2 className="text-3xl font-bold mb-8  text-white" >Get in Touch</motion.h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactCard
            icon={<FiPhone className="text-4xl mb-4" />}
            title="Call Us"
            content="0704 222 666"
          />
          <ContactCard
            icon={<FiMail className="text-4xl mb-4" />}
            title="Send us mail"
            content="info@proxyauto.co.ke"
          />
        </motion.div>
        
      </div>
    </motion.section>
  );
};

const ContactCard = ({ icon, title, content }) => (
  <motion.div className="p-4 bg-white rounded-lg shadow-md">
    {icon}
    <motion.h3 className="text-xl font-semibold mb-2">{title}</motion.h3>
    <motion.p className="text-gray-700 mb-4">{content}</motion.p>
  </motion.div>
);

export default Contacts;
