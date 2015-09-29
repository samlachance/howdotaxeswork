$('input').keyup(function(){ // run anytime the value changes


    var income = parseFloat($('#income').val()); // get value of field

    // First bracket calculation
    if (income > 9225) {
      $('#firstBracket').html(9225 * .10);
    }
    else {
      $('#firstBracket').html(income * .10);
    }

    // Second bracket calculation
    if (income < 9226) {
      $('#secondBracket').html(0);
    }

    else if (income < 37450) {
      $('#secondBracket').html((income - 9225) * .15);
    }

    else {
      $('#secondBracket').html((37450 - 9225) * .15);
    }

    // Third bracket calculation
    if (income < 37451) {
      $('#thirdBracket').html(0);
    }

    else if (income < 89350) {
      $('#thirdBracket').html((income -37450) * .25)
    }

    else {
      $('#thirdBracket').html((89350 - 37450) * .25);
    }
});
