let navEl = document.querySelector(".navbar");
let brandEl = document.querySelector(".navbar-brand");
let linkAbout = document.querySelector("#homepage-about");
let linkContact = document.querySelector("#homepage-contact");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 200) {
    navEl.classList.add("nav-scrolled");
    brandEl.classList.add("navbar-fontstyle");
    linkAbout.classList.add("navbar-fontstyle");
    linkContact.classList.add("navbar-fontstyle");
  } else if (window.scrollY < 200) {
    navEl.classList.remove("nav-scrolled");
    brandEl.classList.remove("navbar-fontstyle");
    linkAbout.classList.remove("navbar-fontstyle");
    linkContact.classList.remove("navbar-fontstyle");
  }
});
