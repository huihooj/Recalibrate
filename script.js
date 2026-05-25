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
      "Quarterly drops create urgency, repeat visits and smoother demand across the year.",
    cta: "Collect Q1",
    image: "./assets/stay-cabin.jpg"
  },
  q2: {
    badge: "Limited drop 02 / 04",
    months: "April - June",
    title: "Q2: Deep Current",
    story:
      "A water-led drop for guests who want hydrotherapy, calm and a reason to book outside obvious holiday peaks.",
    items: [
      "Hydrotherapy tide token",
      "Blue-green recovery towel tag",
      "Deep Current photobooth frame"
    ],
    logic:
      "Deep Current turns shoulder-season travel into a collectible water ritual.",
    cta: "Collect Q2",
    image: "./assets/recover-pool.jpg"
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
      "Warm Circuit reframes winter as peak recovery season, moving demand into colder months.",
    cta: "Collect Q3",
    image: "./assets/social-campfire.jpg"
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
      "The final drop completes the collection loop: guests who collect all four unlock priority access.",
    cta: "Collect Q4",
    image: "./assets/water-route.jpg"
  }
};

const routes = {
  burnout: {
    tag: "For screen fatigue",
    title: "Burnout Reset",
    copy:
      "A slower itinerary for people who feel tired even after a weekend at home. Expect hydrotherapy, contrast therapy, guided rest and low-pressure social moments.",
    image: "./assets/recover-pool.jpg",
    alt: "A calm pool surrounded by nature"
  },
  friends: {
    tag: "For social reconnection",
    title: "Friend Reset",
    copy:
      "A phone-light weekend built around shared rituals: movie nights, workshops, campfire conversations and collectible photobooth frames.",
    image: "./assets/social-campfire.jpg",
    alt: "A group of young people around a campfire"
  },
  premium: {
    tag: "For deeper recovery",
    title: "Premium Recovery",
    copy:
      "A private stay with a more tailored recovery plan, longer therapy blocks and quieter spaces for guests who want the resort at a slower pace.",
    image: "./assets/stay-cabin.jpg",
    alt: "A quiet cabin set among trees"
  },
  team: {
    tag: "For quarter-start energy",
    title: "Team Reset",
    copy:
      "A structured reset day for teams that need focus, recovery and connection before the next quarter starts moving too fast.",
    image: "./assets/water-route.jpg",
    alt: "A nature pool with open sky and forest"
  }
};

const quarterTabs = document.querySelectorAll(".quarter-tab");
const dropImage = document.getElementById("drop-image");
const dropBadge = document.getElementById("drop-badge");
const quarterMonths = document.getElementById("quarter-months");
const quarterTitle = document.getElementById("quarter-title");
const quarterStory = document.getElementById("quarter-story");
const quarterItems = document.getElementById("quarter-items");
const quarterLogic = document.getElementById("quarter-logic");
const quarterCta = document.getElementById("quarter-cta");

function renderQuarter(key) {
  const quarter = quarters[key];
  if (!quarter) return;

  dropBadge.textContent = quarter.badge;
  quarterMonths.textContent = quarter.months;
  quarterTitle.textContent = quarter.title;
  quarterStory.textContent = quarter.story;
  quarterLogic.textContent = quarter.logic;
  quarterCta.textContent = quarter.cta;
  dropImage.style.setProperty("--drop-image", `url("${quarter.image}")`);

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

const routeTabs = document.querySelectorAll(".route-tab");
const routeImage = document.getElementById("route-image");
const routeTag = document.getElementById("route-tag");
const routeTitle = document.getElementById("route-title");
const routeCopy = document.getElementById("route-copy");

function renderRoute(key) {
  const route = routes[key];
  if (!route) return;

  routeTag.textContent = route.tag;
  routeTitle.textContent = route.title;
  routeCopy.textContent = route.copy;
  routeImage.src = route.image;
  routeImage.alt = route.alt;

  routeTabs.forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.route === key);
  });
}

routeTabs.forEach((tab) => {
  tab.addEventListener("click", () => renderRoute(tab.dataset.route));
});

const plannerSelections = {
  quarter: "Q1 New Charge",
  reset: "Burnout Reset",
  group: "2 guests"
};

const plannerSummary = document.getElementById("planner-summary");
const plannerGroups = document.querySelectorAll("[data-planner-group]");

function updatePlannerSummary() {
  plannerSummary.textContent = `${plannerSelections.quarter} / ${plannerSelections.reset} / ${plannerSelections.group}`;
}

plannerGroups.forEach((group) => {
  const groupName = group.dataset.plannerGroup;
  group.querySelectorAll(".planner-option").forEach((option) => {
    option.addEventListener("click", () => {
      plannerSelections[groupName] = option.dataset.value;
      group.querySelectorAll(".planner-option").forEach((button) => {
        button.classList.toggle("is-selected", button === option);
      });
      updatePlannerSummary();
    });
  });
});

const signupForm = document.querySelector(".signup-form");
const formMessage = document.querySelector(".form-message");

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.textContent = "You're on the Recab drop list.";
  signupForm.reset();
});

renderQuarter("q1");
renderRoute("burnout");
updatePlannerSummary();
