let navEl = document.querySelector(".navbar");
let brandEl = document.querySelector(".navbar-brand");
let linkAbout = document.querySelector("#homepage-about");
let linkContact = document.querySelector("#homepage-contact");
let linkWork = document.querySelector("#homepage-work");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 200) {
    navEl.classList.add("nav-scrolled");
    brandEl.classList.add("navbar-fontstyle");
    linkAbout.classList.add("navbar-fontstyle");
    linkContact.classList.add("navbar-fontstyle");
    linkWork.classList.add("navbar-fontstyle");
    navEl.classList.remove("navbar-dark");
    navEl.classList.add("navbar-light");
  } else if (window.scrollY < 200) {
    navEl.classList.remove("nav-scrolled");
    brandEl.classList.remove("navbar-fontstyle");
    linkAbout.classList.remove("navbar-fontstyle");
    linkContact.classList.remove("navbar-fontstyle");
    linkWork.classList.remove("navbar-fontstyle");
    navEl.classList.add("navbar-dark");
    navEl.classList.remove("navbar-light");
  }
});
