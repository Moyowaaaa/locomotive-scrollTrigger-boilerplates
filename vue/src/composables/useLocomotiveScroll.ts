import { ref, onMounted, onUnmounted,watchEffect } from 'vue'
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";



export function useLocomotiveScroll(elementRef:any) {
    onMounted(() => {
      gsap.registerPlugin(ScrollTrigger)
        const container:any = document.body
       let locoScroll:any = new LocomotiveScroll({
            el: container,
      smooth: true,
      // multiplier: 2,
    //   direction:'horizontal'
        });
      

        setTimeout(() => {
          locoScroll.update();
        }, 1000);


        locoScroll.on("scroll", ScrollTrigger.update);

        ScrollTrigger.scrollerProxy(locoScroll.el, {
          scrollTop(value) {
            return arguments.length
              ? locoScroll.scrollTo(value, 0, 0)
              : locoScroll.scroll.instance.scroll.y;
          },
          getBoundingClientRect() {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight,
            };
          },
          pinType: container.style.transform ? "transform" : "fixed"
          

    })


    
  
})


}