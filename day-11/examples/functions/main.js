// hoisting explanation commented here:
// var jessVariable;
// var myCoolFn;
//
// function myCoolFn() {
//   //do cool stuff
// }
//
// console.log('hi');
//
// // var jessVariable = "Jess";
// jessVariable = "Jess"
//
// // var myCoolFn = function() {
// //   //do cool stuff
// // }
//
// myCoolFn = function() {}

function helloWorld() {
  console.log('Hello, world!');
}

// helloWorld();

function helloWorldParam(name, age) {
  //bang operator opposites a boolean
  if (!name) {
    console.log('Hello, world!');
  } else {
    console.log('Hello, ' + name);
  }
}

// helloWorldParam();
// helloWorldParam('Jess', 32, 'blue');
// helloWorldParam('Shannon', 32, 'blue');

function helloWorldReturn(name, age) {
  //bang operator opposites a boolean
  if (!name) {
    return 'Hello, world!';
  } else {
    return 'Hello, ' + name;
  }
}

var greetJess = helloWorldReturn('Jess');
console.log(helloWorldReturn('jess'));
var greetGabe = helloWorldReturn('Gabe');


var button = document.querySelector('input');

button.addEventListener('click', function(evt){
  console.log(evt.target.value);
});


// sum should do stuff

function sum() {

}

console.assert(test it)
console.assert(test it)
console.assert(test it)







///
