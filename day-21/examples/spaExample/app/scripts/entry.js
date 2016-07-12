// import is like creating a new variable and setting it to some package of code
import $ from 'jquery';
// imports you wrote are imported with the path to the file where the code lives
import user from './user.js';
// the .js extension is optional

import data from './data';
import template from './templateString';

$('#container').append('i added this with jquery');

// var user = new User('nicerhugs');

let string = '';

string += 'hi';
string += ' jess';

// typical for loop, i is not scoped to the for loop because i used var
for (var i = 0; i < data.length; i++) {
  console.log(data[i]);
}
console.log(i);

// when using let instead of var, a is scoped to the block where it was created
for (let a = 0; a < data.length; a++) {
  console.log(data[a]);
}

// which means that out here, a is undefined.
// this line breaks our code so it is commented out
// console.log(a);

// const which functions like var but is meant for UNCHANGING variables.
const immutableStr = 'this string shoudln\'t change';
// this next line breaks our compiler, so it's commented out:
// immutableStr += 'but i\'m trying anyway';

$('#container').append(template);

// console.log(user);
// user.create();
// let user2 = new User('unicorn');
// let user3 = new User('pegasus');
// console.log('users:', user, user2, user3);

console.log(user) ;

console.log(data);
