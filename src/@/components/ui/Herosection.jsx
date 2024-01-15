import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

const Hero = () => {
  return (
    <div className="hero bg-slate-50 h-screen flex items-center justify-center text-slate-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 flex flex-col items-start">
          <h1 className="text-4xl md:text-6xl font-bold">
            PROXY AUTO GARAGE
          </h1>
          <p className="mt-4 md:mt-8 text-lg md:text-xl">
            We are a modern center of automobile auto-mechanics that is
            specialized in repairing all types of cars. We have expert
            technicians, timely service delivery, and state-of-the-art
            equipment. We ensure commitment to quality and customer
            satisfaction.
          </p>
          <a
            href="tel:0704 222 666"
            className="bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-lg font-medium mt-4"
          >
            Call Us
          </a>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <VideoWrapper>
          <ReactPlayer
  url="https://www.youtube.com/shorts/2IgYuuJleSs"
  playing
  loop
  muted
  width="100%"
  height="100%"
  responsive
  aspectRatio="16:9" // Add this prop
/>


          </VideoWrapper>
        </div>
      </div>
    </div>
  );
};

export default Hero;

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  & > * {
    position: absolute;
    top: 0;
    left: 0;
  }
`;
