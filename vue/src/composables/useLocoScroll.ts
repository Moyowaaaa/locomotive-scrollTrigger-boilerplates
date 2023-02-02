import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted, onUnmounted } from "vue";
gsap.registerPlugin(ScrollTrigger)



export default function useLocoScroll() {
  onMounted(()=> {
    const container:any = document.querySelector('#main-container')
    const locoScroll:any = new LocomotiveScroll({
      el: container,
      smooth: true,
    
      // for tablet smooth
      // tablet: { smooth: true },
    
      // for mobile
      smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy("#main-container", {
      scrollTop(value:any) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      }
    
      // follwoing line is not required to work pinning on touch screen
    
      /* pinType: document.querySelector(".smooth-scroll").style.transform
        ? "transform"
        : "fixed"*/
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
  })
    
    
}
