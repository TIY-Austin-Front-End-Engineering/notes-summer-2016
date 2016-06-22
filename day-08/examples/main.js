// //number:
// console.log(3);
// console.log(89.4);
// console.log(NaN);
// console.log(Infinity);
// console.log(-Infinity);
//
// //string:
// console.log('any text content in quotes')
// console.log('4')
//
// // boolean:
// console.log(false);
// console.log(true);
//
// // undefined:
// console.log(undefined);
//
// // null:
// console.log(null);
//
// // evaluation
// console.log(3+5);
// console.log('hi my name is ' + 'jess');
//
// // variables
// // declare a variable
// // can start with any letters or $ _
// // can contain any num or letter character
// var firstName;
// //assign a value to the variables with the assignemnt operators
// firstName = "Jess";
// //declare and assign all at once
// var age = 31 + 1;
// age = 46;
//
// //operators
// //math operators +, - / *  %
// console.log(5+4*2);
// console.log('23%4', 23%4);
// console.log('5 < 7', 5 < 7);
//
// // string operators + contatenation
// console.log('do not' + 'forget' + 'spaces');
//
// // equality operators < > <= >= === !== ==
// console.log('5 === 5', 5 === 5);
// console.log('5 === \'5\'', 5 === '5');
// // double equals coerces type
// console.log('5 == \'5\'', 5 == '5');
//
// //instead of double equals, be explicit with coercions
// console.log(String(5) === '5');
//
// // to coerce to a string use the String() function
// console.log(String(5));
// // to coerce to a number use the Number() function
// console.log(Number('5'));
// // to coerce to a boolean use the Boolean() function
// console.log('Boolean(5)', Boolean(5));

var jessArray = ['unicorn', 'swing music', 'hugs'];
console.log(jessArray[1]);

var jessObject = {
  name: 'Jess',
  favoriteThings: ['unicorns', 'cats', 'swing music'],
  age: 32
};
console.log(jessObject.favoriteThings);
console.log(jessObject.favoriteThings[1]);

console.dir(document.querySelector('.cats'));

function jessCoolFunction() {
  var number = 5;
  var number2 = 10;
  var sum = number + number2;
  console.log(sum);
}

jessCoolFunction();







//
