$(document).ready(function() {
  var element = $("#holder");
  var maxCycles = 10;
  var counterObj = 0;

  function secondChange() {
    if (counterObj < maxCycles) {
      counterObj++;
      element.removeClass("two").addClass("one");
      setTimeout(redToBlue, 100);
      console.log(counterObj);
    } else {
      console.log("Done");
    }
  }
  function redToBlue() {
    if (counterObj < maxCycles) {
      counterObj++;
      element.removeClass("one").addClass("two");
      setTimeout(secondChange, 100);
      console.log(counterObj);
    } else {
      console.log("Done");
    }
  }

  // blueToRed();
  setTimeout(redToBlue, 100);
});
