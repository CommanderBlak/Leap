var leapYear = function(input) {
  if (input % 100 === 0) {
    return false;
  }
  else if (input % 4 === 0) {
    return true;
  }
  else {
    return false;
  }

};


$(document).ready(function() {
  $(".form-leap").submit(function(event) {
    event.preventDefault();
    var input = $("#leapyear").val();
    var result = leapYear(input);

    $(".results").text(result);
  });
});
