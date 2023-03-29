import { ref, onMounted, onUnmounted,watchEffect,provide } from 'vue';

export const useIntersectionObserver = (
    element: any,
    threshold: number
) => {
    const isIntersecting = ref<boolean>(false)
    const isVisible = ref<boolean>(false)
    if (!element) {
        console.log("Element is null or undefined");
        return;
      }
      
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            isIntersecting.value = (entry.isIntersecting ?? false)
        })
    }, 
    {
        root:null,
        rootMargin: "0px",
    threshold,
    }
);
watchEffect(observer,() => {
    observer.observe(element!);
  });
  
  
  onUnmounted(() => {
    observer.disconnect();
  });

 
  
 
  return {isIntersecting, isVisible}

}