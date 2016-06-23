
// add the numbers provided by user together when the calculate button is clicked
  // need to know when the calculate button was clicked
    // need the actual button itself
var button = document.querySelector('#calculate');
// tell that button we want to do something when it's clicked
button.onclick = function() {
  // need to get the two numbers from the input boxes
    // need the input boxes themselves
    // get their values
  var input1 = document.querySelector('#number1');
  var value1 = input1.value;
  var input2 = document.querySelector('#number2');
  var value2 = input2.value;
  // cocerce the values into numbers
  // add the values together
  var sum = Number(value1) + Number(value2);
  // show that answer in the output area
    // need the answer (stored in sum)
    // need the output area
    // reassign the areas inner text to the sum
  document.querySelector('.output').innerText = sum;
};
