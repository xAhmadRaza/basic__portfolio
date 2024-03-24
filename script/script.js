//
document.addEventListener("DOMContentLoaded", () => {
  // CONST

  const navBtn = document.querySelector(".navigation__btn");
  const navBarHeaderEl = document.querySelector("#header__nav");

  navBtn.addEventListener("click", () => {
    navBarHeaderEl.classList.toggle("nav__open");
  });
});

var typeData = new Typed(".role", {
  strings: [
    "Full Stack Developer",
    "Web Developer",
    "UI-UX Designer",
    "Backend Developer",
    "Coder",
  ],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1000,
});
