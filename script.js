// Animation d’apparition des sections & cartes
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(
        ".hero, .page-section, .section, .project-card, .skill-block"
    );

    elements.forEach(el => {
        el.classList.add("fade");
    });

    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    obs.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1
        }
    );

    elements.forEach(el => observer.observe(el));
});


// ===========================
// Halo de lumière qui suit la souris sur le hero
// ===========================
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  const updateHalo = (e) => {
    const rect = hero.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    hero.style.setProperty("--halo-x", x + "%");
    hero.style.setProperty("--halo-y", y + "%");
  };

  hero.addEventListener("mousemove", updateHalo);

  hero.addEventListener("mouseleave", () => {
    // on recentre doucement le halo quand la souris sort
    hero.style.setProperty("--halo-x", "50%");
    hero.style.setProperty("--halo-y", "20%");
  });
});
