import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap'
gsap.registerPlugin(ScrollTrigger)


const SectionTwo = () => {
  useEffect(() => {
    // console.log('current',pageRef.current)
    const ctx = gsap.context(() => {
    const sectionTwoTl = gsap.timeline({
      scrollTrigger: {
        trigger:'#sectionTwo' ,
        start: "top center",
      end: "top +=10",
      // markers:true,
      scrub: 0.7,
      },
    })
     sectionTwoTl.to('#sectionTwo', {
      backgroundColor: 'purple',
      duration:1.2,
      color:'white',
      ease:"power4.inOut"
    }).fromTo('.title',{opacity:0},{ y: 0, opacity: 1, duration:1.5, clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)" },'<0.1')
    .from('.box1',{y:200,opacity:0,ease:"power3.inOut",duration:1.2})

    sectionTwoTl.fromTo('#box',{opacity:0},{ y: 0, opacity: 1, duration:1.5, clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)", ease:"power3.inOut" },'<0.1')

    return () => ctx.revert();

    
  })
  })


  return (
    <div className='h-screen bg-[orange] text-5xl w-full flex items-center justify-center' id="sectionTwo">SectionTwo
    
    <div className='box w-[10rem] h-[10rem] mx-auto bg-[blue]' id='box'></div>
    </div>
  )
}

export default SectionTwo