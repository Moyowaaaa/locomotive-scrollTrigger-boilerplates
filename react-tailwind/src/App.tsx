import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo'
import useLocoScroll from './hooks/useLocoScroll'


function App() {

  const containerRef = useRef<HTMLDivElement | null>(null)

  useLocoScroll()

  return (
    <div className='main-container' >
    <div className='scroll-container' ref={containerRef} data-scroll-container id="main-container">
     <SectionOne />
     <SectionTwo />

      </div>
    </div>
  )
}

export default App
