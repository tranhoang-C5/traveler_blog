const nav = document.querySelector(".nav-bar");

window.addEventListener("scroll", function(e) {
  nav.classList.toggle("active", window.scrollY !== 0);
});
