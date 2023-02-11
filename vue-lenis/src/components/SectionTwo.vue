<template>
    <div class="bg-[green] text-white h-screen w-full flex flex-col items-center justify-center" id="sectionTwo">
        <h1>Section Two</h1>

        <div class="flex gap-2">
            <div class="box w-[10rem] h-[10rem] bg-[blue] my-4"> </div>

<div class="box1 w-[10rem] h-[10rem] bg-[red] my-4"> </div>



<div class="box2 w-[10rem] h-[10rem] bg-[teal] my-4"> </div>
        </div>
     

        <div class="flex gap-4 w-full box-container2">
            <div class="box3 w-[10rem] h-[10rem] bg-[purple] my-4"> </div>


<div class="box4 w-[10rem] h-[10rem] bg-[pink] my-4"> </div>

<div class="box5 w-[10rem] h-[10rem] bg-[black] my-4"> </div>
        </div>
       
    </div>
</template>

<script setup lang="ts">

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { onMounted } from 'vue';
gsap.registerPlugin(ScrollTrigger)


onMounted(() => {
let tl = gsap.timeline({
    scrollTrigger:{
        trigger:'#sectionTwo',
        start: 'top center',
            end:'top +=50',
            markers:true,
            scrub:true
    }
})

tl.from('.box', {
    opacity:0,
    ease:"power4.inOut",
    duration:1.2,
    y:200
})

tl.from('.box3', {
    opacity:0,
    // y:200,
    stagger:0.4,
    ease:"power3.inOut"
})
tl.from('.box4', {
    opacity:0,
    // y:200,
    stagger:0.6,
    ease:"power3.inOut"
})

tl.from('.box5', {
    opacity:0,
    // y:200,
    stagger:0.8,
    ease:"power3.inOut"
})
})



</script>

<style scoped>

</style>