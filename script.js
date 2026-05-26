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
    image: "./assets/stay-cabin.jpg"
  },
  q2: {
    badge: "Limited drop 02 / 04",
    months: "April - June",
    title: "Q2: Deep Current",
    story:
      "A hydrotherapy-inspired drop for guests who want water, calm and shoulder-season recovery.",
    items: [
      "Hydrotherapy tide token",
      "Blue-green recovery towel tag",
      "Deep Current photobooth frame"
    ],
    image: "./assets/recover-pool.jpg"
  },
  q3: {
    badge: "Limited drop 03 / 04",
    months: "July - September",
    title: "Q3: Warm Circuit",
    story:
      "A winter recovery drop built around contrast therapy, warm interiors and feeling switched on again.",
    items: [
      "Heat-circuit enamel pin",
      "Contrast therapy stamp card",
      "Warm Circuit photobooth frame"
    ],
    image: "./assets/social-campfire.jpg"
  },
  q4: {
    badge: "Limited drop 04 / 04",
    months: "October - December",
    title: "Q4: Afterglow Archive",
    story:
      "An end-year memory drop for guests who want their reset to become something they can keep.",
    items: [
      "Afterglow keepsake card",
      "Numbered collection passport stamp",
      "End-year archive photobooth frame"
    ],
    image: "./assets/water-route.jpg"
  }
};

const plannerSelections = {
  quarter: "Q1 New Charge",
  route: "Burnout Reset"
};

const plannerSummary = document.getElementById("planner-summary");
const choiceGroups = document.querySelectorAll("[data-planner-group]");

function updatePlannerSummary() {
  plannerSummary.textContent = `${plannerSelections.quarter} / ${plannerSelections.route}`;
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

const quarterTabs = document.querySelectorAll(".quarter-tab");
const dropArt = document.getElementById("drop-art");
const dropBadge = document.getElementById("drop-badge");
const quarterMonths = document.getElementById("quarter-months");
const quarterTitle = document.getElementById("quarter-title");
const quarterStory = document.getElementById("quarter-story");
const quarterItems = document.getElementById("quarter-items");

function renderQuarter(key) {
  const quarter = quarters[key];
  if (!quarter) return;

  dropBadge.textContent = quarter.badge;
  quarterMonths.textContent = quarter.months;
  quarterTitle.textContent = quarter.title;
  quarterStory.textContent = quarter.story;
  dropArt.style.setProperty("--drop-image", `url("${quarter.image}")`);

  quarterItems.replaceChildren(
    ...quarter.items.map((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      return li;
    })
  );

  quarterTabs.forEach((tab) => {
    const isSelected = tab.dataset.quarter === key;
    tab.classList.toggle("is-active", isSelected);
    tab.setAttribute("aria-selected", String(isSelected));
  });
}

quarterTabs.forEach((tab) => {
  tab.addEventListener("click", () => renderQuarter(tab.dataset.quarter));
});

renderQuarter("q1");
updatePlannerSummary();
