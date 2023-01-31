import React, { useEffect, useRef } from 'react'
// import 'sectionTwo.scss'
import './SectionTwo.scss'
import { gsap } from "gsap";
import ScrollTrigger from 'gsap';
gsap.registerPlugin(ScrollTrigger)



const SectionTwo = () => {
  const pageRef = useRef<HTMLDivElement | null>(null)
  

  


  useEffect(() => {
    console.log('current',pageRef.current)
    const ctx = gsap.context(() => {
    const sectionTwoTl = gsap.timeline({
      scrollTrigger: {
        trigger: pageRef.current,
        start: "top center",
      end: "top +=10",
      // markers:true,
      scrub: 0.7,
      },
    })
     sectionTwoTl.to(pageRef.current, {
      backgroundColor: 'purple',
      duration:1.2,
      color:'white',
      ease:"power4.inOut"
    }).fromTo('.title',{opacity:0},{ y: 0, opacity: 1, duration:1.5, clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)" },'<0.1')
    .from('.box1',{y:200,opacity:0,ease:"power3.inOut",duration:1.2})

    return () => ctx.revert();

    
  })
    
    // sectionTwoTl.to(pageRef.current, {
    //   backgroundColor: 'Yellow',
    //   duration:1.2,
    //   color:'white',
    //   ease:"power4.inOut"
    // })
  })

  // useEffect(() => {
  //   if(onScreen && reveal) {
  //     const tl = gsap.timeline()
  //     const ctx = gsap.context(() => {
  //       tl.from(socialRef.current, {
  //             x:-600,
  //             y:200,
  //             ease:"power3.inOut",
  //             duration:1
  //             // delay:3.2
  //           })
  //     })
  //     return () => ctx.revert();
  //   }
  // },[onScreen])



  return (
    <div className='sectionTwo'  data-scroll-section data-scroll ref={pageRef}>
      
      <p className='title'>SectionTwo</p>


      <div className='sectionTwo-box-container'>
      <div className='sectionTwo-box-container__box1 box1'></div>
      </div>


      </div>
  )
}

export default SectionTwo