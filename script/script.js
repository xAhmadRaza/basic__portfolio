//
document.addEventListener("DOMContentLoaded", () => {
  // CONST

  const navBtn = document.querySelector(".navigation__btn");
  const navBarHeaderEl = document.querySelector("#header__nav");

  navBtn.addEventListener("click", () => {
    navBarHeaderEl.classList.toggle("nav__open");
  });
});
