// Project : Digital Clock
const time = document.querySelector(".dispaly");
const btn = document.querySelector("p");
const options = document.querySelectorAll('input[type="radio"]');

btn.addEventListener("click", function () {
  btn.classList.toggle("open");
});
// Function to update the time
function updateTime() {
  for (option of options) {
    if (option.checked) {
      let myDate = new Date().toLocaleString("en-Us", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: JSON.parse(option.getAttribute("h")),
      });
      time.textContent = myDate;
    }
  }
}
// Updating the time every second
setInterval(updateTime, 1000);
// Initial update
updateTime();
