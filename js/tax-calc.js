// Tax bracket values

// First bracket
var firstBracketBottom = 0
var firstBracketTop = 9225
// Second bracket
var secondBracketBottom = 9226
var secondBracketTop = 37450
// Third bracket
var thirdBracketBottom = 37451
var thirdBracketTop = 89350
// Fourth bracket
var fourthBracketBottom = 89351
var fourthBracketTop = 186350
// Fifth bracket
var fifthBracketBottom = 186351
var fifthBracketTop = 405100
// Sixth bracket
var sixthBracketBottom = 405101
var sixthBracketTop = 406750
// Seventh bracket
var seventhBracketBottom = 406751

// Rates
var firstBracketRate = (10/100)
var secondBracketRate = (15/100)
var thirdBracketRate = (25/100)
var fourthBracketRate = (28/100)
var fifthBracketRate = (33/100)
var sixthBracketRate = (35/100)
var seventhBracketRate = (39.6/100)

$('input').keyup(function(){ // run anytime the value changes

    var income = parseFloat($('#income').val()); // get value of field

    // First bracket calculation
    if (income > firstBracketTop) {
      $('#firstBracket').html((firstBracketTop * firstBracketRate).toFixed(2));
    }
    else if ((income * 1) != income) {
      $('#firstBracket').html((0).toFixed(2))
    }
    else {
      $('#firstBracket').html((income * firstBracketRate).toFixed(2));
    }

    // Second bracket calculation
    if (income < secondBracketBottom) { // This is if the user makes less than the bracket
      $('#secondBracket').html((0).toFixed(2));
    }

    else if (income < secondBracketTop) { // If the user makes less than max of the bracket
      $('#secondBracket').html(((income - firstBracketTop) * secondBracketRate).toFixed(2));
    }

    else if ((income * 1) != income) { // If NaN
      $('#secondBracket').html((0).toFixed(2))
    }

    else { // If user maxes the bracket
      $('#secondBracket').html(((secondBracketTop - firstBracketTop) * secondBracketRate).toFixed(2));
    }

    // Third bracket calculation
    if (income < thirdBracketBottom) { // This is if the user makes less than the bracket
      $('#thirdBracket').html((0).toFixed(2));
    }

    else if (income < thirdBracketTop) { // This is if the user makes less than the top of the bracket
      $('#thirdBracket').html(((income - secondBracketTop) * thirdBracketRate).toFixed(2))
    }

    else if ((income * 1) != income) {
      $('#thirdBracket').html((0).toFixed(2))
    }

    else {
      $('#thirdBracket').html(((thirdBracketTop - secondBracketTop) * thirdBracketRate).toFixed(2));
    }

    // Fourth bracket calculation
    if (income < fourthBracketBottom) { // This is if the user makes less than the bracket
      $('#fourthBracket').html((0).toFixed(2));
    }

    else if (income < fourthBracketTop) { // This is if the user makes less than the top of the bracket
      $('#fourthBracket').html(((income - thirdBracketTop) * fourthBracketRate).toFixed(2))
    }

    else if ((income * 1) != income) {
      $('#fourthBracket').html((0).toFixed(2))
    }

    else {
      $('#fourthBracket').html(((fourthBracketTop - thirdBracketTop) * fourthBracketRate).toFixed(2));
    }

    // Fifth bracket calculation
    if (income < fifthBracketBottom) { // This is if the user makes less than the bracket
      $('#fifthBracket').html((0).toFixed(2));
    }

    else if (income < fifthBracketTop) { // This is if the user makes less than the top of the bracket
      $('#fifthBracket').html(((income - fourthBracketTop) * fifthBracketRate).toFixed(2))
    }

    else if ((income * 1) != income) {
      $('#fifthBracket').html((0).toFixed(2))
    }

    else {
      $('#fifthBracket').html(((fifthBracketTop - fourthBracketTop) * fifthBracketRate).toFixed(2));
    }

    // Sixth bracket calculation
    if (income < sixthBracketBottom) { // This is if the user makes less than the bracket
      $('#sixthBracket').html((0).toFixed(2));
    }

    else if (income < sixthBracketTop) { // This is if the user makes less than the top of the bracket
      $('#sixthBracket').html(((income - fifthBracketTop) * sixthBracketRate).toFixed(2))
    }

    else if ((income * 1) != income) {
      $('#sixthBracket').html((0).toFixed(2))
    }

    else {
      $('#sixthBracket').html(((sixthBracketTop - fifthBracketTop) * sixthBracketRate).toFixed(2));
    }

    // Seventh bracket calculation
    if (income < seventhBracketBottom) { // This is if the user makes less than the bracket
      $('#seventhBracket').html((0).toFixed(2));
    }

    else if ((income * 1) != income) {
      $('#seventhBracket').html((0).toFixed(2))
    }

    else if (income > 10000000) {
      $('#seventhBracket').html ("u silly")
    }

    else {
      $('#seventhBracket').html(((income - sixthBracketTop) * seventhBracketRate).toFixed(2));
    }

    // Seriously?
    if (income > 100000000000000) {
      $('#seriously').html("Go home Trump, you're drunk.")
    }

});
