const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 300,
});

ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 600,
});

ScrollReveal().reveal(".header__content form", {
  ...scrollRevealOption,
  delay: 900,
});

ScrollReveal().reveal(".card", {
  ...scrollRevealOption,
  interval: 200,
});

ScrollReveal().reveal(".testimonial", {
  ...scrollRevealOption,
  interval: 200,
});

ScrollReveal().reveal(".contact__form", {
  ...scrollRevealOption,
  delay: 300,
});

// Contact Form Alert
const form = document.querySelector(".contact__form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been submitted.");
    form.reset();
  });
}
