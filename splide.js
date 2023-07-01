// import Splide from "/splide-4.1.3";

// document.addEventListener("DOMContentLoaded", function () {
var splide = new Splide("#second-splide", {
  type: "loop",
  perPage: 1,
  autoplay: true,
  speed: 10,
  fade: true,
  pagination: false,
});
// });

splideIntro = new Splide("#first-splide", {
  type: "loop",
  autoplay: true,
  speed: 5,
  fade: true,
  arrows: false,
  pagination: false,
});

splide.mount();
splideIntro.mount();
