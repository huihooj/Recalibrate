const plannerSelections = {
  route: "Burnout Reset"
};

const plannerSummary = document.getElementById("planner-summary");
const choiceGroups = document.querySelectorAll("[data-planner-group]");

function updatePlannerSummary() {
  plannerSummary.textContent = plannerSelections.route;
}

choiceGroups.forEach((group) => {
  const groupName = group.dataset.plannerGroup;
  group.querySelectorAll(".choice").forEach((choice) => {
    choice.addEventListener("click", () => {
      plannerSelections[groupName] = choice.dataset.value;
      group.querySelectorAll(".choice").forEach((button) => {
        button.classList.toggle("is-active", button === choice);
      });
      updatePlannerSummary();
    });
  });
});

const routeCards = document.querySelectorAll(".route-card");

routeCards.forEach((card) => {
  card.addEventListener("click", () => {
    routeCards.forEach((item) => item.classList.toggle("is-active", item === card));
    plannerSelections.route = card.querySelector("span").textContent;
    updatePlannerSummary();
  });
});

function initMotion() {
  if (!window.gsap || !window.ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);

  const mm = gsap.matchMedia();

  mm.add(
    {
      reduceMotion: "(prefers-reduced-motion: reduce)",
      canAnimate: "(prefers-reduced-motion: no-preference)"
    },
    (context) => {
      if (context.conditions.reduceMotion) {
        gsap.set(".reveal-item, .reveal-section", { clearProps: "all" });
        return undefined;
      }

      gsap.defaults({ ease: "power2.out", duration: 0.72 });

      const intro = gsap.timeline();
      intro
        .from(".site-header", { y: -24, autoAlpha: 0, duration: 0.5 })
        .from(".hero-copy > *", { y: 28, autoAlpha: 0, stagger: 0.08 }, "<0.12")
        .from(".design-stage", { y: 34, autoAlpha: 0 }, "<0.18");

      ScrollTrigger.batch(".reveal-section", {
        start: "top 82%",
        once: true,
        onEnter: (batch) => {
          gsap.fromTo(
            batch,
            { y: 34, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, stagger: 0.08, overwrite: "auto" }
          );
        }
      });

      const heroStage = document.querySelector(".design-stage");
      if (heroStage) {
        gsap.to(heroStage, {
          yPercent: 4,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 0.7
          }
        });
      }

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  );
}

updatePlannerSummary();
initMotion();
