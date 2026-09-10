const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
  if (glow) {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  }
});

document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(
  ".about-card,.timeline-item,.skill,.detail-card,.journey-card,.interest-card,.featured-project,.model-section"
).forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(25px)";
  el.style.transition = "opacity .7s ease, transform .7s ease";
  observer.observe(el);
});

const style = document.createElement("style");
style.textContent = `
.visible {
  opacity: 1 !important;
  transform: translateY(0) !important;
}
`;
document.head.appendChild(style);

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

document.querySelectorAll(".skill-bar i").forEach(bar => {
  const width = bar.style.width;
  bar.style.width = "0";
  setTimeout(() => {
    bar.style.transition = "width 1.2s cubic-bezier(.2,.8,.2,1)";
    bar.style.width = width;
  }, 500);
});
