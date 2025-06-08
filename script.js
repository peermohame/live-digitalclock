function updateClock() {
  const now = new Date();

  // 24-hour format time
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const time = `${hours}:${minutes}:${seconds}`;
  document.getElementById("clock").textContent = time;

  // Date display
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const dateStr = now.toLocaleDateString(undefined, options);
  document.getElementById("date").textContent = dateStr;
}

// Theme toggle
const themeBtn = document.getElementById("theme-btn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Start clock
updateClock();
setInterval(updateClock, 1000);
