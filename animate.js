gsap.registerPlugin(ScrollTrigger);

var headings = gsap.utils.toArray(".section-heading");

// headings.forEach((heading) => {
//   gsap.from(heading, {
//     scrollTrigger: {
//       trigger: heading,
//       toogleActions: "restart pause reverse pause",
//     },
//     x: "-100%",
//     duration: 10,
//     stagger: 2,
//   });
// });

gsap.from(".animate", {
  scrollTrigger: {
    trigger: ".animate",
    toggleActions: "restart pause play pause",
  },
  x: "-110%",
  duration: 1,
});

gsap.from(".splide", {
  scrollTrigger: {
    trigger: ".splide",
    toggleActions: "restart pause play pause",
  },
  x: "120%",
  duration: 1,
  delay: 1,
  //   stagger: 10,
});

gsap.from(".initiative-1", {
  scrollTrigger: {
    trigger: ".initiatives-section",
    toggleActions: "restart pause reverse pause",
  },
  x: "-150%",
  delay: 1,
  duration: 1,
  //   stagger: 10,
});

// gsap.from(".initiative-2", {
//   scrollTrigger: {
//     trigger: ".initiative-3",
//     toggleActions: "restart pause reverse pause",
//   },
//   y: "50%",
//   opacity: 0,
//   duration: 1,
// });

gsap.from(".initiative-3", {
  scrollTrigger: {
    trigger: ".initiative-3",
    toggleActions: "restart pause play pause",
  },
  x: "150%",
  duration: 1,
  delay: 1,
  //   stagger: 10,
});

// ScrollTrigger.create({
//   trigger: ".animate",
//   onEnter: () =>
//     gsap.from(".animate", {
//       x: "-100%",
//       duration: 3,
//       //   stagger: 2,
//     }),
//   onLeave: () =>
//     gsap.to(".animate", {
//       x: "-100%",
//       duration: 3,
//       //   stagger: 2,
//     }),
//   onLeaveBack: () =>
//     gsap.to(".animate", {
//       x: "100%",
//       duration: 3,
//       //   stagger: 2,
//     }),
// });
