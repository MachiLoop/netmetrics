// import Splide from "/splide-4.1.3";

var splide = new Splide("#second-splide", {
  type: "loop",
  drag: "free",
  snap: true,
  perPage: 3,
  breakpoints: {
    864: {
      perPage: 2,
    },
    400: {
      // perPage: 1,
    },
  },
});

// splideIntro = new Splide("#first-splide", {
//   type: "loop",
//   autoplay: true,
//   speed: 5,
//   fade: true,
//   arrows: false,
//   pagination: false,
// });

splide.mount();
// splideIntro.mount();
