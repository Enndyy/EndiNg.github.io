// Search Box
let search = document.querySelector(".search-box");

document.querySelector("#search-icon").onclick = () => {
  search.classList.toggle("active");
  navbar.classList.remove("active");
};

// Menu (responsive)
let navbar = document.querySelector(".navbar");

document.querySelector("#menu-icon").onclick = () => {
  navbar.classList.toggle("active");
  search.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  search.classList.remove("active");
};

// Sticky Navbar
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

/*========== scroll reveal ==========*/
ScrollReveal({
  distance: "80px",
  duration: 3000,
  delay: 40,
});

ScrollReveal().reveal(
  ".navbar, .home-img img, .header-icon i, .logo img, .about-img, .about-text",
  {
    origin: "top",
  }
);

ScrollReveal().reveal(
  ".home-text a, .products-container, .footer-box, .btn-home, .about-text, .about-img",
  {
    origin: "bottom",
  }
);

ScrollReveal().reveal(
  ".about-text, .about-img img, .customers, .heading, .customers-container, .box, .box-img",
  {
    origin: "left",
  }
);

ScrollReveal().reveal(
  ".about-text, .about-img img, .customers1, .heading, .box, .box-img",
  {
    origin: "right",
  }
);
