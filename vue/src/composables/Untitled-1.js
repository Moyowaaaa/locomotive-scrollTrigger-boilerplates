import { ref, onUnmounted } from "vue";

const useIntersectionObserver = (callback, options = {}) => {
  const observer = ref(null);
  const target = ref(null);

  const observe = () => {
    if (target.value) {
      observer.value = new IntersectionObserver((entries) => {
        callback(entries);
      }, options);
      observer.value.observe(target.value);
    }
  };

  const unobserve = () => {
    if (observer.value) {
      observer.value.disconnect();
      observer.value = null;
    }
  };

  onUnmounted(() => {
    unobserve();
  });

  return { observe, target };
};

const { observe, target } = useIntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("Element is visible!");
    }
  });
});
