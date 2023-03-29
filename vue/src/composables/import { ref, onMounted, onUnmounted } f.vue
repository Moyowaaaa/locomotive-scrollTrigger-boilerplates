import { ref, onMounted, onUnmounted } from "vue";

const useIntersectionObserver = (callback, options) => {
  const target = ref(null);
  const observer = ref(null);
 

  const handleIntersect = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback(entry, observer);
      }
    });
  };

  onMounted(() => {
    observer.value = new IntersectionObserver(handleIntersect, options);
    observer.value.observe(target.value);
  });

  onUnmounted(() => {
    observer.value.unobserve(target.value);
    observer.value.disconnect();
  });

  return { target };
};

const { target } = useIntersectionObserver((entry, observer) => { console.log("Target element is intersecting!", entry.isIntersecting)},


{
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  }
  
);