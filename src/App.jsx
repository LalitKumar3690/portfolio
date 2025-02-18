import React from 'react'
import {Navbar,Footer} from './components/'
import {Outlet} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
const App = () => {
  return (
    <div className='w-full '>
      <ToastContainer />
      <Navbar />
      <Outlet/>
      <Footer />
    </div>
  )
}

export default App
