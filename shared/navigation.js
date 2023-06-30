const navigationEl = document.querySelector("nav");
const navBtn = document.querySelector(".hamburger");

navBtn.addEventListener("click", function () {
  let visibility = navigationEl.getAttribute("data-visible");

  if (visibility == "false") {
    navigationEl.setAttribute("data-visible", "true");
    navBtn.firstElementChild.src = "/images/nav/icon-close-menu.svg";
    navBtn.style.position = "fixed";
  } else {
    navigationEl.setAttribute("data-visible", "false");
    navBtn.firstElementChild.src = "/images/nav/icon-menu.svg";
    navBtn.style.position = "absolute";
  }
});
