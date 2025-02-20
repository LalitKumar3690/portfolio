import React, { useState } from 'react';
import { useNavigate,NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoClose, IoMenu } from 'react-icons/io5';
import { Form } from './';

const NAVIGATIONS = [
  { id: 1, name: 'Home', link: 'home', },
  { id: 2, name: 'About', link: 'about' },
  { id: 3, name: 'Skills ', link: 'skills' },
  { id: 4, name: 'Projects', link: 'projects' },
];

const Navbar = () => {
  const navigate= useNavigate()
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (link) => {
    navigate('/')
    const element = document.getElementById(link)
    if(element)
    {
      const position = element.getBoundingClientRect().top+window.scrollY-60;
      window.scrollTo({top:position,behavior:'smooth'});
    }
  }

  return (
    <nav className='w-full fixed top-0 left-0 z-50 h-20 backdrop-blur-lg border-b border-blue-900/50 bg-[#0a0215]/40 text-white flex justify-between items-center px-4'>
      <div className='w-full max-w-[100rem] mx-auto h-full flex justify-between items-center'>
        <button className='h-full w-20 flex justify-center items-center'>
          <span className='flex items-end text-3xl font-extrabold'>Port<span className='text-xl'>Folio</span></span>
        </button>
        
        {/* Desktop Navigation */}
        <ul className='hidden md:flex items-center gap-7 text-base font-semibold tracking-wide'>
          {NAVIGATIONS.map((nav, index) => (
            <li key={nav.id} className='inline-block'>
              <div 
                to={nav.link} 
                className={`transition-colors duration-300 ${isActive === index ? 'text-blue-500' : 'text-white'}`} 
                onClick={() => {setIsActive(index);handleScroll(nav.link)}}>
                {nav.name}
              </div>
            </li>
          ))}
        </ul>
        
        <button 
          onClick={() => setIsOpen(true)} 
          className={`hidden md:block text-xl font-bold ${isActive === 4 ? 'text-blue-500' : 'text-white'}`}>Contact <span className='text-sm font-medium'>us</span>
        </button>

        {/* Hamburger Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className='md:hidden text-2xl'>
          {menuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        initial={{ x: '100%' }} 
        animate={{ x: menuOpen ? '0%' : '100%' }} 
        transition={{ duration: 0.3 }}
        className={`fixed top-16 right-0 bottom-0 w-full h-screen bg-[#0e141b] text-black shadow-lg md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
        <ul className='flex flex-col gap-6 p-6'>
          {NAVIGATIONS.map((nav, index) => (
            <li key={nav.id}>
              <NavLink 
                to={nav.link} 
                className={`block text-lg ${isActive === index ? 'text-gray-500' : 'text-white'}`} 
                onClick={() => { setIsActive(index); setMenuOpen(false); }}>
                {nav.name}
              </NavLink>
              
            </li>
          ))}
        </ul>
        <div className='p-6'>
          <button 
            onClick={() => setIsOpen(true)} 
            className='text-lg font-bold text-white lg:text-gray-700'>Contact Us
          </button>
        </div>
      </motion.div>

      {/* Contact Form Sidebar */}
      <motion.div 
        onClick={() => { setIsOpen(false); }}
        initial={{ opacity: 0, display: 'none' }}
        animate={{ opacity: isOpen ? 1 : 0, display: isOpen ? 'block' : 'none' }}
        transition={{ duration: 0.3 }}
        className='fixed w-full h-full text-white bg-black/50  left-0 z-50' style={{ display: isOpen ? 'block' : 'none' }}>
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ x: '100%' }}
          animate={{ x: isOpen ? 0 : '100%' }}
          transition={{ duration: 0.3 }}
          className='absolute w-[25rem] h-screen text-black bg-[#0e141b] right-0 top-0 p-10 lg:p-4'>
          <div className='flex justify-between items-center w-full'>
            <h1 className='text-xl text-white font-semibold'>What can I help you with?</h1>
            <IoClose className='text-2xl text-white cursor-pointer' onClick={() => setIsOpen(false)} />
          </div>
          <Form close={setIsOpen} />
        </motion.div>
      </motion.div>
    </nav>
  );
};

export default Navbar;