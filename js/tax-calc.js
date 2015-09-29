$('input').keyup(function(){ // run anytime the value changes


    var income = parseFloat($('#income').val()); // get value of field

    // First bracket calculation
    if (income > 9225) {
      $('#firstBracket').html((9225 * .10).toFixed(2));
    }
    else if ((income * 1) != income) {
      $('#firstBracket').html((0).toFixed(2))
    }
    else {
      $('#firstBracket').html((income * .10).toFixed(2));
    }

    // Second bracket calculation
    if (income < 9226) {
      $('#secondBracket').html((0).toFixed(2));
    }

    else if (income < 37450) {
      $('#secondBracket').html(((income - 9225) * .15).toFixed(2));
    }

    else if ((income * 1) != income) {
      $('#secondBracket').html((0).toFixed(2))
    }

    else {
      $('#secondBracket').html(((37450 - 9225) * .15).toFixed(2));
    }

    // Third bracket calculation
    if (income < 37451) {
      $('#thirdBracket').html((0).toFixed(2));
    }

    else if (income < 89350) {
      $('#thirdBracket').html(((income -37450) * .25).toFixed(2))
    }

    else if ((income * 1) != income) {
      $('#thirdBracket').html((0).toFixed(2))
    }

    else {
      $('#thirdBracket').html(((89350 - 37450) * .25).toFixed(2));
    }
});
