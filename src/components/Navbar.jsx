import React,{useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import {Form } from './'


//icons
import { IoClose } from "react-icons/io5";




const NAVIGATIONS =  [
  {
    id: 1,
    name: 'Home',
    link: '/'
  },
  {
    id: 2,
    name: 'About',
    link: '/about'
  },
  {
    id: 3,
    name: 'Projects',
    link: '/projects'
  },
  {
    id: 4,
    name: 'Services',
    link: '/services'
  }
]


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [isHover, setIsHover] = useState(0)
  const [isActive, setIsActive] = useState(0)






  return (
    <nav 
    onClick={(e)=>setIsOpen(false)}
    className='w-full h-16 bg-gray-800 text-white flex justify-between items-center px-4'>
      <div className='w-full max-w-[100rem] mx-auto h-full  flex justify-between items-center'>
        <button className='h-full w-20 flex justify-center items-center'>
          <span className='flex items-end'>
          <span className='text-3xl font-extrabold'>Port</span>
          <span>Folio</span>
          </span>
        </button>
        <ul className='flex items-center gap-7 text-base font-semibold tracking-wide'>
          {NAVIGATIONS.map((nav, index) => (
            <li 
            onMouseEnter={()=>setIsHover(index)}
            onMouseLeave={()=>setIsHover(null)}
            onClick={()=>{setIsOpen(false);setIsActive(index)}}
            key={index} className='inline-block'>
              <NavLink 
              className={`${isActive == index ? 'text-blue-500' : 'text-white'} `}
              to={nav.link} >{nav.name}
              <motion.h2
              initial={{width: 0}}
              animate={{width: isHover == index || isActive == index ? '100%' : 0}}
              className='h-[0.05rem] rounded-md bg-white'></motion.h2>
              </NavLink>
            </li>
          ))
          }
        </ul>
          <button onClick={(e)=>{setIsOpen(!isOpen);e.stopPropagation();setIsActive(4);}} className={`cursor-pointer text-xl font-bold ${isActive == 4 ? 'text-blue-500' : 'text-white'}`}>Contact <span className='text-sm font-medium'>us</span></button>
      </div>
      <motion.div 
      onClick={()=>{setIsOpen(false)}}
      initial={{opacity: 0,display: 'none'}}
      animate={{opacity: isOpen ? 1 : 0, display: isOpen ? 'block' : 'none'}}
      transition={{duration: 0.3}}
      className='fixed w-full h-full bg-gray-800 top-16 left-0 z-50' style={{display: isOpen ? 'block' : 'none'}}>
        <motion.div
        onClick={(e)=>e.stopPropagation()}
        initial={{x: '100%'}}
        animate={{x: isOpen ? 0 : '100%'}}
        transition={{duration: 0.3}}
        className='absolute w-[25rem] h-full text-black bg-white right-0 top-0 p-4'>
          <div className='flex justify-between items-center w-full'>
            <h1 className='text-xl font-semibold'>What can I help you with?</h1>
            <IoClose className='text-2xl cursor-pointer' onClick={()=>setIsOpen(false)}/>
          </div>
          <Form close={setIsOpen}/>
        </motion.div>
      </motion.div>
    </nav>
  )
}

export default Navbar
