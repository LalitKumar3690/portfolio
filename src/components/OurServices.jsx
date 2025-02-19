import React from 'react';
import { FaCamera, FaCogs, FaFileVideo, FaVideo } from 'react-icons/fa';
import { ArrowRight } from 'lucide-react';

const services = [
  { icon: <FaCogs className="text-blue-400 text-3xl transform duration-300 group-hover:-rotate-45" />, title: "Motion graphics" },
  { icon: <FaFileVideo className="text-blue-400 text-3xl transform duration-300 group-hover:-rotate-45" />, title: "Scriptwriting and editing" },
  { icon: <FaVideo className="text-blue-400 text-3xl transform duration-300 group-hover:-rotate-45" />, title: "Video distribution" },
  { icon: <FaCamera className="text-blue-400 text-3xl transform duration-300 group-hover:-rotate-45" />, title: "Video hosting" }
];

const OurServices = () => {
  return (
    <div className="bg-gradient-to-t to-black from-[#0a0215] py-12 px-4 md:px-8 lg:px-16 xl:px-32" id='about'>
      <div className="max-w-[85rem] flex flex-col  lg:flex-row gap-10 mx-auto">
        <div className='flex flex-col items-center md:text-left md:items-start justify-center md:justify-start text-center'>
          <div className="mb-8">
            <h2 className="uppercase text-blue-400 font-semibold mb-2">OUR SERVICES</h2>
            <h3 className="text-3xl text-white font-bold">WHAT WE DO?</h3>
            <hr className='w-16 mt-5 h-1 bg-[#4b98ff] text-[#4b98ff]' />
          </div>

          <div className="text-gray-300 text-lg leading-8 mb-8">
            <p>
              If you hire a videographer of our team you will get a video professional to make a custom video
              for your business and, once the project is over.
            </p>
          </div>

          {/* View All Services */}
          <div className="mt-8">
            <button className="relative inline-flex items-center px-4 py-2 border border-blue-400 text-blue-400 font-medium rounded hover:bg-blue-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50">
              VIEW ALL SERVICES
              <ArrowRight className="ml-2" size={16} />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:ml-20 lg:grid-cols-2  items-center justify-center content-center gap-10">
          {services.map((service, index) => (
            <div key={index} className="flex group flex-col items-center md:items-start">
              <div className="relative p-3 border border-blue-400 rounded mb-4 transform duration-300 group-hover:rotate-45">
                {service.icon}
              </div>
              <h4 className="text-xl text-white font-semibold mb-2">{service.title}</h4>
              <p className="text-gray-300 text-center md:text-left max-w-[90%] ">
                Whether you're halfway through the editing process, or you haven't even started, our post
                production services can put the finishing touches.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
