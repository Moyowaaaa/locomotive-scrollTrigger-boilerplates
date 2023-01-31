
<script setup lang="ts">
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { onMounted } from 'vue';
gsap.registerPlugin(ScrollTrigger)


// onMounted(() => {
//     const tl= gsap.timeline({
//         scrollTrigger:{
//             trigger:'.box',
//             markers:true,
//       start: 'top +=300',
//             end:'top +=5',
//         }
//     })

//     tl.from('.box4',{
//         opacity:0,
//         duration:1.5,
//         y:'-200px',
//         ease:"power3.inOut"
//     })
    

// })


</script>

<template>
    <section class="section1" data-scroll data-scroll-section>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum odit iusto vel, distinctio maiores facilis, fugit delectus rem enim aspernatur exercitationem consequatur ratione aut, id laudantium incidunt numquam praesentium repudiandae!</p>

        hoall

        <div class="box4"></div>
    </section>
</template>

<style scoped>
section{
    height: 100vh;
    width: 100%;
    background-color: white;
}

.box4{
    width: 10rem;
    height: 10rem;
    background-color: teal;
}
</style>