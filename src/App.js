import React from 'react';
import SimpleNav from './@/components/ui/SimpleNav';
import Herosection from './@/components/ui/Herosection';
import Servicessection from './@/components/ui/Servicessection';
import AboutUs from './@/components/ui/AboutUs';  // Moved the AboutUs section up
import Gallery from './@/components/ui/Gallery';
import Testimonials from './@/components/ui/Testimonials';
import FAQs from './@/components/ui/Faqs';
import Contacts from './@/components/ui/Contacts';
import Footersection from './@/components/ui/Footersection';
import { Link, Element } from 'react-scroll';
import './index.css';
import './Tailwind.css';

function App() {
  return (
    <div className="App">
      <SimpleNav />
      
      {/* Navigation Links */}
      <Link to="herosection" smooth={true} duration={500}>
        Home
      </Link>
      <Link to="servicessection" smooth={true} duration={500}>
        Services
      </Link>
      <Link to="aboutus" smooth={true} duration={500}>
        About Us
      </Link>
      <Link to="gallery" smooth={true} duration={500}>
        Gallery
      </Link>
      <Link to="testimonials" smooth={true} duration={500}>
        Testimonials
      </Link>
      <Link to="faqs" smooth={true} duration={500}>
        FAQs
      </Link>
      <Link to="contacts" smooth={true} duration={500}>
        Contacts
      </Link>

      {/* Sections */}
      <Element name="herosection">
        <Herosection />
      </Element>
      <Element name="servicessection">
        <Servicessection />
      </Element>
      <Element name="aboutus">
        <AboutUs />
      </Element>
      <Element name="gallery">
        <Gallery />
      </Element>
      <Element name="testimonials">
        <Testimonials />
      </Element>
      <Element name="faqs">
        <FAQs />
      </Element>
      <Element name="contacts">
        <Contacts />
      </Element>

      <Footersection />
    </div>
  );
}

export default App;
