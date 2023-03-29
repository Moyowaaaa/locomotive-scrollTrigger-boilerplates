// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         console.log('Element is in view');
//         isVisible.value = true
//       } else {
//         console.log('Element is out of view');
//         isVisible.value = false
//       }
//     });
//   },
//   {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0.1,
//   }
// );

// onMounted(() => {
//   observer.observe(element.value!);
// });

// onUnmounted(() => {
//   observer.disconnect();
// });

// watchEffect(() => {
//   console.log(isVisible.value)
//   if(isVisible) {
//     gsap.from('#isVisible', {
//       opacity:0,
//       duration:1,
//       y:200
//     })
//   }

// })


// if(ispageVisible){
//     gsap.from('#isVisible', {
//       opacity:0,
//       duration:1,
//       y:200
//     })
//   }

