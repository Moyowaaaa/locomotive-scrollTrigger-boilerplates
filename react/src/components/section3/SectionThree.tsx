import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'
import './SectionThree.scss'
import scrollTrigger from 'gsap'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'
gsap.registerPlugin(scrollTrigger)

const SectionThree = () => {

const pageRef = useRef<HTMLDivElement | null>(null)
const boxContainerRef = useRef<HTMLDivElement | null>(null)
const boxRef1 = useRef<HTMLDivElement | null>(null)
const boxRef2 = useRef<HTMLDivElement | null>(null)
const boxRef3 = useRef<HTMLDivElement | null>(null)

const [isVisible,setIsVisible] = useState(false)
const [reveal, setReveal] = useState(false);
const onScreen = useIntersectionObserver(pageRef,0.1)


useEffect(() => {
  if (onScreen) setReveal(onScreen)
  
  console.log(onScreen)
 
}, [onScreen])




useEffect(() => {
   
    const section3tl = gsap.timeline({
        scrollTrigger:{
            trigger: pageRef.current,
            start: "top center",
            end: "top +=10",
            // markers:true,
            // scrub: 0.1,
        }
    
    })
    // scrollTrigger.matchMediaRefresh()

    // if(onScreen && reveal) {
    //    const ctx = gsap.context(() => {



      section3tl.from('.box', {
        y:200,
        delay:1.5,
        ease:"power3.inOut",
        duration:3,
        opacity:0
    }, "<0.1")

    

    section3tl.to(pageRef.current, {
        // backgroundColor: 'Yellow',
        // duration:1.2,
        // color:'white',
        // ease:"power4.inOut"
      })


  // return() => ctx.revert()
    })
//     } 
  
// })
   


  return (
    <div className='sectionThree' data-scroll-section data-scroll-direction="horizontal" ref={pageRef}>SectionThree

<div className='sectionThree-box__box1 box' ref={boxRef1}></div>
    
    {/* <div className='sectionThree-box' ref={boxContainerRef}>
        
   
    <div className='sectionThree-box__box2' ref={boxRef2}></div>
    <div className='sectionThree-box__box3' ref={boxRef3}></div>
    </div> */}
    </div>
  )
}

export default SectionThree