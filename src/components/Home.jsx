import React from 'react'
import  Slider  from './Slider'
import OurServices from './OurServices'
import Skills from './Skills'
import BlogSlider from './ BlogSlider'
import "./Home.css"
import Hero2 from './Hero2'
const Home = () => {
  return (
    <div className='w-full  h-auto'>
      <Slider/>
      <OurServices />
      <Skills/>
      <BlogSlider/>
      <Hero2/>
    </div>
  )
}

export default Home
