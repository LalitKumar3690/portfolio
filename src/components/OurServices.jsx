import React from 'react';
import { FaCamera, FaCogs, FaFileVideo, FaVideo } from 'react-icons/fa';
import { TfiAndroid } from "react-icons/tfi";
import { FaAppStoreIos } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { GrHostMaintenance } from "react-icons/gr";
import { ArrowRight } from 'lucide-react';

const services = [
  { icon: <TfiAndroid className="text-blue-400 text-3xl transform duration-300 group-hover:-rotate-45" />, title: "Android Apps",des:"I create custom Android apps tailored to your business, delivering seamless functionality and an intuitive user experience to help you reach your goals." },
  { icon: <FaAppStoreIos className="text-blue-400 text-3xl transform duration-300 group-hover:-rotate-45" />, title: "IOS Apps", des:"I develop custom iOS apps that provide a smooth and engaging user experience, tailored to meet your business needs and drive success.", },
  { icon: <MdWeb className="text-blue-400 text-3xl transform duration-300 group-hover:-rotate-45" />, title: "Websites", des:"I design and develop custom websites that are visually appealing, user-friendly, and optimized to meet your business objectives." },
  { icon: <GrHostMaintenance className="text-blue-400 text-3xl transform duration-300 group-hover:-rotate-45" />, title: "Maintenance",des: "I offer reliable maintenance services to keep your website or app running smoothly, with regular updates, bug fixes, and performance optimizations." }
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
            As a web developer, I build custom websites and applications that meet your business needs. I collaborate with professionals to ensure seamless integration of media, including custom videos, to enhance user experience.
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
               {service.des}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
