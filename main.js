// Project : Digital Clock
const [hours, minutes, seconds, mode] = document.querySelectorAll("span");

// Function to update the time
function updateTime() {
  let date = new Date();
  hours.textContent = date.getHours();
  minutes.textContent = date.getMinutes();
  seconds.textContent = date.getSeconds();
  mode.textContent = +hours.textContent > 12 ? "PM" : "AM"; // ckeck AM or PM
  // Checking if any of the time elements are single digit and adding a leading zero if so
  [hours, minutes, seconds].forEach((element) => {
    if (element.textContent.length === 1) {
      element.textContent = "0" + element.textContent;
    }
  });
}
// Updating the time every second
setInterval(updateTime, 1000);
// Initial update
updateTime();
