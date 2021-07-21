// Setting an interval of 1 seconds to call a custom function repetitively:
setInterval (changeTime, 1000); // changeTime function is defined later

function changeTime() {
  console.log("tik");
}
