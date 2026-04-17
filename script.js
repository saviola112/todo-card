const form = document.querySelector('[data-testid="test-todo-edit-form"]');
const editBtn = document.querySelector('[data-testid="test-todo-edit-button"]');

// Show form when Edit is clicked
editBtn.addEventListener("click", () => {
  const currentTitle = document.querySelector(
    '[data-testid="test-todo-title"]',
  ).textContent;

  document.querySelector('[data-testid="test-todo-edit-title-input"]').value =
    currentTitle;

  form.classList.remove("hidden");
});

// SAVE
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newTitle = document.querySelector(
    '[data-testid="test-todo-edit-title-input"]',
  ).value;

  document.querySelector('[data-testid="test-todo-title"]').textContent =
    newTitle;

  form.classList.add("hidden");
});
const expandBtn = document.getElementById("expand-btn");
const collapsible = document.getElementById("collapsible");

expandBtn.addEventListener("click", () => {
  const isExpanded = collapsible.classList.toggle("expanded");

  expandBtn.setAttribute("aria-expanded", isExpanded);

  expandBtn.textContent = isExpanded ? "Show less" : "Show more";
});

// CANCEL
const cancelBtn = document.getElementById("cancel-edit");

cancelBtn.addEventListener("click", () => {
  form.classList.add("hidden");
});
const toggle = document.querySelector(
  '[data-testid="test-todo-complete-toggle"]',
);
const status = document.querySelector('[data-testid="test-todo-status"]');
const card = document.querySelector('[data-testid="test-todo-card"]');

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    status.textContent = "Done";
    card.classList.add("completed");
  } else {
    status.textContent = "Pending";
    card.classList.remove("completed");
  }
});
const timeEl = document.querySelector(
  '[data-testid="test-todo-time-remaining"]',
);

const dueDate = new Date("2026-04-20T18:00:00");

function updateTime() {
  const now = new Date();
  const diff = dueDate - now;

  const absDiff = Math.abs(diff);

  const minutes = Math.floor(absDiff / (1000 * 60));
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  let text = "";

  if (diff > 0) {
    if (days > 0) {
      text = `Due in ${days} day${days > 1 ? "s" : ""}`;
    } else if (hours > 0) {
      text = `Due in ${hours} hour${hours > 1 ? "s" : ""}`;
    } else {
      text = `Due in ${minutes} minute${minutes > 1 ? "s" : ""}`;
    }
  } else {
    if (days > 0) {
      text = `Overdue by ${days} day${days > 1 ? "s" : ""}`;
    } else if (hours > 0) {
      text = `Overdue by ${hours} hour${hours > 1 ? "s" : ""}`;
    } else {
      text = `Overdue by ${minutes} minute${minutes > 1 ? "s" : ""}`;
    }
  }

  timeEl.textContent = text;
}

updateTime();

// update every minute
setInterval(updateTime, 60000);
if (diff < 0) {
  timeEl.classList.add("overdue");
} else {
  timeEl.classList.remove("overdue");
}
