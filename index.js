// Setting an interval of 1 seconds to call a custom function periodically:
setInterval (changeTime, 1000);

// Defining the custom changeTime function:
function changeTime() {
  
  var timeNow = new Date(); // new Date object to store the current date & time

  var seconds = timeNow.getSeconds(); // get seconds from the new Date object
  var secondsInDegrees = (seconds / 60) * 360;
  var secondsHand = document.querySelector(".second-hand");
  secondsHand.style.transform = "rotate(" + (secondsInDegrees + 90) + "deg)";
  // extra 90 degrees addition to consider rotation from the initial position i.e. -90deg

  var mins = timeNow.getMinutes(); // get minutes from the new Date object
  var minsInDegrees = (mins / 60) * 360 + (secondsInDegrees / 60);
  var minsHand = document.querySelector(".min-hand");
  minsHand.style.transform = "rotate(" + (minsInDegrees + 90) + "deg)";

  var hours = timeNow.getHours(); // get hours from the new Date object
  var hoursInDegrees = (hours / 12) * 360 + (minsInDegrees / 12);
  var hoursHand = document.querySelector(".hour-hand");
  hoursHand.style.transform = "rotate(" + (hoursInDegrees + 90) + "deg)";
  
  // digits to be displayed on the digital clock:
  secondsInTwoDigits = twoDigits(seconds); // calls a custom function twoDigits
  minsInTwoDigits = twoDigits(mins);
  hoursInTwoDigits = twoDigits(hours);

  function twoDigits(x) { // defining the custom twoDigits function
    if (x < 10) {
      return "0" + x;
    } else {
      return x;
    }
  }
  
  var digitalTime = hoursInTwoDigits + "h " + minsInTwoDigits + "m " + secondsInTwoDigits + "s"
  var digitalTimeObject = document.querySelector(".digital-time");
  digitalTimeObject.textContent = digitalTime;
  
}

// Calling the changeTime function on loading of the page:
changeTime();
