import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';

const images = [
  '/images/Proxyauto Garage Best Garage in Kenya Kiambu Road German vehicles garage in kenya (1).jpg',
  '/images/Proxyauto Garage Best Garage in Kenya Kiambu Road German vehicles garage in kenya (11).jpg',
  '/images/Proxyauto Garage Best Garage in Kenya Kiambu Road German vehicles garage in kenya (13).jpg',
  '/images/Proxyauto Garage Best Garage in Kenya Kiambu Road German vehicles garage in kenya (18).jpg',
  '/images/Proxyauto Garage Best Garage in Kenya Kiambu Road German vehicles garage in kenya (23).jpg',
  '/images/Proxyauto Garage Best Garage in Kenya Kiambu Road German vehicles garage in kenya (45).jpg',
  '/images/Proxyauto Garage Best Garage in Kenya Kiambu Road German vehicles garage in kenya (59).JPG',
  '/images/Proxyauto Garage Best Garage in Kenya Kiambu Road German vehicles garage in kenya (68).JPG',
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const openLightbox = (index) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredImages = images.filter((image) =>
    image.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-center mb-4">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search by image name"
          value={searchTerm}
          onChange={handleSearch}
          className="border border-gray-300 rounded-md px-2 py-1 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((image, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            onClick={() => openLightbox(index)}
          >
            <img
              src={process.env.PUBLIC_URL + image}
              alt={`Gallery Image ${index + 1}`}
              className=" rounded-lg w-full h-full object-cover cursor-pointer"
            />
          </motion.div>
        ))}
      </div>
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <motion.img
            src={process.env.PUBLIC_URL + images[selectedImage]}
            alt={`Gallery Image ${selectedImage + 1}`}
            className="max-h-full max-w-full"
          />
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;
