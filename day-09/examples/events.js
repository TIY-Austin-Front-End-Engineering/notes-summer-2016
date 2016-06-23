console.log(document.querySelector('.unicorn'));

console.log(document.querySelectorAll('.unicorn'));

// you would probably never do this, bc you could just use querySelector and save effort of getting the result out of the array
console.log(document.querySelectorAll('.unicorn:nth-of-type(3)'));

// get the element
var unicorn1 = document.querySelector('.unicorn');
// add event Listener
unicorn1.addEventListener('click', function(evt) {
  console.log(evt);
  console.log('hi');
});

// every time the user presses enter into the text box we want the value of the box to show up in the console
// every time the user presses esc we should clear the value
var inputEl = document.querySelector('input');
inputEl.addEventListener('keyup', function(evt) {
  // if the user keyups on the enter key
  if (evt.keyCode === 13) {
    // console.log the value of the box
    console.log(inputEl.value);
  } else if (evt.keyCode === 27) {
    inputEl.value = '';
  }
});
