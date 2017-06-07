// business logic
var leapYear = function(input) {
  if ((input % 4 === 0) && (input % 100 !== 0) || (input % 400 === 0)) {
    return true;
  } else {
    return false;
  }

};


// user interface logic
$(document).ready(function() {
  $(".form-leap").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#leapyear").val());
    var result = leapYear(input);

    $(".year").text(input);

    if (!result) { // result === false
      $(".not").text("not");
    } else {
      $(".not").text("");
    }
    $("#results").show();
  });
});
