const quarters = {
  q1: {
    badge: "Limited drop 01 / 04",
    months: "January - March",
    title: "Q1: New Charge",
    story:
      "A fresh-start drop for guests who want their reset to feel like the first real breath of the year.",
    items: [
      "Mini plant in a numbered Recalibrate pot",
      "Charged heart desk model",
      "New-growth photobooth frame"
    ],
    logic:
      "Built for FOMO Hustlers: limited objects, a seasonal frame and a visible collection mechanic create a reason to book now, return later and share after the retreat.",
    cta: "Collect Q1",
    theme: ["#c6a35a", "#68b9ab", "#e3ca82"]
  },
  q2: {
    badge: "Limited drop 02 / 04",
    months: "April - June",
    title: "Q2: Deep Current",
    story:
      "A water-led drop for guests who want the calm of hydrotherapy without losing the social spark of a weekend away.",
    items: [
      "Hydrotherapy tide token",
      "Blue-green recovery towel tag",
      "Deep Current photobooth frame"
    ],
    logic:
      "This quarter turns quieter shoulder-season travel into a collectible water ritual, giving guests a reason to book outside obvious holiday peaks.",
    cta: "Collect Q2",
    theme: ["#68b9ab", "#276750", "#d5cbb9"]
  },
  q3: {
    badge: "Limited drop 03 / 04",
    months: "July - September",
    title: "Q3: Warm Circuit",
    story:
      "A winter recovery drop built around contrast therapy, warm interiors and the pleasure of feeling switched on again.",
    items: [
      "Heat-circuit enamel pin",
      "Contrast therapy stamp card",
      "Warm Circuit photobooth frame"
    ],
    logic:
      "Warm Circuit reframes winter as peak recovery season, using limited design cues to move demand into colder months.",
    cta: "Collect Q3",
    theme: ["#e7684c", "#c6a35a", "#0f241b"]
  },
  q4: {
    badge: "Limited drop 04 / 04",
    months: "October - December",
    title: "Q4: Afterglow Archive",
    story:
      "An end-year drop for guests who want a reset that becomes a memory, not just another weekend that disappeared.",
    items: [
      "Afterglow keepsake card",
      "Numbered collection passport stamp",
      "End-year archive photobooth frame"
    ],
    logic:
      "The final drop completes the collection loop and creates repeat-visit motivation: guests who collect all four unlock priority access.",
    cta: "Collect Q4",
    theme: ["#e3ca82", "#e7684c", "#68b9ab"]
  }
};

const cards = document.querySelectorAll(".quarter-card");
const badge = document.querySelector(".drop-badge");
const months = document.getElementById("quarter-months");
const title = document.getElementById("quarter-title");
const story = document.getElementById("quarter-story");
const items = document.getElementById("quarter-items");
const logic = document.getElementById("quarter-logic");
const cta = document.getElementById("quarter-cta");
const visual = document.querySelector(".collection-visual");

function renderQuarter(key) {
  const quarter = quarters[key];
  if (!quarter) return;

  badge.textContent = quarter.badge;
  months.textContent = quarter.months;
  title.textContent = quarter.title;
  story.textContent = quarter.story;
  logic.textContent = quarter.logic;
  cta.textContent = quarter.cta;

  items.replaceChildren(
    ...quarter.items.map((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      return li;
    })
  );

  visual.style.setProperty("--theme-one", quarter.theme[0]);
  visual.style.setProperty("--theme-two", quarter.theme[1]);
  visual.style.setProperty("--theme-three", quarter.theme[2]);

  cards.forEach((card) => {
    const isSelected = card.dataset.quarter === key;
    card.classList.toggle("is-active", isSelected);
    card.setAttribute("aria-selected", String(isSelected));
  });
}

cards.forEach((card) => {
  card.addEventListener("click", () => renderQuarter(card.dataset.quarter));
});

renderQuarter("q1");
