// Setting an interval of 1 seconds to call a custom function repetitively:
setInterval (changeTime, 1000);

// Defining the custom changeTime function:
function changeTime() {
  var timeNow = new Date();

  var seconds = timeNow.getSeconds(); // get seconds from the new Date object
  var secondsInDegrees = (seconds / 60) * 360;
  var secondsHand = document.querySelector(".second-hand");
  secondsHand.style.transform = "rotate(" + (secondsInDegrees + 90) + "deg)";
  // Extra 90 degrees addition to consider rotation from the initial position i.e. -90deg

  var mins = timeNow.getMinutes(); // get minutes from the new Date object
  var minsInDegrees = (mins / 60) * 360;
  var minsHand = document.querySelector(".min-hand");
  minsHand.style.transform = "rotate(" + (minsInDegrees + 90) + "deg)";

  var hours = timeNow.getHours(); // get hours from the new Date object
  var hoursInDegrees = (hours / 12) * 360;
  var hoursHand = document.querySelector(".hour-hand");
  hoursHand.style.transform = "rotate(" + (hoursInDegrees + 90) + "deg)";

  console.log (hours, mins, seconds);
  console.log (hoursInDegrees, minsInDegrees, secondsInDegrees);
}
