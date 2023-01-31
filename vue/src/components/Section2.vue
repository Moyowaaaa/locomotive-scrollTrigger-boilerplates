<script setup lang="ts">

import { ref, onMounted, onUnmounted } from 'vue'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const ctx = gsap.context(() => {
    const section2tl = gsap.timeline({
      scrollTrigger:{
        trigger: '#section2',
        start: "top center",
      end: "top +=10",
      // markers:true,
      scrub: 0.7,
      }
    })
    section2tl.to('#section2', { backgroundColor: 'purple',
      duration:1.2,
      color:'white',
      ease:"power4.inOut"})


    return () => ctx.revert()
  })
})


</script>

<template >
    <section  id="section2" data-scroll data-scroll-section>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint ex maxime, eveniet laboriosam totam aut ipsam facere quia, culpa aperiam beatae libero veniam? Rem asperiores optio maxime dolorem. Perspiciatis, laudantium!</p>
    
        <div class="box-container">
        <div class="box1"></div>


<div class="box2"></div>
      </div>
     
    </section>
</template>



<style scoped>
section{
    height: 100vh;
    width: 100%;
    background-color: white;
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

</style>