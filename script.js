const toggle = document.querySelector(
  '[data-testid="test-todo-complete-toggle"]',
);
const card = document.querySelector('[data-testid="test-todo-card"]');
const status = document.querySelector('[data-testid="test-todo-status"]');
const timeEl = document.querySelector(
  '[data-testid="test-todo-time-remaining"]',
);

const dueDate = new Date("2026-04-20T18:00:00");

function updateTime() {
  const now = new Date();
  const diff = dueDate - now;

  if (diff <= 0) {
    timeEl.textContent = "Due now!";
    return;
  }

  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    timeEl.textContent = `Due in ${days} day${days > 1 ? "s" : ""}`;
  } else if (hours > 0) {
    timeEl.textContent = `Due in ${hours} hour${hours > 1 ? "s" : ""}`;
  } else {
    timeEl.textContent = `Due in ${minutes} minutes`;
  }
}

updateTime();

// Optional refresh every 60s
setInterval(updateTime, 60000);

// Toggle behavior
toggle.addEventListener("change", () => {
  if (toggle.checked) {
    card.classList.add("completed");
    status.textContent = "Done";
  } else {
    card.classList.remove("completed");
    status.textContent = "Pending";
  }
});

// Buttons
document
  .querySelector('[data-testid="test-todo-edit-button"]')
  .addEventListener("click", () => {
    console.log("edit clicked");
  });

document
  .querySelector('[data-testid="test-todo-delete-button"]')
  .addEventListener("click", () => {
    alert("Delete clicked");
  });
