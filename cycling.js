$(document).ready(function() {
  var element = $("#holder");
  var maxCycles = 10;
  var counterObj = 0;

  function thirdChange() {
    if (counterObj <= maxCycles) {
      element.removeClass("three").addClass("four");
      $("span").html(counterObj);
      console.log(counterObj);
    }
  }
  function secondChange() {
    if (counterObj <= maxCycles) {
      element.removeClass("two").addClass("three");
      setTimeout(secondChange, 100);
      counterObj++;
      console.log(counterObj);
    }
  }
  function redToBlue() {
    element.removeClass("one").addClass("two");
    setTimeout(secondChange, 100);
    counterObj += 1;
  }

  // blueToRed();
  setTimeout(redToBlue, 100);
});
