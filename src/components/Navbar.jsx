import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'




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
        <ul>
          {NAVIGATIONS.map((nav, index) => (
            <li 
            onClick={()=>{setIsOpen(false)}}
            key={index} className='inline-block'>
              <NavLink to={nav.link} className='p-4 hover:text-'>{nav.name}</NavLink>
            </li>
          ))
          }
        </ul>
          <button onClick={(e)=>{setIsOpen(!isOpen);e.stopPropagation()}} className='cursor-pointer'>Contact us</button>
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
        className='absolute w-[25rem] h-full bg-white right-0 top-0 p-4'>
        

        </motion.div>
      </motion.div>
    </nav>
  )
}

export default Navbar
