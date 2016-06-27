// trying to change a number on a button when clicked
// need that button in the js
var button = document.querySelector('button');
// need that number
var number = 0;
// need to know when the button is clicked on
button.addEventListener('click', function(){
  // add one to the number
  // number = number + 1;
  // number += 1;
  number++;
  console.log(number);
  // change the displayed value on the button
  button.textContent = number + ' likes';
});
