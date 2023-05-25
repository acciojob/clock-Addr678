//your JS code here. If required.
// JavaScript code (script.js)
function updateTime() {
  var timerElement = document.getElementById('timer');

  var date = new Date();
  var time = date.toLocaleTimeString();
  var formattedDate = date.toDateString();

  timerElement.textContent = "Time: " + time + " | Date: " + formattedDate;
}

setInterval(updateTime, 1000); // Update time every second

