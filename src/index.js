let navEl = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  console.log("Scrolling...");

  if (window.scrollY >= 150) {
    navEl.classList.add("nav-scrolled");
  } else if (window.scrollY < 150) {
    navEl.classList.remove("nav-scrolled");
  }
});
