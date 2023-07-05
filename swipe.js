// var swiper = new Swiper(".mySwiper", {
//   effect: "cube",
//   grabCursor: true,
//   cubeEffect: {
//     shadow: true,
//     slideShadows: true,
//     shadowOffset: 20,
//     shadowScale: 0.94,
//   },
//   //   pagination: {
//   //     el: ".swiper-pagination",
//   //   },
// });
var swiper = new Swiper(".mySwiper", {
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-100%", 0, -1],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    reverseDirection: true,
  },
});
