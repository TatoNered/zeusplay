document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("nav").classList.toggle("active");
});

window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(".animate-on-scroll");

  if (animatedElements.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    animatedElements.forEach((el) => observer.observe(el));
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const zoomElements = document.querySelectorAll(".zoom-on-scroll");

  if (zoomElements.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    zoomElements.forEach((el) => observer.observe(el));
  }
});

document.addEventListener("DOMContentLoaded", function () {
  try {
    const animatedItems = document.querySelectorAll(
      ".fade-in, .slide-in, .slide-up, .zoom-in"
    );

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    }, options);

    animatedItems.forEach((item) => observer.observe(item));
  } catch (e) {}
});
document.addEventListener("DOMContentLoaded", function () {
  try {
    const cards = document.querySelectorAll(".mobile-platform-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("card-visible");
            }, index * 200);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    cards.forEach((card) => observer.observe(card));
  } catch (e) {}
});
