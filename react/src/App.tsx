import { useRef, useState } from 'react'

import './App.scss'
import SectionOne from './components/section1/SectionOne'
import SectionTwo from './components/section2/SectionTwo'
import useLocoScroll from './hooks/useLocoScroll'
import SectionThree from './components/section3/SectionThree'

function App() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  useLocoScroll()


  return (
    <div className='main-container' >
    <div className='scroll-container' ref={containerRef} data-scroll-container id="main-container">
     <SectionOne />
     <SectionTwo />
     <SectionThree />

      </div>
    </div>
  )
}

export default App
