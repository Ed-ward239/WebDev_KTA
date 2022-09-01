// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// Scroll anmation for home page
const faders = document.querySelectorAll(".fade-in");
const flips = document.querySelectorAll(".intro_content");
const slideLeft = document.querySelector(".slide-left");
const slideRight = document.querySelector(".slide-right");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -80px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

flips.forEach((flip) => {
  appearOnScroll.observe(flip);
});
appearOnScroll.observe(slideLeft);
appearOnScroll.observe(slideRight);
