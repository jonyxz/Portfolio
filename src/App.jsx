import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'

function App() {


  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-white selection:text-gray-800'>
      <div className="fixed top-0 -z-10 h-full w-full">
        <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Home />
        <About />
        <Experience/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  )
}

export default App
