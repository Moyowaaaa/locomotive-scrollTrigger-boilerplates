import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap'



const SectionThree = () => {

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:'#sectionThree',
                start: "top center",
                end: "top +=10",
                // markers:true,
                scrub: 0.7,
            }
        })

        tl.fromTo('.box',{opacity:0},{ y: 0, opacity: 1, duration:1.5, clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)" },'<0.1')


    })
  return (
    <div className='h-screen w-screen bg-[teal] flex flex-col items-center justify-center' id="sectionThree">SectionThree
    <div className='box w-[6rem] h-[10rem] bg-[black]'></div>
    </div>
  )
}

export default SectionThree