import React from "react";
import { Link as ScrollLink, Element } from 'react-scroll';
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterest, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 px-8 py-12 text-white">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-gray-300 mb-8 md:mb-0">
          <p className="text-lg font-bold">Proxy Auto Garage</p>
          <p className="text-sm">Your trusted partner in automotive care</p>
        </div>
        <div className="flex space-x-4">
  {/* Replace ScrollLink with regular anchor tags */}
  <a href="https://www.facebook.com/YourFacebookPage" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
    <FaFacebookF size={24} />
  </a>
  <a href="https://www.instagram.com/YourInstagramPage" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
    <FaInstagram size={24} />
  </a>
  <a href="https://twitter.com/YourTwitterHandle" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
    <FaTwitter size={24} />
  </a>
  <a href="https://www.pinterest.com/YourPinterestPage" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
    <FaPinterest size={24} />
  </a>
  <a href="https://www.youtube.com/YourYouTubeChannel" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
    <FaYoutube size={24} />
  </a>
</div>

      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mt-8 border-t border-gray-700 pt-8">
        <div className="flex flex-wrap space-x-4 space-y-2 mb-4 md:mb-0">
          {/* Use ScrollLink instead of a regular anchor tag */}
          <ScrollLink to="servicessection" smooth={true} duration={500} className="hover:text-red-500">Services</ScrollLink>
          <ScrollLink to="testimonials" smooth={true} duration={500} className="hover:text-red-500">Testimonials</ScrollLink>
          <ScrollLink to="contacts" smooth={true} duration={500} className="hover:text-red-500">Contact Us</ScrollLink>
          <ScrollLink to="faqs" smooth={true} duration={500} className="hover:text-red-500">FAQ</ScrollLink>
        </div>
        <div className="text-gray-300 text-sm">
          © {new Date().getFullYear()} Proxy Auto Garage. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
