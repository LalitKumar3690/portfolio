// Hero.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import heroimg from '../assets/Hero/hero.png'
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      text: "Videographer's Portfolio",
      description: "For Website and Video Editing",
    },
    {
      text: "Second Slide Text",
      description: "Second Slide Description",
    },
    {
      text: "Third Slide Text",
      description: "Third Slide Description",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [slides.length]);

  //Framer Motion Animation
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const slideVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative bg-cover bg-center h-[500px] md:h-[600px] lg:h-[700px] w-full"
    id='home'
      style={{ backgroundImage: `url(${heroimg})` }}>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="container mx-auto relative h-full flex items-center justify-start">
        <AnimatePresence>
        <motion.div
          ref={ref}
          className="text-white flex h-full flex-col items-stretch justify-end py-20 gap-y-3 text-left pl-5 md:pl-10 lg:pl-20"
          variants={slideVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <p className="uppercase text-sm md:text-md lg:text-lg font-semibold mb-2">{slides[currentSlide].description}</p>
          <h1 className="text-4xl md:text-5xl lg:text-9xl font-bold mb-4" >{slides[currentSlide].text}</h1>
         
          <button className="btn bg-transparent hover:bg-primary text-white w-fit px-10 border-white hover:border-primary btn-primary">See More About Us</button>
          <div className="mt-6 flex space-x-3">
  {slides.map((_, index) => (
    <div
      key={index}
      className={`w-6 h-6 flex items-center justify-center border-b-2 pb-1  cursor-pointer ${currentSlide === index ? '  text-white' : 'text-gray-500 '}`}
      onClick={() => setCurrentSlide(index)}
    >
      {(index + 1).toString().padStart(2, '0')}
    </div>
  ))}
</div>

        </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Slider;
