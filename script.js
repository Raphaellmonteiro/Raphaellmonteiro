// Espera DOM
document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("main-header");

  // Header: adicionar classe scrolled ao rolar
  const onScroll = () => {
    if (window.scrollY > 50) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll);
  onScroll();

  // Theme toggle (com persistência)
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark-mode") {
    body.classList.add("dark-mode");
    themeToggle.checked = true;
  }

  themeToggle.addEventListener("change", function () {
    if (this.checked) {
      body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark-mode");
    } else {
      body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light-mode");
    }
  });

  // Typing animation (digitação) - letra por letra
  const textEl = document.getElementById("typed-text");
  const fullText = textEl.textContent.trim();
  textEl.textContent = "";
  const cursor = document.querySelector(".cursor");
  let idx = 0;

  const typeSpeed = 45; // ms por letra
  const pauseAfter = 900; // pausa depois de terminar antes de loop (ms)

  function typeLoop() {
    if (idx <= fullText.length - 1) {
      textEl.textContent += fullText.charAt(idx);
      idx++;
      setTimeout(typeLoop, typeSpeed);
    } else {
      // piscada extra e depois reset para loop
      setTimeout(() => {
        // Apagar texto lentamente
        eraseLoop();
      }, pauseAfter + 400);
    }
  }

  function eraseLoop() {
    if (textEl.textContent.length > 0) {
      textEl.textContent = textEl.textContent.slice(0, -1);
      setTimeout(eraseLoop, 18);
    } else {
      // reinicia digitação
      idx = 0;
      setTimeout(typeLoop, 220);
    }
  }

  typeLoop();

  // IntersectionObserver para revelar elementos ao rolar
  const observerOpts = { root: null, rootMargin: "0px", threshold: 0.12 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, observerOpts);

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  // Small accessibility: enable keyboard focus on nav-cta
  document.querySelectorAll('.nav-cta').forEach(btn => btn.addEventListener('keyup', e => {
    if (e.key === 'Enter' || e.key === ' ') btn.click();
  }));

  console.log("Script carregado — estilo moderno aplicado.");
});
