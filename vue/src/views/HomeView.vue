<script setup lang="ts">
import {useLocomotiveScroll} from '../composables/useLocomotiveScroll'
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Section1 from '@/components/Section1.vue'
import Section2 from '@/components/Section2.vue'
import useLocoScroll from '@/composables/useLocoScroll';

gsap.registerPlugin(ScrollTrigger)

// useLocomotiveScroll('#container')

// useLocoScroll()


// onMounted(() => {
// console.log(window.innerWidth)
  
//   const tl = gsap.timeline({
//     scrollTrigger:{
//       trigger:'#section2',
//       markers:true,
//       start: 'top +=300',
//             end:'top +=5',
//             scrub:7
//     }
//   })

//   tl.to('#section2', {
//     backgroundColor:'blue',
//     color:'white',
//     duration:1.5,
//     ease:"power4.inOut"
//   })
//   .from('.box1',{opacity:0, stagger:0.6,y:200, duration:0.8, ease:"power3.inOut"})
//   .from('.box2',{opacity:0,x:200, duration:0.8, ease:"power3.inOut"})
  

//   const anothertl = gsap.timeline({
//     scrollTrigger:{
//       trigger:"#section3",
//       markers:true,
//       start: 'top +=300',
//             end:'top +=5',
//             scrub:7
//     }
//   })

//   anothertl.from('.box4',{opacity:0, stagger:0.6,y:200, duration:0.8, ease:"power3.inOut"})

// });


</script>

<template>
  <div ref="container" id="main-container">
    <!-- <div data-scroll-section>
      <Section1  data-scroll/>
    <Section2 data-scroll />
    </div> -->
     
  <Section1   />
    <Section2 /> 

 

    <!-- <section
      className="hello"
      data-scroll
      data-scroll-speed="2"
      data-scroll-section
    >
      <h1>Hello World From Sam</h1>
    </section>

    <section id="sticky" data-scroll-section>
      <h1 data-scroll data-scroll-sticky data-scroll-target="#sticky">
        Sticky scroll example
      </h1>
      <p>Placeholders Placeholders</p>
      <p>Placeholders Placeholders</p>
      <p>Placeholders Placeholders</p>
      <p>Placeholders Placeholders</p>


     
    </section>

    <section className="parallax" data-scroll-section>
      <h1 data-scroll data-scroll-direction="vertical" data-scroll-speed="9">
        Vertical Parallax scroll
      </h1>
      <h1 data-scroll data-scroll-direction="horizontal" data-scroll-speed="9" id="horizontal">
        horizontal
      </h1>
      <h1 class="text">HOLLALLLALAL</h1>
    </section>

    <section className="scroll-into-view" data-scroll-section>
      <h1
        className="hint-text"
        data-scroll
        data-scroll-repeat="true"
        data-scroll-class="animate"
        data-scroll-speed="5"
      >
        Here, we're calling the Animate class when the Content scrolls into view
      </h1>
    </section> -->
  </div>
</template>


<style scoped>
section{
  height: 100vh;
  width: 100%;
  border:2px solid red
}

#container{
  width: 1536px !important;
}
.section2{
  height:40rem
}

.section3{
  height: 40rem;
}

.box-container{
  display: flex;
  width: 100%;
  
}

.box1{
  
  height: 300px;
  width: 30%;
  background-color: red;
}

.box2{
  
  height: 300px;
  width: 30%;
  background-color: teal;
}
.box4{
    width: 10rem;
    height: 10rem;
    background-color: teal;
}
</style>