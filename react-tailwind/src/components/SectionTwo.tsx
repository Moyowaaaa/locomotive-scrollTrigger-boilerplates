import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap'
gsap.registerPlugin(ScrollTrigger)


const SectionTwo = () => {
useEffect(() => {
  const tl = gsap.timeline({
    scrollTrigger:{
      trigger:'#sectionTwo',
      start: "top center",
      end: "top +=10",

      scrub:true
    }
  })
  .from('.box',{
    y:'200', ease:"power3.inOut", opacity:0,duration:1.2
  })
})


  return (
    <div className='h-screen bg-[orange] text-5xl w-full flex items-center justify-center' id="sectionTwo">SectionTwo
    
    <div className='box w-[10rem] h-[10rem] mx-auto bg-[blue]'></div>
    </div>
  )
}

export default SectionTwo